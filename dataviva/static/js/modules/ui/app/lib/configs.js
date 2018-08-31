const dv = dataviva;

export const env = {
  api_url: dv.api_url || "http://api.dataviva.info/",
  s3_host: dv.s3_host || "https://dataviva-site-production.s3.amazonaws.com",
  lang: dv.language || "pt",
};

export const databases = {
  location: {
    name: "Brazilian Locations",
    code: "location",
    id_description: "IBGE ID",
    group_opts: [
      "region",
      "state",
      "mesoregion",
      "microregion",
      "municipality",
    ],
    order_opts: ["name", "extra_info"],
    order_labels: ["Name", "Population"],
    extra_info_label: "Population",
    endpoint: "municipality",
    img_path: {
      state: "/static/img/icons/bra/",
      mesoregion: "/static/img/icons/bra/",
      microregion: "/static/img/icons/bra/",
      municipality: "/static/img/icons/bra/",
    },
    icon: {
      db: "dv-bra",
      item: "dv-bra-",
    },
    tooltip_text: `General profile by region, state, mesoregion, 
                   microregion or city. Check its international trade, 
                   economic activity, employment and education data. 
                   Examples: Southeast, Mato Grosso, Recife, 
                   Metropolitan Region of Porto Alegre.`,
    colors: {
      "1": "#00994c",
      "2": "#101070",
      "3": "#cfc417",
      "4": "#c40008",
      "5": "#90b72e",
    },
  },
  occupation: {
    name: "Occupations",
    code: "occupation",
    id_description: "CBO ID",
    group_opts: ["occupation_group", "family"],
    order_opts: ["name", "extra_info"],
    order_labels: ["Name", "Total Jobs"],
    extra_info_label: "Total Jobs",
    endpoint: "occupation_family",
    icon: {
      db: "dv-occupation",
      item: "dv-cbo-",
    },
    tooltip_text: `Regions with best employment rates by professional
                   activity, related courses, average wage and job 
                   statistics per year. Examples: Medium Level 
                   Technicians, Industry workers, Receptionists, 
                   Clinicians.`,
    colors: {
      "1": "#752277",
      "2": "#cc0000",
      "3": "#cf6117",
      "4": "#a47542",
      "5": "#17a3cf",
      "6": "#105b10",
      "7": "#31a0b5",
      "8": "#cf9f17",
      "9": "#581f05",
    },
  },
  industry: {
    name: "Economic Activities",
    code: "industry",
    id_description: "CNAE ID",
    group_opts: ["industry_section", "industry_division", "classe"],
    order_opts: ["name", "extra_info"],
    order_labels: ["Name", "Total Jobs"],
    extra_info_label: "Total Jobs",
    endpoint: "industry_class",
    icon: {
      db: "dv-industry",
      item: "dv-cnae-",
    },
    tooltip_text: `Information on employment rate by region, average 
                   wage by occupation, average monthly income and 
                   economic opportunities. Examples: Businesses, Domestic
                   Service, Education, Restaurants, Call Center, 
                   Religious Organizations.`,
    colors: {
      a: "#105b10",
      b: "#330000",
      c: "#5e1f05",
      d: "#be2790",
      e: "#2f2f6d",
      f: "#cf7417",
      g: "#17a3cf",
      h: "#31a0b5",
      i: "#cf9f17",
      j: "#57d200",
      k: "#408e60",
      l: "#698b5a",
      m: "#cc0000",
      n: "#a47542",
      o: "#752277",
      p: "#cf6117",
      q: "#800000",
      r: "#7b6086",
      s: "#737373",
      t: "#cf1766",
      u: "#4c4c4c",
    },
  },
  product: {
    name: "Products",
    code: "product",
    id_description: "HS ID",
    group_opts: ["product_section", "position"],
    order_opts: ["name", "extra_info"],
    order_labels: ["Name", "Exports"],
    extra_info_label: "Exports",
    endpoint: "product",
    icon: {
      db: "dv-product",
      item: "dv-hs-",
    },
    tooltip_text: `Trade balance data by product, import origin and 
                   export destination, ranking by location, economic 
                   activities and related occupations. Examples: Food,
                   Art and Antiques, Iron Ore, Coffee, Auto Parts.`,
    colors: {
      "01": "#cfa717",
      "02": "#cf9f17",
      "03": "#c87b1e",
      "04": "#adcf17",
      "05": "#330000",
      "06": "#be2790",
      "07": "#cf1766",
      "08": "#47b431",
      "09": "#b00000",
      "10": "#a47542",
      "11": "#105b10",
      "12": "#3ab11a",
      "13": "#cf6117",
      "14": "#752277",
      "15": "#5e1f05",
      "16": "#17a3cf",
      "17": "#31a0b5",
      "18": "#cf6117",
      "19": "#698b5a",
      "20": "#737373",
      "21": "#7b6086",
    },
  },
  trade_partner: {
    name: "Trade Partners",
    code: "trade_partner",
    id_description: "WLD ID",
    group_opts: ["continent", "country"],
    order_opts: ["name", "extra_info"],
    order_labels: ["Name", "Exports"],
    extra_info_label: "Exports",
    endpoint: "country",
    img_path: {
      country: "/static/img/icons/wld/",
    },
    icon: {
      db: "dv-trade-partner",
      item: "dv-wld-",
    },
    tooltip_text: `Brazil’s top import and export partners, trade data 
                   by type of product or supplier city. Examples: Asia,
                   Africa, Europe, Mexico, Japan, USA, China, 
                   the Netherlands, Iran.`,
    colors: {
      as: "#c8140a",
      eu: "#752277",
      na: "#0b1097",
      sa: "#00923f",
      af: "#cf9f17",
      oc: "#cf7417",
    },
  },
  university: {
    name: "Universities",
    code: "university",
    id_description: "ID",
    group_opts: [],
    order_opts: ["name", "extra_info"],
    order_labels: ["Name", "Enrolled"],
    extra_info_label: "Enrolled",
    endpoint: "university",
    icon: {
      db: "dv-university",
      item: "dv-university-",
    },
    tooltip_text: `Number of enrollments in each offered course, student
                   status and similar university profiles. Examples: 
                   USP, UFMG, PUC Goiás.`,
    colors: {
      T: "#31a0b5",
      S: "#2f2f6d",
      Q: "#009b3a",
      P: "#105b10",
    },
  },
  hedu_course: {
    name: "Higher Education",
    code: "hedu_course",
    id_description: "ID",
    group_opts: ["hedu_course_field", "major"],
    order_opts: ["name", "extra_info"],
    order_labels: ["Name", "Enrolled"],
    extra_info_label: "Enrolled",
    endpoint: "hedu_course",
    icon: {
      db: "dv-major",
      item: "dv-course-hedu-",
    },
    tooltip_text: `List of universities and cities that offer 
                   post-secondary courses or the selected field of 
                   study. Examples: Education, Health Sciences, Law, 
                   Production Engineering, Physiotherapy.`,
    colors: {
      "01": "#737373",
      "14": "#cc0000",
      "21": "#7b6086",
      "22": "#cf6117",
      "31": "#c87b1e",
      "32": "#57d200",
      "34": "#a47542",
      "38": "#752277",
      "42": "#cf1766",
      "44": "#be2790",
      "46": "#408e60",
      "48": "#23c2b7",
      "52": "#17a3cf",
      "54": "#581f05",
      "58": "#cf7417",
      "62": "#105B10",
      "64": "#47b431",
      "72": "#800000",
      "76": "#cfa717",
      "81": "#cf9f17",
      "84": "#31a0b5",
      "85": "#2f2f6d",
      "86": "#698b5a",
    },
  },
  basic_course: {
    name: "Basic Courses",
    code: "basic_course",
    id_description: "ID",
    group_opts: ["course_field", "course"],
    order_opts: ["name", "extra_info"],
    order_labels: ["Name", "Enrolled"],
    extra_info_label: "Enrolled",
    endpoint: "sc_course",
    icon: {
      db: "dv-basic-course",
      item: "dv-course-sc-",
    },
    tooltip_text: `Brazilian schools that offer professional education
                   and enrollment ranking by city. Examples: Elementary 
                   School, High School, Nursing Technician, Agriculture
                   and Livestock Technician.`,
    colors: {
      "XX": "#2f2f6d",
      "01": "#800000",
      "02": "#CC0000",
      "03": "#17a3cf",
      "04": "#a47542",
      "05": "#cf9f17",
      "06": "#57d200",
      "07": "#31a0b5",
      "08": "#698b5a",
      "09": "#c87b1e",
      "10": "#7b6086",
      "11": "#581f05",
      "12": "#105b10",
      "13": "#cf7417",
    },
  },
};
