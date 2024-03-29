/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingesa tu nombre");
  datosPersona.edad = 2023 - prompt("Ingrese el año en el que naciste");
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");

 if (confirm("¿Te interesa JavaSript?")){
  datosPersona.interesPorJs = "Si"
 }
  else{
    datosPersona.interesPorJs = "No"
  }

 }





function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");
  const ciudad = document.querySelector("#ciudad");
  const interesPorJs = document.querySelector("#javascript");

  nombre.innerText = datosPersona.nombre;
  edad.innerText = datosPersona.edad;
  ciudad.innerText = datosPersona.ciudad;
  interesPorJs.innerText = datosPersona.interesPorJs;



}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  document.querySelector("#fila").innerHTML = '';


  listado.forEach(lista => {
    document.querySelector("#fila").innerHTML += 
    `
        <article class="caja">
        <img src=${lista.imgUrl} alt=${lista.lenguajes}>

            <p class ="lenguajes">Lenguajes: ${lista.lenguajes}</p>
            <p class ="bimestre">Bimestre: ${lista.bimestre}</p>
        </article>
        `
})


}



function alternarColorTema() {
  
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  sitio.classList.toggle("dark");


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */



document.addEventListener('keydown', (event) => {
  const tecla = event.key;


  const ocultar = document.getElementById("sobre-mi");
  const ocultar2 = ocultar.classList;


  if (tecla == "f"){


    ocultar2.remove("oculto");




  }


}, false);
