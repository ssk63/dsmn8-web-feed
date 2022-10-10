import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mockFeed } from '../../models';
import { FeedHeaderComponent } from './feed-header.component';

describe('FeedHeaderComponent', () => {
  let component: FeedHeaderComponent;
  let fixture: ComponentFixture<FeedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should render header text when the text is exists', () => {
    // arrange
    component.text = mockFeed[0].text;
    // act
    fixture.detectChanges();
    const feedHeader = fixture.debugElement.query(
      By.css('.feed-header')
    ).nativeElement;
    // assert
    expect(feedHeader).toMatchSnapshot();
  });
});
