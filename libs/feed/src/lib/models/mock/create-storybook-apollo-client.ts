import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { httpHeaders } from 'apollo-angular/headers';
import { HttpLink } from 'apollo-angular/http';
import { Operation } from 'apollo-angular/testing';
import { of } from 'rxjs';

interface IArgs {
  mapper: (operation: Operation) => any;
}

export function createStorybookApolloMock(args: IArgs) {
  function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
    // using the ability to split links, you can send data to each link
    // depending on what kind of operation is being sent
    const link: any = (operation: Operation, forward: any) => {
      let response = { data: {} } as any;

      response = args.mapper(operation);

      if (!response) {
        console.log('Unhandled operation', {
          operationName: operation.operationName,
          vars: operation.variables,
        });

        return forward(operation);
      }

      return of(response as any);
    };

    const links = [
      httpHeaders(),
      link,
      httpLink.create({ uri: 'http://localhost:5000/' }),
    ];
    return {
      link: ApolloLink.from(links),
      cache: new InMemoryCache(),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      defaultOptions: {
        query: {
          fetchPolicy: 'no-cache',
        },
      },
    };
  }

  return {
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink],
  };
}
