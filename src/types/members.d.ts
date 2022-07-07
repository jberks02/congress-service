// endpoint: GET https://api.propublica.org/congress/v1/{congress}/{chamber}/members.json
// get complete list of members by congress and chamber

declare namespace members {

    interface request {
        status: string;
        copyright: string;
        results: membersResult[]
    }
    interface membersResult {
        congress: string;
        chamber: string;
        num_results: number;
        offset: number;
        members: member[]
    }
    interface member {
        id: string;
        title: string;
        short_title: string;
        api_uri: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        suffix: string;
        date_of_birth: string;
        gender: string;
        party: string;
        leadership_role: string;
        twitter_account: string;
        facebook_account: string;
        youtube_account: string;
        govtrack_id: string;
        cspan_id: string;
        votesmart_id: string;
        icpsr_id: string;
        crp_id: string;
        google_entity_id: string;
        fec_candidate_id: string;
        url: string;
        rss_url: string;
        contact_form: string;
        in_office: boolean;
        cook_pvi?: null;
        dw_nominate: number;
        ideal_point: null;
        seniority: string;
        next_election: string;
        total_votes: number;
        missed_votes: number;
        total_present: number;
        last_updated: string;
        ocd_id: string;
        office: string;
        phone: string;
        fax: string;
        state: string;
        senate_class: string;
        state_rank: string;
        lis_id: string;
        missed_votes_pct: number;
        votes_with_party_pct: number;
        votes_against_party_pct: number
    }

}

// route: GET https://api.propublica.org/congress/v1/members/{member-id}.json
// get a single member of congress by their ID.

declare namespace singleMember {

    interface request {
        status: string;
        copyright: string;
        results: resultListItem[]
    }

    interface resultListItem {
        id: string;
        member_id: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        suffix: string;
        date_of_birth: string;
        gender: string;
        url: string;
        times_topics_url: string;
        times_tag: string;
        govtrack_id: string;
        cspan_id: string;
        votesmart_id: string;
        icpsr_id: string;
        twitter_account: string;
        facebook_account: string;
        youtube_account: string;
        crp_id: string;
        google_entity_id: string;
        rss_url: string;
        in_office: string;
        current_party: string;
        most_recent_vote: string;
        last_updated: string;
        roles: rolesListItem[];
    }

    interface rolesListItem {
        congress: string;
        chamber: string;
        title: string;
        short_title: string;
        state: string;
        party: string;
        leadership_role: string;
        fec_candidate_id: string;
        seniority: string;
        district: string;
        at_large: boolean;
        ocd_id: string;
        start_date: string;
        end_date: string;
        office: string;
        phone: string;
        fax: string;
        contact_form: string;
        cook_pvi: string;
        dw_nominate: number;
        ideal_point: string;
        next_election: string;
        total_votes: number;
        missed_votes: number;
        total_present: number;
        senate_class: string;
        state_rank: string;
        lis_id: string;
        bills_sponsored: number;
        bills_cosponsored: number;
        missed_votes_pct: number;
        votes_with_party_pct: number;
        votes_against_party_pct: number;
        committees: committees[];
        subcommittees: committees[];
    }

    interface committees {
        name: string;
        code: string;
        api_uri: string;
        side: string;
        title: string;
        rank_in_party: number;
        begin_date: string;
        end_date: string;
    }

}

//route: "https://api.propublica.org/congress/v1/members/new.json"
// get new members

declare namespace newestMembers {
    interface result {
        status: string;
        copyright: string;
        results: newMembersItem[]
    }
    interface newMembersItem {
        num_results: number;
        offset: number;
        members: minMembers[]
    }
    interface minMembers {
        id: string;
        api_uri: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        suffix: string;
        party: string;
        chamber: string;
        state: string;
        district: string;
        start_date: string;
    }
}

//route: https://api.propublica.org/congress/v1/members/{chamber}/{state}/current.json - senate request for current members by state
//route: https://api.propublica.org/congress/v1/members/{chamber}/{state}/{district}/current.json - house request for current members by district
//get current members by state or distract based on house

// Parameter	Description
// chamber	    house or senate
// state	    Two-letter state abbreviation
// district 	House of Representatives district number (House requests only)

declare namespace currentMembersByStateOrDistrict {

