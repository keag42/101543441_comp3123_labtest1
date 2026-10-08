const resolvedPromise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({"message" : "success delayed"})
        },500)
    })
}

const delayedException = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {rej({"error" : "exception: delayed "})},500)
    })
}

resolvedPromise()
    .then(success => console.log(success))
    .catch(err => console.log(err))

delayedException()
    .then(failure => console.log(failure))
    .catch(err => console.log(err))