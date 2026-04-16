// ===================================
// 🎮 TUTORIAL DEL JUEGO - VERSIÓN CON ANIMACIONES DE JUGADOR
// ===================================

const fondo = document.getElementById("fondo");
const contenedorP1 = document.getElementById("contenedor-p1"); 
// ❌ ELIMINADO: const p2 = document.getElementById("p2");
const dialogoBox = document.getElementById("dialogo");
const textoElem = document.getElementById("texto");
const receptoresArriba = document.getElementById("receptores-arriba");
const notaCayendo = document.getElementById("izquierda2");
const missTexto = document.getElementById("miss-text");
const healthBar = document.getElementById("health-bar-container");
const healthFill = document.getElementById("health-bar-fill");
const videoContador = document.getElementById("contador");
const audioCancion = document.getElementById("cancion");
const videoFallo = document.getElementById("video-fallo");

// ✅ NUEVO: Referencia al personaje del jugador para animaciones
const jugadorImg = document.getElementById("p1");

let estado = 0;
let escribiendo = false;
let intervalo;
let timeoutsFlechas = [];
let escuchandoTeclado = false;
let temporizadorFallo = null; 
let falloProcesado = false;   

let cayendo = false;
let loopCaida;
let posY = 0;
const velocidad = 5;
let fallos = 0;
let vida = 50; 

// ===================================
// ✅ NUEVO: SISTEMA DE ANIMACIONES DEL JUGADOR
// ===================================
const imagenesJugador = {
  'izquierda': '../imagenes/j_izquierda.png',
  'derecha': '../imagenes/j_derecha.png',
  'arriba': '../imagenes/j_arriba.png',    // Asumí que quieres j_arriba.png para arriba
  'abajo': '../imagenes/j_abajo.png',
  'default': '../imagenes/j_abajo.png'    // Imagen por defecto
};

let teclaPresionadaTimeout = null;

// Función para cambiar la imagen del jugador
function cambiarImagenJugador(direccion) {
  if (!jugadorImg) return;
  
  const nuevaImagen = imagenesJugador[direccion] || imagenesJugador['default'];
  jugadorImg.src = nuevaImagen;
}

// Función para volver a la imagen por defecto
function restaurarImagenJugador() {
  if (!jugadorImg) return;
  jugadorImg.src = imagenesJugador['default'];
}

// ===================================
// ✅ NUEVO: FUNCIÓN PARA DETECTAR SI HAY NOTA EN EL RECEPTOR
// ===================================
function hayNotaEnReceptor(dir) {
  const objetivoY = document.getElementById(dir).getBoundingClientRect().top;
  const margenError = 80;
  
  for (let i = 0; i < notasEnPantalla.length; i++) {
    let nota = notasEnPantalla[i];
    if (nota.dir === dir) {
      const diferencia = Math.abs(nota.posY - objetivoY);
      // Si hay una nota dentro del margen de error, retornar true
      if (diferencia < margenError) {
        return true;
      }
    }
  }
  return false; // No hay nota en el receptor
}

const dialogos = [
  "Bienvenido a esta experiencia...",
  "Antes de iniciar, veamos cómo funciona esto.",
  "veamos tus controles",
  "anda, pruebalas sin miedo",
  "calentemos un poco esas manos"
];