    interface result {
        status: string;
        copyright: string;
        results: currentMemberItem[]
    }

    interface currentMemberItem {
        id: string;
        name: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        suffix: string;
        role: string;
        gender: string;
        party: string;
        times_topics_url: string;
        twitter_id: string;
        facebook_account: string;
        youtube_id: string;
        seniority: string;
        next_election: string;
        api_uri: string;
    }
}

//route: https://api.propublica.org/congress/v1/{congress}/{chamber}/members/leaving.json
//get members leaving office

declare namespace membersLeavingOffice {

    interface result {
        status: string;
        copyright: string;
        results: membersLeavingItem[]
    }

    interface membersLeavingItem {
        congress: string;
        chamber: string;
        num_results: number;
        offset: number;
        members: any[]
    }

    interface membersListItem {
        id: string;
        api_uri: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        suffix: string;
        party: string;
        state: string;
        district: string;
        begin_date: string;
        end_date: string;
        status: string;
        note: string;
    }

}

//route: https://api.propublica.org/congress/v1/members/{member-id}/votes.json
//get a specific members vote positions

declare namespace memberVotePositions {

    interface result {
        status: string;
        copyright: string;
        results: votePositionResults[]
    }

    interface votePositionResults {
        member_id: string;
        total_votes: string;
        offset: string;
        votes: voteItem[]
    }

    interface voteItem {
        member_id: string;
        chamber: string;
        congress: string;
        session: string;
        roll_call: string;
        vote_uri: string;
        bill: votePositionBill
        description: string;
        question: string;
        result: string;
        date: string;
        time: string;
        total: votePositionTotal;
        position: string;
    }

    interface votePositionBill {
        bill_id: string;
        number: string;
        bill_uri: string;
        title: string;
        latest_action: string;
    }

    interface votePositionTotal {
        yes: number;
        no: number;
        present: number;
        not_voting: number;
    }

}

//route: https://api.propublica.org/congress/v1/members/{first-member-id}/votes/{second-member-id}/{congress}/{chamber}.json
// compare two congress members voting positions
// Parameter	    Description
// first-member-id	The ID of the member to retrieve; it is assigned by the Biographical Directory of the United States Congress or can be retrieved from a member list request.
// second-member-id	The ID of the member to retrieve; it is assigned by the Biographical Directory of the United States Congress or can be retrieved from a member list request.
// congress	        102-117 for House, 101-117 for Senate
// chamber	        house or senate

declare namespace compareMemberVotingPositions {
    interface result {
        status: string;
        copyright: string;
        results: memberComparison[]
    }
    interface memberComparison {
        first_member_id: string;
        first_member_api_uri: string;
        second_member_id: string;
        second_member_api_uri: string;
        congress: string;
        chamber: string;
        common_votes: string;
        disagree_votes: string;
        agree_percent: string;
        disagree_percent: string;
    }
}

//route: https://api.propublica.org/congress/v1/members/{first-member-id}/bills/{second-member-id}/{congress}/{chamber}.json
//compare two members bill sponsorships
// Parameter	    Description
// first-member-id	The ID of the member to retrieve; it is assigned by the Biographical Directory of the United States Congress or can be retrieved from a member list request.
// second-member-id	The ID of the member to retrieve; it is assigned by the Biographical Directory of the United States Congress or can be retrieved from a member list request.
// congress	        102-117 for House, 101-117 for Senate
// chamber	        house or senate

declare namespace memberBillSponsorshipComparison {

    interface result {
        status: string;
        copyright: string;
        results: resultItem[]
    }

    interface resultItem {
        first_member_api_uri: string;
        second_member_api_uri: string;
        chamber: string;
        congress: string;
        common_bills: string;
        bills: billItem[];
    }

    interface billItem {
        number: string;
        api_uri: string;
        title: string;
        sponsor_uri: string;
        introduced_date: string;
        cosponsors: string;
        committees: string;
        latest_major_action_date: string;
        latest_major_action: string;
        first_member_date: string;
        second_member_date: string;
    }

}

//route: https://api.propublica.org/congress/v1/members/{member-id}/bills/{type}.json
// Get Bills Cosponsored by a Specific Member
// Parameter	Description
// member-id	The ID of the member to retrieve; it is assigned by the Biographical Directory of the United States Congress or can be retrieved from a member list request.
// type	        cosponsored or withdrawn

