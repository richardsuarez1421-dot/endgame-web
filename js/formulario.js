/* Formulario de negocios.
   Mientras la clave de Web3Forms sea la de ejemplo, el envío se
   intercepta y se muestra un aviso, para que el demo se pueda
   recorrer completo sin dar error. */
(function () {
  var form = document.getElementById('form-negocios');
  if (!form) return;

  var aviso = document.getElementById('aviso-form');
  var clave = form.querySelector('input[name="access_key"]');
  var CLAVE_EJEMPLO = 'PEGAR-AQUI-LA-CLAVE-DE-WEB3FORMS';

  form.addEventListener('submit', function (e) {
    if (!clave || clave.value !== CLAVE_EJEMPLO) return; // clave real: envía normal

    e.preventDefault();
    if (!form.reportValidity()) return;

    var datos = new FormData(form);
    var resumen = [];
    ['negocio_tipo', 'necesita', 'espacio', 'maquinas', 'plazo'].forEach(function (k) {
      var v = datos.get(k);
      if (v) resumen.push(v);
    });

    aviso.innerHTML =
      '<b>Modo demo:</b> el formulario todavía no está conectado a un correo, ' +
      'así que este envío no salió. Con la clave de Web3Forms puesta, ' +
      'este mensaje llegaría a la bandeja de Electro Master.' +
      (resumen.length ? '<br><br>Se habría enviado: ' + resumen.join(' · ') : '');
    aviso.classList.add('visible');
    aviso.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
