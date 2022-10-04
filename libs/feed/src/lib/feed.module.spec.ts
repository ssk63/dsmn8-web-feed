import { async, TestBed } from '@angular/core/testing';
import { FeedModule } from './feed.module';

describe('FeedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeedModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(FeedModule).toBeDefined();
  });
});
