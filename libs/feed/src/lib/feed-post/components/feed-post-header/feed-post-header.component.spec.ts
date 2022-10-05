import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostHeaderComponent } from './feed-post-header.component';

describe('FeedPostHeaderComponent', () => {
  let component: FeedPostHeaderComponent;
  let fixture: ComponentFixture<FeedPostHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedPostHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
