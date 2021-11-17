const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blogIT', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect sucses');
    } catch (error) {
        console.log('Faillll');
    }
}

module.exports = { connect };
