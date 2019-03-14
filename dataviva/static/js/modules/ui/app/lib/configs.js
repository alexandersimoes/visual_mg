/* eslint quote-props:
  ["error", "as-needed", { "keywords": true, "unnecessary": false }] */

export function getLang() {
  if (window.location.pathname.indexOf("pt") !== -1) {
    return "pt";
  }
  return "en";
}

export const env = {
  apiUrl: process.env.API_URL ?
    process.env.API_URL : "http://api.dataviva.info/",
  s3Host: process.env.S3_HOST ?
    process.env.S3_HOST : "https://dataviva-site-production.s3.amazonaws.com",
  lang: "pt",
};

export const databases = {
  location: {
    name: "message.brazilian_locations",
    code: "location",
    idDescription: "message.id_ibge",
    groupOpts: [
      "region",
      "state",
      "mesoregion",
      "microregion",
      "municipality",
    ],
    groupLabels: [
      "message.region",
      "message.state",
      "message.mesoregion",
      "message.microregion",
      "message.municipality",
    ],
    orderOpts: ["name", "extraInfo"],
    orderLabels: ["message.name", "message.population"],
    extraInfo: {
      label: "message.population",
    },
    endpoint: "municipality",
    imgPath: {
      state: "/static/img/icons/bra/",
      mesoregion: "/static/img/icons/bra/",
      microregion: "/static/img/icons/bra/",
      municipality: "/static/img/icons/bra/",
    },
    icon: {
      db: "dv-bra",
      item: "dv-bra-",
    },
    tooltipText: "message.brazilian_locations_tooltip",
    hiddenIds: [""],
    colors: {
      "1": "#00994c",
      "2": "#101070",
      "3": "#cfc417",
      "4": "#c40008",
      "5": "#90b72e",
    },
    source: {
      database: "IBGE",
      year: "2017",
    },
    defaultOption: {
      img: "https://dataviva-site-production.s3.amazonaws.com/static/img/icons/wld/105.png",
      color: "#676a6c",
      name: "message.brazil",
      url: "location/all",
      old_id: "all"
    },
  },
  occupation: {
    name: "message.occupations",
    code: "occupation",
    idDescription: "message.id_cbo",
    groupOpts: ["occupation_group", "family"],
    groupLabels: ["message.main_group", "message.family"],
    orderOpts: ["name", "extraInfo"],
    orderLabels: ["message.name", "message.jobs"],
    extraInfo: {
      label: "message.jobs",
      endpoint: "rais/occupation_family/?value=employee&year=2016&order=occupation_family",
      id: "occupation_family",
      dataValue: "jobs",
    },
    endpoint: "occupation_family",
    icon: {
      db: "dv-occupation",
      item: "dv-cbo-",
    },
    tooltipText: "message.occupations_tooltip",
    hiddenIds: ["0", "x"],
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
    source: {
      database: "RAIS",
      year: "2016",
    },
  },
  industry: {
    name: "message.economic_activities",
    code: "industry",
    idDescription: "message.id_cnae",
    groupOpts: ["industry_section", "industry_division", "class"],
    groupLabels: ["message.section", "message.division", "message.class"],
    orderOpts: ["name", "extraInfo"],
    orderLabels: ["message.name", "message.jobs"],
    extraInfo: {
      label: "message.jobs",
      endpoint: "rais/industry_class/?value=employee&year=2016&order=industry_class",
      id: "industry_class",
      dataValue: "jobs",
    },
    endpoint: "industry_class",
    icon: {
      db: "dv-industry",
      item: "dv-cnae-",
    },
    tooltipText: "message.economic_activities_tooltip",
    hiddenIds: [""],
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
    source: {
      database: "RAIS",
      year: "2016",
    },
  },
  product: {
    name: "message.products",
    code: "product",
    idDescription: "message.id_hs",
    groupOpts: ["product_section", "position"],
    groupLabels: ["message.section", "message.position"],
    orderOpts: ["name", "extraInfo"],
    orderLabels: ["message.name", "message.exports"],
    extraInfo: {
      label: "message.exports",
      endpoint: "secex/product/?value=value&year=2018&order=product",
      id: "product",
      dataValue: "value",
    },
    endpoint: "product",
    icon: {
      db: "dv-product",
      item: "dv-hs-",
    },
    tooltipText: "message.products_tooltip",
    hiddenIds: ["22"],
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
    source: {
      database: "SECEX",
      year: "2018",
    },
  },
  trade_partner: {
    name: "message.trade_partners",
    code: "trade_partner",
    idDescription: "message.id_wld",
    groupOpts: ["continent", "country"],
    groupLabels: ["message.continent", "message.country"],
    orderOpts: ["name", "extraInfo"],
    orderLabels: ["message.name", "message.exports"],
    extraInfo: {
      label: "message.exports",
      endpoint: "secex/country/?value=value&year=2018&order=country",
      id: "country",
      dataValue: "value",
    },
    endpoint: "country",
    imgPath: {
      country: "/static/img/icons/wld/",
    },
    icon: {
      db: "dv-trade-partner",
      item: "dv-wld-",
    },
    tooltipText: "message.trade_partners_tooltip",
    hiddenIds: ["xx", "367"],
    colors: {
      as: "#c8140a",
      eu: "#752277",
      na: "#0b1097",
      sa: "#00923f",
      af: "#cf9f17",
      oc: "#cf7417",
    },
    source: {
      database: "SECEX",
      year: "2018",
    },
  },
  university: {
    name: "message.universities",
    code: "university",
    idDescription: "message.id",
    orderOpts: ["name", "extraInfo"],
    orderLabels: ["message.name", "message.enrolled"],
    extraInfo: {
      label: "message.enrolled",
      endpoint: "hedu/university/?value=enrolled&year=2017&order=university",
      id: "university",
      dataValue: "enrolleds",
    },
    endpoint: "university",
    icon: {
      db: "dv-university",
      item: "dv-university-",
    },
    tooltipText: "message.universities_tooltip",
    hiddenIds: ["x"],
    colors: {
      T: "#31a0b5",
      S: "#2f2f6d",
      Q: "#009b3a",
      P: "#105b10",
    },
    source: {
      database: "Censo da Educação Superior",
      year: "2017",
    },
  },
  major: {
    name: "message.higher_education",
    code: "major",
    idDescription: "message.id",
    groupOpts: ["hedu_course_field", "major"],
    groupLabels: ["message.field", "message.major"],
    orderOpts: ["name", "extraInfo"],
    orderLabels: ["message.name", "message.enrolled"],
    extraInfo: {
      label: "message.enrolled",
      endpoint: "hedu/hedu_course/?value=enrolled&year=2017&order=hedu_course",
      id: "hedu_course",
      dataValue: "enrolleds",
    },
    endpoint: "hedu_course",
    icon: {
      db: "dv-major",
      item: "dv-course-hedu-",
    },
    tooltipText: "message.higher_education_tooltip",
    hiddenIds: ["00"],
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
    source: {
      database: "Censo da Educação Superior",
      year: "2017",
    },
  },
  basic_course: {
    name: "message.basic_courses",
    code: "basic_course",
    idDescription: "message.id",
    groupOpts: ["course_field", "course"],
    groupLabels: ["message.field", "message.course"],
    orderOpts: ["name", "extraInfo"],
    orderLabels: ["message.name", "message.enrolled"],
    extraInfo: {
      label: "message.enrolled",
      endpoint: "sc/sc_course/?value=students&year=2017&order=sc_course",
      id: "sc_course",
      dataValue: "students",
    },
    endpoint: "sc_course",
    icon: {
      db: "dv-basic-course",
      item: "dv-course-sc-",
    },
    tooltipText: "message.basic_courses_tooltip",
    hiddenIds: ["00"],
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
    source: {
      database: "Censo Escolar",
      year: "2017",
    },
  },
};