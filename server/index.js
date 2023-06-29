const express = require('express');
const cors =  require('cors')
const app = express();

const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
app.use(cors());
app.use(express.json());
app.use('/autote', registerRouter);
app.use('/autote', loginRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
