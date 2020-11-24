import express from 'express';
import mongoose from 'mongoose';
import bodyParse from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import defaultConfig from './config/defaultConfig.js'
import productRoute from './routes/product.route.js'

dotenv.config({ path: './.env' });

const app = express();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => process.stdout.write('DB Connection succesfully\n'));
app.use(cors());

app.use(bodyParse.json());
app.use('/api/v1/products',productRoute)
app.use('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome To Product List ',
  });
});

const { port } = defaultConfig;
app.listen(port, () => process.stdout.write(
  `Listening on port ${port} ...\n********************* \n`,
));
export default app;