const bodyparser = require('body-parser');
const pessoas = require('./pessoasRoute');

module.exports = app =>{
    app.use(bodyparser.json());
    app.use(pessoas);
    // app.get('/', (req,res)=>res.send('olá!'))

}