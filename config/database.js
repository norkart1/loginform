const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://axo:axoop@cluster0.imckmpc.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
