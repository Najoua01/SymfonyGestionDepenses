import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../styles/calendrier.css';

// calendrier.js
document.addEventListener('DOMContentLoaded', function () {
    var conteneurCalendrier = document.getElementById('calendrier');
    
    // Configuration du calendrier
    var calendrier = new Calendar(conteneurCalendrier, {
        plugins: ['dayGridPlugin'],
        // Vue initiale du calendrier
        initialView: 'dayGridMonth',
        events: [
            // Ajoutez ici vos événements, sous la forme d'un tableau d'objets
            // Exemple : { title: 'Nom de l'événement', start: '2023-11-01' }
        ], 

        dateClick: function (info) {
            // Lorsqu'une date est cliquée, redirigez l'utilisateur vers la page définie
            window.location.href = '/depenseForm';
        },

        // Propriété dayGridPlugin pour éviter le message d'avertissement
        dayGridPlugin: dayGridPlugin,
    });

    // Affichez le calendrier
    calendrier.render();
});
