const response = document.getElementById('response') as HTMLSpanElement
const reset = document.getElementById('reset') as HTMLButtonElement
const input = document.getElementById('input') as HTMLInputElement

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        response.style = "visibility: visible;"
        if(input.value.toLowerCase() === "good") {
            response.innerHTML = "Nice! I'm good too!"
        }
        else if (input.value.toLowerCase() === "bad") {
            response.innerHTML = "Oh. I pray you'll have a good day."
        }else {
            response.innerHTML = "Idk what you're saying."
        }
    }
})

reset.addEventListener('click', () => {
    response.style = "visibility: hidden;"
})

