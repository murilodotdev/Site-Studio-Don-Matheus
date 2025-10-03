const card = document.getElementsByClassName("card")[0]
const cardTitle = document.getElementsByClassName("card-title")[0]

function siteEmConstrucao() {
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
}

function login(nomeUsuario, senha) {

    fetch("/requests/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({nomeUsuario, senha})
    })
    .then(res => res.json())
    .then(dados => console.log(dados))
}

const loginForm = document.getElementById("login")
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    // siteEmConstrucao()

    const data = new FormData(loginForm)
    const payload = Object.fromEntries(data.entries())

    login(payload.nome, payload.senha)
})