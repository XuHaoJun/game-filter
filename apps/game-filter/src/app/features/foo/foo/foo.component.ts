import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'game-filter-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent implements OnInit {
  bar = { a: 10, b: 2, c: { d: 5, e: [1, 2, 3] } };
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group(
      {
        a: [10, { validators: Validators.max(11), updateOn: 'change' }],
        b: [{ value: 3, disabled: true }],
        c: this.fb.group({ d: 5, e: this.fb.array([1, 2, 3]) }),
      },
      {
        updateOn: 'blur',
      }
    );
    console.log(this.formGroup.get(['c', 'e', 0]));
    console.log(this.formGroup.get('c.e.0'));
  }

  handleEnable() {
    this.formGroup.get('b')?.enable();
  }

  handleSubmit(event: any) {
    console.log(event);
    console.log(this.formGroup.getRawValue());
  }
}
