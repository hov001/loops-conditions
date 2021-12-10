/*
    get array[ array[ number ] ]

    return array [ sum ]
*/

const data = [[2, 4, 5], [1, 0, 0], [5, 8, 12]]

function getSumItems(array) {
    const newArray = []

    for(let i = 0; i < array.length; i++) {
        let sum = array[i][0]

        for(let j = 1; j < array[i].length; j++) {
            sum += array[i][j]
        }

        newArray.push(sum)

    }

    return newArray
}

function getLongNumber(array) {
    const newArray = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 10) newArray.push(array[i])
    }
    return newArray
}


const sumArray = getSumItems(data)

console.log(getLongNumber(sumArray))