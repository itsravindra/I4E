import { AppData } from "../store/app-data";
export function currencyConverter(
    amount: number,
    currency: string
) {
    return new Intl.NumberFormat(AppData.locale, { style: 'currency', currency: currency }).format(amount);
}

export function decimalConverter(
    number: number,
    minimumFractionDigits: number = 2,
    maximumFractionDigits: number = 3,
) {
    return new Intl.NumberFormat(AppData.locale, { style: 'decimal', minimumFractionDigits: minimumFractionDigits, maximumFractionDigits: maximumFractionDigits }).format(number);
}

export function percentageConverter(
    number: number,
    minimumFractionDigits: number = 0,
    maximumFractionDigits: number = 2,
) {
    return new Intl.NumberFormat(AppData.locale, { style: 'percent', minimumFractionDigits: minimumFractionDigits, maximumFractionDigits: maximumFractionDigits }).format(number);
}
export enum UNIT_DISPLAY {
    LONG = "long",
    SHORT = "short",
    NARROW = "narrow"
};
export function unitConverter(
    number: number,
    unit: string,
    unitDisplay: UNIT_DISPLAY = UNIT_DISPLAY.SHORT
) {

    return new Intl.NumberFormat(AppData.locale, { style: 'unit', unit: unit, unitDisplay: unitDisplay }).format(number);
}

export enum DATE_STYLE {
    FULL = "full",
    LONG = "long",
    MEDIUM = "medium",
    SHORT = "short"
};

export enum TIME_STYLE {
    FULL = "full",
    LONG = "long",
    MEDIUM = "medium",
    SHORT = "short"
};
export function dateConverter(
    date: Date,
    dateStyle: DATE_STYLE = DATE_STYLE.MEDIUM,
    timeStyle: TIME_STYLE = TIME_STYLE.MEDIUM
) {
    return new Intl.DateTimeFormat(AppData.locale, { dateStyle: dateStyle, timeStyle: timeStyle }).format(date)
}

export enum LIST_TYPE {
    CONJUNCTION = "conjunction",
    DISJUNCTION = "disjunction",
    UNIT = "unit"
};

export function listConverter(
    data: Array<string>,
    type: LIST_TYPE = LIST_TYPE.CONJUNCTION,
) {
    return null;//new Intl.ListFormat(AppData.locale, { type: type });
}

export enum RELATIVE_TIME_UNIT {
    SECOND = "second",
    MINUTE = "minute",
    HOUR = "hour",
    DAY = "day",
    WEEK = "week",
    MONTH = "month",
    QUARTER = "quarter",
    YEAR = "year"
};

export function relativeTimeConverter(
    relativeSpan: number,
    unit: RELATIVE_TIME_UNIT = RELATIVE_TIME_UNIT.DAY,
) {
    return new Intl.RelativeTimeFormat(AppData.locale, { numeric: "auto" }).format(relativeSpan, unit);
}
