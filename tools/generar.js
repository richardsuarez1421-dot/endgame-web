/* ============================================================
   Generador de páginas · END GAME
   Ejecutar:  node tools/generar.js
   Escribe los .html en la raíz del proyecto. El sitio publicado
   es HTML plano: esto solo evita repetir menú y pie a mano.
   ============================================================ */

const fs = require('fs');
const path = require('path');
const RAIZ = path.join(__dirname, '..');

const WA = 'https://wa.me/593980416136';
const MAPS = 'https://maps.app.goo.gl/mCgwzPAfB2inPWyx9';
const TIKTOK = 'https://www.tiktok.com/@electromaster.sd';
const wa = (t) => WA + '?text=' + encodeURIComponent(t);

const MENU = [
  { href: 'index.html', txt: 'Inicio' },
  { href: 'atracciones.html', txt: 'Atracciones' },
  { href: 'realidad-virtual.html', txt: 'Realidad virtual' },
  { href: 'promociones.html', txt: 'Promociones' },
  { href: 'eventos.html', txt: 'Eventos' },
  { href: 'contacto.html', txt: 'Ubicación' },
  { href: 'negocios.html', txt: 'Negocios', em: true },
];


const ICONO_WA =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/></svg>';

/* En las páginas de END GAME manda el logo azul; en la de negocios,
   el de Electro Master, porque ahí el visitante es otro. */
function marca(esEM) {
  return esEM
    ? `<a class="brand" href="negocios.html">
      <span class="logo logo-em"><img src="img/electromaster-logo-oscuro.png" alt="Electro Master · Venta y mantenimiento"></span>
    </a>`
    : `<a class="brand" href="index.html">
      <span class="logo logo-eg"><img src="img/endgame-logo.png" alt="END GAME"></span>
    </a>`;
}

function nav(activo, esEM) {
  const links = MENU.map((m) => {
    const cur = m.href === activo ? ' aria-current="page"' : '';
    return `      <a class="navlink${m.em ? ' em' : ''}" href="${m.href}"${cur}>${m.txt}</a>`;
  }).join('\n');

  return `<nav class="nav">
  <div class="nav-in">
    ${marca(esEM)}
    <button class="burger" aria-expanded="false" aria-controls="navmenu" aria-label="Abrir menú">
      <span></span><span></span><span></span>
    </button>
    <div class="navmenu" id="navmenu">
${links}
      <a class="btn btn-neon btn-sm navcta" href="${wa('Hola END GAME, quiero información sobre los juegos y horarios.')}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  </div>
</nav>`;
}

function pie(esEM) {
  const marcaPie = esEM
    ? `<div class="foot-brand"><span class="logo logo-em"><img src="img/electromaster-logo-oscuro.png" alt="Electro Master"></span></div>
        <p>Venta, repuestos y mantenimiento de máquinas de entretenimiento en Santo Domingo.</p>`
    : `<div class="foot-brand"><span class="logo logo-eg"><img src="img/endgame-logo.png" alt="END GAME"></span></div>
        <p>Sala de juegos y realidad virtual en Santo Domingo de los Tsáchilas.</p>`;

  return `<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot">
        ${marcaPie}
      </div>
      <div class="foot">
        <h4>Explora</h4>
        <a href="atracciones.html">Atracciones</a>
        <a href="realidad-virtual.html">Realidad virtual</a>
        <a href="promociones.html">Promociones</a>
        <a href="eventos.html">Cumpleaños y eventos</a>
      </div>
      <div class="foot">
        <h4>Visítanos</h4>
        <p>Av. Venezuela, vía al Bombolí Shopping</p>
        <p>Martes a domingo · 08:00 a 17:00</p>
        <a href="${MAPS}" target="_blank" rel="noopener">Ver en Google Maps</a>
      </div>
      <div class="foot">
        <h4>Contacto</h4>
        <a href="${WA}" target="_blank" rel="noopener">WhatsApp 098 041 6136</a>
        <a href="${TIKTOK}" target="_blank" rel="noopener">TikTok</a>
        <a href="negocios.html">Venta de máquinas y repuestos</a>
      </div>
    </div>
    <div class="legal">
      <span>© 2026 END GAME · Santo Domingo, Ecuador</span>
      <span>Máquinas por Electro Master · Desarrollado por RS Digital Studio</span>
    </div>
  </div>
</footer>

<a class="float-wa" href="${wa('Hola END GAME, quiero información.')}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
  ${ICONO_WA}
</a>

<script src="js/menu.js"></script>`;
}

function pagina({ archivo, titulo, desc, clase = '', cuerpo, scripts = [] }) {
  return `<!DOCTYPE html>
<html lang="es-EC">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titulo}</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="${clase === 'em-page' ? '#0A0508' : '#04070E'}">
<meta property="og:type" content="website">
<meta property="og:title" content="${titulo}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="img/sala.jpg">
<meta property="og:locale" content="es_EC">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Chakra+Petch:wght@500;600;700&display=swap">
<link rel="stylesheet" href="css/estilo.css">
</head>
<body${clase ? ` class="${clase}"` : ''}>

<div class="demo-note">Demo de presentación · contenido y precios sujetos a confirmación</div>

${nav(archivo, clase === 'em-page')}

${cuerpo}

${pie(clase === 'em-page')}
${scripts.map((s) => `<script src="${s}"></script>`).join('\n')}
</body>
</html>
`;
}

