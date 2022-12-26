const numbers =[20,45,77,33,2,32,22,99,200,100]
const result = document.getElementById("demo")
// result.innerHTML =numbers.sort()
result.innerHTML =numbers.sort(function (a,b){
    return a-b
})
