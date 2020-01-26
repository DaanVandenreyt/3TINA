import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    let words: string[] = value.split(' ');
    return words.map(word => {return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

}
