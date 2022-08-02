const express = require('express');
const Advertisment = require('./models/advertisement');
const app = express();
app.use(express.json());
const router = require("./routes/advertisments");
const routerFS = require("./routes/filesytem");


function main() {
    const Ad_test = new Advertisment();
    Ad_test.phoneNumber = '+123456789';
    console.log(Ad_test.phoneNumber);
    console.log(Ad_test.author = 'John Smith');

    const PORT = process.env.PORT || 3000;
    app.use("", router);
    app.use("/fs", routerFS);

    app.listen(PORT, () => {
        console.log('Express is running!');
    })
}

if (require.main === module) {
    main();
}