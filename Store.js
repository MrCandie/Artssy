export const DUMMY_DATA = [
  {
    id: "p1",
    name: "philomena",
    price: 250,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut pariatur. ",
    image: "./images/artsy1.avif",
    type: "fashion",
  },
  {
    id: "p2",
    name: "boolean egyptian",
    price: 55,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  pariatur. ",
    image: "./images/artsy2.avif",
    type: "fashion",
  },
  {
    id: "p3",
    name: "elipsia",
    price: 98,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  pariatur. ",
    image: "./images/artsy3.avif",
    type: "nature",
  },
  {
    id: "p4",
    name: "the lawmakers",
    price: 10,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  pariatur. ",
    image: "./images/artsy4.avif",
    type: "nature",
  },
  {
    id: "p5",
    name: "veil",
    price: 200,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  pariatur. ",
    image: "./images/featured1.avif",
    type: "art",
  },
  {
    id: "p6",
    name: "alternating",
    price: 50,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  pariatur. ",
    image: "./images/featured2.avif",
    type: "fashion",
  },
  {
    id: "p7",
    name: "rosemary",
    price: 300,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  pariatur. ",
    image: "./images/featured3.avif",
    type: "art",
  },
  {
    id: "p8",
    name: "beverly",
    price: 150,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  pariatur. ",
    image: "./images/featured4.avif",
    type: "nature",
  },
  {
    id: "p9",
    name: "beverly",
    price: 120,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  pariatur. ",
    image: "./images/auction1.avif",
    type: "art",
  },
];

export async function storeData() {
  const res = await fetch(
    "https://artsy-e9951-default-rtdb.firebaseio.com/store.json"
  );
  const data = await res.json();
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      ...data[key],
    });
  }
  return loadedData;
}

export const allProducts = async () => {
  return await storeData();
};

export function getProduct(id) {
  const product = DUMMY_DATA.find((data) => data.id === id);
  return product;
}

// export function getFashion() {
//   // const product = await storeData();
//   return DUMMY_DATA.filter((data) => data.type === "fashion");
// }

// export function getArt() {
//   return DUMMY_DATA.filter((data) => data.type === "art");
// }
// export function getNature() {
//   return DUMMY_DATA.filter((data) => data.type === "nature");
// }

// export function hundredRange() {
//   return DUMMY_DATA.filter((data) => data.price <= 100);
// }
// export function oneFiftyRange() {
//   return DUMMY_DATA.filter((data) => data.price >= 100 && data.price <= 150);
// }
// export function twoHundredRange() {
//   return DUMMY_DATA.filter((data) => data.price >= 150 && data.price <= 200);
// }
// export function aboveTwoHundred() {
//   return DUMMY_DATA.filter((data) => data.price > 200);
// }
