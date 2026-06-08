const RECRUITERS = {

  // ==========================
  // ACTIVE RECRUITERS
  // ==========================

  "ANA Associates LLC - Ana DiTrolio": {
    email: "ana@anaassociatesllc.com",
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 200 }
    }
  },

  "Aztec Labor - Karen Schindler": {
    email: "apiintake@azteclabor.com",
    consulateFee: "always",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 150 },
      "Nicaragua": { rate: 200 },
      "Guatemala": { rate: 200 }
    }
  },

  "Coroneo Agencia De Viaje - Matilde Angelica Vargas": {
    email: "mave55@prodigy.net.mx",
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: 150 }
    }
  },

  "Del-Al Associates Inc - Juan del Alamo": {
    email: "juan_delal@hotmail.com",
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
    email: "Joseusamex@gmail.com",
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Florida East Coast Travel Services Inc. - Jorge Garcia": {
    email: "",
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "H2 LaborMex, LLC - Daniela Reyes": {
    email: "info@labormex.com",
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "H2 Mexico LLC - Joshua Lyden": {
    email: "lydenh2@gmail.com",
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Monarch Butterfly - Jose Jasso": {
    email: "monarchbutterfly@hotmail.com",
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Solstice International - Melissa Villarreal-Rodriguez": {
    email: "accounting@solstice-intl.com",
    consulateFee: "optional",
    defaultCountry: "Mexico",
    countries: {
      "Mexico": { rate: null }
    }
  },

  "Galleria Travel SRL - Florin Ionescu": {
    email: "boeruionescu@hotmail.com",
    consulateFee: "optional",
    defaultCountry: "Romania",
    countries: {
      "Romania": { rate: null }
    }
  },

  "Abroad RSA - Carla Van Schalkwyk": {
    email: "abroadrsa@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Agri Employment Agency - Twanette Burger": {
    email: "twanette.agriemployment@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Agri USA & Canada - Gideon Jacobs": {
    email: "gideon@agriusacanada.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "SAAP - William Radloff": {
    email: "agriplacements.int@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Agri USSA - Izak Nel": {
    email: "agriussa@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Country Labour Pty Ltd - Charmaine Bekker": {
    email: "cl@countrylabour.co.za",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Eagle Hour Farm Work - Jaco Visser": {
    email: "eaglehourfarmwork@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Euro Personnel Consultants - Charlotte Portwig": {
    email: "charlotte@europersonnel.co.za",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Exclusive Placements - Stephanus Botha": {
    email: "exclusiveplacementsusa@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Farm Recruit USA - Pieter Liebenberg": {
    email: "info@farmrecruitusa.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "GetGoAgri - Franco Nel": {
    email: "getgoagri@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Global Farmwork - Ronelle Herbst-Theron": {
    email: "farmworkamerica@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Greenfields - Jacqualene Swart": {
    email: "h2awork@yahoo.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Homestead Recruiting - Joshua Smith": {
    email: "info@homesteadrecruiting.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "JobLex - Dianne Hirst": {
    email: "dianne@joblex.co.za",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Labor H2A Recruitment - Juanita Schoeman": {
    email: "laborh2a@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Link2FarmingUSA Recruitment - Marlize Langenhoven": {
    email: "link2farmingusa@yahoo.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Midwest Placements - Anje De Bruin": {
    email: "admin@mwplacements.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Next Level H2A Recruiters - Hyla Grobler": {
    email: "hyla@nextlevelh2arecruiters.co.za",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "NS Pinnacle Recruitment - Nicolette Goncalves": {
    email: "manager@nspinnaclerecruit.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "Placement Service International - Lizette Theunisen": {
    email: "info@psiplacements.co.za",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "SA 2 USA Recruit - Delucia Swanepoel": {
    email: "apply@sa2usarecruit.co.za",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "USA Labour - Steven Schultz": {
    email: "admin@usalabour.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "VPS Recruitment - Lihandri Elizabeth van den Berg": {
    email: "vpofficesa@gmail.com",
    consulateFee: "optional",
    defaultCountry: "South Africa",
    countries: {
      "South Africa": { rate: null }
    }
  },

  "iWorkMarket - Irina Mealy": {
    email: "Irina.Engel@iWorkMarket.com",
    consulateFee: "optional",
    defaultCountry: "",
    countries: {}
  },

  "Thunderbold Intl LLC - Ruben Wall": {
    email: "rubenwall@me.com",
    consulateFee: "optional",
    defaultCountry: "",
    countries: {}
  }
  */
};
