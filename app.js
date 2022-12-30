const express = require('express')
const createHttpError = require('http-errors')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const session = require('express-session')
const connectFlash = require('connect-flash')
// const passport = require('passport')

//init = initialization
const app = express()
app.use(morgan('dev'))  //4
//ejs 7
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//Init session
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            //secure : true,
            httpOnly: true,
        }
    })
)

//Passport JS Authentication
// app.use(passport.initialize())
// app.use(passport.session())
// require('./utils/passport.auth')

//connect flash
app.use(connectFlash())
app.use((req, res, next) => {
    res.locals.messages = req.flash()
    next()
})//ok

//1 ROUTES
app.use('/', require('./routes/index.route'))
app.use('/auth', require('./routes/auth.route'))  // 6
app.use('/user', require('./routes/user.route'))  // 6

//2
app.use((req, res, next) => {
    next(createHttpError.NotFound())
})

//3 error append
app.use((error, req, res, next) => {
    error.status = error.status || 500
    res.status(error.status)
    res.render('error_40x', {error} )
    // res.send(error)
})

//to use .env file
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 3000

//5 connect mongodb
const MONGO_URI = "mongodb+srv://quangvovtp:6428422605Gg@cluster-uma.ohodf4a.mongodb.net/?retryWrites=true&w=majority"
async function connect() {
    try { 
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB OKE!')
    }
    catch(error) {
        console.log("error.message")
    }
}
connect()
// mongoose.set("strictQuery", false);

/* mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    userFindAndModify: false
}).then(() => {
    console.log('connected ...hehe')
}).catch((err) => console.log('Message DB connect failure')) */


//inform port running ? PORT
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})