import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mockFeed } from '../../models';
import { FeedBodyComponent } from './feed-body.component';

describe('FeedBodyComponent', () => {
  let component: FeedBodyComponent;
  let fixture: ComponentFixture<FeedBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedBodyComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should render the feed title when the name is exists', () => {
    // arrange
    component.name = mockFeed[0].name;
    // act
    fixture.detectChanges();
    const feedBody = fixture.debugElement.query(
      By.css('.feed-body')
    ).nativeElement;
    // assert
    expect(feedBody).toMatchSnapshot();
  });

  test('should render the feed content when the content is exists', () => {
    // arrange
    component.content = mockFeed[0].content;
    // act
    fixture.detectChanges();
    const feedBody = fixture.debugElement.query(
      By.css('.feed-body')
    ).nativeElement;
    // assert
    expect(feedBody).toMatchSnapshot();
  });

  test('should render the feed image when the imgUrl is exists', () => {
    // arrange
    component.imgUrl = mockFeed[0].imgUrl;
    // act
    fixture.detectChanges();
    const feedBody = fixture.debugElement.query(
      By.css('.feed-body')
    ).nativeElement;
    // assert
    expect(feedBody).toMatchSnapshot();
  });
});
