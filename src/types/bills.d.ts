// Search Bills
// route: https://api.propublica.org/congress/v1/bills/search.json?query={query}
// Parameter	Description
// query	    keyword or phrase
// sort	        _score or date (default is date)
// dir	        asc or desc (default) is desc

type byPartySingle = Record<string, number>;

interface subjectBasic {
    name: string;
    url_name: string;
}

interface amendmentItem {
    amendment_number: string;
    slug: string;
    sponsor_title: string;
    sponsor: string;
    sponsor_id: string;
    sponsor_uri: string;
    sponsor_party: string;
    sponsor_state: string;
    introduced_date: string;
    title: string;
    congressdotgov_url: string;
    latest_major_action_date: string;
    latest_major_action: string;
}

interface versionItem {
    status: string;
    title: string;
    url: string;
    congressdotgov_url: string;
}

interface actionItem {
    id: number;
    chamber: string;
    action_type: string;
    datetime: string;
    description: string;
}

interface billBasic {
    congress: string;
    bill_id: string;
    bill_slug: string;
    bill_type: string;
    number: string;
    bill_uri: string;
    url_number: string;
    title: string;
    sponsor_title: string;
    sponsor_id: string;
    sponsor_name: string;
    sponsor_state: string;
    sponsor_party: string;
    sponsor_uri: string;
    introduced_date: string;
    number_of_cosponsors: number;
    committees: string;
    latest_major_action_date: string;
    latest_major_action: string;
    house_passage_vote: string;
    senate_passage_vote: string;
}

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
    bill?: string;
    sponsor?: string | null;
    withdrawn_cosponsors?: number;
    house_passage_vote?: string | null;
    senate_passage_vote?: string | null;
    versions?: versionItem[];
    actions?: actionItem[];
    votes?: unknown[];
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
        results: bill[]
    }
}

// Get Upcoming Bills
// route: https://api.propublica.org/congress/v1/bills/upcoming/{chamber}.json
// Parameter	Description
// chamber	    house or senate

declare namespace upcomingBills {
    interface result {
        status: string;
        copyright: string;
        results: {
            date: string;
            bills: {
                congress: string;
                chamber: string;
                bill_id: string;
                bill_slug: string;
                bill_type: string;
                bill_number: string;
                api_uri: string;
                legislative_day: string;
                scheduled_at: string;
                range: string;
                context: string;
                description: string;
                bill_url: string;
                consideration: string;
                source_type: string;
                url: string;
            }
        }[]
    }
}

// Get a Specific Bill
// route: https://api.propublica.org/congress/v1/{congress}/bills/{bill-id}.json
// Parameter	Description
// congress	    105-117
// bill-id  	a bill slug, for example hr4881 - these can be found in the recent bill response.

declare namespace singleBillResponse {
    interface result {
        status: string;
        copyright: string;
        results: bill[]
    }
}

// Get Amendments for a Specific Bill
// route: https://api.propublica.org/congress/v1/{congress}/bills/{bill-id}/amendments.json
// Parameter	Description
// congress	    105-117
// bill-id	    a bill slug, for example hr4881 - these can be found in bill responses.

declare namespace billAmendments {
    interface result {
        status: string;
        copyright: string;
        results: {
            congress: string;
            bill_id: string;
            num_results: number;
            offset: number;
            amendments: amendmentItem[]
        }[]
    }
}

// Get Subjects for a Specific Bill
// route: https://api.propublica.org/congress/v1/{congress}/bills/{bill-id}/subjects.json
// Parameter	Description
// congress	    105-117
// bill-id	    a bill slug, for example hr4881 - these can be found in bill responses.

declare namespace billSubjects {

    interface billWithSubjects extends billBasic {
        subjects: subjectBasic[]
    }

    interface result {
        status: string;
        copyright: string;
        num_results: number;
        offset: number;
        results: billWithSubjects[]
    }
}

// Get Related Bills for a Specific Bill
// route: https://api.propublica.org/congress/v1/{congress}/bills/{bill-id}/related.json
// Parameter	Description
// congress	    105-117
// bill-id	    a bill slug, for example hr4881 - these can be found in bill responses.

declare namespace relatedBillsByBill {

    interface related extends billBasic {
        related_bills: billBasic[]
    }

    interface result {
        status: string;
        copyright: string;
        num_results: number;
        offset: number;
        results: related[]
    }
}

// Get a Specific Bill Subject
// route: https://api.propublica.org/congress/v1/bills/subjects/search.json
// Parameter	Description
// query	    a word or phrase to search

declare namespace subjectSearch {
    interface result {
        status: string;
        copyright: string;
        results: {
            query: string;
            num_results: number;
            offset: number;
            subjects: subjectBasic[]
        }[]
    }
}

// Get Cosponsors for a Specific Bill
// route: https://api.propublica.org/congress/v1/{congress}/bills/{bill-id}/cosponsors.json
// Parameter	Description
// congress	    105-117
// bill-id	    a bill slug, for example hr4881 - these can be found in the recent bill response.

declare namespace billCosponsors {

    interface cosponsors extends billBasic {
        cosponsors_by_party: {
            party: {
                id: string;
                cosponsors: string;
            }
        }[];
        cosponsors: {
            cosponsor_id: string;
            name: string;
            cosponsor_title: string;
            cosponsor_state: string;
            cosponsor_party: string;
            cosponsor_uri: string;
            date: string;
        }[]
    }

    interface result {
        status: string;
        copyright: string;
        results: 
    }
}