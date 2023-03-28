const nome = document.getElementById('name')
const integrantes = document.getElementById('integrantes')
const estilo = document.getElementById('estilo')
const whatsapp = document.getElementById('whatsapp')
const gdrive = document.getElementById('gdrive')
const email = document.getElementById('email')
const submit = document.getElementsByClassName('form-contact')[0]

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(email.value)

    const textBody = `
    <b>Nome: </b> ${nome.value}
    <br>
    <b>Integrantes e respectivos instrumentos: </b> ${integrantes.value}
    <br>
    <b>Estilo: </b> ${estilo.value}
    <br>
    <b>Whatsapp: </b> ${whatsapp.value}
    <br>
    <b>Google Drive: </b> ${gdrive.value}
    <br>
    <b>Email: </b> ${email.value}
    `


    Email.send({
        SecureToken: "509c7ac1-f303-4f82-b439-139b720bc1e4",
        To: "jangadafestival@gmail.com",
        From: "jangadafestival@gmail.com",
        Subject: "This is the subject",
        Body: textBody
    }).then(
        message => alert(message)
    );
})
