import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { FeedContainerComponent } from './feed-container.component';

describe('FeedContainerComponent', () => {
  let component: FeedContainerComponent;
  let fixture: ComponentFixture<FeedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedContainerComponent],
      providers: [Apollo],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