function cabecera(crumb, h1, lead) {
  return `<header class="pagehead">
  <div class="wrap">
    <div class="crumb"><a href="index.html">Inicio</a> · ${crumb}</div>
    <h1>${h1}</h1>
    <p>${lead}</p>
  </div>
</header>`;
}

/* ============================================================
   PÁGINAS
   ============================================================ */

const paginas = [];

/* ---------- INICIO ---------- */
paginas.push({
  archivo: 'index.html',
  titulo: 'END GAME · Sala de juegos y realidad virtual en Santo Domingo',
  desc: 'Grúas de peluches, máquinas de premios, cápsulas y simuladores de realidad virtual en Santo Domingo. $10 por persona, 3 juegos. Av. Venezuela, vía al Bombolí Shopping.',
  cuerpo: `<header class="hero">
  <div class="hero-media">
    <!-- SLOT DE VIDEO 1 · portada. Reemplazar el <img> por:
         <video autoplay muted loop playsinline poster="img/sala.jpg"><source src="video/local.mp4" type="video/mp4"></video> -->
    <img src="img/sala.jpg" alt="Interior de END GAME con grúas de peluches y máquinas de premios iluminadas">
  </div>
  <div class="hero-in">
    <div class="wrap">
      <div class="pricetag"><b>$10 por persona</b><span>3 juegos</span></div>
      <h1>Donde el juego<br><span class="g">se pone serio</span></h1>
      <p class="sub">Grúas de peluches, máquinas de premios, cápsulas y simuladores de realidad virtual. En la Av. Venezuela, vía al Bombolí Shopping.</p>
      <div class="hero-cta">
        <a class="btn btn-neon" href="promociones.html">Ver promociones</a>
        <a class="btn btn-line" href="contacto.html">Cómo llegar</a>
      </div>
    </div>
  </div>
</header>

<div class="facts">
  <div class="facts-in">
    <div class="fact"><span class="lbl">Horario</span><div class="val">Martes a domingo<small>08:00 a 17:00 · lunes cerrado</small></div></div>
    <div class="fact"><span class="lbl">Dónde estamos</span><div class="val">Av. Venezuela<small>Vía al Bombolí Shopping, Santo Domingo</small></div></div>
    <div class="fact"><span class="lbl">Escríbenos</span><div class="val">098 041 6136<small>Respondemos por WhatsApp</small></div></div>
  </div>
</div>

<section>
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">Qué hay adentro</span>
      <h2>Máquinas nuevas, premios de verdad</h2>
      <p>Equipo importado directo de fábrica y mantenido por nuestro propio taller. Si algo falla, se arregla el mismo día.</p>
    </div>
    <div class="cards c3">
      <a class="card" href="realidad-virtual.html">
        <span class="chip">Lo más pedido</span>
        <img src="img/vr.jpg" alt="Simulador de realidad virtual Super 360 Flight" loading="lazy">
        <div class="card-txt"><h3>Realidad virtual</h3><p>Super 360 Flight y VR Paraglider. Giro total, emoción total, sin salir de Santo Domingo.</p></div>
      </a>
      <a class="card" href="atracciones.html#gruas">
        <img src="img/grua.jpg" alt="Grúa de peluches iluminada" loading="lazy">
        <div class="card-txt"><h3>Grúas de peluches</h3><p>El clásico que nunca falla. Varias máquinas y premios que se renuevan seguido.</p></div>
      </a>
      <a class="card" href="atracciones.html#prizeout">
        <img src="img/prizeout.jpg" alt="Máquina Prize Out con rueda giratoria de premios" loading="lazy">
        <div class="card-txt"><h3>Prize Out</h3><p>La rueda gira, apuntas y sueltas en el momento justo. Pura puntería.</p></div>
      </a>
    </div>
    <div style="margin-top:32px"><a class="btn btn-line" href="atracciones.html">Ver todas las atracciones</a></div>
  </div>
</section>

<section class="band">
  <div class="wrap split wide-left">
    <div>
      <span class="eyebrow">Lo que no vas a encontrar en otro lado</span>
      <h2>Realidad virtual en Santo Domingo</h2>
      <p>Te sientas, te pones el visor y la cabina se mueve contigo: gira, se inclina y cae al mismo tiempo que lo que estás viendo. No es un video, es estar adentro.</p>
      <ul class="spec">
        <li><b>Super 360 Flight</b> — giro total de la cabina, para dos personas</li>
        <li><b>VR Paraglider</b> — la sensación de volar en parapente</li>
        <li>Varias experiencias para elegir en cada máquina</li>
        <li>Entra en el paquete de $10 por persona</li>
      </ul>
      <a class="btn btn-neon" href="realidad-virtual.html">Conocer las máquinas VR</a>
    </div>
    <div class="frame">
      <!-- SLOT DE VIDEO 2 · clip de alguien dentro del simulador -->
      <img src="img/vr.jpg" alt="Simulador de realidad virtual de dos asientos con giro de 360 grados" loading="lazy">
    </div>
  </div>
</section>

<section>
  <div class="wrap split">
    <div class="frame"><img src="img/prizeout-rueda.jpg" alt="Rueda de premios con cápsulas" loading="lazy"></div>
    <div>
      <span class="eyebrow">La promo</span>
      <h2>$10 por persona, 3 juegos</h2>
      <p>Cada juego dura lo que dura la experiencia completa, y además puedes usar los juegos de fichas. Sin membresías, sin entrada aparte, sin mínimo de consumo.</p>
      <p>Pagas en caja, recibes tus créditos y a jugar.</p>
      <div class="hero-cta" style="margin-top:24px">
        <a class="btn btn-neon" href="promociones.html">Ver la promoción</a>
        <a class="btn btn-steel" href="eventos.html">Cumpleaños y grupos</a>
      </div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap">
    <h2>Te esperamos de martes a domingo</h2>
    <p>Av. Venezuela, vía al Bombolí Shopping. Escríbenos y te decimos todo lo que necesites saber antes de venir.</p>
    <div class="btns">
      <a class="btn btn-neon" href="${wa('Hola END GAME, quiero información sobre los juegos y horarios.')}" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
      <a class="btn btn-line" href="${MAPS}" target="_blank" rel="noopener">Abrir en Google Maps</a>
    </div>
  </div>
</section>`,
});

