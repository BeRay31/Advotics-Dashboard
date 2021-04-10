const soldProductData = [
  {
    name: "Indomie",
    price: 3125,
    prod: 2685,
    multiplier: 2,
    img: require('@/assets/img/sold/1.jpg')
  },
  {
    name: "Rexona",
    price: 11220,
    prod: 10565,
    multiplier: 2,
    img: require('@/assets/img/sold/2.jpg')
  },
  {
    name: "Glade",
    price: 15625,
    prod: 14565,
    multiplier: 2,
    img: require('@/assets/img/sold/3.jpg')
  },
  {
    name: "Vaseline",
    price: 22565,
    prod: 20565,
    multiplier: 2,
    img: require('@/assets/img/sold/4.jpg')
  },
  {
    name: "Nature Republic",
    price: 92345,
    prod: 76565,
    multiplier: 1,
    img: require('@/assets/img/sold/5.jpg')
  },
  {
    name: "Cha Cha",
    price: 6125,
    prod: 5355,
    multiplier: 2,
    img: require('@/assets/img/sold/6.jpg')
  },
  {
    name: "Pepsodent",
    price: 11235,
    prod: 9975,
    multiplier: 2,
    img: require('@/assets/img/sold/7.jpg')
  },
  {
    name: "Mama Lemon",
    price: 12035,
    prod: 11555,
    multiplier: 2,
    img: require('@/assets/img/sold/8.jpg')
  },
  {
    name: "Dancow",
    price: 30565,
    prod: 27875,
    multiplier: 2,
    img: require('@/assets/img/sold/9.jpg')
  },
  {
    name: "Tango Wafer",
    price: 21435,
    prod: 19765,
    multiplier: 2,
    img: require('@/assets/img/sold/10.jpg')
  }
]

const competitorProductData = [
  {
    name: "Lemonilo",
    price: 5550,
    prod: 4455,
    multiplier: 2,
    img: require('@/assets/img/competitor/1.jpg')
  },
  {
    name: "Axe",
    price: 12625,
    prod: 11455,
    multiplier: 2,
    img: require('@/assets/img/competitor/2.jpg')
  },
  {
    name: "Stella",
    price: 14625,
    prod: 12455,
    multiplier: 2,
    img: require('@/assets/img/competitor/3.jpg')
  },
  {
    name: "Nivea",
    price: 25455,
    prod: 22355,
    multiplier: 2,
    img: require('@/assets/img/competitor/4.jpg')
  },
  {
    name: "Some By Mi",
    price: 100235,
    prod: 89374,
    multiplier: 1,
    img: require('@/assets/img/competitor/5.jpg')
  },
  {
    name: "Coco Crunch",
    price: 8055,
    prod: 6754,
    multiplier: 2,
    img: require('@/assets/img/competitor/6.jpg')
  },
  {
    name: "Close Up",
    price: 12455,
    prod: 11234,
    multiplier: 2,
    img: require('@/assets/img/competitor/7.jpg')
  },
  {
    name: "Sunlight",
    price: 10235,
    prod: 9864,
    multiplier: 2,
    img: require('@/assets/img/competitor/8.jpg')
  },
  {
    name: "Bebelac",
    price: 35465,
    prod: 33456,
    multiplier: 2,
    img: require('@/assets/img/competitor/9.jpg')
  },
  {
    name: "Oreo",
    price: 5040,
    prod: 4356,
    multiplier: 2,
    img: require('@/assets/img/competitor/10.jpg')
  },
]


export const soldProductGenerator = () => {
  let prod = [...soldProductData];
  prod = [...prod.map(el => {
    const totalSold = Math.floor(Math.random() * Math.pow(10, el.multiplier));
    const newEl = {...el};
    newEl.totalSold = totalSold;
    newEl.totalRevenue = totalSold * (newEl.price - newEl.prod);
    return newEl;
  })]
  return prod;
}

export const competitorProductGenerator = () => {
  let prod = [...competitorProductData];
  prod = [...prod.map(el => {
    const totalSold = Math.floor(Math.random() * Math.pow(10, el.multiplier));
    const newEl = {...el};
    newEl.totalSold = totalSold;
    newEl.totalRevenue = totalSold * newEl.price;
    return newEl;
  })]
  return prod;
}