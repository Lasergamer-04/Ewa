// Wartet, bis das gesamte HTML-Dokument geladen ist
document.addEventListener("DOMContentLoaded", () => {
    console.log("Die Webseite ist bereit und das Skript ist erfolgreich verbunden!");
    
    // Hier können wir später z.B. Funktionen für ein mobiles Burger-Menü 
    // oder eine Bildergalerie für die Pferde einfügen.
});

document.addEventListener("DOMContentLoaded", () => {
    // Finde alle Bilder (Slides) auf der Seite
    const slides = document.querySelectorAll(".carousel-slide");
    
    // Prüfe, ob es überhaupt ein Karussell auf dieser Seite gibt
    if (slides.length > 0) {
        let slideIndex = 0;
        const nextBtn = document.querySelector(".carousel-btn.next");
        const prevBtn = document.querySelector(".carousel-btn.prev");

        // Funktion, um das richtige Bild anzuzeigen
        function showSlide(index) {
            // Erst alle Bilder verstecken (die Klasse "active" entfernen)
            slides.forEach(slide => slide.classList.remove("active"));
            
            // Wenn wir am Ende sind, springe zum Anfang
            if (index >= slides.length) {
                slideIndex = 0;
            }
            // Wenn wir am Anfang sind und zurück klicken, springe ans Ende
            if (index < 0) {
                slideIndex = slides.length - 1;
            }
            
            // Dem aktuellen Bild die Klasse "active" geben, damit es sichtbar wird
            slides[slideIndex].classList.add("active");
        }

        // Klick auf "Weiter"
        nextBtn.addEventListener("click", () => {
            slideIndex++;
            showSlide(slideIndex);
        });

        // Klick auf "Zurück"
        prevBtn.addEventListener("click", () => {
            slideIndex--;
            showSlide(slideIndex);
        });
    }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Öffnet und schließt das Menü beim Klick auf den Hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Schließt das Menü automatisch, wenn ein Link angeklickt wird
document.querySelectorAll(".nav-menu li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});