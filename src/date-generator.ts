/*!
 * 
 * Kmoni.js
 * 
 * Copyright (C) 2025-2026 よね/Yone
 * Licensed under the MIT License.
 * 
 * https://github.com/YDITS/kmoni-js
 * 
 */

export class KmoniDateGenerator {
    static generateDateString({ date, delayOffsetMs }: { date: Date, delayOffsetMs?: number }): string {
        const targetDate = new Date(date);
        const nineHoursMs = 1000 * 60 * 60 * 9;  // 1000ms * 60s * 60m * 9h

        if (delayOffsetMs === undefined || !(Number.isInteger(delayOffsetMs))) {
            delayOffsetMs = 2000;
        }

        targetDate.setTime(targetDate.getTime() - delayOffsetMs);
        targetDate.setTime(targetDate.getTime() + nineHoursMs); // JST (UTC+9)

        const pad = (n: number) => String(n).padStart(2, "0");

        /*
         * ローカルを参照すると実行環境によって時刻が定まらないため, Date はローカルタイムを参照せず, UTCを基準として扱う.
         */
        return [
            targetDate.getUTCFullYear(),
            pad(targetDate.getUTCMonth() + 1),
            pad(targetDate.getUTCDate()),
            pad(targetDate.getUTCHours()),
            pad(targetDate.getUTCMinutes()),
            pad(targetDate.getUTCSeconds()),
        ].join("");
    }

    static generateDate({ date }: { date: string }) {
        if (!/^\d{14}$/.test(date)) {
            throw new Error("Invalid date format. Expected YYYYMMDDHHmmss.");
        }

        const year = Number(date.slice(0, 4));
        const month = Number(date.slice(4, 6)) - 1;
        const day = Number(date.slice(6, 8));
        const hour = Number(date.slice(8, 10));
        const minute = Number(date.slice(10, 12));
        const second = Number(date.slice(12, 14));

        return new Date(year, month, day, hour, minute, second);
    }
}
