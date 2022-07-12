import { Response } from 'node-fetch';
import { chamber, updateType } from '../types/request';
import { propublica_request } from '../utils/fetch_url.js';

export async function mostRecentBills(congress: number, chamber: chamber, type: updateType): Promise<billMostRecentlyUpdated.result['results']> {

    const recent_bills_fetch: Response = await propublica_request(`/congress/v1/${congress}/${chamber}/bills/${type}.json`);

    const bills = await recent_bills_fetch.json() as billMostRecentlyUpdated.result;

    return bills.results;

}

export async function mostRecentBillsByMember(member: string, type: updateType): Promise<billRecentlyActionedByMember.result['results']> {

    const member_bill_fetch: Response = await propublica_request(`/congress/v1/members/${member}/bills/${type}.json`);

    const member_bill = await member_bill_fetch.json() as billRecentlyActionedByMember.result;

    return member_bill.results;

}
