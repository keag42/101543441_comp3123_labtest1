function lowerCaseWords(mixedArr){
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(mixedArr)){
            reject("not array");
            return;
        }
        const res =  mixedArr
            .filter(element => typeof element === "string")
            .map(word => word.toLowerCase());
            resolve(res);
    })
}

lowerCaseWords(["BBL", 42, ["Btch"], "Bana", false])
    .then(words => console.log(words))
    .catch(err => console.error(err));

lowerCaseWords("is not array")
    .then(words => console.log(words))
    .catch(err => console.error(err));
