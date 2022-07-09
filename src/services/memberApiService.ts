import fetch, { RequestInit, Response } from 'node-fetch';
import { reducedChamber, stateAbbreviation } from '../types/request';
const { propublica_key } = process.env;

export default class MemberApi {
    private pass: string;
    private header: RequestInit;
    private urlBase: string;
    constructor() {
        this.pass = propublica_key;
        this.urlBase = 'https://api.propublica.org';
        this.header ={ method: 'GET', 'headers': { 'X-API-Key': this.pass } }
    }
    async listOfMembers(congress: number, chamber: reducedChamber): Promise<members.request['results']> {

        const url = new URL(`/congress/v1/${congress}/${chamber}/members.json`, this.urlBase);

        const req: Response = await fetch(url.href, this.header);

        if(!req.ok) throw Error(await req.text());

        const res = await req.json() as members.request;

        return res.results;

    }
    async membersByStateId(chamber: reducedChamber, state: stateAbbreviation): Promise<currentMembersByStateOrDistrict.result['results']> {

        const url = new URL(`/congress/v1/members/${chamber}/${state}/current.json`, this.urlBase);

        const req: Response = await fetch(url.href, this.header);

        if(!req.ok) throw Error(await req.text());

        const res = await req.json() as currentMembersByStateOrDistrict.result;

        return res.results;

    }
}