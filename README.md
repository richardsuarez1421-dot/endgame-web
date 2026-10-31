# END GAME · Sitio web

Sala de juegos y realidad virtual en Santo Domingo de los Tsáchilas.
Las máquinas son de **Electro Master**, que tiene su propia sección para negocios.

Sitio estático de 8 páginas, sin framework ni dependencias.

## Estructura

```
index.html             Inicio
atracciones.html       Las seis atracciones
realidad-virtual.html  Super 360 Flight y VR Paraglider
promociones.html       Precios y juegos de fichas
eventos.html           Cumpleaños, grupos y empresas
contacto.html          Ubicación, horarios y video de cómo llegar
negocios.html          Electro Master · venta, repuestos y mantenimiento
gracias.html           Confirmación del formulario

css/estilo.css         Todos los estilos
js/menu.js             Menú móvil
js/formulario.js       Formulario de negocios
img/ video/            Fotos, logos y video
tools/generar.js       Genera las 8 páginas
server.js              Servidor local de desarrollo
```

## Cómo editar

El menú, el pie y el contenido de cada página viven en `tools/generar.js`.
Después de cualquier cambio ahí:

```bash
node tools/generar.js
```

Eso reescribe los `.html` de la raíz. No se editan a mano: se sobrescriben.
Para cambiar colores, tamaños o espaciados, el archivo es `css/estilo.css`.

## Ver el sitio en local

```bash
node server.js
```

Queda en http://localhost:5178

## Pendientes antes de considerarlo definitivo

- **Formulario de negocios:** falta la clave de [web3forms.com](https://web3forms.com)
  en `tools/generar.js`, donde dice `PEGAR-AQUI-LA-CLAVE-DE-WEB3FORMS`.
  Mientras tanto el envío muestra un aviso de modo demo en vez de enviar.
- **Dominio propio:** `electromastersd.com`, todavía sin comprar.
  Al conectarlo hay que actualizar el campo `redirect` del formulario.
- **Peso de los archivos:** el video de ubicación pesa 49 MB y el logo 1,4 MB.
  Hay que comprimirlos antes de dar el sitio por terminado.
- **Faltan:** foto real del VR Paraglider y fotos del local con público.
- **Precios de fichas:** la tabla de créditos se tomó de una foto del local,
  hay que confirmarla.
