import express from "express";
import paymentRoutes from "./routes/paymentRoutes"; 

const app = express();
app.use(express.json()); 
app.use("/api", paymentRoutes); 
app.listen(2700, () => {
  console.log("Server running on http://localhost:2700");
});