const partituraCancion = [
  { tiempo: 167, dir: 'izquierda' }, { tiempo: 333, dir: 'izquierda' },
  { tiempo: 1000, dir: 'izquierda' }, { tiempo: 1333, dir: 'izquierda' },
  { tiempo: 1667, dir: 'abajo' }, { tiempo: 2000, dir: 'derecha' },
  { tiempo: 2500, dir: 'derecha' }, { tiempo: 2667, dir: 'izquierda' },
  { tiempo: 3000, dir: 'arriba' }, { tiempo: 3333, dir: 'arriba' },
  { tiempo: 3667, dir: 'abajo' }, { tiempo: 3833, dir: 'derecha' },
  { tiempo: 3833, dir: 'izquierda' }, { tiempo: 4167, dir: 'arriba' },
  { tiempo: 4333, dir: 'abajo' }, { tiempo: 4667, dir: 'derecha' },
  { tiempo: 5000, dir: 'derecha' }, { tiempo: 5333, dir: 'arriba' },
  { tiempo: 6167, dir: 'abajo' }, { tiempo: 6333, dir: 'izquierda' },
  { tiempo: 6667, dir: 'izquierda' }, { tiempo: 6833, dir: 'arriba' },
  { tiempo: 7000, dir: 'abajo' }, { tiempo: 7333, dir: 'derecha' },
  { tiempo: 7667, dir: 'derecha' }, { tiempo: 8000, dir: 'izquierda' },
  { tiempo: 8333, dir: 'arriba' }, { tiempo: 8500, dir: 'derecha' },
  { tiempo: 8500, dir: 'abajo' }, { tiempo: 8667, dir: 'abajo' },
  { tiempo: 8667, dir: 'arriba' }, { tiempo: 8833, dir: 'izquierda' },
  { tiempo: 9167, dir: 'izquierda' }, { tiempo: 9500, dir: 'derecha' },
  { tiempo: 9667, dir: 'abajo' }, { tiempo: 9833, dir: 'arriba' },
  { tiempo: 10167, dir: 'izquierda' }, { tiempo: 10500, dir: 'derecha' },
  { tiempo: 10833, dir: 'izquierda' }, { tiempo: 11000, dir: 'izquierda' },
  { tiempo: 11167, dir: 'izquierda' }, { tiempo: 11500, dir: 'izquierda' },
  { tiempo: 11833, dir: 'izquierda' }, { tiempo: 12000, dir: 'derecha' },
  { tiempo: 12167, dir: 'abajo' }, { tiempo: 12500, dir: 'arriba' },
  { tiempo: 12833, dir: 'izquierda' }, { tiempo: 13167, dir: 'derecha' },
  { tiempo: 13500, dir: 'derecha' }, { tiempo: 13667, dir: 'izquierda' },
  { tiempo: 13667, dir: 'arriba' }, { tiempo: 13833, dir: 'abajo' },
  { tiempo: 14000, dir: 'derecha' }, { tiempo: 14167, dir: 'izquierda' },
  { tiempo: 14333, dir: 'arriba' }, { tiempo: 14500, dir: 'izquierda' },
  { tiempo: 14833, dir: 'derecha' }, { tiempo: 15167, dir: 'derecha' },
  { tiempo: 15500, dir: 'abajo' }, { tiempo: 15667, dir: 'arriba' },
  { tiempo: 16167, dir: 'abajo' }, { tiempo: 16667, dir: 'izquierda' },
  { tiempo: 16833, dir: 'izquierda' }, { tiempo: 17000, dir: 'izquierda' },
  { tiempo: 17167, dir: 'arriba' }, { tiempo: 17333, dir: 'abajo' },
  { tiempo: 17667, dir: 'derecha' }, { tiempo: 18000, dir: 'izquierda' },
  { tiempo: 18333, dir: 'arriba' }, { tiempo: 18667, dir: 'arriba' },
  { tiempo: 18833, dir: 'abajo' }, { tiempo: 19000, dir: 'derecha' },
  { tiempo: 19167, dir: 'izquierda' }, { tiempo: 19333, dir: 'arriba' },
  { tiempo: 19667, dir: 'derecha' }, { tiempo: 19833, dir: 'abajo' },
  { tiempo: 20000, dir: 'abajo' }, { tiempo: 20333, dir: 'izquierda' },
  { tiempo: 20667, dir: 'derecha' }, { tiempo: 21000, dir: 'arriba' }
];

let notasEnPantalla = [];
let tiempoInicioCancion = 0;
let indiceCancion = 0;
let bucleActivo = false;

function obtenerTiempoCaidaMs() {
  const inicioY = document.getElementById("rec-izquierda").getBoundingClientRect().top;
  const finY = document.getElementById("izquierda").getBoundingClientRect().top;
  const distancia = Math.max(0, finY - inicioY); 
  return (distancia / velocidad) * 16; 
}

