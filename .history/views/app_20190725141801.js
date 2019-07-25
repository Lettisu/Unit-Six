const express = require("express");
const dataJson = require("data.json");


const app = express();

//view engine setup
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


//local mods
const mainRouter = require('./routes');
const pjsRoute = require('./routes/project');

const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

//app.listen(3000, () => {
    console.log("The application is running on localhost: 3000!")//);

// middleware error
app.use((req, res, next) => {
            const err = new Error("Page not found");
            err.status = 404;
            next(err);
});
            
app.listen(3000, () => {
            console.log("The application is running on localhost: 3000!")
            });
