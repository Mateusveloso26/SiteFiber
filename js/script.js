const swiper = new Swiper('.swiper', {
  cssMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: '.swiper.scrollbar',
  },
  keyboard: true,
})

// SCROLLREVEAL
document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 768) {
    ScrollReveal({ reset: false });

    ScrollReveal().reveal('.animacao ', {
      origin: 'bottom',
      distance: '50px',
      duration: 1500,
      easing: 'ease-in-out'
    });


  }
});


// MENU HAMBURGUER
const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('header nav ul');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

window.onscroll = function () {
  scrollFunction()
}

// BOTAO VOLTAR AO TOPO
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('btnTop').style.display = 'block'
  } else {
    document.getElementById('btnTop').style.display = 'none'
  }
}

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}


