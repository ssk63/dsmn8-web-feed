import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedPostContainerComponent } from './feed-post-container.component';

describe('FeedPostContainerComponent', () => {
  let component: FeedPostContainerComponent;
  let fixture: ComponentFixture<FeedPostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedPostContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
