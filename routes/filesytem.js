const fs = require('fs');
const express = require('express');

const router = express.Router();

router.post("/writeFileSync/:filename", (req, res, next) => {
    
    const filetext = "Test Text";

    fs.writeFileSync(req.params.filename, filetext);
    res.send("Ok").status(201);
});

router.post("/writeFile/:filename", (req, res, next) => {
    
    const filetext = req.body.text;
    const fileExtention = req.headers["File-Extention"]
    const filename = `${req.params.filename}.${fileExtention}`;

    fs.writeFile(filename, filetext, (err) =>{
        if(err) {
            res.status(500);
            throw err;
        }
        res.send("Ok").status(201);
    });
});
module.exports = router;