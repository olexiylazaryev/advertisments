const Advertisment = require('./models/advertisement');

function main() {
    const Ad_test = new Advertisment();
    console.log(Ad_test.phoneNumber = '+123456789');
    console.log(Ad_test.author = 'John Smith')
}

if (require.main === module) {
    main();
}