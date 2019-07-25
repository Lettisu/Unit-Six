const express = require("express");
const router = express.Router();
const dataJson = require("data.json");
const app = express();

//view engine setup
app.set('view engine', 'pug');
//app.use(express.static(path.join(__dirname, 'public')));
 app.use('/static', express.static('public'));
app.use(mainRoutes);
app.use('/project', projectsRoute);
//local mods
const mainRouter = require('./routes');
const pjsRoute = require('./routes/project');

//const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', { 
        projects: projects
    });
    console.dir(projects)
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
     
        app.use((err, req, res, next) => {
            console.log(err.message);

            res.status(err.status);
            res.render('error', {
                error: err
            });
        });

app.listen(3000, () => {
            console.log("The application is running on localhost: 3000!")
            });