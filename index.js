const Advertisment = require('./models/advertisement');
const express = require('express');
const app = express();

function main() {
    const Ad_test = new Advertisment();
    Ad_test.phoneNumber = '+123456789';
    console.log(Ad_test.phoneNumber);
    console.log(Ad_test.author = 'John Smith');

    app.get('/', (req, res) => {
        res.send('Express get request.');
    })

    app.get('/users', (req, res) => {
        res.send('Express users get request.');
    })

    app.listen(3000, () => {
        console.log('Express is running!');
    })

    app.get('/advs', (req, res) => {
        res.send('add1; add2; add3;');
    })

}

if (require.main === module) {
    main();
}