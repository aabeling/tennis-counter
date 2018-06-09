import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'gamePoint'})
export class GamePointPipe implements PipeTransform {

  transform(value: number): string {

    switch (value) {
        case 0: return '00';
        case 1: return '15';
        case 2: return '30';
        case 3: return '40';
        case 4: return 'AD';
        case 5: return 'DE';
        default: return '??';
    }
  }
}
