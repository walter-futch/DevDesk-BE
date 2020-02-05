const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const ticketsRouter = require('../tickets/tickets-router.js');
const categoriesRouter = require('../tickets/categories-router.js');

const server = express();
require('dotenv').config();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/tickets', ticketsRouter);
server.use('/api/categories', categoriesRouter);


server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;