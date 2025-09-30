const loginForm = document.getElementById("login")
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let cardTitle = document.getElementById("card-title")
    cardTitle.innerText = "Site ainda em construção 🚧👷"

    let msg = document.createElement("p")
    msg.innerHTML = "Foi mal, não vou poder te ajudar hoje... 😢 <br> Mas vem cortar o cabelin com nois pae 🤙😜"
    msg.style = "margin-top: 12px;"

    loginForm.replaceWith(msg)
})