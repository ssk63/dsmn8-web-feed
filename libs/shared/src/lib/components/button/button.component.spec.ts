import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should render button when the label is exists', () => {
    // arrange
    component.label = 'Like Button';
    // act
    fixture.detectChanges();
    const button = fixture.debugElement.query(
      By.css('.dsmn8-btn')
    ).nativeElement;
    // assert
    expect(button).toMatchSnapshot();
  });

  test('should not render button when the label is empty', () => {
    // arrange
    component.label = '';
    // act
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.dsmn8-btn'));
    // assert
    expect(button).toBeNull();
  });

  test('should be called onBtnClick() method when the button is clicked', () => {
    // arrange
    component.label = 'Share button';
    jest.spyOn(component, 'onBtnClick');
    // act
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.dsmn8-btn'));
    button.nativeElement.click();
    // assert
    expect(component.onBtnClick).toBeCalled();
  });

  test('should emit clicked event true when the onBtnClick() method is called', () => {
    // arrange
    jest.spyOn(component.clicked, 'emit');
    // act
    component.onBtnClick();
    // assert
    expect(component.clicked.emit).toBeCalledWith(true);
  });

  test('should render primary button when the isPrimary is true', () => {
    // arrange
    component.isPrimary = true;
    component.label = 'Like Button';
    // act
    fixture.detectChanges();
    const primaryButton = fixture.debugElement.query(
      By.css('.dsmn8-btn--primary')
    ).nativeElement;
    // assert
    expect(primaryButton).toMatchSnapshot();
  });

  test('should render fullWidth button when the isFullWidth is true', () => {
    // arrange
    component.isFullWidth = true;
    component.isPrimary = true;
    component.label = 'Like Button';
    // act
    fixture.detectChanges();
    const fullWidthButton = fixture.debugElement.query(
      By.css('.dsmn8-btn--block')
    ).nativeElement;
    // assert
    expect(fullWidthButton).toMatchSnapshot();
  });

  test('should render disabled button when the isDisabled is true', () => {
    // arrange
    component.isDisabled = true;
    component.isPrimary = true;
    component.label = 'Like Button';
    // act
    fixture.detectChanges();
    const button = fixture.debugElement.query(
      By.css('.dsmn8-btn')
    ).nativeElement;
    // assert
    expect(button.disabled).toBeTruthy();
    expect(button).toMatchSnapshot();
  });
});
