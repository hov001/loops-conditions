const arr = [
    'spray', 
    12, 
    'elite', 
    true, 
    undefined, 
    'a'
]

const fakeFilter = function (array, cb) {
    const newArr = []

    for(let i = 0; i < array.length; i++) {
        if(cb(array[i])) {
            newArr.push(array[i])
        }
    }

    return newArr
}

console.log(arr.filter(function (el) {
    return typeof el === 'string'
}))

console.log(fakeFilter(arr, function (el) {
    return typeof el === 'string'
}))

