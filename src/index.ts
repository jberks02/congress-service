import express from 'express';
import helmet from 'helmet';
const PORT: any = process.env.PORT || 8080


const app = express();

app.use(helmet())

app.get('/', (_req, res) => res.send('Server Online'))

app.listen(PORT, () => {
    console.info('Server Listening on port: ', PORT)
});
