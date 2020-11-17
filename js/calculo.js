

var PN = 0
var E = 0
var VN = 0



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
 post.innerHTML = (VITEM + ' precisa ser colocado no cardápio por '+ PN ) 
    document.body.appendChild(post)
}


