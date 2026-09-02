/* =====================================================
   MENÚ RESPONSIVE
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


/* =====================================================
   CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });
});


/* =====================================================
   BOTÓN VOLVER ARRIBA
===================================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   FRASES DE ALBERT EINSTEIN
===================================================== */

const quotes = [

    "La imaginación es más importante que el conocimiento.",

    "La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote.",

    "No podemos resolver nuestros problemas con el mismo pensamiento que usamos cuando los creamos.",

    "Lo importante es no dejar de hacerse preguntas.",

    "En medio de la dificultad se encuentra la oportunidad."

];


let currentQuote = 0;

const quoteText = document.getElementById("quoteText");
const quoteCounter = document.getElementById("quoteCounter");

const nextQuote = document.getElementById("nextQuote");
const prevQuote = document.getElementById("prevQuote");


function showQuote(index) {

    if (!quoteText || !quoteCounter) {
        return;
    }

    quoteText.style.opacity = "0";

    setTimeout(() => {

        quoteText.textContent = quotes[index];

        quoteCounter.textContent =
            String(index + 1).padStart(2, "0")
            + " / "
            + String(quotes.length).padStart(2, "0");

        quoteText.style.opacity = "1";

    }, 300);

}


/* =====================================================
   BOTÓN SIGUIENTE
===================================================== */

if (nextQuote) {

    nextQuote.addEventListener("click", () => {

        currentQuote++;

        if (currentQuote >= quotes.length) {
            currentQuote = 0;
        }

        showQuote(currentQuote);

    });

}


/* =====================================================
   BOTÓN ANTERIOR
===================================================== */

if (prevQuote) {

    prevQuote.addEventListener("click", () => {

        currentQuote--;

        if (currentQuote < 0) {
            currentQuote = quotes.length - 1;
        }

        showQuote(currentQuote);

    });

}


/* =====================================================
   CAMBIO AUTOMÁTICO DE FRASES
   15 SEGUNDOS
===================================================== */

setInterval(() => {

    currentQuote++;

    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }

    showQuote(currentQuote);

}, 15000);


/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const animatedElements = document.querySelectorAll(
    ".life-card, .science-card, .legacy-cards article, .curiosity-grid article, .timeline-item"
);


/*
   Comprobamos que el navegador tenga
   IntersectionObserver antes de utilizarlo.
*/

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    setTimeout(() => {

                        entry.target.classList.add("visible");

                    }, 100);

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(element => {
        observer.observe(element);
    });

}


/* =====================================================
   EFECTO EN LA NAVEGACIÓN
===================================================== */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(16, 16, 16, 0.98)";

        } else {

            navbar.style.background =
                "rgba(16, 16, 16, 0.96)";

        }

    });

}


/* =====================================================
   IMÁGENES
===================================================== */

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("load", () => {

        image.style.opacity = "1";
    });

});