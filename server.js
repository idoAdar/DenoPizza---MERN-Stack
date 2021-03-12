const express = require('express');
const mongoose = require('mongoose');
const URI = 'mongodb+srv://ido_adar:239738416@cluster0.kn2ub.mongodb.net/deno';
const routes = require('./routes/routes');

const app = express();

app.use(express.json({ extended: false}));

//Main Route:
app.use('/api/deno', routes);

const PORT = process.env.PORT || 5000;

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {
    app.listen(PORT);
    console.log(`Server started on port ${PORT}`);
})
.catch(error => console.log(error));