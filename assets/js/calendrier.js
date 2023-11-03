import '../styles/calendrier.css';

// calendrier.js
document.addEventListener('DOMContentLoaded', function () {
    var conteneurCalendrier = document.getElementById('calendrier');
    
    var calendrier = new FullCalendar.Calendar(conteneurCalendrier, {
        // ... Configuration de votre calendrier ...

        dateClick: function (info) {
            // Lorsqu'une date est cliquée, redirigez l'utilisateur vers la page définie dans votre contrôleur Symfony
            window.location.href = '/depenseForm';
        }
    });

    calendrier.render();
});
