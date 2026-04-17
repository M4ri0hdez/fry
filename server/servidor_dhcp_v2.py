#!/usr/bin/env python3
import http.server
import socketserver
import random
from datetime import datetime

PORT = 8000

# Contador global para generar IPs únicas
contador_ips = 0

class MiHandler(http.server.SimpleHTTPRequestHandler):
    
    def generar_ip(self):
        """Genera IP única cada vez"""
        global contador_ips
        contador_ips += 1
        
        parte1 = random.randint(10, 200)
        parte2 = random.randint(1, 254)
        parte3 = random.randint(1, 254)
        parte4 = random.randint(1, 254)
        
        return f"{parte1}.{parte2}.{parte3}.{parte4}"
    
    def log_message(self, format, *args):
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # Generar IP para esta visita
        ip_real = self.generar_ip()
        
        # Info del request
        pagina = args[0] if args else "/"
        
        # ID único
        visita_id = f"#{contador_ips:04d}"
        
        # Mostrar en terminal (LIMPIO Y PROFESIONAL)
        print(f"""
┌────────────────────────────────────────────┐
│  🌐 NUEVA CONEXIÓN DETECTADA               │
├────────────────────────────────────────────┤
│                                            │
│  ⏰  Hora:     {timestamp}                
│  🔗  IP:       {ip_real}                  
│  📄  Página:   {pagina}                   
│  🆔  Visita:   {visita_id}                 
│  👥  Total:    {contador_ips} visitantes   
│                                            │
└────────────────────────────────────────────┘
""")
        
        # Guardar en archivo (solo lo necesario)
        with open("visitas.log", "a") as f:
            f.write(f"{timestamp} | {ip_real} | {pagina} | {visita_id}\n")

with socketserver.TCPServer(("", PORT), MiHandler) as httpd:
    print(f"""
╔════════════════════════════════════════════╗
║                                            ║
║   🎮 SERVIDOR FNF       ║
║   ═════════════════════════                ║
║                                            ║
║   Puerto: {PORT}                              ║
║   Estado: ACTIVO                            ║
║                                            ║
║   📋 Registro automático de visitantes     ║
║   📁 Archivo: visitas.log                  ║
║                                            ║
╚══════════════════════════════════════════╝
    """)
    httpd.serve_forever()