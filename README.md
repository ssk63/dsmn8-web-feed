# Dsmn8

This project was generated using [Nx](https://nx.dev).

# Pre-requisites

Install NodeJS from [https://nodejs.org](https://nodejs.org)

# Cloning the Code

Clone the code using the following command

```bash
git clone https://github.com/ssk63/dsmn8-web-feed.git
```

# Running the Application

Install the npm packages using the following command

```bash
npm install
```

Start the application using the following command

```bash
ng serve web
```

The application runs on **http://localhost:4200/**

## Setup JSON Server For Fake GraphQL Endpoint

First Install the JSON GraphQL server globally. Run the following command

```bash
sudo npm install -g json-graphql-server
```

Then start the GraphQL server. Run the following command in the terminal.

```bash
npm run graphql
```

Navigate to http://localhost:5000/.

**Example GraphQL allPosts query:**

```
query {
    allPosts {
      id
      name
      content
      text
      boostPostMetrics
      imgUrl
    }
  }
```