/* ---------- ATRACCIONES ---------- */
paginas.push({
  archivo: 'atracciones.html',
  titulo: 'Atracciones · END GAME Santo Domingo',
  desc: 'Grúas de peluches, Prize Out, cápsulas Space Warriors, arcade, zona infantil y realidad virtual en END GAME, Santo Domingo.',
  cuerpo: `${cabecera('Atracciones', 'Atracciones', 'Seis formas de pasarla bien, todas en el mismo local. Máquinas nuevas, importadas directo de fábrica y mantenidas por nuestro propio taller.')}

<section>
  <div class="wrap">
    <div class="cards c3">
      <a class="card" id="vr" href="realidad-virtual.html">
        <span class="chip">Lo más pedido</span>
        <img src="img/vr.jpg" alt="Simulador de realidad virtual Super 360 Flight de dos asientos" loading="lazy">
        <div class="card-txt"><h3>Realidad virtual</h3><p>Super 360 Flight y VR Paraglider. La cabina gira contigo mientras el visor te lleva a otro lado.</p></div>
      </a>
      <a class="card" id="gruas" href="${wa('Hola END GAME, quiero saber más sobre las grúas de peluches.')}" target="_blank" rel="noopener">
        <img src="img/grua.jpg" alt="Interior de una grúa de peluches con luces LED" loading="lazy">
        <div class="card-txt"><h3>Grúas de peluches</h3><p>El clásico que nunca falla. Varias máquinas, premios que se renuevan y una garra que sí agarra.</p></div>
      </a>
      <a class="card" id="prizeout" href="${wa('Hola END GAME, quiero saber más sobre la máquina Prize Out.')}" target="_blank" rel="noopener">
        <span class="chip steel">Habilidad</span>
        <img src="img/prizeout.jpg" alt="Máquina Prize Out con rueda giratoria de premios" loading="lazy">
        <div class="card-txt"><h3>Prize Out</h3><p>La rueda gira, apuntas y sueltas en el momento justo. Si aciertas el blanco, el premio cae.</p></div>
      </a>
      <a class="card" id="capsulas" href="${wa('Hola END GAME, quiero saber más sobre las cápsulas Space Warriors.')}" target="_blank" rel="noopener">
        <img src="img/capsulas.jpg" alt="Máquinas de cápsulas Space Warriors" loading="lazy">
        <div class="card-txt"><h3>Cápsulas Space Warriors</h3><p>Sorpresa garantizada por poquito. La favorita de los más chiquitos y la mejor para probar suerte.</p></div>
      </a>
      <a class="card" id="arcade" href="${wa('Hola END GAME, quiero saber más sobre los juegos arcade.')}" target="_blank" rel="noopener">
        <img src="img/arcade.jpg" alt="Gabinete arcade con vinilo personalizado" loading="lazy">
        <div class="card-txt"><h3>Arcade y habilidad</h3><p>Gabinetes con vinilos personalizados y botones que responden. Para quien creció jugando y no piensa parar.</p></div>
      </a>
      <a class="card" id="infantil" href="${wa('Hola END GAME, quiero saber más sobre los juegos para niños.')}" target="_blank" rel="noopener">
        <span class="chip steel">Peques</span>
        <img src="img/grua-detalle.jpg" alt="Detalle de la garra de una máquina de premios" loading="lazy">
        <div class="card-txt"><h3>Zona infantil</h3><p>Máquinas a escala de niño, fáciles de manejar y con premios pensados para ellos. Plan familiar completo.</p></div>
      </a>
    </div>
  </div>
</section>

<section class="band tight">
  <div class="wrap">
    <div class="sec-head" style="margin-bottom:26px">
      <span class="eyebrow">Antes de venir</span>
      <h2>Cómo funciona la visita</h2>
    </div>
    <div class="boxes b3">
      <div class="box"><h3>1 · Pagas en caja</h3><p>$10 por persona por el paquete de 3 juegos, o fichas sueltas si solo quieres probar.</p></div>
      <div class="box"><h3>2 · Recibes tus créditos</h3><p>Con ellos activas las máquinas de fichas. Los juegos del paquete se coordinan con el personal.</p></div>
      <div class="box"><h3>3 · Te llevas el premio</h3><p>Lo que ganes es tuyo. Los premios se renuevan seguido, así que siempre hay algo nuevo.</p></div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap">
    <h2>¿Alguna duda antes de venir?</h2>
    <p>Escríbenos por WhatsApp y te respondemos al toque: precios, edades, disponibilidad o lo que necesites.</p>
    <div class="btns">
      <a class="btn btn-neon" href="${wa('Hola END GAME, tengo una consulta sobre las atracciones.')}" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
      <a class="btn btn-line" href="promociones.html">Ver promociones</a>
    </div>
  </div>
</section>`,
});

