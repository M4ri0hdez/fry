// ===================================
// 🔐 SERVIDOR FRY API - VERSIÓN 100% CORREGIDA
// Estructura BD: {usuario, contraseña, nivel}
// ===================================

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());

// ===================================
// 🔗 MODELO MONGODB - USUARIO (CORREGIDO)
// ===================================
const usuarioSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  contraseña: {           // ✅ Campo correcto
    type: String,
    required: true
  },
  nivel: {                // ✅ Campo correcto
    type: Number,
    default: 1
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// ===================================
// 🔗 CONEXIÓN A MONGODB
// ===================================
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ ERROR: Falta MONGO_URI en el archivo .env');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    console.log(`📦 Base de datos: ${mongoose.connection.name}`);
  })
  .catch(err => {
    console.error('❌ Error conectando a MongoDB:', err);
    process.exit(1);
  });

// ===================================
// 📡 RUTAS DE LA API
// ===================================

// ✏️ REGISTRAR NUEVO USUARIO
app.post('/api/registro', async (req, res) => {
  try {
    const { usuario, password } = req.body;

    console.log(`📥 Intento de registro: ${usuario}`);

    if (!usuario || !password) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Faltan datos: usuario y password son requeridos' 
      });
    }

    const existe = await Usuario.findOne({ 
      usuario: usuario.toLowerCase() 
    });

    if (existe) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Ese usuario ya existe' 
      });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // ✅ CORRECTO: Usa nombres de campos de tu BD
    const nuevoUsuario = new Usuario({
      usuario: usuario.toLowerCase(),
      contraseña: passwordHash,   // ✅ Campo: contraseña
      nivel: 1                    // ✅ Campo: nivel
    });

    await nuevoUsuario.save();

    console.log(`🆕 Usuario registrado: ${usuario}`);

    res.status(201).json({ 
      exito: true, 
      mensaje: 'Cuenta creada correctamente' 
    });

  } catch (error) {
    console.error('❌ Error en registro:', error);
    res.status(500).json({ 
      exito: false, 
      mensaje: 'Error interno del servidor' 
    });
  }
});

// 🔑 INICIAR SESIÓN
app.post('/api/login', async (req, res) => {
  try {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Faltan datos' 
      });
    }

    const userFound = await Usuario.findOne({ 
      usuario: usuario.toLowerCase() 
    });

    if (!userFound) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Usuario o contraseña incorrectos' 
      });
    }

    // ✅ CORRECTO: Compara con campo 'contraseña'
    const passwordValida = await bcrypt.compare(password, userFound.contraseña);

    if (!passwordValida) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Usuario o contraseña incorrectos' 
      });
    }

    console.log(`🔑 Login exitoso: ${usuario} (Nivel: ${userFound.nivel})`);

    // ✅✅✅ CORREGIDO: Ahora devuelve 'nivel' en vez de 'nivelMaximo'
    res.json({
      exito: true,
      mensaje: 'Login correcto',
      usuario: {
        id: userFound._id.toString(),
        usuario: userFound.usuario,
        nivel: userFound.nivel          // ✅✅✅ CAMBIADO: era 'nivelMaximo'
      }
    });

  } catch (error) {
    console.error('❌ Error en login:', error);
    res.status(500).json({ 
      exito: false, 
      mensaje: 'Error interno del servidor' 
    });
  }
});

// 📊 OBTENER PROGRESO DEL USUARIO
app.get('/api/progreso/:id', async (req, res) => {
  try {
    // ✅✅✅ CORREGIDO: Excluye 'contraseña' en vez de 'password'
    const usuario = await Usuario.findById(req.params.id).select('-contraseña');

    if (!usuario) {
      return res.status(404).json({ 
        exito: false, 
        mensaje: 'Usuario no encontrado' 
      });
    }

    // ✅ CORRECTO: Devuelve 'nivel'
    res.json({
      exito: true,
      nivel: usuario.nivel
    });

  } catch (error) {
    console.error('❌ Error obteniendo progreso:', error);
    res.status(500).json({ 
      exito: false, 
      mensaje: 'Error interno del servidor' 
    });
  }
});

// 💾 GUARDAR / ACTUALIZAR PROGRESO
app.post('/api/progreso/:id', async (req, res) => {
  try {
    const { nivelCompletado } = req.body;
    
    if (typeof nivelCompletado !== 'number') {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'nivelCompletado debe ser un número' 
      });
    }

    const siguienteNivel = nivelCompletado + 1;
    const usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      return res.status(404).json({ 
        exito: false, 
        mensaje: 'Usuario no encontrado' 
      });
    }

    // ✅ CORRECTO: Actualiza campo 'nivel'
    if (siguienteNivel > usuario.nivel) {
      usuario.nivel = siguienteNivel;
      await usuario.save();
      
      console.log(`🎮 ${usuario.usuario}: Nivel ${nivelCompletado} completado → Nivel ${siguienteNivel}`);
      
      res.json({
        exito: true,
        mensaje: `¡Nivel ${siguienteNivel} desbloqueado!`,
        nuevoNivel: siguienteNivel
      });
    } else {
      res.json({
        exito: true,
        mensaje: 'Progreso guardado (no hubo cambio)'
      });
    }

  } catch (error) {
    console.error('❌ Error guardando progreso:', error);
    res.status(500).json({ 
      exito: false, 
      mensaje: 'Error interno del servidor' 
    });
  }
});

// 🔄 VERIFICAR SESIÓN ACTIVA
app.get('/api/verificar-sesion', async (req, res) => {
  try {
    const userId = req.query.id;
    
    if (!userId) {
      return res.json({ exito: false });
    }

    // ✅✅✅ CORREGIDO: Excluye 'contraseña' en vez de 'password'
    const usuario = await Usuario.findById(userId).select('-contraseña');
    
    if (usuario) {
      res.json({
        exito: true,
        usuario: {
          id: usuario._id.toString(),
          usuario: usuario.usuario,
          nivel: usuario.nivel          // ✅ CORRECTO
        }
      });
    } else {
      res.json({ exito: false });
    }

  } catch (error) {
    res.json({ exito: false });
  }
});

// ===================================
// 🚀 INICIAR SERVIDOR
// ===================================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('\n╔══════════════════════════════════════╗');
  console.log('║     🚀 SERVIDOR FRY API ACTIVO       ║');
  console.log('╠══════════════════════════════════════╣');
  console.log(`║  Puerto: ${PORT.padEnd(28)}║`);
  console.log(`║  URL:   http://localhost:${PORT}/api${' '.repeat(Math.max(0, 17 - String(PORT).length))}║`);
  console.log('╚══════════════════════════════════════╝\n');
});