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

import { KmoniDateGenerator } from "./date-generator.js";

export class KmoniUrlGenerator {
    static readonly BASE_URL = "https://www.lmoni.bosai.go.jp/monitor/webservice/hypo/eew/";

    static generateUrl({ date, delayOffset }: { date: Date, delayOffset?: number }): URL {
        const formattedDate = KmoniDateGenerator.generateDateString({ date, delayOffset });
        return new URL(`${KmoniUrlGenerator.BASE_URL}${formattedDate}.json`);
    }
}
