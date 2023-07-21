const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){   

    let tempo = new Date()
    let hora = tempo.getHours()
    let M = tempo.getMinutes()
    let s = tempo.getSeconds()

    if(hora < 10){
        hora = '0' + hora
    }

    if(M < 10){
        M = '0' + M
    }

    if(s < 10){
        s = '0' + s
    }

    horas.textContent = hora
    minutos.textContent = M
    segundos.textContent = s

})   