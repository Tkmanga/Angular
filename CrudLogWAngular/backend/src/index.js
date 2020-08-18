//inicio
const exp = require('express');
const  app  = exp();
const exhbs = require('express-handlebars');
//setting
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
/*app.engine('.hbs',exhbs({
    defaultLayout: 'main',
    layoutsDir: path.join(),
    partialsDir: ,
    extname:
}));*/
//middlewares
//global variables
//Routes
//static files
//server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});