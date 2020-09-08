import pt from 'date-fns/locale/pt';
import { getMonth, format, getDaysInMonth, addDays, getYear, formatISO } from 'date-fns';

export const getFormatedMonth = (date: Date | number) : string => {
    let month = format(date, 'MMMM', { locale: pt });

    // define a primeira letra como Maiúscula
    month = month.charAt(0).toUpperCase() + month.substr(1);

    return month;
}

export const getDataOfMonth = (date: Date) => {
  let month = getMonth(date);
  let name = getFormatedMonth(date);
  let year = getYear(date);

  let days = [];

  for (let i=0; i<getDaysInMonth(date); i++) {
      days.push({
          number: i+1,
          name: getFormatedDays(addDays(new Date(year, month), i)),
          selected: compareDates(date, i),
          dateISO: formatISO(addDays(date, (-date.getDate() + i + 1)), { representation: 'date' }),
      });
  }

  console.log('Renderização Excessiva -> Date');

  return {
      month,
      name,
      year,
      days,
  };
}

export const getFormatedDays = (date: Date | number) : string => {
  let day = format(date, 'EEEE', { locale: pt });

  // Define a primeira letra como Maiúscula
  day = day.charAt(0).toUpperCase() + day.substr(1);

  return day;
}

const compareDates = (a: Date, index: number) : boolean => {
  if (a.getMonth() === new Date().getMonth()) {
    return new Date().getDate() === index + 1;
  } else {
    return index === 0 ? true : false;
  }
}
