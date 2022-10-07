import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBodyComponent } from './feed-body.component';

describe('FeedBodyComponent', () => {
  let component: FeedBodyComponent;
  let fixture: ComponentFixture<FeedBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
