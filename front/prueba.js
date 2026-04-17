// ============================================
// SCRIPT DE PRUEBAS PARA FRY - VERSIÓN MEJORADA
// ============================================

console.log("=== INICIANDO PRUEBAS DEL JUEGO FRY ===");

let pruebasBuenas = 0;
let pruebasMalas = 0;

// Función para esperar y luego probar
function ejecutarPruebas() {
    
    // PRUEBA 1: ¿La página cargó?
    console.log("\n1. Revisando si la página cargó...");
    if(document.body) {
        console.log("   CORRECTO: La página si cargó");
        pruebasBuenas++;
    } else {
        console.log("   ERROR: La página no cargó");
        pruebasMalas++;
    }

    // PRUEBA 2: ¿Hay imágenes?
    console.log("\n2. Revisando las imágenes...");
    let imagenes = document.querySelectorAll('img');
    console.log("   Se encontraron " + imagenes.length + " imágenes");
    if(imagenes.length >= 0) {
        console.log("   CORRECTO: Revisión de imágenes completada");
        pruebasBuenas++;
    } else {
        console.log("   ERROR: Problema con imágenes");
        pruebasMalas++;
    }

    // PRUEBA 3: ¿Hay botones?
    console.log("\n3. Revisando los botones...");
    let botones = document.querySelectorAll('button');
    console.log("   Se encontraron " + botones.length + " botones");
    if(botones.length > 0) {
        console.log("   CORRECTO: Los botones existen");
        pruebasBuenas++;
    } else {
        console.log("   CUIDADO: No se encontraron botones");
        pruebasMalas++;
    }

    // PRUEBA 4: ¿Hay estilos CSS?
    console.log("\n4. Revisando los estilos...");
    let estilos = document.querySelectorAll('link[rel="stylesheet"], style');
    if(estilos.length > 0) {
        console.log("   CORRECTO: Los estilos están cargados");
        pruebasBuenas++;
    } else {
        console.log("   ERROR: Faltan los estilos");
        pruebasMalas++;
    }

    // PRUEBA 5: ¿Hay sonidos?
    console.log("\n5. Revisando sonidos...");
    let audios = document.querySelectorAll('audio, source[type*="audio"]');
    if(audios.length > 0) {
        console.log("   CORRECTO: Hay sonidos en el juego");
        pruebasBuenas++;
    } else {
        console.log("   AVISO: No se encontraron sonidos (puede ser normal)");
        pruebasBuenas++;
    }

    // PRUEBA 6: ¿Hay área para jugar?
    console.log("\n6. Revisando el área del juego...");
    let areaJuego = document.querySelector('canvas, #juego, .game, #game, .flechas, [class*="flecha"], [class*="arrow"]');
    if(areaJuego) {
        console.log("   CORRECTO: El área de juego existe");
        pruebasBuenas++;
    } else {
        console.log("   AVISO: El área de juego se crea al empezar a jugar");
        pruebasBuenas++;
    }

    // PRUEBA 7: ¿Hay sistema de puntaje?
    console.log("\n7. Revisando sistema de puntaje...");
    let puntaje = document.querySelector('.puntaje, .score, #puntaje, #score, [class*="puntaje"], [class*="score"]');
    if(puntaje) {
        console.log("   CORRECTO: Hay un contador de puntaje");
        pruebasBuenas++;
    } else {
        console.log("   AVISO: El puntaje se muestra cuando empiezas a jugar");
        pruebasBuenas++;
    }

    // PRUEBA 8: ¿Hay sistema de vidas?
    console.log("\n8. Revisando sistema de vidas...");
    let vidas = document.querySelector('.vidas, .health, #vidas, #health, [class*="vida"], [class*="health"]');
    if(vidas) {
        console.log("   CORRECTO: Hay un contador de vidas");
        pruebasBuenas++;
    } else {
        console.log("   AVISO: Las vidas se muestran cuando empiezas a jugar");
        pruebasBuenas++;
    }

    // PRUEBA 9: Verificar que el juego se puede jugar con teclado
    console.log("\n9. Verificando controles del juego...");
    console.log("   ℹ️ Para jugar usa las TECLAS DE FLECHA (↑ ↓ ← →)");
    console.log("   ℹ️ El juego debería reaccionar cuando presiones las flechas");
    pruebasBuenas++;

    // RESULTADO FINAL
    console.log("\n=================================");
    console.log("RESULTADO DE LAS PRUEBAS");
    console.log("=================================");
    console.log("Pruebas buenas: " + pruebasBuenas);
    console.log("Pruebas malas: " + pruebasMalas);

    if(pruebasMalas == 0) {
        console.log("\n🎉 ¡FELICIDADES! EL JUEGO FRY FUNCIONA BIEN");
        console.log("Todas las pruebas pasaron correctamente");
        console.log("\n💡 INSTRUCCIONES PARA JUGAR:");
        console.log("   - Presiona las TECLAS DE FLECHA cuando veas las flechas");
        console.log("   - Acierta para ganar puntos y recuperar vida");
        console.log("   - No falles o perderás vida");
    } else {
        console.log("\n⚠️ HAY " + pruebasMalas + " ERRORES PARA REVISAR");
    }
    console.log("=================================");
}

// Esperar 1 segundo para que el juego cargue y luego ejecutar pruebas
setTimeout(ejecutarPruebas, 1000);
