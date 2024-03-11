// get input elements
const dayInput = document.querySelector(".dayInput")
const monthInput = document.querySelector(".monthInput")
const yearInput = document.querySelector(".yearInput")

// get output elements
const dayOutput = document.querySelector(".dayOutput")
const monthOutput = document.querySelector(".monthOutput")
const yearOutput = document.querySelector(".yearOutput")

// get other elements
const calculateButton = document.querySelector(".calculate-btn")

// handle empty inputs
calculateButton.addEventListener("click", () => {
    const inputs = [dayInput, monthInput, yearInput]

    inputs.forEach(input => {
        if (input.value === "") {
            const errorMessage = input.parentElement.querySelectorAll("small")
            errorMessage.forEach(element => {
                element.style.display = "block"
                input.classList.add("error")
            }) 
        } // else  {
        //     const errorMessage = 
        //     errorMessage.forEach(element => {
        //         element.style.display = "none"
        //         input.classList.remove("error")
        //     }) 
        // }
    })

    // handle calculations
    const currentDate = new Date()
    
    // get the current day, month and year
    const currentDay = currentDate.getDate()
    const currentMonth = currentDate.getMonth() + 1
    const currentYear = currentDate.getFullYear()

    let age = currentYear - yearInput.value

    if (currentMonth < monthInput || (currentMonth === monthInput && currentDay < dayInput)) {
        age;
      }

    // display the results in the outputs
    const calcDayOutput = (30 - dayInput.value) + currentDay
    const calcMonthOutput = (12 - monthInput.value) + currentMonth
    const calcYearOutput = age

    dayOutput.innerText = calcDayOutput
    monthOutput.innerText = calcMonthOutput
    yearOutput.innerText = calcYearOutput 
    
    
        // handle invalid inputs 
        if (dayInput.value > 30 && monthInput.value > 12 && yearInput.value > currentYear) {
        }
    
})


    
