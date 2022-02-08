(function(){

    let propLigthbox = {

        imgContainer:document.getElementsByClassName('html'),
        imagen: null,
        cuerpoDom: document.getElementsByTagName('body')[0],
        lightbox_container: null,
        newImagen:null,
        modal: null,
        cerrarModal:null,
        animacion: 'fade',
    
    }
    
    let metLigthbox = {
    
        inicio: function(){
    
            for (let i = 0; i < propLigthbox.imgContainer.length; i++) {
               propLigthbox.imgContainer[i].addEventListener('click', metLigthbox.capturaImagen);  
            }
        },
    
        capturaImagen: function(){
    
             propLigthbox.imagen = this;
             metLigthbox.lightbox();
         
        },
    
        lightbox: function(){
    
            propLigthbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
    
            propLigthbox.lightbox_container = document.getElementById('lightbox_container');
    
            propLigthbox.lightbox_container.style.width = '100%';
            propLigthbox.lightbox_container.style.height = '100%';
            propLigthbox.lightbox_container.style.position = 'fixed';
            propLigthbox.lightbox_container.style.zIndex = '1000';
            propLigthbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
            propLigthbox.lightbox_container.style.top = '0';
            propLigthbox.lightbox_container.style.left = '0';
    
            propLigthbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
            propLigthbox.modal = document.getElementById('modal');
    
            propLigthbox.modal.style.background = 'rgba(0,0,0,0)';
            propLigthbox.modal.style.height = '100%';
    
    
            propLigthbox.newImagen = propLigthbox.imagen.getAttribute('src');
    
            
            propLigthbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLigthbox.newImagen);
            propLigthbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagengrande');
    
            if (propLigthbox.animacion == 'fade') {
    
                document.getElementsByClassName('imagengrande')[0].style.opacity = 0;
    
                setTimeout(function () {
                    document.getElementsByClassName('imagengrande')[0].style.opacity = 1;
                }, 90);
            }
    
            propLigthbox.modal.innerHTML += '<i  id="cerrar_modal" class="fas fa-times-circle"></i>';
            propLigthbox.cerrarModal = document.getElementById('cerrar_modal');
    
            propLigthbox.cerrarModal.addEventListener('click', metLigthbox.cerrarTodo);
    
        },
    
        cerrarTodo: function(){
    
            propLigthbox.cuerpoDom.removeChild(propLigthbox.lightbox_container);
           
    
        }
    }
    
    metLigthbox.inicio();

}())


