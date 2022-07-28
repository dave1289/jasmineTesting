function calculateTaxes(income) {
    if (!Number.isFinite(income)){
        throw new Error('Invalid income!')
    }
    if (income > 30000) {
        return income * 0.25
    }
    else {
        return income * 0.15
    }
}

console.log(calculateTaxes(500))

function removeDupes(values) {
    const arr = [...new Set(values)]
    if(typeof values === 'string'){
        return arr.join('')
    }
    return arr;
}

const testArr = [1,2,3,4,5,4,4,4]
[1,2,3,4,5]

function remove(arr, val) {
    return arr.filter((el) => {
        el !== val;
    })
}