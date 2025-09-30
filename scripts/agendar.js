const form = document.getElementById("agendar")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())
    var dataEscolhida = new Date(payload.data).toLocaleDateString()
    var servico = payload.servico

    var url = `https://wa.me/5511946654467?text=Vim%20cortar%20o%20cabelin%0A%0A*Cliente:*%20${payload.nome}%0A*Serviço:*%20${servico}%0A%0A*Agendamento:*%20${dataEscolhida}%20${payload.hora}`
    window.open(url, "_blank")
})

const seletorData = document.getElementById("data")

const dataMinima = new Date()
dataMinima.setDate(dataMinima.getDate()+1)
const mes = String(dataMinima.getMonth() + 1).padStart(2, '0')
const dia = String(dataMinima.getDate()).padStart(2, '0')

seletorData.min = `${dataMinima.getFullYear()}-${mes}-${dia}`