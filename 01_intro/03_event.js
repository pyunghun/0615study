/* 이벤트 핸들링
    이벤트 루프는 이벤트를 대기하는 함수들이 이벤트를 대기하고 있다가
    특정 이벤트가 동작하면 이벤트를 처리하는 함수가 실행되는 방식이다.
*/

const events = require('events');

const eventEmmiter = new events.EventEmitter();

const shoutingHandler = () => {
    console.log('오우예~');
    eventEmmiter.emit('echo');
};

eventEmmiter.on('shouting', shoutingHandler);
eventEmmiter.on('echo', () => console.log('오오오우예~~~~~~~~~~~~~~~~'));

eventEmmiter.emit('shouting');