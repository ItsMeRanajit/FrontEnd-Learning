let comp= ["bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

comp.shift()
console.log(comp)
//removed 1st company

comp.push("Amazon")
console.log(comp)
//added amazon at end

comp.splice(1,1,"Ola")
console.log(comp)