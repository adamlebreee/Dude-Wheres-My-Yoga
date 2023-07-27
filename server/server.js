const app = require('./app.js');
const db = require('./db.js');
const studioRouter = require('./routes/studios.js');


app.use('/studio', studioRouter);


app.listen(3000, () => {
    console.log('Server running on port 3000');
});