var n = document.getElementById('tnome')
var id = document.getElementById('tidade')
var peso = document.getElementById('tpeso')
var alt = document.getElementById('talt')
var imcResultado = document.getElementById('totalimc')
var res = document.getElementById('res')
var foto = document.getElementById('foto')

var nometb =document.getElementById('linhaNome')
let idadetb =document.getElementById('linhaIdade')
let pesotb =document.getElementById('linhaPeso')
let alturatb =document.getElementById('linhaAltura')


function calcular(){
    var nome = n.value
    var idade = id.value
    var p = Number(peso.value)
    var altura = Number(alt.value)
    var imc = (p/(altura*altura)).toFixed(1)

    imcResultado.innerHTML += `${imc}`
    nometb.innerHTML+= nome
    idadetb.innerHTML+= `${idade} anos`
    pesotb.innerHTML+= `${p} Kg`
    alturatb.innerHTML+= altura
    if(imc < 18.4){
        res.innerHTML += `Abaixo do Peso`
        foto.src='../css/media/baixopesot.png'
    }else if(imc >=18.5 && imc <= 24.9){
        res.innerHTML += `Peso Normal`
        foto.src='../css/media/normalpeso.png'
    }else if(imc >=25 && imc <= 29.9){
        res.innerHTML += `Sobrepeso`
        foto.src='../css/media/sobrepeso.png'
    }else if(imc >=30 && imc <= 39.9){
            res.innerHTML += `Obesidade`
            foto.src='../css/media/obesidade.png'
    }else{
        res.innerHTML += `Obesidade grave`
        foto.src='../css/media/obesidadeGrave.png'
    }
}
function limpar(){
    imcResultado.innerHTML = `IMC: `
    res.innerHTML = `Situação: `
    foto.src='../css/media/Salada.png'
    imcResultado.innerHTML += ''
    nometb.innerHTML= ''
    idadetb.innerHTML= ''
    pesotb.innerHTML= ''
    alturatb.innerHTML= ''
    n.value = ''
    id.value = ''
    peso.value = ''
    alt.value = ''
}
