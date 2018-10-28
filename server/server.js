const path = require('path');
const publicPath = path.join('__dirname','../public');
const express = require('express');
const PORT = process.env.PORT || '4505';

const app = express();

app.use(express.static(publicPath));

app.listen(PORT,()=>{
    console.log('it has begun...');
})