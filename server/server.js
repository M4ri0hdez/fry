require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(cors({
  origin: '*', // Permitir todos los orígenes (cambiar en producción)
  credentials: true
}));
app.use(express.json());

// ===================================
// 🔗 MODELO MONGODB - USUARIO
// ===================================
const usuarioSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  nivelMaximo: {
    type: Number,
    default: 1
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
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
  .then(() => console.log('✅ Conectado a MongoDB'))
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

    // Validar datos
    if (!usuario || !password) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Faltan datos: usuario y password son requeridos' 
      });
    }

    // Verificar si ya existe el usuario
    const existe = await Usuario.findOne({ 
      usuario: usuario.toLowerCase() 
    });

    if (existe) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Ese usuario ya existe' 
      });
    }

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Crear nuevo usuario
    const nuevoUsuario = new Usuario({
      usuario: usuario.toLowerCase(),
      password: passwordHash,
      nivelMaximo: 1
    });

    await nuevoUsuario.save();

    console.log(`🆕 Nuevo usuario registrado: ${usuario}`);

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

    // Validar datos
    if (!usuario || !password) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Faltan datos' 
      });
    }

    // Buscar usuario
    const userFound = await Usuario.findOne({ 
      usuario: usuario.toLowerCase() 
    });

    if (!userFound) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Usuario o contraseña incorrectos' 
      });
    }

    // Verificar contraseña
    const passwordValida = await bcrypt.compare(password, userFound.password);

    if (!passwordValida) {
      return res.status(400).json({ 
        exito: false, 
        mensaje: 'Usuario o contraseña incorrectos' 
      });
    }

    console.log(`🔑 Usuario inició sesión: ${usuario}`);

    // Devolver datos del usuario (sin la contraseña)
    res.json({
      exito: true,
      mensaje: 'Login correcto',
      usuario: {
        id: userFound._id.toString(),
        usuario: userFound.usuario,
        nivelMaximo: userFound.nivelMaximo
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
    const usuario = await Usuario.findById(req.params.id).select('-password');

    if (!usuario) {
      return res.status(404).json({ 
        exito: false, 
        mensaje: 'Usuario no encontrado' 
      });
    }

    res.json({
      exito: true,
      nivelMaximo: usuario.nivelMaximo
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

    // Solo actualizar si el nuevo nivel es mayor al actual
    if (siguienteNivel > usuario.nivelMaximo) {
      usuario.nivelMaximo = siguienteNivel;
      await usuario.save();
      
      console.log(`🎮 ${usuario.usuario} completó nivel ${nivelCompletado} → Nivel ${siguienteNivel} desbloqueado`);
      
      res.json({
        exito: true,
        mensaje: `¡Nivel ${siguienteNivel} desbloqueado!`,
        nuevoNivelMaximo: siguienteNivel
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

    const usuario = await Usuario.findById(userId).select('-password');
    
    if (usuario) {
      res.json({
        exito: true,
        usuario: {
          id: usuario._id.toString(),
          usuario: usuario.usuario,
          nivelMaximo: usuario.nivelMaximo
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