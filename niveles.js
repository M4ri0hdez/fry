// ===================================
// 🔐 SISTEMA DE NIVELES - VERSIÓN FINAL
// ===================================

document.addEventListener("DOMContentLoaded", () => {

  const API_URL = 'http://localhost:3000/api';
  
  // Verificar sesión
  const sesion = JSON.parse(localStorage.getItem('juego_sesion'));
  const haySesion = sesion && sesion.loggedIn === true;

  let nivelMaximoDesbloqueado = 1; // Por defecto: solo tutorial

  // ===================================
  // 📥 CARGAR PROGRESO AL INICIAR
  // ===================================
  async function cargarProgreso() {
    
    if (haySesion) {
      // ✅ CON SESIÓN: Cargar de MongoDB
      try {
        const res = await fetch(`${API_URL}/progreso/${sesion.id}`);
        const data = await res.json();
        
        if (data.exito) {
          nivelMaximoDesbloqueado = data.nivelMaximo;
          console.log(`👤 ${sesion.usuario} | Nivel máx: ${nivelMaximoDesbloqueado} (MongoDB)`);
        }
      } catch (e) {
        console.error('❌ Error MongoDB:', e);
      }
      
    } else {
      // 🔒 MODO INVITADO: Leer sessionStorage
      let temp = sessionStorage.getItem('invitado_nivel');
      
      if (temp) {
        nivelMaximoDesbloqueado = parseInt(temp);
        console.log(`🔒 Invitado | Nivel máx: ${nivelMaximoDesbloqueado} (temporal)`);
      } else {
        nivelMaximoDesbloqueado = 1;
        console.log('🔒 Invitado | Solo tutorial');
      }
    }

    aplicarNiveles();
  }

  // ===================================
  // 🎮 APLICAR ESTADOS A BOTONES
  // ===================================
  function aplicarNiveles() {
    const botones = document.querySelectorAll('.boton-nivel');

    botones.forEach((btn, index) => {
      let numNivel, esTutorial, url;

      if (btn.id === 'nivel-tutorial') {
        esTutorial = true;
        url = 'juego.html';
      } else {
        numNivel = index;
        url = `nivel${numNivel}.html`;
      }

      // Envolver texto
      if (!btn.querySelector('span')) {
        btn.innerHTML = `<span>${btn.innerText}</span>`;
      }

      if (esTutorial) {
        // 🔰 Tutorial siempre desbloqueado
        btn.className = 'boton-nivel tutorial unlocked';
        btn.onclick = () => window.location.href = url;
        
      } else if (numNivel < nivelMaximoDesbloqueado) {
        // ✅ Desbloqueado (numNivel < nivelMaximoDesbloqueado)
        btn.className = 'boton-nivel unlocked';
        btn.onclick = () => window.location.href = url;
        
      } else {
        // 🔒 Bloqueado
        btn.className = 'boton-nivel locked';
        btn.onclick = null;
      }
    });

    // Botón volver abajo
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
      btnVolver.onclick = volverAlMenu;
    }
  }

  // ===================================
  // 👤 INFO DE USUARIO
  // ===================================
  function mostrarUsuario() {
    const nombreEl = document.getElementById('nombre-usuario');
    const btnCerrar = document.getElementById('btn-cerrar-sesion');

    if (haySesion) {
      nombreEl.textContent = `👤 ${sesion.usuario}`;
      btnCerrar.style.display = 'inline-block';
    } else {
      nombreEl.textContent = '🔒 Modo Invitado';
      btnCerrar.style.display = 'none';
    }
  }

  // Iniciar todo
  mostrarUsuario();
  cargarProgreso();
});

// ===================================
// ⬅️ VOLVER AL MENÚ
// ===================================
function volverAlMenu() {
  window.location.href = "index.html";
}

// ===================================
// 🔒 CERRAR SESIÓN
// ===================================
function cerrarSesion() {
  if (confirm('¿Cerrar sesión?')) {
    localStorage.removeItem('juego_sesion');
    location.reload();
  }
}

// ===================================
// 💾 GUARDAR PROGRESO - FUNCIÓN PRINCIPAL
// ===================================
async function completarNivel(nivelCompletado) {
  
  const siguiente = nivelCompletado + 1;
  const nombreNivel = nivelCompletado === 0 ? '📚 Tutorial' : `🎮 Nivel ${nivelCompletado}`;
  const nombreSig = siguiente === 0 ? '📚 Tutorial' : `🎮 Nivel ${siguiente}`;

  const sesion = JSON.parse(localStorage.getItem('juego_sesion'));
  const tieneSesion = sesion && sesion.loggedIn === true;

  if (tieneSesion) {
    // ===================================
    // ✅ CON SESIÓN → MongoDB
    // ===================================
    try {
      const res = await fetch(`http://localhost:3000/api/progreso/${sesion.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nivelCompletado })
      });
      
      const data = await res.json();
      
      if (data.exito) {
        alert(`🎉 ¡${nombreNivel} completado!\n✨ ${nombreSig} desbloqueado.\n💾 Guardado en tu cuenta.`);
        return true;
      } else {
        alert('❌ Error al guardar.');
        return false;
      }
    } catch (e) {
      alert('❌ Error de conexión.');
      return false;
    }

  } else {
    // ===================================
    // 🔒 MODO INVITADO → sessionStorage
    // ===================================
    
    // Leer actual
    let actual = parseInt(sessionStorage.getItem('invitado_nivel')) || 1;
    
    // Actualizar si es mayor
    if (siguiente > actual) {
      actual = siguiente;
      sessionStorage.setItem('invitado_nivel', actual);
      console.log(`💾 Guardado temporal: Nivel máx = ${actual}`);
    }

    alert(`🎉 ¡${nombreNivel} completado!\n✨ ${nombreSig} desbloqueado.\n\n⚠️ Se perderá al cerrar la pestaña.`);
    return true;
  }
}

// ===================================
// 📚 COMPLETAR TUTORIAL (función helper)
// ===================================
async function completarTutorial() {
  return await completarNivel(0); // 0 = tutorial
}