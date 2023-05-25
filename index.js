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
        const forInscrito = `

        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; width: 600px; margin: 0; background-color: #000;" >
            <tr>
                <td colspan="2"><img src="https://raw.githubusercontent.com/aline-guttner/jangada/main/imagens/email/header.png" alt=""></td>
            </tr>
            <tr>
                <td colspan="2" align="center" bgcolor="#000"  style="padding: 0;">
                    <img src="https://github.com/aline-guttner/jangada/blob/main/imagens/email/logo_pequeno.png?raw=true" style="margin-bottom: 30px;" alt="JANGADA" width="180">
                </td>
            </tr>
            <tr>
                <td colspan="2" bgcolor="#000" style="padding: 40px 30px;">
                    <h2 style="text-align: center; font-family: 'Open Sans', sans-serif; margin-bottom: 50px; color: #fff">OBRIGADO POR SE INSCREVER</h1>
                    <h2 style="text-align: center; font-family: 'Arial';color: #fff;">Regulamentos</h1>
                    <p style="font-size: 16px; line-height: 24px; margin: 0; font-family: 'Arial';color: #fff;">
                        Aqui está o conteúdo do seu e-mail. Você pode adicionar texto, imagens, links e outros elementos HTML
                        conforme necessário.
                    </p>
                </td>
            </tr>
            <tr>
                <td  width="50%" ><img src="https://github.com/aline-guttner/jangada/blob/main/imagens/email/people.png?raw=true"alt="" ></td>
                <td>
                    <div style="padding-left: 20px; padding-top: 50px;">
                        <img src="https://github.com/aline-guttner/jangada/blob/main/imagens/email/apoaise.png?raw=true" style="margin-bottom: 25px;"width="170px" alt="">
                        <span style="display: flex;">
                            <img src="https://github.com/aline-guttner/jangada/blob/main/imagens/email/pngwing.com.png?raw=true" alt="instagram" height="30px" style="align-self: center;">
                            <p style="font-family: 'Arial';color: #fff;">JANGADA.FESTIVAL</p>
                        </span>
                        <p style="margin: 0px; padding-left: 3px; font-family: 'Open Sans', sans-serif;color: #fff;">JANGADAFESTIVAL@GMAIL.COM</p>
                    </div>
                </td>
            </tr>
        </table>`;

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
