// 测试内容
alert(123);

function helloWorld() {
    // 在这里测试
    console.log("Hello, World!");
}

if (true) {
    console.log(123);
} else {
    console.error(456);
}

false ? console.info(777) : console.warn(222);

console.log(window.navigator.userAgent);

console.log(window['location'].href);

const href = 'href';

console.log(window['location'][href]);

const gat = 'gat';

const or = 'or';

console.log(window['navi' + gat + or].userAgent);
