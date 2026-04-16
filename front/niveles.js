// ===================================
// 🔐 SISTEMA DE NIVELES - VERSIÓN COMPATIBLE LOCALHOST + NGROK
// ===================================

document.addEventListener("DOMContentLoaded", () => {

  // ===================================
  // 🌐 DETECCIÓN AUTOMÁTICA DEL ENTORNO
  // ===================================
  
  // Detecta si estás en localhost o en ngrok/internet
  const hostname = window.location.hostname;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  
  // 🔧 CONFIGURACIÓN DE LA URL DEL BACKEND PARA NGROK:
  //    Cada vez que reinicies ngrok, esta URL CAMBIARÁ.
  //    Actualiza solo esta línea con la nueva URL del backend.
  const NGROK_BACKEND_URL = 'https://XXXX-XXX-XXX-XXX.ngrok-free.dev';
  
  // Selecciona automáticamente la URL correcta
  const API_URL = isLocalhost 
    ? 'http://localhost:3000/api'           // Desarrollo local
    : `${NGROK_BACKEND_URL}/api`;         // Producción (ngrok)
  
  console.log(`🌐 Ambiente detectado: ${isLocalhost ? 'LOCALHOST' : 'NGROK/INTERNET'}`);
  console.log(`🔗 API URL: ${API_URL}`);
  
  const sesion = JSON.parse(localStorage.getItem('juego_sesion'));
  const haySesion = sesion && sesion.loggedIn === true;

  let nivelMaximoDesbloqueado;

  // ===================================
  // 📥 CARGAR PROGRESO AL INICIAR
  // ===================================
  async function cargarProgreso() {
    
    if (haySesion) {
      // ✅ USUARIO REGISTRADO → Cargar de MongoDB
      try {
        const res = await fetch(`${API_URL}/progreso/${sesion.id}`);
        const data = await res.json();
        
        if (data.exito && data.nivel) {
          nivelMaximoDesbloqueado = data.nivel;
        } else {
          nivelMaximoDesbloqueado = 1;
        }
      } catch (e) {
        console.error('❌ Error:', e);
        nivelMaximoDesbloqueado = 1;
      }
      
    } else {
      // 🔒 INVITADO → Leer sessionStorage (TEMPORAL por sesión de navegador)
      let temp = sessionStorage.getItem('invitado_nivel');
      
      if (temp) {
        nivelMaximoDesbloqueado = parseInt(temp);
        console.log(`🔒 Invitado | sessionStorage: ${nivelMaximoDesbloqueado}`);
      } else {
        nivelMaximoDesbloqueado = 0; // Solo Tutorial
        console.log(`🔒 Invitado | Sin datos | Empieza: ${nivelMaximoDesbloqueado}`);
      }
    }

    aplicarNiveles();
  }

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

      if (!btn.querySelector('span')) {
        btn.innerHTML = `<span>${btn.innerText}</span>`;
      }

      if (esTutorial) {
        btn.className = 'boton-nivel tutorial unlocked';
        btn.onclick = () => window.location.href = url;
        
      } else if (numNivel <= nivelMaximoDesbloqueado) {
        btn.className = 'boton-nivel unlocked';
        btn.onclick = () => window.location.href = url;
        
      } else {
        btn.className = 'boton-nivel locked';
        btn.onclick = null;
      }
    });
  }

  cargarProgreso();
});

function cargarInfoUsuario() {
  const sesion = JSON.parse(localStorage.getItem('juego_sesion'));
  const nombreEl = document.getElementById('nombre-usuario');
  const btnCerrar = document.getElementById('btn-cerrar-sesion');

  if (!nombreEl || !btnCerrar) return;

  if (sesion && sesion.loggedIn) {
    nombreEl.textContent = `👤 ${sesion.usuario}`;
    btnCerrar.style.display = 'inline-block';
  } else {
    nombreEl.textContent = '🔒 Modo Invitado';
    btnCerrar.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarInfoUsuario();
});

function volverAlMenu() {
  window.location.href = "index.html";
}

function cerrarSesion() {
  if (confirm('¿Cerrar sesión?')) {
    localStorage.removeItem('juego_sesion');
    location.reload();
  }
}

async function completarNivel(nivelCompletado) {
  
  const siguiente = nivelCompletado + 1;
  const nombreNivel = nivelCompletado === 0 ? '📚 Tutorial' : `🎮 Nivel ${nivelCompletado}`;
  const nombreSig = siguiente === 0 ? '📚 Tutorial' : `🎮 Nivel ${siguiente}`;

  const sesion = JSON.parse(localStorage.getItem('juego_sesion'));
  const tieneSesion = sesion && sesion.loggedIn === true;

  // 🔗 OBTENER LA URL DE LA API (misma lógica de detección automática)
  const hostname = window.location.hostname;
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  const NGROK_BACKEND_URL = 'https://XXXX-XXX-XXX-XXX.ngrok-free.dev'; // ← ACTUALIZA ESTO
  const API_URL = isLocalhost ? 'http://localhost:3000/api' : `${NGROK_BACKEND_URL}/api`;

  if (tieneSesion) {
    // ✅ REGISTRADO → MongoDB
    try {
      const res = await fetch(`${API_URL}/progreso/${sesion.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nivelCompletado })
      });
      
      const data = await res.json();
      
      if (data.exito) {
        alert(`🎉 ¡${nombreNivel}!\n✨ ${nombreSig} desbloqueado.\n💾 PERMANENTE`);
        return true;
      } else {
        alert('❌ Error');
        return false;
      }
    } catch (e) {
      alert('❌ Conexión');
      return false;
    }

  } else {
    // 🔒 INVITADO → Guardar en sessionStorage (TEMPORAL)
    
    let actual = parseInt(sessionStorage.getItem('invitado_nivel')) || 0;
    
    if (siguiente > actual) {
      actual = siguiente;
      sessionStorage.setItem('invitado_nivel', actual);
      console.log(`💾 Guardado en sessionStorage: ${actual}`);
    }
    
    alert(`🎉 ¡${nombreNivel}!\n✨ ${nombreSig} desbloqueado.\n\n⚠️ TEMPORAL:\nSe pierde al cerrar pestaña/navegador`);
    return true;
  }
}

async function completarTutorial() {
  return await completarNivel(0);
}