function spawnearNota(direccion) {
  const receptor = document.getElementById('rec-' + direccion);
  if (!receptor) return; 
  const rectReceptor = receptor.getBoundingClientRect();
  const centroX = rectReceptor.left + (rectReceptor.width / 2);
  const inicioY = rectReceptor.top + (rectReceptor.height / 2);

   const img = document.createElement('img');
  img.src = '../imagenes/' + direccion + '2.png';
  img.className = 'nota-cayendo';
  img.style.display = "block";
  img.style.left = centroX + "px";
  img.style.top = "0px"; 
  document.body.appendChild(img);
  notasEnPantalla.push({ elemento: img, dir: direccion, posY: inicioY });
}

function bucleJuego() {
  if (!bucleActivo) return;

  const tiempoActual = Date.now() - tiempoInicioCancion;
  const tiempoCaida = obtenerTiempoCaidaMs();

  if (indiceCancion < partituraCancion.length) {
    const proximaNota = partituraCancion[indiceCancion];
    if (tiempoActual >= (proximaNota.tiempo - tiempoCaida)) {
      spawnearNota(proximaNota.dir);
      indiceCancion++;
    }
  } else if (notasEnPantalla.length === 0 && indiceCancion >= partituraCancion.length) {
    // ⬅️ VICTORIA: Canción terminada y pantalla limpia
    manejarVictoriaTutorial();
    return;
  }

  const limiteAbajo = document.getElementById("izquierda").getBoundingClientRect().bottom + 80;
  
  for (let i = notasEnPantalla.length - 1; i >= 0; i--) {
    let nota = notasEnPantalla[i];
    nota.posY += velocidad;
    nota.elemento.style.transform = `translateX(-50%) translateY(${nota.posY}px)`;

    if (nota.posY > limiteAbajo) {
      missTexto.classList.add("mostrar");
      setTimeout(() => missTexto.classList.remove("mostrar"), 800);
      bajarVida();
      document.body.removeChild(nota.elemento);
      notasEnPantalla.splice(i, 1);
    }
  }

  requestAnimationFrame(bucleJuego);
}

function verificarAciertoCancion(tecla) {
  const dir = mapaTeclas[tecla];
  if (!dir) return;

  const objetivoY = document.getElementById(dir).getBoundingClientRect().top;
  const margenError = 80;

  for (let i = 0; i < notasEnPantalla.length; i++) {
    let nota = notasEnPantalla[i];
    if (nota.dir === dir) {
      const diferencia = Math.abs(nota.posY - objetivoY);
      if (diferencia < margenError) {
        // ✅ HIT CORRECTO
        document.getElementById(dir).classList.add('activa');
        setTimeout(() => document.getElementById(dir).classList.remove('activa'), 200);
        
        // ✅ NUEVO: Cambiar imagen del jugador según dirección
        cambiarImagenJugador(dir);
        
        subirVida();
        document.body.removeChild(nota.elemento);
        notasEnPantalla.splice(i, 1);
        return true; // Retornar true indicando que hubo un hit
      }
    }
  }
  return false; // No hubo hit
}

// ===================================
// ✅ NUEVO: FUNCIÓN PARA MANEJAR TECLA PREMATURA (MISS)
// ===================================
function manejarTeclaPrematura(dir) {
  // Mostrar MISS
  missTexto.classList.add("mostrar");
  setTimeout(() => missTexto.classList.remove("mostrar"), 800);
  
  // Bajar vida
  bajarVida();
  
  // Cambiar imagen del jugador (aunque fue un miss)
  cambiarImagenJugador(dir);
  
  console.log(`⚠️ Tecla prematura: ${dir} (MISS)`);
}

function escribirTexto(texto) {
  textoElem.textContent = ""; let i = 0; escribiendo = true;
  intervalo = setInterval(() => {
    textoElem.textContent += texto[i]; i++;
    if (i >= texto.length) { clearInterval(intervalo); escribiendo = false; }
  }, 40);
}

