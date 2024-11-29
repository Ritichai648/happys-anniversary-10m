const express = require('express');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(session({
  secret: 'fannarak',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

function checkPageAccess(requiredPage) {
  return (req, res, next) => {
    if (req.session.pageAccess && req.session.pageAccess >= requiredPage) {
      return next();
    } else {
      res.redirect('/');
    }
  };
}

app.get('/', (req, res) => {
  req.session.pageAccess = 1; 
  res.render('main');
});

//test 
app.get('/page-1', (req,res) => {
  res.render("test")
})

app.get('/page-2', checkPageAccess(1), (req, res) => {
  req.session.pageAccess = 2;  
  res.render('index');
});

app.get('/page-3', checkPageAccess(2), (req, res) => {
  req.session.pageAccess = 3;  
  res.render('page');
});

app.get('/page-4', checkPageAccess(3), (req, res) => {
  req.session.pageAccess = 4; 
  res.render('menu');
});

app.get('/page-end', checkPageAccess(4), (req, res) => {
  req.session.pageAccess = 5;  
  res.render('page-end');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
