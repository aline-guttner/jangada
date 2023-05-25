function getSubmitEmail() {
    const submit = document.getElementsByClassName('form-contact')[0];

    submit.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Nome', user.value);
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

        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin: 0; background-color: #000;" >
        <tr>
            <td colspan="2"><img src="https://raw.githubusercontent.com/aline-guttner/jangada/main/imagens/email/header.png" alt=""></td>
        </tr>
        <tr>
            <td colspan="2" align="center" bgcolor="#000"  style="padding: 0;">
                <img src="https://github.com/aline-guttner/jangada/blob/main/imagens/logo_vertical_branco.png?raw=true" style="margin-bottom: 30px; width: 130px; margin-top: 30px;" alt="JANGADA" width="180">
            </td>
        </tr>
        <tr>
            <td colspan="2" bgcolor="#000" style="padding: 40px 30px;">
                <h2 style="text-align: center; font-family: 'Open Sans', sans-serif; margin-bottom: 50px; color: #fff">OBRIGADO POR SE INSCREVER</h1>
                <h2 style="text-align: center; font-family: 'Arial';color: #fff;margin-bottom: 50px;">Regulamentos</h1>
                <h3 style="font-family: 'Arial';color:#fff;">Para os artistas expositores</h3>
                <p style="font-size: 16px; line-height: 24px; margin: 0 0 50px 0; font-family: 'Arial';color: #fff;">
                    1. Será disponibilizado um espaço para exposição das obras, de forma que os visitantes possam conhecer e apreciar o trabalho dos artistas. 
                    <br>
                     2. Disponibilizaremos uma mesa e cadeira para cada expositor.(A decoração das mesas é livre como o artista desejar).
                     <br>
                    3. Os expositores deverão estar presentes durante todo o horário de funcionamento do evento, para garantir a segurança das obras e atender aos visitantes.
                    <br>
                    4. Os expositores deverão assinar um termo de responsabilidade, concordando em cumprir as normas e regras do evento, inclusive a não venda de produtos no dia do evento .
                    <br>
                    5. A organização do evento não se responsabiliza por danos, roubos ou extravios de obras e produtos dos expositores.
                    <br>
                    6. Indicamos levar tendas e/ou guarda sol pois o local será num ambiente aberto sem cobertura.
                </p>
                <h3 style="font-family: 'Arial';color:#fff;">Para as bandas</h3>
                <p style="font-size: 16px; line-height: 24px; margin: 0 0 50px 0; font-family: 'Arial';color: #fff;">
                    1. Disponibilidade para se apresentar na data do festival (05 de agosto).
                    <br>
                    2. Repertório original.
                    <br>
                    3. Ter pelo menos uma música autoral gravada e disponível em plataformas digitais.
                    <br>
                    4. Enviar material de divulgação (vídeo, áudio, fotos) que demonstre habilidades musicais e presença de palco.
                    <br>
                    5. Disposição para cumprir normas e regras do festival, incluindo horários de apresentação e logística.
                    <br>
                    6. Concordância em ceder direitos de imagem e som das apresentações ao festival para fins de divulgação e registro.
                    <br>
                    7. Comprometimento em não fazer uso de drogas ilícitas ou substâncias que possam comprometer a performance durante o festival.
                    <br>
                    8. Seleção por Curadoria do coletivo Jangada.
                    <br>
                    9. Respeitar o tempo de duração do show (vai ser comunicado após a seleção).
                    <br>
                    10. As bandas terão acesso a um camarim, e deverá ser mantido limpo e organizado.</p>
            </td>
        </tr>
        <tr>
            <td  width="50%" ><img src="https://github.com/aline-guttner/jangada/blob/main/imagens/email/people.png?raw=true"alt="" ></td>
            <td>
                <div style="padding-left: 20px; padding-top: 50px;">
                    <img src="https://github.com/aline-guttner/jangada/blob/main/imagens/email/apoaise.png?raw=true" style="margin-bottom: 25px;"width="170px" alt="">
                    <span style="display: flex; align-items:center;">
                        <img src="https://github.com/aline-guttner/jangada/blob/main/imagens/email/pngwing.com.png?raw=true" alt="instagram" style="height: 30px;">
                        <p style="font-family: 'Arial';color: #fff;">JANGADA.FESTIVAL</p>
                    </span>
                    <p style="margin: 0px; padding-left: 3px; font-family: 'Open Sans', sans-serif;color: #fff; ">JANGADAFESTIVAL@GMAIL.COM</p>
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
