//Assigned variables for calculation in the event listerner function
let aom = document.querySelectorAll('input')[0]
let intr = document.querySelectorAll('input')[1]
let button = document.querySelector('button')
let result = document.querySelectorAll('label')[2]


button.addEventListener('click',()=>{
    let rate = parseFloat(intr.value.replace('%',''))
    result.innerText = "Result:R " + ((rate * aom.value)/100 ) // fuse assigned variables and interest formula to calculate the end result 
})

