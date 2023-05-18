const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const cardsRoute = require('./routes/cards');
const cors = require('cors');
const { celebrate, Joi, errors  } = require('celebrate')
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger'); 


const app = express();

mongoose.connect('mongodb://localhost:27017/aroundb');
app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('El servidor va a caer');
  }, 0);
}); 

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);
app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), createUser);
app.use(auth);;
app.use('/users', userRoute);
app.use('/cards', cardsRoute);

app.use(errorLogger);

app.use(errors());

app.use('/', (req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});
app.use((err, req, res, next) => {
  if (err.name === 'CastError') {
    return res.status(400).send({ message: 'Se pasaron datos inválidos a los métodos para crear un usuario/tarjeta o actualizar el avatar/perfil de un usuario.' });
  }
  if (err.name === 'DocumentNotFoundError') {
    return res.status(404).send({ message: 'No existe un usuario con el id solicitado o la solicitud se envió a una dirección inexistente;' });
  }
  if(err.code === 11000){
    return res.status(409).send({ message: 'Al registrarse, se especificó un correo electrónico que ya existe en el servidor' });
  }
  console.log(err)
   res.status(500).send({message: 'Se ha producido un error en el servidor'});
 }); 

app.listen(5000);
