const nome = document.getElementById('nome')
const email = document.getElementById('email')
const submit = document.getElementsByClassName('submit')[0]

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('hi')

    Email.send({
        SecureToken: "509c7ac1-f303-4f82-b439-139b720bc1e4",
        To: "aline.guttner@gmail.com",
        From: "jangadafest@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
})
