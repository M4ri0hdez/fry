#!/usr/bin/env python3
import http.server
import socketserver
from datetime import datetime

PORT = 8000

class MiHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # IP real (viene de ngrok en los headers)
        client_ip = self.headers.get('X-Forwarded-For', self.client_address[0])
        
        # También mostrar otros datos útiles
        user_agent = self.headers.get('User-Agent', 'Desconocido')
        
        print(f"[{timestamp}] 🖥️  IP: {client_ip}")
        print(f"   📱 Dispositivo: {user_agent[:50]}...")
        print(f"   🔗 Página: {args[0]}")
        print("-" * 50)
        
        # Guardar en archivo
        with open("visitas.log", "a") as f:
            f.write(f"{timestamp} | {client_ip} | {args[0]} | {user_agent}\n")

with socketserver.TCPServer(("", PORT), MiHandler) as httpd:
    print(f"""
╔═══════════════════════════════════════════════════╗
║  🌐 SERVIDOR ACTIVO CON LOGS AVANZADOS            ║
║  ═══════════════════════════════════              ║
║  Puerto: {PORT}                                      ║
║                                                  ║
║  Logs: visitas.log                                ║
║  Dashboard ngrok: http://127.0.0.1:4040          ║
╚═══════════════════════════════════════════════════╝
    """)
    httpd.serve_forever()