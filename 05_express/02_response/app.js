const expree = require('express');
const app = expree();

app.listen(8888, () => console.log('server is running 8888'));

app.use((req, res, next) => {

    // res.send('<h1>Hello World</h1>');
    // res.send('hello world2');
    // res.send({name: 'ph', age: 20});
    // res.send([
    //     {id:1, name:'너구리', age: 20},
    //     {id:2, name:'너구리1', age: 21},
    //     {id:3, name:'너구리2', age: 22},
    //     {id:4, name:'너구리3', age: 23},
    // ])

    // res.json([
    //     {id:1, name:'너구리', age: 20},
    //     {id:1, name:'너구리', age: 20},
    //     {id:1, name:'너구리', age: 20},
    //     {id:1, name:'너구리', age: 20}
    // ]);

    // jsonp() : cors가 활성화되기 이전에 데이터를 요청하던 방식이다.
    //           보안상의 이슈로 현재는 거의 사용하지 않는다.

    res.status(404).send('<h1>404 Not Found</h1>');
});