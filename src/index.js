const express = require ('express');
const {ServerConfig,Log} = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    //Log.info(`Server is running on port ${ServerConfig.PORT}`, {label: 'Server'});
});