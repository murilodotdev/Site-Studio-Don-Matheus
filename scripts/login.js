const card = document.getElementsByClassName("card")[0]
const cardTitle = document.getElementsByClassName("card-title")[0]
    
const loginForm = document.getElementById("login")
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    cardTitle.innerText = "Site ainda em construção 🚧👷"

    let msg = document.createElement("p")
    msg.innerText = "Foi mal, não vou poder te ajudar hoje... 😢 Mas vem cortar o cabelin com nois pae 🤙😜"
    msg.style = "margin-top: 12px;"

    let btn = document.createElement("button")
    btn.setAttribute("class", "btn")
    btn.innerText = "MARCAR UM HORÁRIO"
    btn.addEventListener("click", (e)=>{
        window.location.href="agendar.html"
    })

    loginForm.remove()
    card.appendChild(msg)
    card.appendChild(btn)
})