function aparecerFlechas() {
  const ordenFlechas = [ document.getElementById("izquierda"), document.getElementById("arriba"), document.getElementById("abajo"), document.getElementById("derecha") ];
  ordenFlechas.forEach((flecha, index) => {
    if(flecha) {
      const t = setTimeout(() => flecha.classList.add("visible"), index * 500);
      timeoutsFlechas.push(t);
    }
  });
}

const mapaTeclas = { 
  'w': 'arriba', 'W': 'arriba', 
  'a': 'izquierda', 'A': 'izquierda', 
  's': 'abajo', 'S': 'abajo', 
  'd': 'derecha', 'D': 'derecha' 
};

document.addEventListener('keydown', (e) => {
  // Evitar repetición de tecla mantenida
  if (e.repeat) return;
  
  const idFlecha = mapaTeclas[e.key];
  
  if (escuchandoTeclado && idFlecha) {
    const el = document.getElementById(idFlecha);
    if(el) el.classList.add('activa');
    
    // ✅ NUEVO: Cambiar imagen del jugador durante práctica
    cambiarImagenJugador(idFlecha);
  }

  // Estados donde se puede jugar
  if (estado === 9 || estado === 18 || estado === 21 || estado === 25) {
    if (idFlecha) {
      const el = document.getElementById(idFlecha);
      if(el) el.classList.add('activa');
      
      // ✅ NUEVO: Cambiar imagen del jugador siempre que se presione una tecla
      cambiarImagenJugador(idFlecha);
      
      if (estado === 9 && cayendo) {
        if (e.key === 'a' || e.key === 'A') {
          const notaRect = notaCayendo.getBoundingClientRect();
          const objetivoRect = document.getElementById("izquierda").getBoundingClientRect(); 
          if (Math.abs(notaRect.top - objetivoRect.top) < 80) { 
            ejecutarHitOriginal(); 
          } else { 
            ejecutarMissOriginal(); 
          }
        }
      }

      if (estado === 21 && cayendo) {
        if (e.key === 'a' || e.key === 'A') {
          const notaRect = notaCayendo.getBoundingClientRect();
          const objetivoRect = document.getElementById("izquierda").getBoundingClientRect(); 
          if (Math.abs(notaRect.top - objetivoRect.top) < 80) { 
            ejecutarHitEjemplo(); 
          }
        }
      }

      // ✅ NUEVO: Durante la canción (estado 25), verificar si es tecla prematura
      if (estado === 25) {
        const huboHit = verificarAciertoCancion(e.key);
        
        // Si no hubo hit, significa que se presionó la tecla sin una nota en el receptor
        if (!huboHit) {
          manejarTeclaPrematura(idFlecha);
        }
      }
    }
  }
});

document.addEventListener('keyup', (e) => {
  const idFlecha = mapaTeclas[e.key];
  if (idFlecha) {
    const el = document.getElementById(idFlecha);
    if(el) el.classList.remove('activa');
    
    // ✅ NUEVO: Restaurar imagen por defecto cuando se suelta la tecla
    restaurarImagenJugador();
  }
});

function iniciarCaida() {
  const receptorIzq = document.getElementById("rec-izquierda");
  if (!receptorIzq) return;
  const rectReceptor = receptorIzq.getBoundingClientRect();
  const centroX = rectReceptor.left + (rectReceptor.width / 2);
  const inicioY = rectReceptor.top + (rectReceptor.height / 2);

  notaCayendo.style.left = centroX + "px";
  notaCayendo.style.top = "0px"; 
  posY = inicioY;
  notaCayendo.style.display = "block";
  notaCayendo.style.transform = `translateX(-50%) translateY(${posY}px)`;
  cayendo = true;

  loopCaida = setInterval(() => {
    posY += velocidad;
    notaCayendo.style.transform = `translateX(-50%) translateY(${posY}px)`;

    const objetivoRect = document.getElementById("izquierda").getBoundingClientRect();
    if (!objetivoRect) return;
    const limiteParaDesaparecer = objetivoRect.bottom + 80; 

    if (posY > limiteParaDesaparecer) {
      if (estado === 9) { ejecutarMissOriginal(); }
      else if (estado === 18) { ejecutarMissEjemplo1(); }
      else if (estado === 21) { ejecutarMissEjemplo2(); }
    }
  }, 16);
}

