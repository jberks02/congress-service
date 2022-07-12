import fetch, { RequestInit, Response } from 'node-fetch';
const { propublica_key } = process.env;
const pp_base = 'https://api.propublica.org'

export async function propublica_request(path: string, query: Record<string, string> = null): Promise<Response> {
    
    const url = new URL(path, pp_base);

    if(query) {
        for(const key in query) {
            url.searchParams.append(key, query[key])
        }
    }

    const header: RequestInit ={ method: 'GET', 'headers': { 'X-API-Key': this.pass } }

    const res: Response = await fetch(url.href, header);

    if(!res.ok) throw new Error(await res.text());

    return res;

}