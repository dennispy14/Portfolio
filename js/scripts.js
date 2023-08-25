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
