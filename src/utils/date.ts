import pt from 'date-fns/locale/pt';
import { getMonth, format, getDaysInMonth, addDays, getYear } from 'date-fns';

interface IDays {
    number: number;
    name: string;
}

interface IDataMonth {
    month: number;
    name: string;
    days: IDays[];
}

export const getFormatedMonth = (date: Date | number) : string => {
    let month = format(date, 'MMMM', { locale: pt });

    // define a primeira letra como Maiuscula
    month = month.charAt(0).toUpperCase() + month.substr(1);

    return month;
}

export const getDataOfMonth = (date: Date | number) => {
    let month = getMonth(date);
    let name = getFormatedMonth(date);
    let year = getYear(date);

    let days = [];

    for (let i=0; i<getDaysInMonth(date); i++) {
        days.push({ 
            number: i+1, 
            name: getFormatedDays(addDays(new Date(year, month), i))
        });
    }

    return {
        month,
        name,
        year,
        days,
    };
}

export const getFormatedDays = (date: Date | number) : string => {
    let day = format(date, 'EEEE', { locale: pt });

    day = day.charAt(0).toUpperCase() + day.substr(1);

    return day;
}