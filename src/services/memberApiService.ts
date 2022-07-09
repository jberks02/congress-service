import fetch, { RequestInit, Response } from 'node-fetch';
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
    
}