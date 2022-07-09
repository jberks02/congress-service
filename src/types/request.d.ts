export type chamber = 'senate' | 'house' | 'both';

export type reducedChamber = 'senate' | 'house';

export type updateType = 'introduced' | 'updated' | 'active' | 'passed' | 'enacted' | 'vetoed'

export type stateAbbreviation = 'AL' | 'AK' | 'AZ' | 'AR' | 'AS' | 'CA' | 'CO' | 'CT' | 'DE' | 'DC' | 'FL' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'GA' | 'GU' | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 'WY' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'OH' | 'OK' | 'OR' | 'PA' | 'PR' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT'

// Alabama	        AL	
// Alaska	        AK	
// Arizona	        AZ	
// Arkansas	        AR	
// American Sa      AS	
// California	    CA	
// Colorado 	    CO	
// Connecticut	    CT	
// Delaware	        DE	
// Capital  	    DC	
// Florida	        FL	
// Vermont	        VT
// Virginia	        VA
// Washington	    WA
// West Virginia	WV
// Wisconsin	    WI
// Georgia	        GA	
// Guam	            GU	
// Hawaii	        HI	
// Idaho	        ID	
// Illinois	        IL	
// Indiana	        IN	
// Iowa	            IA	
// Kansas	        KS  
// Nevada	        NV	
// New Hampshire	NH	
// New Jersey	    NJ	
// New Mexico	    NM	
// New York	        NY	
// North Carolina	NC	
// North Dakota	    ND	
// Wyoming	        WY
// Kentucky	        KY	
// Louisiana	    LA	
// Maine	        ME	
// Maryland	        MD	
// Massachusetts	MA	
// Michigan	        MI	
// Minnesota	    MN	
// Mississippi	    MS	
// Missouri	        MO	
// Montana	        MT	
// Nebraska	        NE	
// Ohio	            OH
// Oklahoma	        OK
// Oregon	        OR
// Pennsylvania	    PA
// Puerto Rico	    PR
// Rhode Island	    RI
// South Carolina	SC
// South Dakota	    SD
// Tennessee	    TN
// Texas	        TX
// Utah	            UT