/* ---------- REALIDAD VIRTUAL ---------- */
paginas.push({
  archivo: 'realidad-virtual.html',
  titulo: 'Realidad virtual · END GAME Santo Domingo',
  desc: 'Super 360 Flight y VR Paraglider: simuladores de realidad virtual con movimiento real en Santo Domingo. Incluidos en el paquete de $10 por persona.',
  cuerpo: `${cabecera('Realidad virtual', 'Realidad virtual', 'Dos simuladores con movimiento real. No es ver una pantalla: es que la cabina gire, se incline y caiga contigo adentro.')}

<section>
  <div class="wrap split wide-left">
    <div>
      <span class="eyebrow">Máquina 1</span>
      <h2>Super 360 Flight</h2>
      <p>Giro total, emoción total. Una cabina de dos asientos montada sobre un aro que da la vuelta completa mientras el visor te pone dentro de la experiencia.</p>
      <ul class="spec">
        <li>Dos personas por turno</li>
        <li>Giro de 360 grados en dos ejes</li>
        <li>Varias experiencias para elegir</li>
        <li>Incluida en el paquete de $10</li>
      </ul>
      <a class="btn btn-neon" href="${wa('Hola END GAME, quiero reservar un turno en el Super 360 Flight.')}" target="_blank" rel="noopener">Reservar un turno</a>
    </div>
    <div class="frame">
      <!-- SLOT DE VIDEO 3 · el mejor clip: cabina girando + reacción de quien está adentro -->
      <img src="img/vr.jpg" alt="Simulador Super 360 Flight de dos asientos" loading="lazy">
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap split">
    <div class="frame" style="display:flex; align-items:center; justify-content:center; min-height:280px; background:linear-gradient(150deg,#0A101C,#101A2B)">
      <!-- PENDIENTE: foto real del VR Paraglider -->
      <div style="text-align:center; padding:40px 24px">
        <div style="font-family:'Chakra Petch',sans-serif; font-weight:700; font-size:1.6rem; text-transform:uppercase; color:var(--neon); text-shadow:var(--glow); line-height:1.1">VR Paraglider</div>
        <p style="color:var(--text-3); font-size:.86rem; margin:12px 0 0">Falta la foto real de esta máquina</p>
      </div>
    </div>
    <div>
      <span class="eyebrow">Máquina 2</span>
      <h2>VR Paraglider</h2>
      <p>Vuela sin límites. Te cuelgas del arnés, el visor te suelta sobre el paisaje y el viento hace el resto. La sensación de estar en el aire, con los pies a treinta centímetros del piso.</p>
      <ul class="spec">
        <li>Una persona por turno</li>
        <li>Sensación de vuelo libre con viento</li>
        <li>La favorita para grabar y subir</li>
        <li>Incluida en el paquete de $10</li>
      </ul>
      <a class="btn btn-line" href="${wa('Hola END GAME, quiero reservar un turno en el VR Paraglider.')}" target="_blank" rel="noopener">Reservar un turno</a>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">Antes de subirte</span>
      <h2>Lo que hay que saber</h2>
    </div>
    <div class="boxes b3">
      <div class="box"><h3>Edad</h3><p>Recomendado desde los 8 años. Los más pequeños pueden subir acompañados de un adulto.</p></div>
      <div class="box"><h3>Duración</h3><p>Cada turno dura lo que dura la experiencia completa. No se corta a la mitad.</p></div>
      <div class="box"><h3>Salud</h3><p>No recomendado para personas con problemas cardíacos, de cuello o espalda, ni durante el embarazo.</p></div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap">
    <h2>Reserva tu turno</h2>
    <p>En hora pico puede haber fila. Escríbenos antes y te decimos cómo está la sala.</p>
    <div class="btns">
      <a class="btn btn-neon" href="${wa('Hola END GAME, quiero reservar un turno en los simuladores de realidad virtual.')}" target="_blank" rel="noopener">Reservar por WhatsApp</a>
      <a class="btn btn-line" href="promociones.html">Ver precios</a>
    </div>
  </div>
</section>`,
});

