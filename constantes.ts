export class Constantes {
    static readonly LOCAL_DATE = 'DD/MM/YYYY';
    static readonly LOCAL_DATE_TIME = 'DD/MM/YYYY hh:mm:ss';
}

export const MY_FORMATS = {
    parse: {
      dateInput: 'LL',
    },
    display: {
      dateInput: Constantes.LOCAL_DATE,
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY',
    },
  };
