function getSubmitEmail() {
    const submit = document.getElementsByClassName('form-contact')[0];

    submit.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Nome', name.value);
        formData.append('Arte', art.value);
        formData.append('Local', place.value);
        formData.append('Social Media', socialmedia.value);
        formData.append('Whatsapp', whatsapp.value);
        formData.append('Google Drive', gdrive.value);
        formData.append('Email', mail.value);

        const forJangada = `
    <b>Nome: </b> ${name.value}
    <br>
    <b>Fale resumidamente sobre sua arte: </b> ${art.value}
    <br>
    <b>Local onde atua: </b> ${place.value}
    <br>
    <b>Whatsapp: </b> ${whatsapp.value}
    <br>
    <b>Social Media: </b> ${socialmedia.value}
    <br>
    <b>Google Drive: </b> ${gdrive.value}
    <br>
    <b>Email: </b> ${mail.value}
    `;
        const forInscrito = `regulamento`;

        Email.send({
            SecureToken: "509c7ac1-f303-4f82-b439-139b720bc1e4",
            To: "jangadafestival@gmail.com",
            From: "jangadafestival@gmail.com",
            Subject: "Inscrição Jangada",
            Body: forJangada
        }).then(
            message => {
                alert(message);

                // Enviar regulamento para o e-mail do usuário
                Email.send({
                    SecureToken: "509c7ac1-f303-4f82-b439-139b720bc1e4",
                    To: mail.value,
                    From: "jangadafestival@gmail.com",
                    Subject: "Regulamento Jangada Festival",
                    Body: forInscrito
                }).then(
                    message => alert(message)
                );
            }
        );
    });
}
getSubmitEmail();

function carousel() {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}
carousel();
