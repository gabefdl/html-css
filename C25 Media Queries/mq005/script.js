function clickMenu () {
    if (itens.style.display == 'block') {
     itens.style.display = 'none'
    } else {
     itens.style.display = 'block'
    }

     }

     function mudeiTamanho() {
        if (window.innerWidth >= 768) {
            itens.style.display = 'block'
        } 
     }