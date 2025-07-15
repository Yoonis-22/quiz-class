const mines = document.querySelector("#mines")
const one = document.querySelector("#one")
const plus = document.querySelector("#plus")
const number = document.querySelector("#number")

let count = 0
const Amount = 600.72 // qiimaha aasaasiga ah

plus.addEventListener("click", () => {
    count++
    one.textContent = count
    number.textContent = `$${Amount * count}`
})

mines.addEventListener("click", () => {
    if(count >0){
        count--
    }
    one.textContent = count
    number.textContent = `$${Amount * count}`
})
