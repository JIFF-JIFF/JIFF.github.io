function dt(){
    let s1 = document.getElementById("s1")
    let s2 = document.getElementById("s2")
    let voltar = document.getElementById("voltar")
    s1.style.display="none"
    s2.style.display="block"
    voltar.style.display="block"
}function voltar(){
    let s1 = document.getElementById("s1")
    let s2 = document.getElementById("s2")
    let voltar = document.getElementById("voltar")
    voltar.style.display="none"
    s1.style.display="block"
    s2.style.display="none"
}

let data = new Date()
let dia = data.getDay()+3
let hor = data.getHours()
let mi = data.getMinutes()
let ano = data.getFullYear()
let mes = data.getMonth()+1

let sd = document.getElementById("sd")
let sh = document.getElementById("sh")
let sa = document.getElementById("sa")
let sm = document.getElementById("sm")

sd.innerHTML=dia
sh.innerHTML=hor+"horas : "+mi+"min"
sa.innerHTML=ano
sm.innerHTML=mes

let r = document.getElementById("r")
let r1 = document.getElementById("r1")

let d1 = Number(document.getElementById("d1").value)
let d2 = Number(document.getElementById("d2").value)
let d3 = Number(document.getElementById("d3").value)
let d4 = Number(document.getElementById("d4").value)
let d5 = Number(document.getElementById("d5").value)
let d6 = Number(document.getElementById("d6").value)
let d7 = Number(document.getElementById("d7").value)
let d8 = Number(document.getElementById("d8").value)
let d9 = Number(document.getElementById("d9").value)
let d10 = Number(document.getElementById("d10").value)
let d11 = Number(document.getElementById("d11").value)
let d12 = Number(document.getElementById("d12").value)
let d13 = Number(document.getElementById("d13").value)
let d14 = Number(document.getElementById("d14").value)
let d15 = Number(document.getElementById("d15").value)
let d16 = Number(document.getElementById("d16").value)
let d17 = Number(document.getElementById("d17").value)
let d18 = Number(document.getElementById("d18").value)
let d19 = Number(document.getElementById("d19").value)
let d20 = Number(document.getElementById("d20").value)
let d21 = Number(document.getElementById("d21").value)
let d22 = Number(document.getElementById("d22").value)
let d23 = Number(document.getElementById("d23").value)
let d24 = Number(document.getElementById("d24").value)
let d25 = Number(document.getElementById("d25").value)
let d26 = Number(document.getElementById("d26").value)
let d27 = Number(document.getElementById("d27").value)
let d28 = Number(document.getElementById("d28").value)
let d29 = Number(document.getElementById("d29").value)

if(dia ==5 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 05 - Terça F"
}else if(dia==6 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 06 - Quarta F"
}else if(dia==10 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 10 - Domingo"
}else if(dia==11 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 11 - Segunda F"
}else if(dia==15 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 15 Sexta F"
}else if(dia==16 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 16 Segunda F"
}else if(dia==20 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 20 Quarta F"
}else if(dia==21 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 21 Quinta F"
}else if(dia==25 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 25 Segunda F"
}else if(dia==26 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 26 Terça F"
}else if(dia==30 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 30 Sábado"
}else if(dia==31 && mes==12){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 31 Domingo"
}else if(dia==4 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 04 Quinta F"
}else if(dia==5 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 05 Sexta F"
}else if(dia==9 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 09 Terça F"
}else if(dia==10 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 10 Quarta F"
}else if(dia==14 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 14 Domingo"
}else if(dia==15 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 15 Segunda F"
}else if(dia==19 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 19 Sexta F"
}else if(dia==20 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 20 Segunda F"
}else if(dia==24 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 24 Quarta F"
}else if(dia==25 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 25 Quinta F"
}else if(dia==29 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 29 Segunda F"
}else if(dia==30 && mes==1){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 30 Terça F"
}else if(dia==3 && mes==2){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 03 Sábado"
}else if(dia==4 && mes==2){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 04 Segunda F"
}else if(dia==8 && mes==2){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 08 Quinta F"
}else if(dia==09 && mes==2){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Laboral"
    r2.innerHTML="Dia 09 Sexta F"
}else if(dia==13 && mes==2){
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o dia de Trabalhar Sr Bruno"
    r1.innerHTML="O seu trablho está no período Matinal"
    r2.innerHTML="Dia 13 Terça F"
}else {
    let r = document.getElementById("r")
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    r.innerHTML="Hoje é o seu dia de folga Sr Bruno"
    r1.innerHTML="Aproveite e descanse"
    r2.innerHTML="Se poder estude um pouco"

    let d2 = document.getElementById("d2")
    d2.style.border="4px solid yellow"
}