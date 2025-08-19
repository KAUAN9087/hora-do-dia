function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.jpg.jpg'
        document.body.style.background = '#ddbc76ff'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.jpg.jpg'
        document.body.style.background = '#b46c4fff'
    } else {
        // BOA NOITE!
        img.src = 'noite.jpg.jpg'
        document.body.style.background = '#515154'
    }
}
