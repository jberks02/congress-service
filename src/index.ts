import express from 'express';
import helmet from 'helmet';
import api_routes from './routes'; 
const PORT: any = process.env.PORT || 8080


const app = express();

app.use(helmet())

app.get('/live', (_req, res) => res.send('Server Online'));

app.use('/api/v1/', api_routes)

app.listen(PORT, () => {
    console.info('Server Listening on port: ', PORT)
});
