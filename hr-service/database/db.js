const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
module.exports = {
    db: 'mongodb://'+MONGO_HOST+':'+MONGO_PORT+'/dbHR'
}