function myFunction() {
    const ages = [10, 12, 66, 77, 44,50, 322, 2, 12, 50]
    let values = document.getElementById("inputValue").value
    let result = document.getElementById("demo")
    result.innerHTML = ages.filter((item) => {
        return item <= values
    })

}