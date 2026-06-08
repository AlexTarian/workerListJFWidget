const RECRUITERS = {

  // ==========================
  // ACTIVE RECRUITERS
  // ==========================

  "ANA Associates LLC - Ana DiTrolio": {
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 200 }
    }
  },

  "Aztec Labor - Karen Schindler": {
    consulateFee: "always",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 150 },
      "Nicaragua": { rate: 200 },
      "Guatemala": { rate: 200 }
    }
  },

  "Coroneo Agencia De Viaje - Matilde Angelica Vargas": {
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 150 }
    }
  },

  "Del-Al Associates Inc - Juan del Alamo": {
    consulateFee: "optional",
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
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Florida East Coast Travel Services Inc. - Jorge Garcia": {
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "H2 LaborMex, LLC - Daniela Reyes": {
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "H2 Mexico LLC - Joshua Lyden": {
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Monarch Butterfly - Jose Jasso": {
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Solstice International - Melissa Villarreal-Rodriguez": {
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Galleria Travel SRL - Florin Ionescu": {
    consulateFee: "optional",
    defaultCountry: "Romania",
    countries: {
      "Romania": { rate: null }
    }
  },

  "Abroad RSA - Carla Van Schalkwyk": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Agri Employment Agency - Twanette Burger": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Agri USA & Canada - Gideon Jacobs": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "SAAP - William Radloff": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Agri USSA - Izak Nel": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Country Labour Pty Ltd - Charmaine Bekker": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Eagle Hour Farm Work - Jaco Visser": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Euro Personnel Consultants - Charlotte Portwig": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Exclusive Placements - Stephanus Botha": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Farm Recruit USA - Pieter Liebenberg": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "GetGoAgri - Franco Nel": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Global Farmwork - Ronelle Herbst-Theron": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Greenfields - Jacqualene Swart": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Homestead Recruiting - Joshua Smith": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "JobLex - Dianne Hirst": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Labor H2A Recruitment - Juanita Schoeman": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Link2FarmingUSA Recruitment - Marlize Langenhoven": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Midwest Placements - Anje De Bruin": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Next Level H2A Recruiters - Hyla Grobler": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "NS Pinnacle Recruitment - Nicolette Goncalves": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Placement Service International - Lizette Theunisen": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "SA 2 USA Recruit - Delucia Swanepoel": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "USA Labour - Steven Schultz": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "VPS Recruitment - Lihandri Elizabeth van den Berg": {
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "iWorkMarket - Irina Mealy": {
    consulateFee: "optional",
    defaultCountry: "",
    countries: {}
  },

  "Thunderbold Intl LLC - Ruben Wall": {
    consulateFee: "optional",
    defaultCountry: "",
    countries: {}
  }
  */
};
