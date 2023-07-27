const app = require('./app.js');
const db = require('./db.js');
const studioRouter = require('./routes/studios.js');
const styleRouter = require('./routes/styles.js');

app.use('/studio', studioRouter);
app.use('/style', styleRouter);

app.listen(3000, () => {
    console.log('Server running on port 3001');
});