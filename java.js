

document.addEventListener('DOMContentLoaded', function() {
    // Hämta alla länkar med klassen no-reload-link
    const noReloadLinks = document.querySelectorAll('.no-reload-link');

    // Loopa över varje länk och lägg till en click-event
    noReloadLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Stoppar sidladdningen
            alert(link.textContent + ' klickad, men sidan laddas inte om!');
            // Du kan lägga till ytterligare funktionalitet här om du vill
        });
    });

    // Hämta hjärtikonen och lägg till click-event
    const likeLink = document.getElementById('likeLink');
    const likeIcon = document.getElementById('likeIcon');

    if (likeLink && likeIcon) {
        let isLiked = false; // Börja som ej gillad (svart/grå)

        likeLink.addEventListener('click', function(event) {
            event.preventDefault(); // Stoppar sidladdningen
            alert('like ikonen klickad, men sidan laddas inte om!');
            if (isLiked) {
                likeIcon.style.color = 'grey'; // Ändra till grå
            } else {
                likeIcon.style.color = 'red'; // Ändra till röd
            }
            isLiked = !isLiked; // Växla tillstånd
        });
    }

    // Hämta bild 3 och lägg till click-event
    const cartLink = document.getElementById('cartLink');
    if (cartLink && cartIcon) {
        cartLink.addEventListener('click', function(event) {
            event.preventDefault(); // Stoppar sidladdningen
            alert('Varukorgsikonen klickad, men sidan laddas inte om!');
            // Du kan lägga till funktionalitet för varukorgen här
        });
    };

    // Hämtar alla ackordion-knappar
    const accordions = document.querySelectorAll('.accordion');

    // Loopar igenom alla knappar och lägger till en klick-händelse
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            // Växlar mellan att lägga till och ta bort 'active' klassen
            this.classList.toggle('active');

            // Växlar visning av panelen
            const panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });


});
