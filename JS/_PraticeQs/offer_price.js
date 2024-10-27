let array = [ 250, 645, 300 , 900, 50]
let ind = 0
for (let i of array){
    let offer = i * 0.1
    array[ind] -= offer
    console.log(array[ind])
    ind++
}
console.log(array)