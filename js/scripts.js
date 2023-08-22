const sections = document.querySelectorAll('.section');
let currentSectionIndex = 0;

function scrollToSection(sectionIndex) {
    if (sectionIndex >= 0 && sectionIndex < sections.length) {
        sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex = sectionIndex;
        animateFallingText(sections[sectionIndex]);
    }
}

function toggleCardContent(card) {
    card.classList.toggle('open');
}

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        scrollToSection(currentSectionIndex + 1);
    } else {
        scrollToSection(currentSectionIndex - 1);
    }
});

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
    void fallingText.offsetWidth; // Trigger reflow to restart animation
    fallingText.style.animation = null;
}

window.addEventListener('scroll', animateSections);

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
