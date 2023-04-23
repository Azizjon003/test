const arr = [
  {
    name: "Samsung Galaxy S21",
    price: 1000,
    description: "Samsung Galaxy S21",
    sale_price: 1000,
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-5g.jpg",
    category: "Mobile",
    type: "Samsung",
  },
  {
    name: "Iphone 14 Pro",
    price: 1400,
    description: "Iphone 14 Pro",
    sale_price: 1000,
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
    category: "Mobile",
    type: "Iphone",
  },

  {
    name: "Samsung Galaxy S21",
    price: 1000,
    description: "Samsung Galaxy S21",
    sale_price: 1000,
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-5g.jpg",
    category: "Mobile",
    type: "Samsung",
  },
  {
    name: "Iphone 14 Pro",
    price: 1400,
    description: "Iphone 14 Pro",
    sale_price: 1000,
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
    category: "Mobile",
    type: "Iphone",
  },
];

const dotenv = require("dotenv");
dotenv.config();
const connection = require("./connection");
const Product = require("./products");
const createData = async () => {
  await connection();
  await Product.insertMany(arr);
  console.log("Data created");
};
createData();
