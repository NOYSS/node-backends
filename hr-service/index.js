let express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-parser'),
mongoDb = require('./database/db')


mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database successfully connected.');
}, error => {
    console.log('Database error: ' + error);
})

const userRoute = require('./routes/user.routes');
const roleRoute = require('./routes/role.routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

// Static directory path
app.use(express.static(path.join(__dirname)));
// Base route
app.get('/', (req,res) => {
res.sendFile(path.join(__dirname, 'dist/index.html'))
})
// API Root
app.use('/api', userRoute);
app.use('/api', roleRoute);

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Listening on port: '+port)
})

// 404 Handler
app.use((req, res, next) => {
    next(createError(404));
})

// Error Handler
app.use((err, req, res, next) => {
    console.err(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
})