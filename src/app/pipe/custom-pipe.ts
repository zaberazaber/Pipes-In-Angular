import { Pipe } from '@angular/core';

// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe {
  transform(val, args) {
    if (args === undefined) {
      return val;
    }

    if (val.length > args) {
      return val.substring(0, args) + '~~~~~';
    } else {
      return val;
    }
  }
}