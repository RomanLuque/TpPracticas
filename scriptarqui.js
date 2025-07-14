const header = document.querySelector('header');

const coloresPorSeccion = {
  peris: '#ce00b2ff',
  memorias: '#26a100ff',
};

const colorOriginal = '#3a5ec0'; 

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