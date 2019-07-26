import('./hello').then(sayHello => {
    console.log(Object.prototype.toString.call(sayHello))
    console.log(sayHello('lucas'))
})

