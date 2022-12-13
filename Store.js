import axios from "axios";

const BACKEND_URL = "https://artsy-e9951-default-rtdb.firebaseio.com/";

//////////////////////////////////////////////////////////
//HANDLING CART DATA
export async function postCart(data) {
  const response = await axios.post(BACKEND_URL + "cart.json", data);

  return response.data.name;
}

export async function getCartData() {
  const response = await axios.get(BACKEND_URL + "cart.json");

  const loadedCart = [];
  for (const key in response.data) {
    loadedCart.push({
      cartId: key,
      ...response.data[key],
    });
  }
  return loadedCart;
}

export async function updateCart(id, data) {
  return await axios.put(BACKEND_URL + `cart/${id}.json`, data);
}

export async function deleteCart(id) {
  await axios.delete(BACKEND_URL + `cart/${id}.json`);
}

////////////////////////////////////////////////////////////
// HANDLING FAVORITES DATA

export async function postFavorites(data) {
  const response = await axios.post(BACKEND_URL + "favorites.json", data);

  return response.data.name;
}

export async function getFavorites() {
  const response = await axios.get(BACKEND_URL + "favorites.json");

  const loadedCart = [];
  for (const key in response.data) {
    loadedCart.push({
      favId: key,
      ...response.data[key],
    });
  }
  return loadedCart;
}

export async function deleteFavorites(id) {
  await axios.delete(BACKEND_URL + `favorites/${id}.json`);
}

/////////////////////////////////////////////////////
//HANDLING STORE DATA
export async function storeData() {
  const response = await axios.get(BACKEND_URL + "store.json");

  const loadedData = [];
  for (const key in response.data) {
    loadedData.push({
      id: key,
      ...response.data[key],
    });
  }
  return loadedData;
}

export async function auctionData() {
  const res = await axios.get(BACKEND_URL + "auction.json");

  const loadedData = [];
  for (const key in res.data) {
    loadedData.push({
      id: key,
      ...res.data[key],
    });
  }
  return loadedData;
}

export const allProducts = async () => {
  return await storeData();
};

export async function getProduct(id) {
  const data = await storeData();
  const product = data.find((data) => data.id === id);
  return product;
}

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

export function getProductData(id) {
  return DUMMY_DATA.find((item) => item.id === id);
}
