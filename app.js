  //begin to build portfolio
  const express = require("express");
  const data = require("./data/data.json");
  const app = express();
  const projects = data.projects

  //view engine setup
  app.set('view engine', 'pug');

  //static files
  app.use('/static', express.static('public'));

  app.get('/', (req, res, ) => {
      const data = {
          projects
      };
      res.render('index', data);
  });

  app.get('/about', (req, res, next) => {
      res.render('about');
  });

  app.get('/project/:id', (req, res, next) => {
      const {
          id
      } = req.params;
      console.log(projects[id]);
      if (id && id < projects.length) {
          const proj = projects[id];
          res.render("project", {
              proj
          });
      } else {
          const err = new Error('Page not found');
          err.status = 404;
          next(err);
      }

  });
  app.use((req, res, next) => {
      const err = new Error('Page not found');
      err.status = 404;
      next(err);
  });
  app.use((err, req, res, next) => {
      console.log(err.message);
      res.status(err.status);
      if (err.status === undefined) {
          console.log('Error 500-Internal Server Error')
      }
      res.render('error', {
          error: err
      })
  })

  app.listen(3000, () => {
      console.log('The application is running on localhost:3000!')
  });