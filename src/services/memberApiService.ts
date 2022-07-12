import { Response } from 'node-fetch';
import { reducedChamber, stateAbbreviation } from '../types/request';
import { propublica_request } from '../utils/fetch_url.js';

export async function list_of_members(congress: number, chamber: reducedChamber): Promise<members.request['results']> {

    const list_of_members_fetch: Response = await propublica_request(`/congress/v1/${congress}/${chamber}/members.json`);

    const list = await list_of_members_fetch.json() as members.request;

    return list.results;

};

export async function members_by_state_id(chamber: reducedChamber, state: stateAbbreviation): Promise<currentMembersByStateOrDistrict.result['results']> {

    const members_fetch: Response = await propublica_request(`/congress/v1/members/${chamber}/${state}/current.json`);

    const members = await members_fetch.json() as currentMembersByStateOrDistrict.result;

    return members.results

}; 