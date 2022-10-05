import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostBodyComponent } from './feed-post-body.component';

describe('FeedPostBodyComponent', () => {
  let component: FeedPostBodyComponent;
  let fixture: ComponentFixture<FeedPostBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedPostBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPostBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
