import { Request, Response } from "express";
import { mostRecentBills, mostRecentBillsByMember } from "../services/billApiService";
import { members_by_state_id } from "../services/memberApiService";
import { stateAbbreviation } from "../types/request";
import { users_senators } from "../types/responses";
import { handleError } from "../utils/errorHandler";

export async function users_senators(req: Request, res: Response): Promise<void> {
    try {

        const state: stateAbbreviation = req.params.state as stateAbbreviation

        const senators = await members_by_state_id('senate', state);

        const senatorBills = await Promise.all(senators.map(({ id }) => mostRecentBillsByMember(id, 'updated')));

        const allocated = senators.map((sen, i) => ({ ...sen, recently_updated: senatorBills[i] }));

        res.send(allocated);

    } catch (err) {
        console.error(err);
        handleError(err, res)
    }
};

export async function most_recently_updated_bills(req: Request, res: Response): Promise<void> {
    try {

        const congress: number = Number(req.params.congress);

        if (!congress) throw new Error('INVALID_PARAM')

        const [updated, passed] = await Promise.all([
            mostRecentBills(congress, 'both', 'updated'),
            mostRecentBills(congress, 'both', 'passed')
        ])

        res.send({
            updated: updated.bills,
            passed: passed.bills
        });

    } catch (err) {
        console.error(err);
        handleError(err, res);
    }
}