/* ---------- PROMOCIONES ---------- */
paginas.push({
  archivo: 'promociones.html',
  titulo: 'Promociones y precios · END GAME Santo Domingo',
  desc: 'Promoción END GAME: $10 por persona y disfruta 3 juegos, más los juegos de fichas. Sin membresías ni entrada aparte.',
  cuerpo: `${cabecera('Promociones', 'Promociones', 'Un precio claro, sin letra chica. Pagas en caja, recibes tus créditos y juegas.')}

<section>
  <div class="wrap">
    <div class="pricegrid">
      <div class="pricebox">
        <h3>Promoción END GAME</h3>
        <span class="big">$10</span>
        <span class="per">por persona</span>
        <p>Disfruta <b>3 juegos</b> completos —cada uno dura lo que dura la experiencia— y además puedes usar los juegos de fichas. El plan redondo para una tarde.</p>
        <a class="btn btn-neon" href="${wa('Hola END GAME, quiero información sobre la promoción de $10 por persona.')}" target="_blank" rel="noopener">Consultar disponibilidad</a>
      </div>
      <div class="pricelist">
        <h3>Juegos de fichas</h3>
        <div class="prow"><span>1 dólar</span><b>2 créditos</b></div>
        <div class="prow"><span>50 centavos</span><b>1 crédito</b></div>
        <div class="prow"><span>2 monedas de 25</span><b>1 crédito</b></div>
        <div class="prow"><span>Valor de la jugada</span><b>$0.50</b></div>
      </div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">Preguntas de siempre</span>
      <h2>Lo que más nos consultan</h2>
    </div>
    <div class="boxes">
      <div class="box"><h3>¿Se paga entrada?</h3><p>No. Entrar es gratis. Solo pagas los juegos que vas a usar.</p></div>
      <div class="box"><h3>¿Los 3 juegos son a elección?</h3><p>Sí, entre las atracciones disponibles ese día, incluidos los simuladores de realidad virtual.</p></div>
      <div class="box"><h3>¿Puedo ir solo a mirar?</h3><p>Claro. Muchos vienen primero a ver las máquinas y regresan con la familia.</p></div>
      <div class="box"><h3>¿Hacen precio para grupos?</h3><p>Sí. Para cumpleaños y grupos armamos un paquete aparte, escríbenos con la fecha.</p></div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap">
    <h2>¿Vienes en grupo?</h2>
    <p>Cuéntanos cuántos son y para cuándo, y te armamos un paquete a la medida.</p>
    <div class="btns">
      <a class="btn btn-neon" href="eventos.html">Cumpleaños y eventos</a>
      <a class="btn btn-line" href="${wa('Hola END GAME, quiero cotizar para un grupo.')}" target="_blank" rel="noopener">Cotizar por WhatsApp</a>
    </div>
  </div>
</section>`,
});

/* ---------- EVENTOS ---------- */
paginas.push({
  archivo: 'eventos.html',
  titulo: 'Cumpleaños y eventos · END GAME Santo Domingo',
  desc: 'Celebra tu cumpleaños en END GAME o alquila nuestras máquinas para ferias, activaciones y eventos de empresa en Santo Domingo.',
  cuerpo: `${cabecera('Eventos', 'Cumpleaños y eventos', 'Reserva un horario para tu grupo y despreocúpate: nosotros ponemos las máquinas, los premios y el ruido.')}

<section>
  <div class="wrap">
    <div class="boxes b3">
      <div class="box">
        <h3>Cumpleaños</h3>
        <p>Celebra aquí con tus invitados. Armamos el paquete según cuántos vengan y cuánto tiempo quieran quedarse. Escríbenos con la fecha y te cotizamos el mismo día.</p>
        <a class="btn btn-neon btn-sm" href="${wa('Hola END GAME, quiero cotizar un cumpleaños. La fecha sería: ')}" target="_blank" rel="noopener">Cotizar cumpleaños</a>
      </div>
      <div class="box">
        <h3>Grupos y colegios</h3>
        <p>Salidas de curso, grupos de amigos, equipos deportivos. Coordinamos horario exclusivo para que no tengan que hacer fila.</p>
        <a class="btn btn-line btn-sm" href="${wa('Hola END GAME, quiero cotizar una visita de grupo.')}" target="_blank" rel="noopener">Cotizar grupo</a>
      </div>
      <div class="box">
        <h3>Empresas y ferias</h3>
        <p>¿Una activación de marca, una feria o una fiesta de empresa? Llevamos las máquinas hasta donde estés, instaladas y funcionando.</p>
        <a class="btn btn-steel btn-sm" href="${wa('Hola, quiero información sobre alquiler de máquinas para un evento.')}" target="_blank" rel="noopener">Consultar alquiler</a>
      </div>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap split">
    <div class="frame">
      <!-- SLOT DE VIDEO 4 · un cumpleaños o grupo celebrando en la sala -->
      <img src="img/sala.jpg" alt="Sala de END GAME con las máquinas encendidas" loading="lazy">
    </div>
    <div>
      <span class="eyebrow">Cómo lo armamos</span>
      <h2>Nos cuentas, te cotizamos</h2>
      <p>No hay un paquete cerrado: depende de cuántos sean, qué día y cuánto tiempo. Con esos tres datos te mandamos la propuesta el mismo día.</p>
      <ul class="spec">
        <li>Cuántas personas vienen</li>
        <li>Qué día y a qué hora</li>
        <li>Cuánto tiempo quieren quedarse</li>
        <li>Si quieren decoración o solo los juegos</li>
      </ul>
      <a class="btn btn-neon" href="${wa('Hola END GAME, quiero cotizar un evento. Somos ___ personas, el día ___ , por ___ horas.')}" target="_blank" rel="noopener">Enviar los datos por WhatsApp</a>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap">
    <h2>Aparta tu fecha</h2>
    <p>Los fines de semana se llenan rápido. Escríbenos con anticipación y te reservamos el horario.</p>
    <div class="btns">
      <a class="btn btn-neon" href="${wa('Hola END GAME, quiero apartar una fecha para un evento.')}" target="_blank" rel="noopener">Apartar fecha</a>
      <a class="btn btn-line" href="contacto.html">Cómo llegar</a>
    </div>
  </div>
</section>`,
});

