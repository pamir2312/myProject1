const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.send('fuck you');
    res.sendFile(`${__dirname}/public/index.html`);

});
app.get('/asyl',(req,res)=>{
  res.sendFile(`${__dirname}/public/asyl.html`);
})
app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
u
