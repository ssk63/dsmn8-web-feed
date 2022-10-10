import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { mockFeed } from '../../models';
import { FeedFooterComponent } from './feed-footer.component';

describe('FeedFooterComponent', () => {
  let component: FeedFooterComponent;
  let fixture: ComponentFixture<FeedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should render feed-post social metrics when the metrics is exists', () => {
    // arrange
    component.metrics = mockFeed[0].boostPostMetrics;
    // act
    fixture.detectChanges();
    const feedFooter = fixture.debugElement.query(
      By.css('.feed-footer')
    ).nativeElement;
    // assert
    expect(feedFooter).toMatchSnapshot();
  });
});
