import { Component, forwardRef, Inject, Injector, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  NgControl,
  NgModel,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { map, ReplaySubject } from 'rxjs';

export const RATING_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RatingComponent),
  multi: true,
};

export const RATING_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RatingComponent),
  multi: true,
};

@Component({
  selector: 'game-filter-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [RATING_ACCESSOR, RATING_VALIDATOR],
})
export class RatingComponent
  implements OnInit, ControlValueAccessor, Validator
{
  score = 5;

  stars = [...Array(5)];
  starsSubject = new ReplaySubject(1);
  stars$ = this.starsSubject
    .asObservable()
    .pipe(map((score) => [...Array(score)]));

  changeFn: any;
  disabled = false;

  public control!: FormControl;

  constructor(@Inject(Injector) private injector: Injector) {
    // console.log('control', control);
  }

  ngOnInit(): void {
    this.setComponentControl();
  }

  private setComponentControl(): void {
    const injectedControl = this.injector.get(NgControl);

    switch (injectedControl.constructor) {
      case NgModel: {
        throw new Error('no support NgModel');
      }
      case FormControlName: {
        throw new Error('no support FormControlName');
      }
      default: {
        this.control = (injectedControl as FormControlDirective)
          .form as FormControl;
        break;
      }
    }
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // throw new Error('Method not implemented.');
    const max = 3;
    if (control.value > max) {
      return { actual: control.value, max };
    }
    return null;
  }

  // registerOnValidatorChange?(fn: () => void): void {
  // throw new Error('Method not implemented.');
  // }

  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
    this.score = obj;

    this.starsSubject.next(obj);
  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
    this.changeFn = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
    this.disabled = isDisabled;
  }

  handleFullStarClick() {
    this.starsSubject.next(5);
    this.changeFn(5);
  }
}
