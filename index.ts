import express,{ Request, Response } from 'express';
import mongoose from 'mongoose';
import routes from "./routes/route"
import cors from "cors"
import dotenv from 'dotenv';
import { seedUser , getAllUser} from './seeders/seedAccount';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongodb_uri = process.env.MONGODB_URI || "";

mongoose.connect(mongodb_uri)

app.set('trust proxy', 1);
  
app.use(express.json());
app.use(cors()); 
app.use("/api", routes)


app.get('/', async (request: Request, response: Response) => {
  response.send("working server...........")
});

app.post('/api/seeder', async (request: Request, response: Response) => {
  try {
    const user = await seedUser()
    response.send(user)
  } catch (err) {
      console.error(err);
      response.status(500).json({ message: 'Server error' });
      return
    }
});

app.get('/api/availableAccounts', async (request: Request, response: Response) => {
  try {
    const users = await getAllUser()
    response.send(users)
  } catch (err) {
      console.error(err);
      response.status(500).json({ message: 'Server error' });
      return
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
