const loginForm = document.getElementById("login")
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let cardTitle = document.getElementsByClassName("card-title")[0]
    cardTitle.innerText = "Site ainda em construção 🚧👷"

    let msg = document.createElement("p")
    msg.innerText = "Foi mal, não vou poder te ajudar hoje... 😢 Mas vem cortar o cabelin com nois pae 🤙😜"
    msg.style = "margin-top: 12px;"

    loginForm.replaceWith(msg)
})