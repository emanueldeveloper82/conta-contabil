import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

import { Constantes } from '../../../../constantes';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(data: string, args?: any[]): string {
    return moment(data).format(Constantes.LOCAL_DATE_TIME);
  }

}
