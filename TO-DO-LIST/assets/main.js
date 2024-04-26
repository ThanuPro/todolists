document.addEventListener('DOMContentLoaded', function() {
    const formulaire = document.querySelector('.container_formulaire');
    const addTache = document.getElementById('add');
    const cardsContainer = document.querySelector('.cards-container');
    const petSelect = document.getElementById('pet-select');

    document.getElementById('btn').addEventListener('click', function() {
        formulaire.style.display = "block";
    });

    document.getElementById('xmark').addEventListener('click', function() {
        formulaire.style.display = "none";
    });

    addTache.addEventListener('click', function() {
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const tache = document.getElementById('tache').value;
        const description = document.getElementById('tache_a_effectuer').value;
        const jour = petSelect.value; 

       
        const nouvelleCarte = document.createElement('div');
        nouvelleCarte.classList.add('card');
        nouvelleCarte.innerHTML = `
            <span>Nom : ${nom}</span>
            <span>Prénom : ${prenom}</span>
            <span>Tâche : ${tache}</span>
            <span>Description : ${description}</span>
        `;

      
        const colonne = document.getElementById(jour);
        if (colonne) {
            colonne.appendChild(nouvelleCarte);
        }

        
        document.getElementById('nom').value = '';
        document.getElementById('prenom').value = '';
        document.getElementById('tache').value = '';
        document.getElementById('tache_a_effectuer').value = '';

       
        formulaire.style.display = "none";
    });
});

document.getElementById('create-account-button').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    document.getElementById('signup-form').style.display = 'none';
});