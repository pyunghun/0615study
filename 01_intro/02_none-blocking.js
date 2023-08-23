/* Node.js 는 API 대부분 비동기 방식으로 제공한다. */

const fs = require('fs');

// const text = fs.readFileSync('text.txt');

// console.log(text.toString());

// console.log('end!!');

// readFileSync , readFile => 동기와 비동기의 차이

fs.readFile('text.txt', (err, data) => {
    if(err) {
        return console.log(err);
    }

    console.log(data.toString());
})

console.log('end!@!');