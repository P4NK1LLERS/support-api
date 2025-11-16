import express from "express";
import requestTypeRoutes from "./routes/requestTypes.js";
import { connectDB } from "./config/database.js";

const app = express();
app.use(express.json());
app.use("/api/request-types", requestTypeRoutes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

if (process.env.NODE_ENV !== "test") {
  connectDB();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
