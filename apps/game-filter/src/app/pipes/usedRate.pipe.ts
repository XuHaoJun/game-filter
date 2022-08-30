import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usedRate',
  pure: true,
  standalone: true,
})
export class UsedRatePipe implements PipeTransform {
  transform(value: number): string {
    const percentValue = value * 100;
    return Math.round(percentValue) === 0
      ? percentValue.toFixed(1)
      : `${Math.round(percentValue)}`;
  }
}
