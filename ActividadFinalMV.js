function doSubmit(form) {
    const codigoPostalRegex=/^[0-9]{5,5}$/
    const provinciaRegex=/^[a-zA-Z\s]{4,25}$/
    const ciudadesCodigoPostal=['0','Alava','Albacete','Alicante','Almeria','Avila','Badajoz','Islas Baleares','Barcelona','Burgos','Caceres','Cadiz','Castellon','Ciudad Real','Cordoba','La Coruna','Cuenca','Gerona','Granada','Guadalajara','Guipuzcoa','Huelva','Huesca','Jaen','Leon','Lerida','La Rioja','Lugo','Madrid','Malaga','Murcia','Navarra','Orense','Asturias','Palencia','Las Palmas','Pontevedra','Salamanca','Santa Cruz de Tenerife','Cantabria','Segovia','Sevilla','Soria','Tarragona','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza','Ceuta','Melilla']
    const codigoPostal=document.querySelector('#codigoPostal')
    let numeroCodigoPostal= codigoPostal.value
    if(!codigoPostalRegex.test(numeroCodigoPostal)){
        mostrarAlerta('El código postal no tiene el formato correcto, por favor vuelva a introducir los datos','red')
        return false
    }
    
    function mostrarAlerta(mensajeMostrar,color){
      let mensaje=document.querySelector('#alertaCodigo')
      mensaje.innerText=mensajeMostrar
      mensaje.style.color=color
  } 

    let primerosCodigoPostal=numeroCodigoPostal.slice(0,2)
    console.log(parseInt(primerosCodigoPostal,10))
    let ciudadCodigoPostal=ciudadesCodigoPostal[parseInt(primerosCodigoPostal,10)]
    console.log(ciudadCodigoPostal)
    const provincia=document.querySelector('#provincia')
    if(!provinciaRegex.test(provincia.value)){
        mostrarAlerta ('La provincia no tiene el formato correcto, por favor vuelva a introducir los datos','red') 
        return false
    }
    function mostrarAlerta(mensajeMostrar,color){
      let mensaje=document.querySelector('#alertaProvincia')
      mensaje.innerText=mensajeMostrar
      mensaje.style.color=color
  } 


    if (provincia.value.toLowerCase()!=ciudadCodigoPostal.toLowerCase()){
        mostrarAlerta('La provincia no coincide con el código postal, por favor vuelva a introducir los datos','red')

    }else{
        mostrarAlerta('La provincia coincide con el código postal','green')
    }

 return false
 //antes de enviar se ve el mensaje de "La provincia no coincide con el código postal, por favor vuelva a introducir los datos" o en su caso "La provincia coincide con el código postal"
}


function mostrarAlerta(mensajeMostrar,color){
    let mensaje=document.querySelector('#alertaValidaciondeCodigoPostal')
    mensaje.innerText=mensajeMostrar
    mensaje.style.color=color
}

const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

var modal = document.getElementById("myModal");
var modalMensaje = document.getElementById("mensajeModal");
var modalContent = document.getElementById("contentModal");

modalTriggerButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});
modalCloseButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});
modals.forEach(elem => {
  elem.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
  });
});

// cerrar con "Esc"...
document.addEventListener("keydown", event => {
  if(event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if(getComputedStyle(modal).display==="flex") { 
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial"; 
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";      
    }, 200);
  }
  else {
    document.body.style.overflow = "hidden"; 
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}

function closeModal() {
  modal.display = "none";
  modalContent= 'white';
}
var modal = document.getElementsByClassName("modal");
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

var mensage = document.getElementsByClassName("modal-body");
var modalMensaje = document.getElementById("mensajeModal");
var modal1Mensaje = document.getElementById("mensajeModal1");
var modal1Content = document.getElementById("contentModal1");
var modal2Mensaje = document.getElementById("mensajeModal2");
var modal2Content = document.getElementById("contentModal2");
var modal3Mensaje = document.getElementById("mensajeModal3");
var modal3Content = document.getElementById("contentModal3");
var valorusuario = $('#valorusuario').val();
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

var span = document.getElementsByClassName("close")[0];

//Show valoracion input value in modal

function showValoracion(){
    var valorusuario = $('#valorusuario').val();
    var mensage = ("Ha valorado con " + String(valorusuario) + " puntos");
    modal1Mensaje.innerText = mensage;
    modal1.display = "block";
}

 //Show cuenta input value in modal

function showCuenta(){
  var cuenta = $('#pais').val()+$('#iban').val()+
                '-'+$('#entidad').val()+'-'+$('#sucursal').val()+
                '-'+$('#dc').val()+'-'+$('#cuenta').val();
  var mensage = "Le informamos de que su cuenta bancaria es: " + cuenta;
  modal2Mensaje.innerText = mensage;
  modal.display = "block";
}

// Show dia input value in modal
 
function showDia(){
    var fecha = new Date($('#fecha').val());
    var dia = diaSemana[fecha.getDay()];
    var mensage = "La fecha seleccionada en el elemento de fecha es un " + dia;
    modal3Mensaje.innerText = mensage;
    modal.display = "block";
}