function ejecutarHitOriginal() {
  clearInterval(loopCaida); cayendo = false; notaCayendo.style.display = "none";
  const el = document.getElementById("izquierda");
  if(el) {
    el.classList.add('activa');
    setTimeout(() => el.classList.remove('activa'), 200);
  }
  // ✅ NUEVO: Cambiar imagen del jugador
  cambiarImagenJugador('izquierda');
  dialogoBox.style.display = "block"; escribirTexto("perfecto"); estado = 10; 
}

function ejecutarMissOriginal() {
  if (!cayendo) return; 
  clearInterval(loopCaida); cayendo = false; notaCayendo.style.display = "none";
  missTexto.classList.add("mostrar"); setTimeout(() => missTexto.classList.remove("mostrar"), 800);
  fallos++; dialogoBox.style.display = "block";
  if (fallos === 1) { escribirTexto("hummmm, creo que puede ser mejor"); estado = 11; }
  else if (fallos === 2) { escribirTexto("eso fue mucho mejor"); estado = 13; }
  else if (fallos > 2) { escribirTexto("emmmm.... bueno.... al menos lo intentaste"); estado = 15; }
}

function mostrarBarraProgreso() {
  dialogoBox.style.display = "none";
  if(receptoresArriba) receptoresArriba.style.opacity = "0";
  healthBar.style.display = "block";
  estado = 16;
}

function bajarVida() { 
  if (falloProcesado) return; 
  
  vida = Math.max(0, vida - 10); 
  healthFill.style.width = vida + "%"; 
  if (vida <= 0) {
    manejarFallo();
  }
}

function subirVida() { 
  vida = Math.min(100, vida + 10); 
  healthFill.style.width = vida + "%"; 
}

function ejecutarMissEjemplo1() {
  if (!cayendo) return;
  clearInterval(loopCaida); cayendo = false; notaCayendo.style.display = "none";
  missTexto.classList.add("mostrar"); setTimeout(() => missTexto.classList.remove("mostrar"), 800);
  bajarVida(); estado = 19; 
}

function ejecutarHitEjemplo() {
  clearInterval(loopCaida); cayendo = false; notaCayendo.style.display = "none";
  const el = document.getElementById("izquierda");
  if(el) {
    el.classList.add('activa');
    setTimeout(() => el.classList.remove('activa'), 200);
  }
  // ✅ NUEVO: Cambiar imagen del jugador
  cambiarImagenJugador('izquierda');
  subirVida(); estado = 22; 
}

function ejecutarMissEjemplo2() {
  if (!cayendo) return;
  clearInterval(loopCaida); cayendo = false; notaCayendo.style.display = "none";
  missTexto.classList.add("mostrar"); setTimeout(() => missTexto.classList.remove("mostrar"), 800);
  bajarVida(); estado = 22; 
}

function manejarFallo() {
  if (falloProcesado) return; 
  falloProcesado = true;

  bucleActivo = false;
  clearInterval(loopCaida); 
  cayendo = false;
  
  if(audioCancion) {
    audioCancion.pause();
    audioCancion.currentTime = 0;
  }

  notasEnPantalla.forEach(n => {
    if(n.elemento && n.elemento.parentNode) document.body.removeChild(n.elemento);
  });
  notasEnPantalla = [];

  if(receptoresArriba) receptoresArriba.style.opacity = "0";
  healthBar.style.display = "none";
  missTexto.classList.remove("mostrar");
  dialogoBox.style.display = "none";
  
  if(fondo) fondo.style.opacity = "0";
  if(contenedorP1) contenedorP1.style.opacity = "0";
  // ❌ ELIMINADO: if(p2) p2.style.opacity = "0";

  estado = 99;

  temporizadorFallo = setTimeout(() => {
    if (videoFallo) {
      videoFallo.style.display = "block";
      videoFallo.currentTime = 0; 
      videoFallo.play().catch(e => console.log("Error reproducir fallo:", e));
    } else {
      reiniciarNivel();
    }
  }, 2000);
}

