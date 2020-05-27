function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    const middle = Math.floor(wholeArray.length / 2)

    const firstHalf = wholeArray.slice(0, middle);
    const secondHalf = wholeArray.slice(middle);

    return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
    while (firstHalf.length !== 0 || secondHalf.length !== 0) {
        if (firstHalf[0] < secondHalf[0]) {
            if (firstHalf[0]) {
                mergeArray.push(firstHalf[0])
                firstHalf.shift()
            }
        } else {
            if (secondHalf[0]) {
                mergeArray.push(secondHalf[0]);
                secondHalf.shift()
            }

        }
    }
}

function mergeSort(array) {
    if (array.length === 1 || array.length === 0) {
        return array
    }

    const [first, sec] = split(array);
    // const firstSorted = mergeSort(first)
    // const secondSorted = mergeSort(sec)

    return merge(mergeSort(first), mergeSort(sec))
}

const first = [1, 8, 5, 2, 10]

console.log(mergeSort(first))
console.log(merge([1, 3, 4], [2, 5, 6, 20, 90]))



//[5, 2, 10]
//[1,8] 
