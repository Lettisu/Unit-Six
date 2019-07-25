const express = require("express");
const router = express.Router();
const dataJson = require("data.json");
const app = express();

//view engine setup
app.set('view engine', 'pug');
//app.use(express.static(path.join(__dirname, 'public')));
app.use()

//local mods
const mainRouter = require('./routes');
const pjsRoute = require('./routes/project');

//const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});


// middleware error
app.use((req, res, next) => {
            const err = new Error("Page not found");
            err.status = 404;
            next(err);
});
            
app.listen(3000, () => {
            console.log("The application is running on localhost: 3000!")
            });
