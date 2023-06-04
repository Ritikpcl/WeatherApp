import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import SearchRouter from './Routes/SearchRouter.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/weather', SearchRouter);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.send("Server is running successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
