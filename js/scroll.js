(function(){

    let propScroll = {

        posicion: window.pageYOffset,
        scroll_suave: document.getElementsByClassName('scroll-suave'),
        volver_arriba: document.getElementsByClassName('volver-arriba'),
        destino: null,
        sección_distancia: null,
        intervalo: null,
    
    }
    
    
    metScroll = {
    
        inicio: function() {
    
            for (let i = 0; i < propScroll.scroll_suave.length; i++) {
                propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
            }
    
            for (let i = 0; i < propScroll.volver_arriba.length; i++) {
                propScroll.volver_arriba[i].addEventListener('click', metScroll.subir);
            }
        },
    
        moverse: function(e) {
    
            e.preventDefault();
            clearInterval(propScroll.intervalo);
            propScroll.destino = this.getAttribute('href');
            propScroll.sección_distancia = document.querySelector(propScroll.destino).offsetTop;
    
            propScroll.posicion = window.pageYOffset;
            propScroll.intervalo = setInterval( function() {
    
    
                if(propScroll.posicion < propScroll.sección_distancia){
                    propScroll.posicion += 30;
    
                    if(propScroll.posicion >= propScroll.sección_distancia){
                        clearInterval(propScroll.intervalo);
                    }
                }
    
                    else{
                        propScroll.posicion -= 30;
    
                        if(propScroll.posicion <= propScroll.sección_distancia){
                            clearInterval(propScroll.intervalo);
                        }
    
                    }
    
                window.scrollTo(0, propScroll.posicion)
            },15);
        },
    
        subir: function(e){
    
            e.preventDefault();
            clearInterval(propScroll.intervalo);
            propScroll.posicion = window.pageYOffset;
            propScroll.intervalo = setInterval( function(){
    
            if(propScroll.posicion > 0) {
    
                propScroll.posicion -=30;
            
                if(propScroll.posicion <= 0){
                    clearInterval(propScroll.intervalo);
                }
    
            } else{
                return;
            }
    
    
            window.scrollTo(0, propScroll.posicion)
            },15);
    
        }
    
    
    }
    
    metScroll.inicio();


}())



