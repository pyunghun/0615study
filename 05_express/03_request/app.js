const express = require('express');
const app = express();

app.listen(8888, () => console.log('Server is running on port 8888'));

app.use((req, res) => {
    
    const headers = req.headers;
    console.log(headers);
    
    const accept = req.headers('accept');
    console.log(accept);

    const query = req.query;
    console.log(query);


});