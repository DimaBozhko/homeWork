const prom = new Promise((res, rej) => {
    return setInterval(() => {
        console.log("1")
    }, 1000)
}).then((data) => {
    return setInterval(() => {
        console.log("2")
    }, 1000)
})
