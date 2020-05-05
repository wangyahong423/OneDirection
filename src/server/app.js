var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');

var usersRouter = require('./routes/users');
var feedbackRouter = require('./routes/feedback');
var communityRouter = require('./routes/community');
var managerRouter = require('./routes/manager');
var fileRouter = require('./routes/file');
var learnRouter = require('./routes/learn');
var learntalkRouter = require('./routes/learntalk');
var communitytalkRouter = require('./routes/communitytalk');
var learnlikeRouter = require('./routes/learnlike');
var communitylikeRouter = require('./routes/communitylike');
var collegesRouter = require('./routes/colleges');
var majorRouter = require('./routes/major');
var leadersRouter = require('./routes/leaders');
var experienceRouter = require('./routes/experience');
var collectRouter = require('./routes/collect');
var experiencelikeRouter = require('./routes/experiencelike');
var notesRouter = require('./routes/notes');
var cet4Router = require('./routes/cet4');
var cet6Router = require('./routes/cet6');
var highcet4Router = require('./routes/highcet4');
var highcet6Router = require('./routes/highcet6');
var followRouter = require('./routes/follow');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/feedback', feedbackRouter);
app.use('/community',communityRouter);
app.use('/manager', managerRouter);
app.use('/file', fileRouter);
app.use('/learn', learnRouter);
app.use('/leaders', leadersRouter);
app.use('/communitytalk',communitytalkRouter);
app.use('/learnlike', learnlikeRouter);
app.use('/communitylike',communitylikeRouter);
app.use('/learntalk', learntalkRouter);
app.use('/colleges',collegesRouter);
app.use('/major', majorRouter);
app.use('/experience', experienceRouter);
app.use('/collect', collectRouter);
app.use('/experiencelike', experiencelikeRouter);
app.use('/notes',notesRouter);
app.use('/cet4',cet4Router);
app.use('/cet6',cet6Router);
app.use('/highcet4',highcet4Router);
app.use('/highcet6',highcet6Router);
app.use('/follow',followRouter);

// catch 404 and forward to error handler  
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
