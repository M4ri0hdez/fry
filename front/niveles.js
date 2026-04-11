// ===================================
// 🔐 SISTEMA DE NIVELES - VERSIÓN FINAL CORREGIDA
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
        
        if (data.exito && data.nivelMaximo) {
          nivelMaximoDesbloqueado = data.nivelMaximo;
          console.log(`👤 ${sesion.usuario} | Nivel máx DESDE MONGODB: ${nivelMaximoDesbloqueado}`);
        } else {
          console.log('⚠️ Sin datos en MongoDB, usando nivel 1');
        }
      } catch (e) {
        console.error('❌ Error MongoDB:', e);
      }
      
    } else {
      // 🔒 MODO INVITADO: Leer sessionStorage
      let temp = sessionStorage.getItem('invitado_nivel');
      
      if (temp) {
        nivelMaximoDesbloqueado = parseInt(temp);
        console.log(`🔒 Invitado | Nivel máx TEMPORAL: ${nivelMaximoDesbloqueado}`);
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
        // 🔰 Tutorial SIEMPRE desbloqueado
        btn.className = 'boton-nivel tutorial unlocked';
        btn.onclick = () => window.location.href = url;
        
      } else if (numNivel < nivelMaximoDesbloqueado) {
        // ✅ Desbloqueado si: numNivel < nivelMaximoDesbloqueado
        // Ejemplo: nivelMaximo=2 → numNivel=1 está desbloqueado (1 < 2)
        btn.className = 'boton-nivel unlocked';
        btn.onclick = () => window.location.href = url;
        console.log(`  ✅ Nivel ${numNivel} DESBLOQUEADO`);
        
      } else {
        // 🔒 Bloqueado
        btn.className = 'boton-nivel locked';
        btn.onclick = null;
        console.log(`  🔒 Nivel ${numNivel} BLOQUEADO`);
      }
    });

    console.log(`\n📊 RESUMEN:`);
    console.log(`   nivelMaximoDesbloqueado = ${nivelMaximoDesbloqueado}`);
    console.log(`   Regla: Nivel N está desbloqueado si N < ${nivelMaximoDesbloqueado}`);
  }

  // Iniciar todo
  cargarProgreso();
});

// ===================================
// 👤 INFO DE USUARIO
// ===================================
function cargarInfoUsuario() {
  const sesion = JSON.parse(localStorage.getItem('juego_sesion'));
  const nombreEl = document.getElementById('nombre-usuario');
  const btnCerrar = document.getElementById('btn-cerrar-sesion');

  if (sesion && sesion.loggedIn) {
    nombreEl.textContent = `👤 ${sesion.usuario}`;
    btnCerrar.style.display = 'inline-block';
  } else {
    nombreEl.textContent = '🔒 Modo Invitado';
    btnCerrar.style.display = 'none';
  }
}

// Llamar al cargar
document.addEventListener("DOMContentLoaded", () => {
  cargarInfoUsuario();
});

// ⬅️ VOLVER AL MENÚ
function volverAlMenu() {
  window.location.href = "index.html";
}

// 🔒 CERRAR SESIÓN
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

  console.log(`\n💾 Intentando guardar: ${nombreNivel}`);
  console.log(`   siguiente = ${siguiente}`);

  if (tieneSesion) {
    // ===================================
    // ✅ CON SESIÓN → Guardar en MongoDB
    // ===================================
    try {
      const res = await fetch(`http://localhost:3000/api/progreso/${sesion.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nivelCompletado })
      });
      
      const data = await res.json();
      
      if (data.exito) {
        console.log(`✅✅✅ GUARDADO EN MONGODB: ${data.mensaje}`);
        if (data.nuevoNivelMaximo) {
          console.log(`   Nuevo nivel máximo: ${data.nuevoNivelMaximo}`);
        }
        
        alert(`🎉 ¡${nombreNivel} completado!\n✨ ${nombreSig} desbloqueado.\n💾 Guardado en tu cuenta.`);
        return true;
      } else {
        console.error('❌ Error del servidor:', data.mensaje);
        alert('❌ Error al guardar.');
        return false;
      }
    } catch (e) {
      console.error('❌ Error de conexión:', e);
      alert('❌ Error de conexión. Progreso no guardado.');
      return false;
    }

  } else {
    // ===================================
    // 🔒 MODO INVITADO → sessionStorage
    // ===================================
    
    let actual = parseInt(sessionStorage.getItem('invitado_nivel')) || 1;
    
    if (siguiente > actual) {
      actual = siguiente;
      sessionStorage.setItem('invitado_nivel', actual);
      console.log(`✅ GUARDADO TEMPORALMENTE: invitado_nivel = ${actual}`);
    } else {
      console.log(`   Ya estaba en nivel ${actual}, no se actualiza`);
    }

    alert(`🎉 ¡${nombreNivel} completado!\n✨ ${nombreSig} desbloqueado.\n\n⚠️ Se perderá al cerrar la pestaña.`);
    return true;
  }
}

// Función helper
async function completarTutorial() {
  return await completarNivel(0);
}