const images = [
    `assets/champion1.png`,
    `assets/champion2.png`,
    `assets/champion3.png`,
    `assets/champion4.png`,
    `assets/champion5.png`,
    `assets/champion6.png`,
    `assets/champion7.png`,
    `assets/champion8.png`,
    `assets/champion9.png`,
    `assets/champion10.png`,
  ];
  

const botonEnviar = document.getElementById("enviar");
const botonCambiar = document.getElementById("cambiarImg")
let counter = 0

const addname = () => {
  const p = document.getElementById("creador");
  const name = document.getElementById("nombre");
  p.innerHTML = `Aplicacion creada por ${name.value}`;
};

botonEnviar.addEventListener("click", addname);

/////////////////////////////////////////////////////////////


const countImages = () => {

    const imagenLol = document.getElementById("imagenContainer")

    if (counter === 0) {
        counter++;
    } else if (counter >= images.length-1) {
        counter = 0;
    } else {
        counter++;
    }

    console.log(imagenLol.attributes.src.value = images[counter])

}

botonCambiar.addEventListener("click", countImages)