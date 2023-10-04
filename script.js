let screen = document.getElementById('screen');
let buttons = document.querySelectorAll("button");
let screenValue = ""
    // console.log(buttons)
function hasOperator(symbole) {
    const oparray = ["+", "-", "*", "/"];
    return oparray.includes(symbole);
}

function hasFunc(func) {
    const features = ["DEL", "=", "RESET"];
    return features.includes(func);
}


for (item of buttons) {
    item.addEventListener('click', (inputbutton) => {
        let inputbtn = inputbutton.target.innerText;
        if (inputbtn === "x") {
            inputbtn = "*"
        }
        if (hasFunc(inputbtn)) {
            if (inputbtn === "=") {
                if (!hasOperator(screenValue.slice(-1)) && screenValue.slice(-1) != "") {
                    let calc = eval(screenValue)
                    screen.value = calc;
                    console.log(calc)
                    screenValue = ""
                    return
                } else {
                    console.log("please enter valid entry")
                    return
                }
            } else if (inputbtn === "DEL") {
                console.log("del here")
                return
            } else {
                console.log("reset here")
                return
            }

        }
        if (hasOperator(inputbtn)) {

            if (screenValue.slice(-1) === "") {
                return
            }
            if (hasOperator(screenValue.slice(-1))) {
                if (screenValue.slice(-1) === inputbtn) {
                    console.log("You have entered the operator twis")
                    return
                } else {
                    screenValue = screenValue.slice(0, -1)
                    screenValue += inputbtn
                    console.log(screenValue)
                }
                return
                // console.log(screenValue)
            }

            // console.log(screenValue)
            screenValue += inputbtn
                // console.log("is operator")
        } else {
            screenValue += inputbtn
        }
        console.log(screenValue)


    })

}