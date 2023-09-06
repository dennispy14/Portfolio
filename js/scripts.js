const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0;
let currentSection = 0;
let scrolling = false;// Flag para controlar se a rolagem está acontecendo 

/*Navegação por section do site*/
function scrollToSection(index) {
    if (!scrolling && index >= 0 && index < sections.length) {
        scrolling = true;
        currentSection = index;
        window.scrollTo({
            top: sections[index].offsetTop,
            behavior: 'smooth'
        });
        setTimeout(() => {
            scrolling = false;
        }, 1000);
    }
}

document.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else {
        scrollToSection(currentSection - 1);
    }
});

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchmove', (event) => {
    touchEndY = event.touches[0].clientY;
    const deltaY = touchEndY - touchStartY;

    if (deltaY > 50) {
        scrollToSection(currentSection - 1);
    } else if (deltaY < -50) {
        scrollToSection(currentSection + 1);
    }
});

/*Animação de texto caindo*/
function animateSections() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
}

function animateFallingText(section) {
    const fallingText = section.querySelector('.falling-text');
    fallingText.style.animation = 'none';
    void fallingText.offsetWidth;
    fallingText.style.animation = null;
}

window.addEventListener('scroll', animateSections);



/*Menu responsivo hamburger*/
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/*Cria o Efeito de Digitação */
const typewriterText = document.querySelector('.typewriter-text');
const text = typewriterText.textContent;
typewriterText.textContent = ''; // Limpar o texto inicial

let i = 0;

function type() {
    if (i < text.length) {
        typewriterText.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100); // Tempo entre os caracteres (em milissegundos)
    }
}

type(); // Iniciar a digitação

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 1,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Função para abrir a mini janela
function abrirMiniJanela(num) {

    var miniJanela = document.getElementById('mini-janela');

    var h2 = document.getElementById('tituloSkill')
    var p = document.getElementById('txtSkill')
    miniJanela.style.display = 'block';

    switch (num) {
        case 1:
            h2.textContent = 'Java';
            p.textContent = 'Sou proficiente em Java, com experiência específica em desenvolvimento web baseado em Java EE. Minhas habilidades incluem a criação de aplicativos robustos, gerenciamento de dependências, configuração de segurança e implementação de serviços RESTful. Trabalhei em projetos de backend que abrangem desde a criação de APIs até a integração com bancos de dados, utilizando mapeamento objeto-relacional (ORM) com Hibernate e Java Persistence API (JPA).';
            break;
        case 2:
            h2.textContent = 'JavaScript';
            p.textContent = 'Possuo sólidos conhecimentos em JavaScript e sou capaz de criar aplicativos web interativos e responsivos. Minha experiência inclui o uso de bibliotecas populares como React e Vue.js para criar interfaces de usuário dinâmicas. Além disso, estou familiarizado com os princípios de programação assíncrona e manipulação de eventos para criar experiências de usuário atraentes.';
            break;
        case 3:
            h2.textContent = 'HTML';
            p.textContent = 'Em HTML sou capaz de criar estruturas semânticas para páginas web. Minha experiência inclui a marcação de conteúdo de maneira organizada e acessível, a incorporação de mídia e a criação de formulários interativos. Estou comprometido em seguir as melhores práticas de HTML para garantir que os sites sejam acessíveis e bem estruturados.';
            break;
        case 4:
            h2.textContent = 'CSS';
            p.textContent = 'Tenho experiência em estilização de páginas web usando CSS. Isso inclui a criação de layouts responsivos, seletores CSS avançados e animações. Minha habilidade em CSS também se estende à criação de designs acessíveis e compatíveis com vários navegadores para garantir uma experiência consistente do usuário';
            break;
        default:
            h2.textContent = '';
            p.textContent = '';
    }

    setTimeout(function () {
        miniJanela.classList.add('aberto');
    }, 10); // Pequeno atraso para garantir a transição suave
}
// Função para fechar a mini janela
function fecharMiniJanela() {
    var miniJanela = document.getElementById('mini-janela');
    miniJanela.classList.remove('aberto');
    setTimeout(function () {
        miniJanela.style.display = 'none';
    }, 300); // Espere a animação terminar antes de ocultar completamente (corresponde à duração da transição em milissegundos)
}


