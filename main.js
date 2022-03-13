// DOM Document Object Model

// console.log(toggle)


// A função abaixo abre e fecha o menu qndo clicar no icone do menu e x.
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// A função abaixo esconderá o menu quando tivermos um click em algum dos itens.
const links = document.querySelectorAll('nav ul li a.title')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// A função abaixo ira adicionar uma sombra no header quando rolarmos a pagina.
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
    
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/* Inteligencia do Botão voltar ao topo */
const buttonBackToTop = document.querySelector('.back-to-top')
function changeButtonWhenScroll() {
    if(window.scrollY >= 560) {
        buttonBackToTop.classList.add('show')
    } else {
        buttonBackToTop.classList.remove('show')
    }
}

/* Função para o carrocel dos testemunhos */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});


/* Função para o scroll, para mostrar os elemntos quando der i scroll da pagina. */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '700',
    reset: true
})

scrollReveal.reveal(
   `#home .image, #home .text,
    #about .image, #about .text,
    #services .header, #services .card,
    #testimonials .header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
   `
    , { interval: 100 }
)

/* Menu ativo conforme sessao ativa na pagina */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection () {
    const screenPosition = window.pageYOffset + (window.innerHeight / 8) * 4
    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        
        const screenPositionStart = screenPosition >= sectionTop
        const screenPositionEnd = screenPosition <= sectionTop + sectionHeight

        if(screenPositionStart && screenPositionEnd) {
            document
            .querySelector('nav ul li a[href*=]' + sectionId + ']')
            .classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=]' + sectionId + ']')
            .classList.remove('active')
        }
    }

}

/* Função de Scroll da pagina */
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    changeButtonWhenScroll()
    activateMenuAtCurrentSection()
})


