const nome = document.getElementById('name')
const email = document.getElementById('email')
const submit = document.getElementsByClassName('form-contact')[0]

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(email.value)

    const textBody = `
    <b>Nome: </b> ${nome.value}
    <br>
    <b>Email: </b> ${email.value}
    `


    Email.send({
        SecureToken: "609bc9f4-a55a-4656-a521-60c868c01656",
        To: "jangadafest@gmail.com",
        From: "jangadafest@gmail.com",
        Subject: "This is the subject",
        Body: textBody
    }).then(
        message => alert(message)
    );
})
