

var PN = 0
var E = 0
var VN = 0
var i = 1
var api = ''



function calculoIffod() {
    var V = document.getElementById('texto').value
    var VITEM= document.getElementById('item').value
    V = parseInt(V)
    var post = document.createElement('p')
    
    VN = 2.083*V 

if (VN <= 12 ) {
    E = VN * 0.24
    PN = (VN + E)*(1.25)
    
}else {
    E = 6
    PN = Math.round(V*1.25 + 16) 

    document.getElementById('texto').value = ''
    document.getElementById('item').value = ''
}
 post.innerHTML = (VITEM + ' precisa ser colocado no cardápio por R$'+ PN + '   ' ) 
 api += (i + '° ' + post.innerHTML)
 i++
    document.body.appendChild(post)

    
}

var local = document.getElementById('cardapio')

function enviarIffod() {
     window.location.href ='https://api.whatsapp.com/send?phone=5581988977526&text=' +api +''
    console.log(api)
    var postando = document.createElement('a')
    postando.href ='https://api.whatsapp.com/send?phone=5581988977526&text=Oilojastropical'
    local = document.getElementById('cardapio')

    local.appendChild(postando)
}


