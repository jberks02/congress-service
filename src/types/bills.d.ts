// Search Bills
// route: https://api.propublica.org/congress/v1/bills/search.json?query={query}
// Parameter	Description
// query	    keyword or phrase
// sort	        _score or date (default is date)
// dir	        asc or desc (default) is desc

type byPartySingle = Record<string, number>;

interface bill {
    bill_id: string;
    bill_type: string;
    number: string;
    bill_uri: string;
    title: string;
    sponsor_title: string;
    sponsor_id: string;
    sponsor_name: string;
    sponsor_state: string;
    sponsor_party: string;
    sponsor_uri: string;
    gpo_pdf_uri: string;
    congressdotgov_url: string;
    govtrack_url: string;
    introduced_date: string;
    active: boolean;
    house_passage: boolean;
    senate_passage: boolean;
    enacted: boolean;
    vetoed: boolean;
    cosponsors: number;
    committees: string;
    committee_codes: string;
    subcommittee_codes: string;
    primary_subject: string;
    summary: string;
    summary_short: string;
    latest_major_action_date: string;
    latest_major_action: string;
    bill_slug?: string;
    short_title?: string;
    last_vote?: string;
    cosponsors_by_party?: byPartySingle;
    congress?: string;
}

interface billList {
    num_results: number;
    offset: number;
    bills: bill[]
}

declare namespace billQuery {
    interface result {
        status: string;
        copyright: string;
        results: billList[];
    }
}

// Get Recent Bills
// route: https://api.propublica.org/congress/v1/{congress}/{chamber}/bills/{type}.json
// Parameter	Description
// congress	    105-117
// chamber	    house, senate or both
// type	        introduced, updated, active, passed, enacted or vetoed

declare namespace billMostRecentlyUpdated {
    interface result {
        status: string;
        copyright: string;
        results: {
            congress: number;
            chamber: string;
            num_results: number;
            offset: number;
            bills: bill[]
        }
    }
}

// Get Recent Bills by a Specific Member
// route: https://api.propublica.org/congress/v1/members/{member-id}/bills/{type}.json
// Parameter	Description
// member-id	The ID of the member to retrieve; it is assigned by the Biographical Directory of the United States Congress or can be retrieved from a member list request.
// type	        introduced, updated, active, passed, enacted or vetoed

declare namespace billRecentlyActionedByMember {
    interface result {
        status: string;
        copyright: string;
        results:
        {
            id: string;
            member_uri: string;
            name: string;
            num_results: number;
            offset: number;
            bills: bill[]
        }[]
    }
}

// Get Recent Bills by a Specific Subject
// route: https://api.propublica.org/congress/v1/bills/subjects/{subject}.json
// Parameter	Description
// subject	    A slug version of a legislative subject, displayed as url_name in subject responses.

declare namespace billsBySubject {
    interface result {
        status: string;
        copyright: string;
        num_results: number;
        offset: number;
        subject: string;
    }
}