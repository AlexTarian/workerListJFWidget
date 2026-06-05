const RECRUITERS = {

  // ==========================
  // ACTIVE RECRUITERS
  // ==========================

  "ANA Associates LLC - Ana DiTrolio": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 200 }
    }
  },

  "Aztec Labor - Karen Schindler": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 150 },
      "Nicaragua": { rate: 200 },
      "Guatemala": { rate: 200 }
    }
  },

  "Coroneo Agencia De Viaje - Matilde Angelica Vargas": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 150 }
    }
  },

  "Del-Al Associates Inc - Juan del Alamo": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 180 }
    }
  },

  // ==========================
  // PENDING COST INFORMATION
  // ==========================

  /*
  "Alejandro Cabrara - Jose Cabrera": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Florida East Coast Travel Services Inc. - Jorge Garcia": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "H2 LaborMex, LLC - Daniela Reyes": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "H2 Mexico LLC - Joshua Lyden": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Monarch Butterfly - Jose Jasso": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Solstice International - Melissa Villarreal-Rodriguez": {
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Galleria Travel SRL - Florin Ionescu": {
    defaultCountry: "Romania",
    countries: {
      "Romania": { rate: null }
    }
  },

  "Abroad RSA - Carla Van Schalkwyk": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Agri Employment Agency - Twanette Burger": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Agri USA & Canada - Gideon Jacobs": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "SAAP - William Radloff": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Agri USSA - Izak Nel": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Country Labour Pty Ltd - Charmaine Bekker": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Eagle Hour Farm Work - Jaco Visser": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Euro Personnel Consultants - Charlotte Portwig": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Exclusive Placements - Stephanus Botha": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Farm Recruit USA - Pieter Liebenberg": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "GetGoAgri - Franco Nel": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Global Farmwork - Ronelle Herbst-Theron": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Greenfields - Jacqualene Swart": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Homestead Recruiting - Joshua Smith": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "JobLex - Dianne Hirst": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Labor H2A Recruitment - Juanita Schoeman": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Link2FarmingUSA Recruitment - Marlize Langenhoven": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Midwest Placements - Anje De Bruin": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Next Level H2A Recruiters - Hyla Grobler": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "NS Pinnacle Recruitment - Nicolette Goncalves": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Placement Service International - Lizette Theunisen": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "SA 2 USA Recruit - Delucia Swanepoel": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "USA Labour - Steven Schultz": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "VPS Recruitment - Lihandri Elizabeth van den Berg": {
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "iWorkMarket - Irina Mealy": {
    defaultCountry: "",
    countries: {}
  },

  "Thunderbold Intl LLC - Ruben Wall": {
    defaultCountry: "",
    countries: {}
  }
  */
};

