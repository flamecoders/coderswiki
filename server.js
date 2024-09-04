const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res, next) => {
    res.status(200).send("ok, good");
});
// app.get('*', (req, res, next) => {
//     let requestedPath = path.join(__dirname, 'build', req.path);

//     if (path.extname(requestedPath) === '') {
//         requestedPath += '.html';
//     }

//     if (path.extname(requestedPath) !== '.html') {
//         return res.status(404).send('404 Not Found');
//     }


//     if (fs.existsSync(requestedPath)) {
//         return res.sendFile(requestedPath);
//     } else {
//         res.status(404).send('404 Not Found');
//     }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