/* ---------- CONTACTO ---------- */
paginas.push({
  archivo: 'contacto.html',
  titulo: 'Cómo llegar y horarios · END GAME Santo Domingo',
  desc: 'END GAME queda en la Av. Venezuela, vía al Bombolí Shopping, Santo Domingo. Abierto de martes a domingo de 08:00 a 17:00.',
  cuerpo: `${cabecera('Cómo llegar', 'Cómo llegar', 'Estamos en la Av. Venezuela, en dirección al Bombolí Shopping. Hay dónde parquear.')}

<section>
  <div class="wrap split wide-left">
    <div>
      <span class="eyebrow">Dirección</span>
      <h2>Av. Venezuela,<br>vía al Bombolí</h2>
      <p style="font-size:1.12rem; color:var(--text)">Av. Venezuela, Santo Domingo de los Tsáchilas</p>
      <p>En dirección al Bombolí Shopping. Busca el letrero azul de END GAME sobre la vía.</p>
      <ul class="hours">
        <li><span>Martes a domingo</span><b>08:00 – 17:00</b></li>
        <li class="off"><span>Lunes</span><b>Cerrado</b></li>
      </ul>
      <div class="hero-cta">
        <a class="btn btn-neon" href="${MAPS}" target="_blank" rel="noopener">Abrir en Google Maps</a>
        <a class="btn btn-line" href="${wa('Hola END GAME, necesito ayuda para llegar al local.')}" target="_blank" rel="noopener">Pedir indicaciones</a>
      </div>
    </div>
    <div class="mapbox">
      <iframe src="https://www.google.com/maps?q=-0.2549392,-79.1891837&hl=es&z=16&output=embed"
              title="Ubicación de END GAME en Santo Domingo"
              loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap split">
    <div class="video-vert">
      <video controls muted loop playsinline preload="metadata"
             aria-label="Video: cómo llegar a END GAME por la Av. Venezuela">
        <source src="video/ubicacion.mp4" type="video/mp4">
        Tu navegador no puede reproducir este video.
      </video>
    </div>
    <div>
      <span class="eyebrow">En video</span>
      <h2>Mira cómo llegar</h2>
      <p>Si es tu primera vez, este recorrido te deja en la puerta. Busca el letrero azul de END GAME sobre la Av. Venezuela, en dirección al Bombolí Shopping.</p>
      <ul class="spec">
        <li>Hay dónde parquear frente al local</li>
        <li>Entrar es gratis, solo pagas los juegos</li>
        <li>Abierto de martes a domingo, 08:00 a 17:00</li>
      </ul>
      <a class="btn btn-neon" href="${MAPS}" target="_blank" rel="noopener">Abrir la ruta en Maps</a>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">Escríbenos</span>
      <h2>Por dónde nos encuentras</h2>
    </div>
    <div class="boxes b3">
      <div class="box">
        <h3>WhatsApp</h3>
        <p>La forma más rápida. Respondemos en horario de atención.</p>
        <a class="btn btn-neon btn-sm" href="${wa('Hola END GAME, quiero información.')}" target="_blank" rel="noopener">098 041 6136</a>
      </div>
      <div class="box">
        <h3>TikTok</h3>
        <p>Ahí subimos los premios ganados, las máquinas nuevas y las promos.</p>
        <a class="btn btn-line btn-sm" href="${TIKTOK}" target="_blank" rel="noopener">Ver el TikTok</a>
      </div>
      <div class="box">
        <h3>¿Tienes un negocio?</h3>
        <p>Vendemos estas mismas máquinas, con repuestos y mantenimiento.</p>
        <a class="btn btn-steel btn-sm" href="negocios.html">Ver Electro Master</a>
      </div>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap">
    <h2>Te esperamos</h2>
    <p>Martes a domingo, de 08:00 a 17:00. Entrar es gratis.</p>
    <div class="btns">
      <a class="btn btn-neon" href="${MAPS}" target="_blank" rel="noopener">Cómo llegar</a>
      <a class="btn btn-line" href="promociones.html">Ver promociones</a>
    </div>
  </div>
</section>`,
});

