//inicio
const exp = require('express');
const  app  = exp();
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const expSession = require('express-session');
const flash = require('connect-flash');
const path = require('path');

require('./database');

//setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));

app.set('view engine','.hbs');
//middlewares
app.use(exp.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(expSession({
    secret: 'boldt',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

//global variables
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');

    next();
})

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
//static files

app.use(exp.static(path.join(__dirname,'public')));

//server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});

