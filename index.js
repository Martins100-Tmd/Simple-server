const express = require('express');
const App = express();

App.use(express.json({ limit: '500mb' }));
App.use(express.urlencoded({ extended: true }));

App.get('/', (req, res) => res.status(200).json({ message: 'Hello World!' }));

App.listen(3000, () => console.log('Server is running on port 3000'));
