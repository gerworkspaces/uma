const router = require('express').Router()

router.get('/', (req, res, next) => {
    // res.send('hello world')
    res.render("index")
})

module.exports = router;

/* const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router; */


/* const MONGO_URI = 'mongodb+srv://quangvovtp:<password>@cluster-uma.ohodf4a.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(
            URL,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
connectDB(); */