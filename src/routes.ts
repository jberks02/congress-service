import { Router } from 'express';
import { most_recently_updated_bills, users_senators } from './controllers/homepage';

const app = Router();

app.get('home/senators/:state', (req, res) => users_senators(req, res))
app.get('home/recentbills/:congress', (req, res) => most_recently_updated_bills(req, res));

export default app;

