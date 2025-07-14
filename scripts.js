const header = document.querySelector('header');

const coloresPorSeccion = {
  html: '#ff0026ff',
  css: '#157aaa',
  sql: '#de8608',
  git: '#3f3e3a',
  cpp: '#67179c'
};

const colorOriginal = '#990000'; 

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    const seccion = link.getAttribute('href').substring(1);
    const color = coloresPorSeccion[seccion];
    if (color) {
      header.style.backgroundColor = color;
      setTimeout(() => {
        header.style.backgroundColor = colorOriginal;
      }, 7000); 
    }
  });
});

    const respuestasCorrectas = [
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false
    ];

    function verificarRespuesta(numeroPregunta, respuestaUsuario) {
      const resultado = document.getElementById("resultado" + numeroPregunta);
      const respuestaCorrecta = respuestasCorrectas[numeroPregunta - 1];

      if (respuestaUsuario === respuestaCorrecta) {
        resultado.textContent = "✔️ Verdadero";
        resultado.style.color = "green";
      } else {
        resultado.textContent = "❌ Falso";
        resultado.style.color = "red";
      }
    }
