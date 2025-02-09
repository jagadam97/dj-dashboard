"use client";
import client from "./connectToclient";

export default async function requestTimes() {
    type RequestTimes = {
        tp50: number
        tp75: number
        tp90: number
        tp99: number
    };

    const rows = await client.query({
        query: `SELECT quantile(0.50)(request_time) AS tp50, 
                 quantile(0.75)(request_time) AS tp75, 
                 quantile(0.90)(request_time) AS tp90, 
                 quantile(0.99)(request_time) AS tp99 
          FROM default.nginxLogger 
          WHERE time_local > now() - 900;`,
        format: 'JSONEachRow',
    });

    const data: RequestTimes[] = await rows.json();

    return {
        tp50: data?.[0]?.tp50 ?? 0,
        tp75: data?.[0]?.tp75 ?? 0,
        tp90: data?.[0]?.tp90 ?? 0,
        tp99: data?.[0]?.tp99 ?? 0,
    };
}