/* ---------- NEGOCIOS · ELECTRO MASTER ---------- */
paginas.push({
  archivo: 'negocios.html',
  titulo: 'Electro Master · Venta de máquinas, repuestos y mantenimiento',
  desc: 'Electro Master vende, instala y da mantenimiento a máquinas de entretenimiento en Santo Domingo: grúas, máquinas de premios, simuladores VR y repuestos.',
  clase: 'em-page',
  cuerpo: `<header class="pagehead">
  <div class="wrap">
    <a class="em-back" href="index.html">← Volver a END GAME</a>
    <img class="em-logo" src="img/electromaster-logo-oscuro.png" alt="Electro Master · Venta y mantenimiento">
    <h1>Máquinas para tu negocio</h1>
    <p>Electro Master es la marca detrás de las máquinas de END GAME. Importamos directo de fábrica, instalamos y damos mantenimiento en Santo Domingo.</p>
  </div>
</header>

<section>
  <div class="wrap split wide-left">
    <div>
      <span class="eyebrow">La ventaja</span>
      <h2>Pruébalas antes de comprarlas</h2>
      <p>No vendemos por catálogo. Todas nuestras máquinas están funcionando en END GAME, con gente jugando encima todos los días.</p>
      <p>Ven, míralas trabajar, calcula cuánto recaudan, y recién ahí decides. Si te convencen, te las llevamos instaladas.</p>
      <ul class="spec">
        <li><b>Importación directa</b> — sin intermediarios de por medio</li>
        <li><b>Instalación incluida</b> en Santo Domingo</li>
        <li><b>Repuestos en stock</b> para no parar la máquina</li>
        <li><b>Servicio técnico propio</b>, no tercerizado</li>
      </ul>
      <div class="hero-cta">
        <a class="btn btn-neon" href="#cotizar">Pedir una cotización</a>
        <a class="btn btn-line" href="${wa('Hola Electro Master, necesito repuestos o mantenimiento para mi máquina.')}" target="_blank" rel="noopener">Repuestos y servicio</a>
      </div>
    </div>
    <div class="frame"><img src="img/prizeout-rueda.jpg" alt="Detalle del mecanismo de una máquina de premios Electro Master" loading="lazy"></div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">Qué hacemos</span>
      <h2>Cuatro servicios</h2>
    </div>
    <div class="boxes">
      <div class="box">
        <h3>Venta de máquinas</h3>
        <p>Grúas de peluches, máquinas de premios, cápsulas, arcade y equipo infantil. Nuevo, importado directo de fábrica.</p>
      </div>
      <div class="box">
        <h3>Simuladores de realidad virtual</h3>
        <p>Cabinas 9D tipo Super 360 Flight y VR Paraglider, bajo pedido, con instalación y capacitación incluidas.</p>
      </div>
      <div class="box">
        <h3>Repuestos</h3>
        <p>Tarjetas, monederos, arneses de cableado, botones, fuentes y todo lo que necesita una máquina para no parar.</p>
      </div>
      <div class="box">
        <h3>Mantenimiento</h3>
        <p>Servicio técnico en Santo Domingo para cualquier marca, no solo la nuestra. Preventivo y correctivo.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">Para quién</span>
      <h2>Si tienes un local, esto rinde</h2>
    </div>
    <div class="boxes b3">
      <div class="box"><h3>Tiendas y minimarkets</h3><p>Una máquina en la entrada trabaja sola y aprovecha metros que hoy no producen nada.</p></div>
      <div class="box"><h3>Patios de comida</h3><p>Entretiene a los niños mientras la familia come, y alarga el tiempo de permanencia.</p></div>
      <div class="box"><h3>Salas de juego</h3><p>Si ya operas, te vendemos el equipo y te resolvemos los repuestos sin esperar importaciones.</p></div>
    </div>
  </div>
</section>

<section id="cotizar">
  <div class="wrap">
    <div class="sec-head">
      <span class="eyebrow">Cotización</span>
      <h2>Cuéntanos de tu negocio</h2>
      <p>Con estos datos te mandamos una propuesta concreta, no un catálogo genérico. Toma dos minutos y respondemos dentro del horario de atención.</p>
    </div>

    <div class="form-wrap">
      <form id="form-negocios" action="https://api.web3forms.com/submit" method="POST">
        <!-- Reemplazar por la clave real de web3forms.com (gratis, 250 envíos/mes) -->
        <input type="hidden" name="access_key" value="PEGAR-AQUI-LA-CLAVE-DE-WEB3FORMS">
        <input type="hidden" name="subject" value="Nueva cotización desde la web · Electro Master">
        <input type="hidden" name="from_name" value="Web Electro Master">
        <input type="hidden" name="redirect" value="https://electromastersd.com/gracias.html">
        <!-- trampa antispam: los robots la llenan, las personas no la ven -->
        <input type="checkbox" name="botcheck" class="oculto" tabindex="-1" autocomplete="off">

        <div class="form-grid">

          <div class="campo">
            <label for="nombre">Nombre y apellido<span class="req">*</span></label>
            <input id="nombre" name="nombre" type="text" required autocomplete="name" placeholder="Cómo te llamas">
          </div>

          <div class="campo">
            <label for="negocio">Nombre del negocio</label>
            <input id="negocio" name="negocio" type="text" autocomplete="organization" placeholder="Si ya tiene nombre">
          </div>

          <div class="campo">
            <label for="whatsapp">WhatsApp<span class="req">*</span></label>
            <input id="whatsapp" name="whatsapp" type="tel" required autocomplete="tel" inputmode="tel" placeholder="09XXXXXXXX">
          </div>

          <div class="campo">
            <label for="correo">Correo<span class="req">*</span></label>
            <input id="correo" name="correo" type="email" required autocomplete="email" placeholder="tunombre@correo.com">
          </div>

          <div class="campo">
            <label for="ciudad">Ciudad o sector<span class="req">*</span></label>
            <input id="ciudad" name="ciudad" type="text" required placeholder="Santo Domingo, Quevedo, La Concordia...">
            <p class="ayuda">Nos dice si podemos instalar y dar servicio.</p>
          </div>

          <div class="campo">
            <label for="negocio_tipo">Qué tipo de local tienes<span class="req">*</span></label>
            <select id="negocio_tipo" name="negocio_tipo" required>
              <option value="" disabled selected>Elige una opción</option>
              <option>Tienda, minimarket o despensa</option>
              <option>Restaurante o patio de comidas</option>
              <option>Sala de juegos o parque infantil</option>
              <option>Local en centro comercial</option>
              <option>Hotel, hostería o balneario</option>
              <option>Todavía no tengo local, quiero emprender</option>
              <option>Otro</option>
            </select>
          </div>

          <div class="campo">
            <label for="necesita">Qué necesitas<span class="req">*</span></label>
            <select id="necesita" name="necesita" required>
              <option value="" disabled selected>Elige una opción</option>
              <option>Comprar máquinas</option>
              <option>Repuestos</option>
              <option>Mantenimiento o reparación</option>
              <option>Alquiler para un evento</option>
              <option>Todavía estoy averiguando</option>
            </select>
          </div>

          <div class="campo">
            <label for="maquinas">Máquinas que ya tienes<span class="req">*</span></label>
            <select id="maquinas" name="maquinas" required>
              <option value="" disabled selected>Elige una opción</option>
              <option>Ninguna, sería la primera</option>
              <option>Entre 1 y 3</option>
              <option>Entre 4 y 10</option>
              <option>Más de 10</option>
            </select>
            <p class="ayuda">Para saber si necesitas asesoría o solo el equipo.</p>
          </div>

          <div class="campo">
            <label for="espacio">Espacio disponible</label>
            <select id="espacio" name="espacio">
              <option value="" disabled selected>Elige una opción</option>
              <option>Menos de 5 m² (una o dos máquinas)</option>
              <option>Entre 5 y 15 m²</option>
              <option>Entre 15 y 40 m²</option>
              <option>Más de 40 m²</option>
              <option>No lo sé todavía</option>
            </select>
            <p class="ayuda">Define qué equipo entra y cómo se distribuye.</p>
          </div>

          <div class="campo">
            <label for="plazo">Para cuándo lo necesitas</label>
            <select id="plazo" name="plazo">
              <option value="" disabled selected>Elige una opción</option>
              <option>Lo antes posible</option>
              <option>Dentro del próximo mes</option>
              <option>En dos o tres meses</option>
              <option>Solo estoy cotizando</option>
            </select>
          </div>

          <div class="campo full">
            <label for="mensaje">Cuéntanos brevemente</label>
            <textarea id="mensaje" name="mensaje" placeholder="Qué máquina te interesa, qué falla tiene la tuya, o cualquier detalle que nos sirva."></textarea>
          </div>

          <div class="campo full">
            <div class="consent">
              <input id="acepto" name="acepto" type="checkbox" required value="Sí">
              <label for="acepto">Autorizo a Electro Master a contactarme por WhatsApp o correo para responder esta solicitud.<span class="req">*</span></label>
            </div>
          </div>

        </div>

        <div class="form-pie">
          <button class="btn btn-neon" type="submit">Enviar solicitud</button>
          <p class="nota">¿Prefieres escribir directo? <a href="${wa('Hola Electro Master, tengo un local y quiero información sobre las máquinas.')}" target="_blank" rel="noopener">Háblanos por WhatsApp</a>.</p>
        </div>

        <div class="aviso" id="aviso-form" role="status" aria-live="polite"></div>
      </form>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap">
    <h2>O ven a verlas funcionando</h2>
    <p>Están todas en END GAME, en la Av. Venezuela. Entrar es gratis y puedes mirarlas trabajar con público encima.</p>
    <div class="btns">
      <a class="btn btn-neon" href="contacto.html">Visitar el local</a>
      <a class="btn btn-line" href="${wa('Hola Electro Master, quiero coordinar una visita para ver las máquinas.')}" target="_blank" rel="noopener">Coordinar una visita</a>
    </div>
  </div>
</section>`,
  scripts: ['js/formulario.js'],
});

/* ---------- GRACIAS ---------- */
paginas.push({
  archivo: 'gracias.html',
  titulo: 'Solicitud enviada · Electro Master',
  desc: 'Recibimos tu solicitud de cotización. Te contactamos dentro del horario de atención.',
  clase: 'em-page',
  cuerpo: `<section class="gracias">
  <div class="wrap">
    <span class="eyebrow">Solicitud recibida</span>
    <h1>Gracias, ya la tenemos</h1>
    <p>Revisamos tu solicitud y te escribimos al WhatsApp o al correo que nos dejaste, dentro del horario de atención: martes a domingo, de 08:00 a 17:00.</p>
    <div class="btns">
      <a class="btn btn-neon" href="negocios.html">Volver a Electro Master</a>
      <a class="btn btn-line" href="index.html">Conocer END GAME</a>
    </div>
  </div>
</section>`,
});

/* ============================================================
   ESCRIBIR
   ============================================================ */
let n = 0;
for (const p of paginas) {
  fs.writeFileSync(path.join(RAIZ, p.archivo), pagina(p), 'utf8');
  console.log('  ✓ ' + p.archivo);
  n++;
}
console.log('\n' + n + ' páginas generadas.');
