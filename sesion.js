// ===================================
// 🔐 SISTEMA DE AUTENTICACIÓN CON MongoDB
// ===================================

// ⚙️ URL DEL API (cambiar cuando subas a internet)
const API_URL = 'http://localhost:3000/api';

// CAMBIAR ENTRE LOGIN Y REGISTRO
function mostrarFormulario(tipo) {
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');

  if (tipo === 'login') {
    formLogin.classList.remove('oculto');
    formRegister.classList.add('oculto');
    tabLogin.classList.add('activa');
    tabRegister.classList.remove('activa');
  } else {
    formLogin.classList.add('oculto');
    formRegister.classList.remove('oculto');
    tabLogin.classList.remove('activa');
    tabRegister.classList.add('activa');
  }

  limpiarMensajes();
}

// ✏️ CREAR CUENTA NUEVA (con MongoDB)
async function crearCuenta(event) {
  event.preventDefault();

  const usuario = document.getElementById('reg-user').value.trim();
  const password = document.getElementById('reg-pass').value;
  const password2 = document.getElementById('reg-pass2').value;
  const msgEl = document.getElementById('msg-register');

  // Validar contraseñas iguales
  if (password !== password2) {
    msgEl.textContent = '❌ Las contraseñas no coinciden';
    msgEl.className = 'mensaje error';
    return;
  }

  // Mostrar cargando
  msgEl.textContent = '⏳ Creando cuenta...';
  msgEl.className = 'mensaje';

  try {
    // 📡 Llamar al API de MongoDB
    const respuesta = await fetch(`${API_URL}/registro`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usuario, password })
    });

    const data = await respuesta.json();

    if (data.exito) {
      msgEl.textContent = '✅ ¡Cuenta creada! Ahora inicia sesión';
      msgEl.className = 'mensaje exito';

      // Limpiar campos
      document.getElementById('reg-user').value = '';
      document.getElementById('reg-pass').value = '';
      document.getElementById('reg-pass2').value = '';

      // Cambiar a login después de 2 seg
      setTimeout(() => {
        mostrarFormulario('login');
      }, 2000);
    } else {
      msgEl.textContent = `❌ ${data.mensaje}`;
      msgEl.className = 'mensaje error';
    }

  } catch (error) {
    console.error('Error:', error);
    msgEl.textContent = '❌ Error de conexión con el servidor';
    msgEl.className = 'mensaje error';
  }
}

// 🔑 INICIAR SESIÓN (con MongoDB)
async function iniciarSesion(event) {
  event.preventDefault();

  const usuario = document.getElementById('login-user').value.trim();
  const password = document.getElementById('login-pass').value;
  const msgEl = document.getElementById('msg-login');

  // Mostrar cargando
  msgEl.textContent = '⏳ Iniciando sesión...';
  msgEl.className = 'mensaje';

  try {
    // 📡 Llamar al API de MongoDB
    const respuesta = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ usuario, password })
    });

    const data = await respuesta.json();

    if (data.exito) {
      // ✅ GUARDAR SESIÓN EN localStorage (ahora SÍ es permanente)
      const sesionActiva = {
        id: data.usuario.id,
        usuario: data.usuario.usuario,
        loggedIn: true,
        fechaLogin: new Date().toISOString()
      };

      localStorage.setItem('juego_sesion', JSON.stringify(sesionActiva));

      msgEl.textContent = '✅ ¡Bienvenido! Redirigiendo...';
      msgEl.className = 'mensaje exito';

      console.log(`🔑 Login exitoso: ${data.usuario.usuario}`);

      // Redirigir al menú
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } else {
      msgEl.textContent = `❌ ${data.mensaje}`;
      msgEl.className = 'mensaje error';
    }

  } catch (error) {
    console.error('Error:', error);
    msgEl.textContent = '❌ Error de conexión con el servidor';
    msgEl.className = 'mensaje error';
  }
}

// ⬅️ VOLVER
function volver() {
  window.location.href = 'index.html';
}

// 🧹 LIMPIAR MENSAJES
function limpiarMensajes() {
  document.getElementById('msg-login').textContent = '';
  document.getElementById('msg-register').textContent = '';
}

// ===================================
// 📊 FUNCIONES AUXILIARES
// ===================================

// Verificar si hay sesión activa
function haySesionActiva() {
  const sesion = JSON.parse(localStorage.getItem('juego_sesion'));
  return sesion && sesion.loggedIn === true;
}

// Obtener usuario actual
function obtenerUsuarioActual() {
  return JSON.parse(localStorage.getItem('juego_sesion'));
}

// Cerrar sesión
function cerrarSesion() {
  localStorage.removeItem('juego_sesion');
  window.location.reload();
}