const COUNTRIES = [
  { name: "Afghanistan", iso: "AF", phoneCode: "+93" },
  { name: "Albania", iso: "AL", phoneCode: "+355" },
  { name: "Algeria", iso: "DZ", phoneCode: "+213" },
  { name: "Argentina", iso: "AR", phoneCode: "+54" },
  { name: "Armenia", iso: "AM", phoneCode: "+374" },
  { name: "Australia", iso: "AU", phoneCode: "+61" },
  { name: "Austria", iso: "AT", phoneCode: "+43" },
  { name: "Azerbaijan", iso: "AZ", phoneCode: "+994" },
  { name: "Bahamas", iso: "BS", phoneCode: "+1" },
  { name: "Bangladesh", iso: "BD", phoneCode: "+880" },
  { name: "Belarus", iso: "BY", phoneCode: "+375" },
  { name: "Belgium", iso: "BE", phoneCode: "+32" },
  { name: "Belize", iso: "BZ", phoneCode: "+501" },
  { name: "Bolivia", iso: "BO", phoneCode: "+591" },
  { name: "Bosnia and Herzegovina", iso: "BA", phoneCode: "+387" },
  { name: "Botswana", iso: "BW", phoneCode: "+267" },
  { name: "Brazil", iso: "BR", phoneCode: "+55" },
  { name: "Bulgaria", iso: "BG", phoneCode: "+359" },
  { name: "Cambodia", iso: "KH", phoneCode: "+855" },
  { name: "Cameroon", iso: "CM", phoneCode: "+237" },
  { name: "Canada", iso: "CA", phoneCode: "+1" },
  { name: "Chile", iso: "CL", phoneCode: "+56" },
  { name: "China", iso: "CN", phoneCode: "+86" },
  { name: "Colombia", iso: "CO", phoneCode: "+57" },
  { name: "Costa Rica", iso: "CR", phoneCode: "+506" },
  { name: "Croatia", iso: "HR", phoneCode: "+385" },
  { name: "Cuba", iso: "CU", phoneCode: "+53" },
  { name: "Czech Republic", iso: "CZ", phoneCode: "+420" },
  { name: "Denmark", iso: "DK", phoneCode: "+45" },
  { name: "Dominican Republic", iso: "DO", phoneCode: "+1" },
  { name: "Ecuador", iso: "EC", phoneCode: "+593" },
  { name: "Egypt", iso: "EG", phoneCode: "+20" },
  { name: "El Salvador", iso: "SV", phoneCode: "+503" },
  { name: "Estonia", iso: "EE", phoneCode: "+372" },
  { name: "Ethiopia", iso: "ET", phoneCode: "+251" },
  { name: "Finland", iso: "FI", phoneCode: "+358" },
  { name: "France", iso: "FR", phoneCode: "+33" },
  { name: "Georgia", iso: "GE", phoneCode: "+995" },
  { name: "Germany", iso: "DE", phoneCode: "+49" },
  { name: "Ghana", iso: "GH", phoneCode: "+233" },
  { name: "Greece", iso: "GR", phoneCode: "+30" },
  { name: "Guatemala", iso: "GT", phoneCode: "+502" },
  { name: "Haiti", iso: "HT", phoneCode: "+509" },
  { name: "Honduras", iso: "HN", phoneCode: "+504" },
  { name: "Hungary", iso: "HU", phoneCode: "+36" },
  { name: "Iceland", iso: "IS", phoneCode: "+354" },
  { name: "India", iso: "IN", phoneCode: "+91" },
  { name: "Indonesia", iso: "ID", phoneCode: "+62" },
  { name: "Iran", iso: "IR", phoneCode: "+98" },
  { name: "Iraq", iso: "IQ", phoneCode: "+964" },
  { name: "Ireland", iso: "IE", phoneCode: "+353" },
  { name: "Israel", iso: "IL", phoneCode: "+972" },
  { name: "Italy", iso: "IT", phoneCode: "+39" },
  { name: "Jamaica", iso: "JM", phoneCode: "+1" },
  { name: "Japan", iso: "JP", phoneCode: "+81" },
  { name: "Jordan", iso: "JO", phoneCode: "+962" },
  { name: "Kazakhstan", iso: "KZ", phoneCode: "+7" },
  { name: "Kenya", iso: "KE", phoneCode: "+254" },
  { name: "Kuwait", iso: "KW", phoneCode: "+965" },
  { name: "Kyrgyzstan", iso: "KG", phoneCode: "+996" },
  { name: "Laos", iso: "LA", phoneCode: "+856" },
  { name: "Latvia", iso: "LV", phoneCode: "+371" },
  { name: "Lebanon", iso: "LB", phoneCode: "+961" },
  { name: "Lithuania", iso: "LT", phoneCode: "+370" },
  { name: "Luxembourg", iso: "LU", phoneCode: "+352" },
  { name: "Madagascar", iso: "MG", phoneCode: "+261" },
  { name: "Malaysia", iso: "MY", phoneCode: "+60" },
  { name: "Mexico", iso: "MX", phoneCode: "+52" },
  { name: "Moldova", iso: "MD", phoneCode: "+373" },
  { name: "Mongolia", iso: "MN", phoneCode: "+976" },
  { name: "Morocco", iso: "MA", phoneCode: "+212" },
  { name: "Myanmar", iso: "MM", phoneCode: "+95" },
  { name: "Nepal", iso: "NP", phoneCode: "+977" },
  { name: "Netherlands", iso: "NL", phoneCode: "+31" },
  { name: "New Zealand", iso: "NZ", phoneCode: "+64" },
  { name: "Nicaragua", iso: "NI", phoneCode: "+505" },
  { name: "Nigeria", iso: "NG", phoneCode: "+234" },
  { name: "North Macedonia", iso: "MK", phoneCode: "+389" },
  { name: "Norway", iso: "NO", phoneCode: "+47" },
  { name: "Pakistan", iso: "PK", phoneCode: "+92" },
  { name: "Panama", iso: "PA", phoneCode: "+507" },
  { name: "Paraguay", iso: "PY", phoneCode: "+595" },
  { name: "Peru", iso: "PE", phoneCode: "+51" },
  { name: "Philippines", iso: "PH", phoneCode: "+63" },
  { name: "Poland", iso: "PL", phoneCode: "+48" },
  { name: "Portugal", iso: "PT", phoneCode: "+351" },
  { name: "Romania", iso: "RO", phoneCode: "+40" },
  { name: "Russia", iso: "RU", phoneCode: "+7" },
  { name: "Saudi Arabia", iso: "SA", phoneCode: "+966" },
  { name: "Serbia", iso: "RS", phoneCode: "+381" },
  { name: "Singapore", iso: "SG", phoneCode: "+65" },
  { name: "Slovakia", iso: "SK", phoneCode: "+421" },
  { name: "Slovenia", iso: "SI", phoneCode: "+386" },
  { name: "South Africa", iso: "ZA", phoneCode: "+27" },
  { name: "South Korea", iso: "KR", phoneCode: "+82" },
  { name: "Spain", iso: "ES", phoneCode: "+34" },
  { name: "Sri Lanka", iso: "LK", phoneCode: "+94" },
  { name: "Sweden", iso: "SE", phoneCode: "+46" },
  { name: "Switzerland", iso: "CH", phoneCode: "+41" },
  { name: "Taiwan", iso: "TW", phoneCode: "+886" },
  { name: "Thailand", iso: "TH", phoneCode: "+66" },
  { name: "Trinidad and Tobago", iso: "TT", phoneCode: "+1" },
  { name: "Tunisia", iso: "TN", phoneCode: "+216" },
  { name: "Turkey", iso: "TR", phoneCode: "+90" },
  { name: "Ukraine", iso: "UA", phoneCode: "+380" },
  { name: "United Arab Emirates", iso: "AE", phoneCode: "+971" },
  { name: "United Kingdom", iso: "GB", phoneCode: "+44" },
  { name: "United States", iso: "US", phoneCode: "+1" },
  { name: "Uruguay", iso: "UY", phoneCode: "+598" },
  { name: "Uzbekistan", iso: "UZ", phoneCode: "+998" },
  { name: "Venezuela", iso: "VE", phoneCode: "+58" },
  { name: "Vietnam", iso: "VN", phoneCode: "+84" },
  { name: "Zambia", iso: "ZM", phoneCode: "+260" },
  { name: "Zimbabwe", iso: "ZW", phoneCode: "+263" }
];
