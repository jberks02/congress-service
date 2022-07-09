import { chamber, updateType } from "../types/request";
import fetch, { RequestInit, Response } from 'node-fetch';
const { propublica_key } = process.env;

// interface Header {
//     METHOD: 'GET', 
//     'X-API-Key': string;
// }

export default class BillApi {
    private pass: string;
    private header: RequestInit;
    private urlBase: string;
    constructor() {
        this.pass = propublica_key;
        this.urlBase = 'https://api.propublica.org';
        this.header ={ method: 'GET', 'headers': { 'X-API-Key': this.pass } }
    }
    async mostRecentBills(congress: number, chamber: chamber, type: updateType): Promise<billMostRecentlyUpdated.result['results']> {

        const url = new URL(`/congress/v1/${congress}/${chamber}/bills/${type}.json`, this.urlBase);

        const req: Response = await fetch(url.href, this.header);

        if(!req.ok) throw new Error(await req.text());

        const mostRecent = await req.json() as billMostRecentlyUpdated.result;

        return mostRecent.results;
    }
    async mostRecentBillsByMember(member: string, type: updateType) {

        const url = new URL(`/congress/v1/members/${member}/bills/${type}.json`, this.urlBase);

        const req: Response = await fetch(url.href, this.header);

        if(!req.ok) throw new Error(await req.text());

        const result = await req.json() as billRecentlyActionedByMember.result;

        return result.results;

    }
}