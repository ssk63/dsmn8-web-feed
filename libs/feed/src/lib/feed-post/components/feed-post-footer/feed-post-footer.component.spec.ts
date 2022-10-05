import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostFooterComponent } from './feed-post-footer.component';

describe('FeedPostFooterComponent', () => {
  let component: FeedPostFooterComponent;
  let fixture: ComponentFixture<FeedPostFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedPostFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPostFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