declare namespace billsCosponsoredBySpecificMember {
    interface result {
        status: string;
        copyright: string;
        results: resultsItem[]
    }

    interface resultsItem {
        id: string;
        member_uri: string;
        name: string;
        num_results: number;
        offset: number;
        bills: billItem[]
    }

    interface billItem {
        congress: string;
        bill_id: string;
        bill_type: string;
        number: string;
        bill_uri: string;
        title: string;
        short_title: string;
        cosponsored_date: string;
        sponsor_title: string;
        sponsor_id: string;
        sponsor_name: string;
        sponsor_state: string;
        sponsor_party: string;
        sponsor_uri: string;
        gpo_pdf_uri: string
        congressdotgov_url: string;
        govtrack_url: string;
        introduced_date: string;
        active: boolean;
        last_vote: unknown;
        house_passage: unknown;
        senate_passage: unknown;
        enacted: unknown;
        vetoed: unknown;
        cosponsors: number;
        cosponsors_by_party: {
            R: number;
            D: number;
        },
        committees: string;
        primary_subject: string;
        summary: string;
        summary_short: string;
        latest_major_action_date: string;
        latest_major_action: string;
    }
}

// route: https://api.propublica.org/congress/v1/members/{member-id}/office_expenses/{year}/{quarter}.json
// Get Quarterly Office Expenses by a Specific House Member
// Parameter	Description
// member-id	The ID of the member to retrieve; it is assigned by the Biographical Directory of the United States Congress or can be retrieved from a member list request.
// year	        2009-2019
// quarter	    1, 2, 3, 4

declare namespace houseMembersQuarterlyExpenses {

    interface result {
        status: string;
        copyright: string;
        member_id: string;
        name: string;
        member_uri: string;
        year: number;
        quarter: number;
        num_results: number;
        results: expenseItem[];
    }

    interface expenseItem {
        category: string;
        category_slug: string;
        amount: number;
        year_to_date: number;
        change_from_previous_quarter: number;
    }

}

// route: https://api.propublica.org/congress/v1/office_expenses/category/{category}/{year}/{quarter}.json
// Get Quarterly Office Expenses for a Specified Category
// Parameter	Description
// category	    travel or personnel or rent-utilities or other-services or supplies or franked-mail or printing or equipment or total
// year	        2009-2019
// quarter	    1, 2, 3, 4

declare namespace houseMembersQuarterlyExpensesByCategory {

    interface result {
        status: string;
        copyright: string;
        category: string;
        num_results: number;
        offset: number;
        results: expensesItem[]
    }

    interface expensesItem {
        year: number;
        quarter: number;
        member_id: string;
        name: string;
        member_uri: string;
        amount: number;
        year_to_date: number;
        change_from_previous_quarter: number;
    }

}

//route: https://api.propublica.org/congress/v1/{congress}/private-trips.json
// Get Recent Privately Funded Trips
// Parameter	Description
// congress	    105-117

declare namespace mostRecentPrivatelyFundedTrips {

    interface result {
        status: string;
        copyright: string;
        congress: number;
        num_results: number;
        offset: number;
        results: tripItem[];
    }

    interface tripItem {
        member_id: string;
        api_uri: string;
        display_name: string;
        filing_type: string;
        traveler: string;
        is_member: string;
        departure_date: string;
        return_date: string;
        chamber: string;
        destination: string;
        sponsor: string;
        document_id: string;
        pdf_url: string;
    }

}

// route: https://api.propublica.org/congress/v1/members/{member-id}/private-trips.json
// Get Recent Privately Funded Trips by a Specific House Member
// Parameter	Description
// member-id	The ID of the member to retrieve; it is assigned by the Biographical Directory of the United States Congress or can be retrieved from a member list request.

declare namespace privatelyFundedTripsByMember {

    interface result {
        status: string;
        copyright: string;
        num_results: number;
        offset: number;
        member_id: string;
        api_uri: string;
        display_name: string;
        results: tripFilingOption[]
    }

    interface tripFilingOption {
        filing_type: string;
        traveler: string;
        is_member: number;
        congress: number;
        departure_date: string;
        return_date: string;
        chamber: string;
        destination: string;
        sponsor: string;
        document_id: string;
        pdf_url: string;
    }

}