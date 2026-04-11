// --- DATOS DE LA CANCIÓN (FUSIONADO: JUGADOR Y BOT) ---
const datosCancion = {
  "song": {
    "song": "Untitled",
    "notes": [
      // --- SECCIONES 0-17: INTRO (VACÍO) ---
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },

      // --- SECCIÓN 18 (25.5s): JUGADOR ENTRA ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [25500, 4, 0], [25500, 0, 33], [25667, 7, 0], [25667, 3, 33],
          [25833, 5, 0], [25833, 1, 33], [26000, 6, 0], [26000, 2, 33],
          [26167, 4, 0], [26167, 0, 33], [26333, 7, 0], [26333, 3, 33],
          [26500, 5, 0], [26500, 1, 33], [26833, 6, 0], [26833, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      
      // --- SECCIÓN 20 (29.5s): BOT ENTRA ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [[29500, 7, 0]],
        "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 21: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [27000, 4, 0], [27000, 0, 33], [27167, 7, 0], [27167, 3, 33],
          [27333, 6, 0], [27333, 2, 33], [27667, 6, 0], [27667, 2, 33],
          [28000, 2, 33], [28167, 6, 0], [28167, 5, 0], [28167, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },

      // --- SECCIÓN 25: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [28500, 5, 0], [28500, 1, 33], [28667, 5, 0], [28667, 1, 33],
          [28833, 7, 0], [28833, 3, 33], [29000, 4, 0], [29000, 0, 33],
          [29167, 6, 0], [29167, 2, 33], [29333, 4, 0], [29333, 0, 33],
          [29500, 7, 0], [29500, 3, 33], [29833, 7, 0], [29833, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 26: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [37167, 4, 0], [37167, 0, 33], [37333, 3, 33],
          [37500, 7, 0], [37500, 5, 0], [37500, 1, 33],
          [37833, 6, 0], [37833, 2, 33], [38000, 4, 0], [38000, 0, 33],
          [38167, 7, 0], [38167, 3, 33], [38333, 7, 0], [38333, 3, 33],
          [38500, 7, 0], [38500, 3, 33], [38667, 4, 0], [38667, 0, 33],
          [38833, 6, 0], [38833, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 27: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [30000, 5, 0], [30000, 1, 33], [30167, 6, 0], [30167, 2, 33],
          [30333, 4, 0], [30333, 0, 33], [30667, 7, 0], [30667, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 28: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [39000, 5, 0], [39000, 1, 33], [39500, 7, 0], [39500, 3, 33],
          [39833, 4, 0], [39833, 0, 33], [40000, 6, 0], [40000, 2, 33],
          [40167, 5, 0], [40167, 1, 33], [40333, 7, 0], [40333, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 29: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [31833, 4, 0], [31833, 0, 33], [32000, 4, 0], [32000, 0, 33],
          [32167, 7, 0], [32167, 3, 33], [32500, 6, 0], [32500, 2, 33],
          [32667, 5, 0], [32667, 1, 33], [32833, 7, 0], [32833, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 30: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [40500, 4, 0], [40500, 0, 33], [40667, 6, 0], [40667, 2, 33],
          [41000, 6, 0], [41000, 2, 33], [41167, 5, 0], [41167, 1, 33],
          [41500, 7, 0], [41500, 3, 33], [41667, 4, 0], [41667, 0, 33],
          [41833, 6, 0], [41833, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 31: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [33000, 4, 0], [33000, 0, 33], [33167, 6, 0], [33167, 2, 33],
          [33667, 5, 0], [33667, 1, 33], [34000, 7, 0], [34000, 3, 33],
          [34167, 4, 0], [34167, 0, 33], [34333, 6, 0], [34333, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 32: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [42000, 7, 0], [42000, 3, 33], [42500, 5, 0], [42500, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 33: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [34500, 7, 0], [34500, 3, 33], [34667, 2, 33],
          [34833, 6, 0], [35167, 5, 0], [35167, 1, 533]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 34: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [43500, 4, 0], [43500, 0, 33], [43667, 4, 0], [43667, 0, 33],
          [44000, 7, 0], [44000, 3, 33], [44167, 6, 0], [44167, 2, 33],
          [44333, 5, 0], [44333, 1, 33], [44500, 7, 0], [44500, 3, 33],
          [44667, 4, 0], [44667, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIONES 35-40: VACÍO ---
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },

      // --- SECCIÓN 41: JUGADOR RETOMA ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [49500, 4, 0], [49500, 0, 33], [49833, 7, 0], [49833, 3, 33],
          [50000, 6, 0], [50000, 2, 33], [50333, 5, 0], [50333, 1, 33],
          [50500, 5, 0], [50500, 1, 33], [50833, 7, 0], [50833, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 42: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [45000, 6, 0], [45000, 2, 33], [45333, 7, 0], [45333, 3, 33],
          [45667, 5, 0], [45667, 1, 33], [45833, 6, 0], [45833, 2, 33],
          [46000, 4, 0], [46000, 0, 33], [46167, 7, 0], [46167, 3, 33],
          [46333, 4, 0], [46333, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 43: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [51000, 6, 0], [51000, 2, 33], [51500, 7, 0], [51500, 3, 33],
          [51667, 7, 0], [51667, 3, 33], [51833, 4, 0], [51833, 0, 33],
          [52167, 6, 0], [52167, 2, 33], [52333, 6, 0], [52333, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 44: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [46500, 6, 0], [46500, 2, 33], [47000, 5, 0], [47000, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 45: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [52667, 4, 0], [52667, 0, 33], [53000, 7, 0], [53000, 3, 33],
          [53167, 5, 0], [53167, 1, 33], [53333, 1, 33], [53500, 5, 0],
          [53667, 4, 0], [53667, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIONES 46-50: VACÍO ---
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },

      // --- SECCIÓN 51: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [[55167, 7, 0], [55167, 3, 33]],
        "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 52: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [[54000, 4, 0], [54000, 0, 33]],
        "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 53: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [55500, 7, 0], [55500, 3, 33], [55833, 4, 0], [55833, 0, 33],
          [56000, 6, 0], [56000, 2, 33], [56333, 5, 0], [56333, 1, 33],
          [56667, 7, 0], [56667, 3, 33], [56833, 6, 0], [56833, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIONES 54-59: VACÍO ---
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },

      // --- SECCIÓN 60: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [60333, 7, 0], [60333, 3, 33], [60500, 4, 0], [60500, 0, 33],
          [60667, 6, 0], [60667, 2, 33], [60833, 5, 0], [60833, 1, 33],
          [61000, 7, 0], [61000, 3, 33], [61167, 6, 0], [61167, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 61: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [57500, 4, 0], [57500, 0, 33], [57667, 7, 0], [57667, 3, 33],
          [57833, 5, 0], [57833, 1, 33], [58000, 6, 0], [58000, 2, 33],
          [58167, 4, 0], [58167, 0, 1533]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 62: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [61667, 6, 0], [61667, 2, 33], [61833, 4, 0], [61833, 0, 33],
          [62500, 6, 0], [62500, 2, 33], [62667, 4, 0], [62667, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIONES 63-69: VACÍO ---
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },

      // --- SECCIÓN 70: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [72167, 7, 0], [72167, 3, 33], [72333, 4, 0], [72333, 0, 33],
          [72500, 6, 0], [72500, 2, 33], [72667, 5, 0], [72667, 1, 33],
          [73000, 7, 0], [73000, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 71: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [63167, 7, 0], [63167, 3, 33], [63333, 4, 0], [63333, 0, 33],
          [63500, 6, 0], [63500, 2, 33], [63667, 4, 0], [63667, 0, 33],
          [63833, 7, 0], [63833, 3, 33], [64167, 7, 0], [64167, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 72: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [73500, 4, 0], [73500, 0, 33], [73667, 7, 0], [73667, 3, 33],
          [74167, 4, 0], [74167, 0, 33], [74500, 7, 0], [74500, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 73: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [64667, 5, 0], [64667, 1, 33], [64833, 7, 0], [64833, 3, 33],
          [65333, 5, 0], [65333, 1, 33], [65500, 7, 0], [65500, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 74: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [75000, 5, 0], [75000, 1, 33], [75167, 6, 0], [75167, 2, 33],
          [75333, 4, 0], [75333, 0, 33], [75500, 7, 0], [75500, 3, 33],
          [75667, 4, 0], [75667, 0, 33], [75833, 2, 33], [76000, 6, 0],
          [76333, 5, 0], [76333, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 75: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [66167, 4, 0], [66167, 0, 33], [66333, 6, 0], [66333, 2, 33],
          [66500, 3, 33], [66667, 7, 0], [66833, 4, 0], [66833, 0, 33],
          [67000, 6, 0], [67000, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 76: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [76667, 6, 0], [76667, 2, 33], [77167, 5, 0], [77167, 1, 33],
          [77333, 6, 0], [77333, 2, 33], [77833, 4, 0], [77833, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 77: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [67500, 5, 0], [67500, 1, 33], [67667, 2, 33], [67833, 6, 0],
          [68333, 5, 0], [68333, 1, 33], [68500, 6, 0], [68500, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 78: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [78167, 7, 0], [78167, 3, 33], [78333, 5, 0], [78333, 1, 33],
          [78500, 6, 0], [78500, 2, 33], [78833, 4, 0], [78833, 0, 33],
          [79333, 7, 0], [79333, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 79: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [69000, 4, 0], [69000, 0, 33], [69167, 4, 0], [69167, 0, 33],
          [69333, 7, 0], [69333, 3, 33], [69667, 5, 0], [69667, 1, 33],
          [69833, 6, 0], [69833, 2, 33], [70000, 4, 0], [70000, 0, 33],
          [70333, 7, 0], [70333, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 80: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [79500, 2, 33], [79667, 6, 0], [80000, 3, 33], [80167, 7, 0],
          [80333, 6, 0], [80333, 2, 33], [80833, 4, 0], [80833, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 81: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [81000, 6, 0], [81000, 2, 33], [81167, 7, 0], [81167, 3, 33],
          [81333, 4, 0], [81333, 0, 33], [81667, 6, 0], [81667, 2, 33],
          [81833, 5, 0], [81833, 1, 1367]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 82: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [81000, 4, 0], [81000, 0, 33], [81167, 7, 0], [81167, 3, 33],
          [81333, 5, 0], [81333, 1, 33], [81500, 2, 33], [81667, 6, 0],
          [81833, 4, 0], [81833, 0, 33], [82167, 6, 0], [82167, 2, 1867]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIONES 83-92: VACÍO ---
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },

      // --- SECCIÓN 93: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [107167, 7, 0], [107167, 3, 33], [107500, 4, 0], [107500, 0, 33],
          [107667, 6, 0], [107667, 2, 33], [107833, 5, 0], [107833, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 94: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [84833, 7, 0], [84833, 3, 33], [85000, 4, 0], [85000, 0, 33],
          [85167, 6, 0], [85167, 2, 33], [85333, 5, 0], [85333, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 95: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [108000, 7, 0], [108000, 3, 33], [108167, 4, 0], [108167, 0, 33],
          [108667, 7, 0], [108667, 3, 33], [109000, 4, 0], [109000, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 96: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [85500, 7, 0], [85500, 3, 33], [85833, 4, 0], [85833, 0, 33],
          [86000, 4, 0], [86000, 0, 33], [86167, 6, 0], [86167, 2, 33],
          [86500, 6, 0], [86500, 2, 33], [86667, 7, 0], [86667, 3, 33],
          [86833, 5, 0], [86833, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 97: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [109500, 7, 0], [109500, 3, 33], [109667, 4, 0], [109667, 0, 33],
          [110167, 6, 0], [110167, 2, 33], [110333, 6, 0], [110333, 2, 33],
          [110667, 5, 0], [110667, 1, 33], [110833, 7, 0], [110833, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 98: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [87000, 6, 0], [87000, 2, 33], [87333, 4, 0], [87333, 0, 33],
          [87667, 4, 0], [87667, 0, 33], [88000, 4, 0], [88000, 0, 33],
          [88167, 7, 0], [88167, 3, 33], [88333, 5, 0], [88333, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 99: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [111000, 4, 0], [111000, 0, 33], [111167, 6, 0], [111167, 2, 33],
          [111667, 6, 0], [111667, 2, 33], [112000, 5, 0], [112000, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 100: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [88500, 6, 0], [88500, 2, 33], [88667, 6, 0], [88667, 2, 33],
          [88833, 6, 0], [88833, 2, 33], [89167, 4, 0], [89167, 0, 33],
          [89167, 7, 0], [89167, 3, 33], [89500, 4, 0], [89500, 0, 33],
          [89667, 6, 0], [89667, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 101: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [112500, 6, 0], [112500, 2, 33], [112667, 5, 0], [112667, 1, 33],
          [113167, 6, 0], [113167, 2, 33], [113333, 4, 0], [113333, 0, 33],
          [113500, 7, 0], [113500, 3, 33], [113667, 4, 0], [113667, 0, 33],
          [113833, 6, 0], [113833, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 102: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [90000, 7, 0], [90000, 3, 33], [90333, 5, 0], [90333, 1, 33],
          [91000, 7, 0], [91000, 3, 33], [91167, 4, 0], [91167, 0, 33],
          [91167, 6, 0], [91167, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 103: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [114000, 5, 0], [114000, 1, 33], [114667, 4, 0], [114667, 0, 33],
          [114833, 5, 0], [114833, 1, 33], [115333, 4, 0], [115333, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 104: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [91500, 4, 0], [91500, 0, 33], [91667, 7, 0], [91667, 3, 33],
          [91833, 6, 0], [91833, 2, 33], [92000, 4, 0], [92000, 0, 33],
          [92500, 6, 0], [92500, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 105: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [115500, 5, 0], [115500, 1, 33], [116000, 6, 0], [116000, 2, 33],
          [116333, 6, 0], [116333, 2, 33], [116500, 4, 0], [116500, 0, 33],
          [116667, 7, 0], [116667, 3, 33], [116833, 4, 0], [116833, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 106: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [93167, 5, 0], [93167, 1, 33], [93333, 5, 0], [93333, 1, 33],
          [93500, 5, 0], [93500, 1, 33], [93667, 6, 0], [93667, 2, 33],
          [93833, 4, 0], [93833, 0, 33], [94000, 7, 0], [94000, 3, 33],
          [94167, 4, 0], [94167, 0, 33], [94333, 6, 0], [94333, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 107: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [117000, 6, 0], [117000, 2, 33], [117333, 5, 0], [117333, 1, 1200]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 108: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [94500, 5, 0], [94500, 1, 33], [94667, 7, 0], [94667, 3, 33],
          [95000, 4, 0], [95000, 0, 33], [95333, 6, 0], [95333, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIONES 109-116: VACÍO ---
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },
      { "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3 },

      // --- SECCIÓN 117: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [119167, 7, 0], [119167, 3, 33], [119500, 4, 0], [119500, 0, 33],
          [119667, 6, 0], [119667, 2, 33], [119667, 5, 0], [119667, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 118: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [[137667, 7, 0], [137667, 3, 33]],
        "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 119: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [120000, 7, 0], [120000, 3, 33], [120500, 4, 0], [120500, 0, 33],
          [120667, 7, 0], [120667, 3, 33], [121167, 4, 0], [121167, 0, 33],
          [121333, 7, 0], [121333, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 120: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [138000, 4, 0], [138000, 0, 33], [138167, 6, 0], [138167, 2, 33],
          [138500, 6, 0], [138500, 2, 33], [138833, 5, 0], [138833, 1, 33],
          [139000, 7, 0], [139000, 3, 33], [139333, 4, 0], [139333, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 121: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [122000, 5, 0], [122000, 1, 33], [122167, 5, 0], [122167, 1, 33],
          [122333, 6, 0], [122333, 2, 33], [122500, 7, 0], [122500, 3, 33],
          [122667, 0, 33], [122833, 4, 0]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 122: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [139833, 6, 0], [139833, 2, 33], [140000, 5, 0], [140000, 1, 33],
          [140167, 7, 0], [140167, 3, 33], [140500, 4, 0], [140500, 0, 33],
          [140667, 6, 0], [140667, 2, 1533]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 123: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [123000, 6, 0], [123000, 2, 33], [123500, 5, 0], [123500, 1, 33],
          [123667, 6, 0], [123667, 2, 33], [124167, 5, 0], [124167, 1, 33],
          [124333, 6, 0], [124333, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 124: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false, "sectionNotes": [], 
        "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 125: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [124833, 0, 33], [125000, 4, 0], [125167, 7, 0], [125167, 3, 33],
          [125333, 5, 0], [125333, 1, 33], [125500, 6, 0], [125500, 2, 33],
          [125667, 4, 0], [125667, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 126: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [142667, 4, 0], [142667, 0, 33], [143167, 4, 0], [143167, 0, 33],
          [143333, 7, 0], [143333, 3, 33], [143500, 6, 0], [143500, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 127: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [126000, 6, 0], [126000, 2, 33], [126333, 3, 33], [126500, 7, 0],
          [126667, 6, 0], [126667, 2, 33], [127167, 7, 0], [127167, 3, 33],
          [127333, 6, 0], [127333, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 128: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [144167, 4, 0], [144167, 0, 33], [144333, 7, 0], [144333, 3, 33],
          [144833, 4, 0], [144833, 0, 33], [145000, 7, 0], [145000, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 129: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [127833, 4, 0], [127833, 0, 33], [128000, 4, 0], [128000, 0, 33],
          [128333, 7, 0], [128333, 3, 33], [128500, 4, 0], [128500, 0, 33],
          [128667, 6, 0], [128667, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 130: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [145500, 5, 0], [145500, 1, 33], [145667, 5, 0], [145667, 1, 33],
          [145833, 6, 0], [145833, 2, 33], [146000, 4, 0], [146000, 0, 33],
          [146167, 7, 0], [146167, 3, 33], [146500, 5, 0], [146500, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 131: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [[129167, 5, 0], [129167, 1, 700]],
        "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 132: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [147000, 6, 0], [147000, 2, 33], [147167, 5, 0], [147167, 1, 33],
          [147667, 6, 0], [147667, 2, 33], [147833, 5, 0], [147833, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 133: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [[131500, 7, 0], [131500, 3, 33], [131833, 7, 0], [131833, 3, 33]],
        "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 134: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [148500, 7, 0], [148500, 3, 33], [148667, 4, 0], [148667, 0, 33],
          [148833, 6, 0], [148833, 2, 33], [149000, 5, 0], [149000, 1, 33],
          [149167, 7, 0], [149167, 3, 33], [149333, 4, 0], [149333, 0, 33],
          [149833, 6, 0], [149833, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 135: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [132000, 7, 0], [132167, 4, 0], [132167, 0, 33], [132333, 2, 33],
          [132500, 6, 0], [132667, 5, 0], [132667, 1, 33], [132833, 7, 0],
          [132833, 3, 33], [133000, 4, 0], [133000, 0, 33], [133333, 6, 0],
          [133333, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 136: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [150000, 4, 0], [150000, 0, 33], [150667, 6, 0], [150667, 2, 33],
          [150833, 4, 0], [150833, 0, 33], [151333, 7, 0], [151333, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 137: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [133833, 6, 0], [133833, 2, 33], [134000, 6, 0], [134000, 2, 33],
          [134333, 5, 0], [134333, 1, 33], [134667, 7, 0], [134667, 3, 33],
          [134833, 4, 0], [134833, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 138: BOT ---
      {
        "lengthInSteps": 16, "mustHitSection": false,
        "sectionNotes": [
          [151500, 5, 0], [151500, 1, 33], [151833, 5, 0], [151833, 1, 33],
          [152000, 6, 0], [152000, 2, 33], [152167, 7, 0], [152167, 3, 33],
          [152333, 4, 0], [152333, 0, 33], [152667, 6, 0], [152667, 2, 1367]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 139: JUGADOR ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [135000, 6, 0], [135000, 2, 33], [135333, 5, 0], [135333, 1, 33],
          [135667, 7, 0], [135667, 3, 33], [135833, 7, 0], [135833, 3, 33],
          [136167, 6, 0], [136167, 2, 33], [136333, 5, 0], [136333, 1, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      // --- SECCIÓN 140-146: JUGADOR FINAL ---
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [154500, 4, 0], [154500, 0, 33], [154667, 7, 0], [154667, 3, 33],
          [154833, 1, 33], [155000, 5, 0], [155167, 6, 0], [155167, 2, 33],
          [155333, 4, 0], [155333, 0, 33], [155833, 7, 0], [155833, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [156000, 4, 0], [156000, 0, 33], [156500, 7, 0], [156500, 3, 33],
          [156667, 4, 0], [156667, 0, 33], [157333, 6, 0], [157333, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [157500, 5, 0], [157500, 1, 33], [157667, 7, 0], [157667, 3, 33],
          [157833, 4, 0], [157833, 0, 33], [158000, 6, 0], [158000, 2, 33],
          [158333, 5, 0], [158333, 1, 33], [158833, 6, 0], [158833, 2, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [159000, 5, 0], [159000, 1, 33], [159500, 6, 0], [159500, 2, 33],
          [159667, 5, 0], [159667, 1, 33], [160333, 7, 0], [160333, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [160500, 4, 0], [160500, 0, 33], [160667, 6, 0], [160667, 2, 33],
          [160833, 5, 0], [160833, 1, 33], [161000, 7, 0], [161000, 3, 33],
          [161167, 6, 0], [161167, 2, 33], [161667, 7, 0], [161667, 3, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [162000, 6, 0], [162000, 2, 33], [162333, 3, 33], [162500, 7, 0],
          [162667, 6, 0], [162667, 2, 33], [163167, 4, 0], [163167, 0, 33],
          [163333, 4, 0], [163333, 0, 33]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      },
      {
        "lengthInSteps": 16, "mustHitSection": true,
        "sectionNotes": [
          [163500, 7, 0], [163500, 3, 33], [163667, 5, 0], [163667, 1, 33],
          [164000, 6, 0], [164000, 2, 33], [164167, 4, 0], [164167, 0, 33],
          [164500, 5, 0], [164500, 1, 867]
        ], "typeOfSection": 0, "altAnim": false, "bpm": 120, "changeBPM": false, "sectionBeats": 3
      }
    ],
    "events": [],
    "bpm": 120,
    "needsVoices": true,
    "player1": "bf",
    "player2": "dad",
    "gfVersion": "gf",
    "speed": 1,
    "stage": "stage",
    "validScore": true
  }
};

let partituraCancion = [];

function limpiarOposiciones() {
  const mapaOpositos = { 
    'arriba': 'abajo', 
    'abajo': 'arriba', 
    'izquierda': 'derecha', 
    'derecha': 'izquierda' 
  };
  
  const filtradas = [];
  const notasPorTiempo = {};

  partituraCancion.forEach(n => {
    if(!notasPorTiempo[n.tiempo]) notasPorTiempo[n.tiempo] = [];
    notasPorTiempo[n.tiempo].push(n);
  });

  Object.keys(notasPorTiempo).forEach(tiempo => {
    const grupo = notasPorTiempo[tiempo];
    const dirsUsadasEsteInstante = [];

    grupo.forEach(nota => {
      const opuesto = mapaOpositos[nota.dir];
      if (!dirsUsadasEsteInstante.includes(opuesto)) {
        dirsUsadasEsteInstante.push(nota.dir);
        filtradas.push(nota);
      }
    });
  });

  partituraCancion = filtradas;
}

function convertirDatosNotas() {
  const mapaLanes = ['izquierda', 'abajo', 'arriba', 'derecha'];
  
  datosCancion.song.notes.forEach(seccion => {
    const esTurnoJugador = seccion.mustHitSection;
    
    seccion.sectionNotes.forEach(nota => {
      const tiempo = nota[0];
      const lane = nota[1];
      let laneFinal = -1;

      if (esTurnoJugador) {
        if (lane >= 4 && lane <= 7) {
          laneFinal = 7 - lane; 
        } else if (lane >= 0 && lane <= 3) {
          laneFinal = lane;
        }
      } else {
        if (lane >= 0 && lane <= 3) {
          laneFinal = lane;
        }
      }

      if (laneFinal !== -1) {
        partituraCancion.push({
          tiempo: tiempo,
          dir: mapaLanes[laneFinal],
          mustHit: esTurnoJugador 
        });
      }
    });
  });
  
  partituraCancion.sort((a, b) => a.tiempo - b.tiempo);
  limpiarOposiciones();
}

convertirDatosNotas();

// --- LOGICA DEL JUEGO ---
const fondo = document.getElementById("fondo");
const contenedorP1 = document.getElementById("contenedor-p1"); 
const p2 = document.getElementById("p2"); 
const dialogoBox = document.getElementById("dialogo");
const textoElem = document.getElementById("texto");
const receptoresArriba = document.getElementById("receptores-arriba");
const missTexto = document.getElementById("miss-text");
const healthBar = document.getElementById("health-bar-container");
const healthFill = document.getElementById("health-bar-fill");
const videoContador = document.getElementById("contador");
const audioCancion = document.getElementById("cancion");
const videoFallo = document.getElementById("video-fallo");

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

function animarBot(direccion) {
  if(p2) {
    p2.style.filter = "brightness(1.5) drop-shadow(0 0 10px #ff00ff)";
    p2.style.transform = "scale(1.1)";
    setTimeout(() => {
      p2.style.filter = "";
      p2.style.transform = "scale(1)";
    }, 150);
  }
}

function spawnearNota(direccion, mustHit) {
  let centroX, inicioY;

  if (mustHit) {
    const receptor = document.getElementById('rec-' + direccion);
    if (!receptor) return; 
    const rectReceptor = receptor.getBoundingClientRect();
    centroX = rectReceptor.left + (rectReceptor.width / 2);
    inicioY = rectReceptor.top + (rectReceptor.height / 2);

  } else {
    const rectP2 = p2.getBoundingClientRect();
    const centroP2 = rectP2.left + (rectP2.width / 2);
    const offsets = { 'izquierda': -120, 'abajo': -40, 'arriba': 40, 'derecha': 120 };
    centroX = centroP2 + offsets[direccion];
    inicioY = 0;
  }

  const img = document.createElement('img');
  img.src = direccion + '2.png'; 
  img.className = 'nota-cayendo';
  img.style.display = "block";
  img.style.left = centroX + "px";
  img.style.top = "0px"; 
  document.body.appendChild(img);
  notasEnPantalla.push({ elemento: img, dir: direccion, posY: inicioY, mustHit: mustHit });
}

function bucleJuego() {
  if (!bucleActivo) return;

  const tiempoActual = Date.now() - tiempoInicioCancion;
  const tiempoCaida = obtenerTiempoCaidaMs();

  if (indiceCancion < partituraCancion.length) {
    const proximaNota = partituraCancion[indiceCancion];
    if (tiempoActual >= (proximaNota.tiempo - tiempoCaida)) {
      spawnearNota(proximaNota.dir, proximaNota.mustHit);
      indiceCancion++;
    }
  }
  // ELIMINADA LA VERIFICACIÓN DE FIN DE NOTAS. AHORA DEPENDE DEL AUDIO.

  const limiteAbajo = document.getElementById("izquierda").getBoundingClientRect().bottom + 80;
  
  for (let i = notasEnPantalla.length - 1; i >= 0; i--) {
    let nota = notasEnPantalla[i];
    nota.posY += velocidad;
    nota.elemento.style.transform = `translateX(-50%) translateY(${nota.posY}px)`;

    if (nota.posY > limiteAbajo) {
      if (nota.mustHit) {
        missTexto.classList.add("mostrar");
        setTimeout(() => missTexto.classList.remove("mostrar"), 800);
        bajarVida();
      } else {
        animarBot(nota.dir);
      }
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
    if (nota.dir === dir && nota.mustHit) {
      const diferencia = Math.abs(nota.posY - objetivoY);
      if (diferencia < margenError) {
        document.getElementById(dir).classList.add('activa');
        setTimeout(() => document.getElementById(dir).classList.remove('activa'), 200);
        subirVida();
        document.body.removeChild(nota.elemento);
        notasEnPantalla.splice(i, 1);
        return; 
      }
    }
  }
}

function escribirTexto(texto) {
  textoElem.textContent = ""; let i = 0; escribiendo = true;
  intervalo = setInterval(() => {
    textoElem.textContent += texto[i]; i++;
    if (i >= texto.length) { clearInterval(intervalo); escribiendo = false; }
  }, 40);
}

const mapaTeclas = { 'w': 'arriba', 'W': 'arriba', 'a': 'izquierda', 'A': 'izquierda', 's': 'abajo', 'S': 'abajo', 'd': 'derecha', 'D': 'derecha' };

document.addEventListener('keydown', (e) => {
  if (escuchandoTeclado) {
    const idFlecha = mapaTeclas[e.key];
    if (idFlecha) {
      const el = document.getElementById(idFlecha);
      if(el) el.classList.add('activa');
    }
  }
  if (estado === 25) {
    verificarAciertoCancion(e.key);
  }
});

document.addEventListener('keyup', (e) => {
  const idFlecha = mapaTeclas[e.key];
  if (idFlecha) {
    const el = document.getElementById(idFlecha);
    if(el) el.classList.remove('activa');
  }
});

function bajarVida() { 
  if (falloProcesado) return; 
  vida = Math.max(0, vida - 10); 
  healthFill.style.width = vida + "%"; 
  if (vida <= 0) {
    manejarFallo();
  }
}

function subirVida() { vida = Math.min(100, vida + 10); healthFill.style.width = vida + "%"; }

function manejarFallo() {
  if (falloProcesado) return; 
  falloProcesado = true;

  bucleActivo = false;
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
  if(p2) p2.style.opacity = "0";

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
  falloProcesado = false; 
  healthFill.style.width = "50%";
  
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
  if(p2) p2.style.opacity = "1";
  
  if(contenedorP1 && receptoresArriba) {
    setTimeout(() => {
      const rectPersonaje = contenedorP1.getBoundingClientRect();
      receptoresArriba.style.left = rectPersonaje.left + "px";
      receptoresArriba.style.width = rectPersonaje.width + "px";
      receptoresArriba.style.opacity = "1";
    }, 50);
  }

  healthBar.style.display = "block";
  
  estado = 25; 
  bucleActivo = true; 
  indiceCancion = 0; 
  notasEnPantalla = []; 
  tiempoInicioCancion = Date.now(); 
  if(audioCancion) audioCancion.play(); 
  bucleJuego(); 
}

function manejarVictoriaNivel() {
  bucleActivo = false;
  if(audioCancion) {
    audioCancion.pause();
  }
  
  estado = 50;
  
  if(healthBar) healthBar.style.display = "none";
  if(receptoresArriba) receptoresArriba.style.opacity = "0";
  if(contenedorP1) contenedorP1.style.opacity = "0";
  if(p2) p2.style.opacity = "0";
  
  dialogoBox.style.display = "block";
  escribirTexto("¡Nivel Completado!");
}

// --- EVENTOS DE VIDEOS Y AUDIO ---

// 1. Evento para el VIDEO CONTADOR
if (videoContador) {
  videoContador.addEventListener('ended', () => {
    iniciarJuegoDirecto();
  });

  videoContador.addEventListener('error', (e) => {
    console.error("Error cargando video contador:", e);
    iniciarJuegoDirecto(); 
  });
}

// 2. Evento para que el nivel acabe cuando termine la MÚSICA
if (audioCancion) {
  audioCancion.addEventListener('ended', () => {
    if (bucleActivo) { // Solo ganar si estamos jugando
      manejarVictoriaNivel();
    }
  });
}

document.body.addEventListener("click", (e) => {
  if (estado === 99) {
    clearTimeout(temporizadorFallo); 
    if(videoFallo) {
      videoFallo.pause();
      videoFallo.style.display = "none";
    }
    reiniciarNivel();
    return;
  }

  if (estado === 50) {
    dialogoBox.style.display = "none";
    localStorage.setItem('nivelMaximo', '2'); 
    window.location.href = "niveles.html";
    return;
  }

  if (estado === 9 || estado === 18 || estado === 21 || estado === 24 || estado === 25) return; 

  // --- ESTADO 0: INICIO DEL JUEGO ---
  if (estado === 0) { 
    if(fondo) fondo.style.opacity = "1"; 
    if(contenedorP1) contenedorP1.style.opacity = "1"; 
    if(p2) p2.style.opacity = "1";
    
    document.querySelectorAll('.flecha').forEach(f => f.classList.add("visible"));
    
    estado = 24;
    
    if (videoContador) {
      videoContador.style.display = "block"; 
      videoContador.currentTime = 0; 
      videoContador.load(); 
      const playPromise = videoContador.play();
      
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Video reproduciéndose exitosamente
        })
        .catch(error => {
          console.error("Error reproduciendo video contador:", error);
          iniciarJuegoDirecto();
        });
      }
    } else {
      iniciarJuegoDirecto();
    }
    return; 
  }
});