if (videoFallo) {
  videoFallo.addEventListener('ended', () => {
    videoFallo.style.display = "none";
    reiniciarNivel();
  });
}

function reiniciarNivel() {
  vida = 50;
  fallos = 0;
  falloProcesado = false; 
  healthFill.style.width = "50%";
  
  // ✅ NUEVO: Restaurar imagen del jugador al reiniciar
  restaurarImagenJugador();
  
  estado = 24; 
  
  if (videoContador) {
    videoContador.style.display = "block"; 
    videoContador.currentTime = 0; 
    videoContador.play().catch(e => console.log("Error al reproducir video:", e));
  } else {
    iniciarJuegoDirecto();
  }
}

function iniciarJuegoDirecto() {
  if(videoContador) videoContador.style.display = "none"; 
  
  if(receptoresArriba) receptoresArriba.style.opacity = "1";
  if(fondo) fondo.style.opacity = "1";
  if(contenedorP1) contenedorP1.style.opacity = "1";
  // ❌ ELIMINADO: if(p2) p2.style.opacity = "1";
  
  // ⬅️ FIX: Asegurar que la barra de vida se muestre
  healthBar.style.display = "block";
  
  // ✅ NUEVO: Restaurar imagen del jugador al iniciar
  restaurarImagenJugador();
  
  estado = 25; 
  bucleActivo = true; 
  indiceCancion = 0; 
  notasEnPantalla = []; 
  tiempoInicioCancion = Date.now(); 
  if(audioCancion) audioCancion.play(); 
  bucleJuego(); 
}

if (videoContador) {
  videoContador.addEventListener('ended', () => {
    iniciarJuegoDirecto();
  });
}

