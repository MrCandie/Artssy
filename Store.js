// import image1 from "./images/artsy1.avif";
// import image2 from "./images/artsy1.avif";
// import image3 from "./images/artsy3.avif";
// import image4 from "./images/artsy4.avif";
// import image5 from "./images/featured1.avif";
// import image6 from "./images/featured2.avif";
// import image7 from "./images/featured3.avif";
// import image8 from "./images/featured4.avif";
// import image9 from "./images/auction1.avif";

export const DUMMY_DATA = [
  {
    id: "p1",
    name: "philomena",
    price: 3.9,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image: "./images/artsy1.avif",
  },
  {
    id: "p2",
    name: "boolean egyptian",
    price: 3.9,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image: "./images/artsy2.avif",
  },
  {
    id: "p3",
    name: "elipsia",
    price: 3.9,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image: "./images/artsy3.avif",
  },
  {
    id: "p4",
    name: "the lawmakers",
    price: 3.9,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image: "./images/artsy4.avif",
  },
  {
    id: "p5",
    name: "veil",
    price: 3.9,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image: "./images/featured1.avif",
  },
  {
    id: "p6",
    name: "alternating",
    price: 3.9,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image: "./images/featured2.avif",
  },
  {
    id: "p7",
    name: "rosemary",
    price: 3.9,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image: "./images/featured3.avif",
  },
  {
    id: "p8",
    name: "beverly",
    price: 3.9,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image: "./images/featured4.avif",
  },
  {
    id: "p9",
    name: "beverly",
    price: 3.9,
    creator: "Ali dawa",
    totalViews: "1.7k",
    location: "made in italy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    image: "./images/auction1.avif",
  },
];

export const allProducts = () => {
  return DUMMY_DATA;
};

export function getProduct(id) {
  const product = DUMMY_DATA.find((data) => data.id === id);

  return product;
}
