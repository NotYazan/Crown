const mongoose = require('mongoose');

const data = mongoose.Schema({

    GuildId : String,
    OwnerID : String,
    ServerName : String,
});

let BlackList = mongoose.model('blacklist', data);

module.exports = { BlackList }