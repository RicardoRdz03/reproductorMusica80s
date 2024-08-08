const caratula = document.querySelector(".contenedor-caratula img.caratula");

const titulo = document.querySelector(".contenedor-musica h3");
const nombre = document.querySelector(".contenedor-musica p");

const cancion = document.getElementById("cancion");

const barra = document.querySelector(".contenedor-musica input.barra-musica");

const iconoPausa = document.getElementById("ico-play-pause");

const botonAtras = document.querySelector(
  ".contenedor-botones button.btn-atras"
);
const botonPlay = document.querySelector(".contenedor-botones button.btn-play");
const botonAdelante = document.querySelector(
  ".contenedor-botones button.btn-siguiente"
);

const musica = [
  {
    titulo: "Sweet Dreams",
    nombre: "Eurythmics Annie",
    caratula: "img/sweet.jpg",
    ruta: "musica/Eurythmics Annie Lennox Dave Stewart - Sweet Dreams (Are Made Of This) (Official Video).mp3",
  },
  {
    titulo: "Another one Bit the dust",
    nombre: "Queen",
    caratula: "img/another.jpg",
    ruta: "musica/Queen - Another one bites the dust - Remastered [HD] - with lyrics.mp3",
  },
  {
    titulo: "Super Freak",
    nombre: "Rick James",
    caratula: "img/super.jpg",
    ruta: "musica/Rick James - Super Freak (Lyrics) She's a very kinky girl The kind you don't take home to mother.mp3",
  },
  {
    titulo: "Staying Alive",
    nombre: "Bee Gees",
    caratula: "img/alive.jpg",
    ruta: "musica/Bee Gees Stayin' Alive lyrics.mp3",
  },
  {
    titulo: "Under Pressure",
    nombre: "Queen",
    caratula: "img/under.jpg",
    ruta: "musica/Under Pressure (2017 Remaster).mp3",
  },
];

let indiceDeMusica = 0;

function cambiarNombre() {
  caratula.src = musica[indiceDeMusica].caratula;
  titulo.textContent = musica[indiceDeMusica].titulo;
  nombre.textContent = musica[indiceDeMusica].nombre;
  cancion.src = musica[indiceDeMusica].ruta;
  cancion.addEventListener("loadeddata", function () {});
}

botonPlay.addEventListener("click", reproducirPausar);

function reproducirPausar() {
  if (cancion.paused) {
    reproducirCancion();
  } else {
    pausarCancion();
  }
}

function reproducirCancion() {
  cancion.play();
  iconoPausa.classList.add("bi-pause-fill");
  iconoPausa.classList.remove("bi-play-fill");
}

function pausarCancion() {
  cancion.pause();
  iconoPausa.classList.remove("bi-pause-fill");
  iconoPausa.classList.add("bi-play-fill");
}

cancion.addEventListener("timeupdate", () => {
  if (!cancion.paused) {
    barra.value = cancion.currentTime;
  }
});

barra.addEventListener("input", () => {
  cancion.currentTime = barra.value;
});

botonAdelante.addEventListener("click", () => {
  indiceDeMusica = (indiceDeMusica + 1) % musica.length;
  cambiarNombre();
  reproducirCancion();
});

botonAtras.addEventListener("click", () => {
  indiceDeMusica = (indiceDeMusica - 1 + musica.length) % musica.length;
  cambiarNombre();
  reproducirCancion();
});

cambiarNombre();
