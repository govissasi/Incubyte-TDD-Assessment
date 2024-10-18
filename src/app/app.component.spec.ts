import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should return 0 for an empty input string', () => {
    component.inputString = '';
    component.calculateString();
    expect(component.outputValue).toBe(0);
  });

  it('should return the number for a single input', () => {
    component.inputString = '5';
    component.calculateString();
    expect(component.outputValue).toBe(5);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    component.inputString = '2,3';
    component.calculateString();
    expect(component.outputValue).toBe(5);
  });

  it('should return the sum of numbers separated by newlines', () => {
    component.inputString = '1\n2\n3';
    component.calculateString();
    expect(component.outputValue).toBe(6);
  });

  it('should handle custom delimiters', () => {
    component.inputString = '//;\n1;2;3';
    component.calculateString();
    expect(component.outputValue).toBe(6);
  });

  it('should throw an error for negative numbers', () => {
    component.inputString = '-1,2,-3';
    expect(() => component.calculateString()).toThrowError('negative numbers not allowed -1,-3');
  });

  it('should ignore non-numeric values', () => {
    component.inputString = '1,abc,3';
    component.calculateString();
    expect(component.outputValue).toBe(4); // Sum of valid numbers only
  });


});
