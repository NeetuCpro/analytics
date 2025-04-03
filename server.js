const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Detect Environment
const isProduction = process.env.NODE_ENV === "production";
const CLIENT_URL = isProduction
  ? "https://analytics.conversionprollp.com"
  : "http://localhost:3000";

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://Neetu:Neetu%40%23pra12@cluster0.v0gvp.mongodb.net/CproReport";

// ✅ Middleware
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());
app.use("/api/users", userRoutes);

// ✅ Serve React Frontend if in Production
if (isProduction) {
  app.use(express.static(path.join(__dirname, "client/build")));

  // ✅ Ensure React Router handles the login page correctly
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// ✅ Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
