import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostActionsComponent } from './feed-post-actions.component';

describe('FeedPostActionsComponent', () => {
  let component: FeedPostActionsComponent;
  let fixture: ComponentFixture<FeedPostActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedPostActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPostActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