// ===================================
// ✅ FUNCIÓN VICTORIA TUTORIAL - INTEGRADA CON SISTEMA DE PROGRESO
// ===================================
async function manejarVictoriaTutorial() {
  bucleActivo = false;
  if(audioCancion) {
    audioCancion.pause();
  }
  
  estado = 50; // Nuevo estado para victoria
  
  // Ocultar elementos del juego pero mantener fondo
  if(healthBar) healthBar.style.display = "none";
  if(receptoresArriba) receptoresArriba.style.opacity = "0";
  if(contenedorP1) contenedorP1.style.opacity = "0"; // Ocultar personaje para enfocar diálogo
  // ❌ ELIMINADO: if(p2) p2.style.opacity = "0";
  
  dialogoBox.style.display = "block";
  escribirTexto("......, supongo que.... bueno yo esperaba.... pasemos a los niveles");
  
  // ⬅️ IMPORTANTE: Guardar progreso del tutorial
  // Esperar un momento para que el usuario vea el mensaje
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Intentar guardar usando la función del sistema de niveles
  try {
    // Verificar si existe la función completarNivel (de niveles.js)
    if (typeof completarNivel === 'function') {
      await completarNivel(0); // 0 = Tutorial completado
      console.log("✅ Tutorial completado y guardado en el sistema");
    } else {
      // Fallback por si no se cargó niveles.js
      console.warn("⚠️ completarNivel no disponible, usando localStorage temporal");
      
      const sesion = JSON.parse(localStorage.getItem('juego_sesion'));
      if (sesion && sesion.loggedIn) {
        // Usuario con sesión - intentar guardar en servidor
        try {
          await fetch(`http://localhost:3000/api/progreso/${sesion.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nivelCompletado: 0 })
          });
        } catch (e) {
          console.error("Error guardando en servidor:", e);
        }
      } else {
        // Modo invitado - usar sessionStorage
        let actual = parseInt(sessionStorage.getItem('invitado_nivel')) || 1;
        if (1 > actual) {
          sessionStorage.setItem('invitado_nivel', 1);
        }
      }
    }
  } catch (error) {
    console.error("Error al guardar progreso del tutorial:", error);
  }
}

document.body.addEventListener("click", async (e) => {
  if (estado === 99) {
    clearTimeout(temporizadorFallo); 
    if(videoFallo) {
      videoFallo.pause();
      videoFallo.style.display = "none";
    }
    reiniciarNivel();
    return;
  }

  // ⬅️ Click en estado de victoria del tutorial
  if (estado === 50) {
    dialogoBox.style.display = "none";
    // Redirigir al menú de niveles
    window.location.href = "niveles.html";
    return;
  }

  if (estado === 9 || estado === 18 || estado === 21 || estado === 24 || estado === 25) return; 

  if (estado === 0) { dialogoBox.style.display = "block"; escribirTexto(dialogos[0]); estado = 1; return; }
  if (escribiendo) { clearInterval(intervalo); textoElem.textContent = dialogos[estado - 1]; escribiendo = false; return; }
  if (estado === 1) { escribirTexto(dialogos[1]); estado = 2; return; }
  
  if (estado === 2) {
    dialogoBox.style.display = "none"; 
    if(fondo) fondo.style.opacity = "1"; 
    if(contenedorP1) contenedorP1.style.opacity = "1"; 
    // ❌ ELIMINADO: if(p2) p2.style.opacity = "1";
    estado = 3; return;
  }
  if (estado === 3) { dialogoBox.style.display = "block"; escribirTexto(dialogos[2]); estado = 4; return; }
  if (estado === 4) { dialogoBox.style.display = "none"; aparecerFlechas(); estado = 5; return; }
  
  if (estado === 5) {
    timeoutsFlechas.forEach(clearTimeout); timeoutsFlechas = [];
    document.querySelectorAll('.flecha').forEach(f => f.classList.add("visible"));
    dialogoBox.style.display = "block"; escribirTexto(dialogos[3]); estado = 6; escuchandoTeclado = true; return;
  }

  if (estado === 6) {
    dialogoBox.style.display = "none";
    if(contenedorP1) {
      const rectPersonaje = contenedorP1.getBoundingClientRect();
      if(receptoresArriba) {
        receptoresArriba.style.left = rectPersonaje.left + "px";
        receptoresArriba.style.width = rectPersonaje.width + "px";
        receptoresArriba.style.opacity = "1";
      }
    }
    estado = 7; return;
  }

  if (estado === 7) { dialogoBox.style.display = "block"; escribirTexto(dialogos[4]); estado = 8; return; }
  if (estado === 8) { dialogoBox.style.display = "none"; fallos = 0; iniciarCaida(); estado = 9; return; }

  if (estado === 10) { mostrarBarraProgreso(); return; }
  if (estado === 11) { escribirTexto("intentemoslo de nuevo"); estado = 12; return; }
  if (estado === 12) { dialogoBox.style.display = "none"; iniciarCaida(); estado = 9; return; }
  if (estado === 13) { dialogoBox.style.display = "none"; iniciarCaida(); estado = 9; return; }
  if (estado === 15) { mostrarBarraProgreso(); return; }

  if (estado === 16) { 
    dialogoBox.style.display = "block";
    escribirTexto("Esta es tu barra de vida. Cada miss te quitará parte de tu porcentaje.");
    estado = 17; return; 
  }

  if (estado === 17) { dialogoBox.style.display = "none"; iniciarCaida(); estado = 18; return; }

  if (estado === 19) { 
    dialogoBox.style.display = "block";
    escribirTexto("Como ves, la barra bajó. Pero si aciertas, subirá. Presiona 'A' ahora.");
    estado = 20; return; 
  }

  if (estado === 20) { dialogoBox.style.display = "none"; iniciarCaida(); estado = 21; return; }

  if (estado === 22) { 
    dialogoBox.style.display = "block";
    escribirTexto("una vez visto lo basico, comencemos");
    estado = 23; 
    return; 
  }

  if (estado === 23) { 
    dialogoBox.style.display = "none";
    if (videoContador) {
      videoContador.style.display = "block"; 
      videoContador.play().catch(e => console.log("Error al reproducir video:", e));
    } else {
      iniciarJuegoDirecto();
    }
    estado = 24; 
    return; 
  }
});