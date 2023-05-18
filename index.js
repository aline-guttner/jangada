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

    const regulamento = `
    
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td align="center">
        <a href="https://freeimage.host/"><img src="https://iili.io/HOYmW9j.png" alt="HOYmW9j.png" border="0" width="250px"></a>
        </td>
    </tr>
</table>
    <br>
    <br>
    <br>
    <b>REGULAMENTO GERAL DO FESTIVAL JANGADA 2023</b>
    <br>
    <br>
    <ul>
    <li>Somente artistas autorais poderão se inscrever; </li>
    <li>Inscritos menores de idade deverão apresentar autorização
    assinada pelo responsável e estar acompanhados no dia do
    Festival; </li>
    <li>A venda dos artesanatos e das obras de artes como pinturas e
    fotografia será permitido - de imediato - sem custo aos artistas;</li>
    <li>O tempo de apresentação das bandas e outras atrações será
    o mesmo para todos, e deverá ser respeitado, caso contrário
    a participação nos próximos festivais poderá ser invalidada. O
    tempo de apresentação máxima será de 1 hora e 25 minutos; </li>
    <li>O evento terá seu limite até às 22h, respeitando o horário
    permitido por lei.</li>
    </ul>
    `


    Email.send({
        SecureToken: "509c7ac1-f303-4f82-b439-139b720bc1e4",
        To: "jangadafestival@gmail.com",
        From: "jangadafestival@gmail.com",
        Subject: "Inscrição Jangada",
        Body: textBody
    }).then(
        message => alert(message)
    );

    Email.send({
        SecureToken: "509c7ac1-f303-4f82-b439-139b720bc1e4",
        To: email.value,
        From: "jangadafestival@gmail.com",
        Subject: "REGULAMENTO JANGADA FESTIVAL",
        Body: regulamento
    }).then(
        message => alert(message)
    );
})

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

