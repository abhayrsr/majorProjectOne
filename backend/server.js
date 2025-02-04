const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { initializeDatabase } = require("./src/config/db/db.connect");
const { mensRouter } = require("./src/routes/mensApi");
const productRouter = require("./src/routes/productApi");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/mens", mensRouter)
app.use("/product", productRouter)

async function main() {
  try {
    await initializeDatabase();
  } catch (error) {
    console.log("error during initialization", error);
  }
}

main();

// Routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
