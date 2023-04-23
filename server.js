const dotenv = require("dotenv");
dotenv.config();

const connection = require("./model/connection.js");
connection();
const app = require("./controller/main.js");
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
