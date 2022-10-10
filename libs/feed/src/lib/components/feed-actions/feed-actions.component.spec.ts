import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedActionsComponent } from './feed-actions.component';
import { ButtonComponent } from '@dsmn8/shared';
import { By } from '@angular/platform-browser';

describe('FeedActionsComponent', () => {
  let component: FeedActionsComponent;
  let fixture: ComponentFixture<FeedActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedActionsComponent, ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should render likes button when the likesButtonLabel is exists', () => {
    // arrange
    component.likesButtonLabel = 'Likes Button';
    // act
    fixture.detectChanges();
    const likesButton = fixture.debugElement.query(
      By.css('.feed-actions__likes-btn')
    ).nativeElement;
    // assert
    expect(likesButton).toMatchSnapshot();
  });

  test('should render reshare button when the reshareButtonLabel is exists', () => {
    // arrange
    component.reshareButtonLabel = 'Likes Button';
    // act
    fixture.detectChanges();
    const reshareButton = fixture.debugElement.query(
      By.css('.feed-actions__reshare-btn')
    ).nativeElement;
    // assert
    expect(reshareButton).toMatchSnapshot();
  });

  test('should emit event when the likes button is clicked', () => {
    // arrange
    jest.spyOn(component.likesBtnClicked, 'emit');
    component.likesButtonLabel = 'Likes Button';
    // act
    fixture.detectChanges();
    const likesButton = fixture.debugElement.query(
      By.css('.feed-actions__likes-btn')
    ).nativeElement;
    likesButton.click();
    // assert
    expect(component.likesBtnClicked.emit).toBeCalled();
  });

  test('should emit event when the reshare button is clicked', () => {
    // arrange
    jest.spyOn(component.reshareBtnClicked, 'emit');
    component.reshareButtonLabel = 'Reshare Button';
    // act
    fixture.detectChanges();
    const reshareButton = fixture.debugElement.query(
      By.css('.feed-actions__reshare-btn')
    ).nativeElement;
    reshareButton.click();
    // assert
    expect(component.reshareBtnClicked.emit).toBeCalled();
  });
});
