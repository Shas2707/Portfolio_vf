function afficherCode(id) {
    let codeBox = document.getElementById(id);
    if (codeBox.style.display === "block") {
        codeBox.style.display = "none";
    } else {
        codeBox.style.display = "block";
    }
}

function convertirTemperature() {
    const celsius = prompt("Entrez la température en °C :");
    if (!isNaN(celsius) && celsius !== null) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        alert(`${celsius}°C = ${fahrenheit}°F`);
    } else {
        alert("Veuillez entrer un nombre valide !");
    }
}

function augmenterTaille() {
    let texte = document.getElementById('texte');
    let taille = parseInt(window.getComputedStyle(texte).fontSize);
    texte.style.fontSize = (taille + 2) + 'px';
}

function reduireTaille() {
    let texte = document.getElementById('texte');
    let taille = parseInt(window.getComputedStyle(texte).fontSize);
    texte.style.fontSize = (taille - 2) + 'px';
}

// Compteur de clics
function incrementer() {
    let compteur = document.getElementById('compteur');
    compteur.textContent = parseInt(compteur.textContent) + 1;
}

// Salutation selon l'heure
function saluer() {
    const heure = new Date().getHours();
    if (heure < 12) {
        alert("Bonjour");
    } else if (heure < 18) {
        alert("Bon après-midi");
    } else {
        alert("Bonsoir");
    }
}

// Calculer l'âge
function calculerAge() {
    const anneeNaissance = prompt("Entrez votre année de naissance :");
    if (!isNaN(anneeNaissance) && anneeNaissance !== null) {
        const anneeActuelle = new Date().getFullYear();
        alert(`Votre âge est : ${anneeActuelle - anneeNaissance}`);
    } else {
        alert("Veuillez entrer une année valide !");
    }
}

// Trouver le nombre maximum
function trouverMax() {
    const nombres = prompt("Entrez des nombres séparés par des virgules :");
    if (nombres) {
        const arrayNombres = nombres.split(",").map(Number);
        if (arrayNombres.every(n => !isNaN(n))) {
            const max = Math.max(...arrayNombres);
            alert(`Le nombre maximum est : ${max}`);
        } else {
            alert("Veuillez entrer uniquement des nombres valides !");
        }
    }
}

// Compter les voyelles
function compterVoyelles() {
    const texte = prompt("Entrez un texte :").toLowerCase();
    const voyelles = texte.match(/[aeiouy]/g);
    alert(`Nombre de voyelles : ${voyelles ? voyelles.length : 0}`);
}

// Calculer le pourboire
function calculerPourboire() {
    const montant = parseFloat(prompt("Entrez le montant de l'addition (€):"));
    if (!isNaN(montant)) {
        const pourboire = (montant * 0.15).toFixed(2);
        alert(`Le pourboire recommandé est : ${pourboire} €`);
    } else {
        alert("Veuillez entrer un montant valide !");
    }
}

// Vérifier si un nombre est pair ou impair
function verifierPairImpair() {
    const nombre = parseInt(prompt("Entrez un nombre :"));
    if (!isNaN(nombre)) {
        const resultat = nombre % 2 === 0 ? "pair" : "impair";
        alert(`Le nombre ${nombre} est ${resultat}.`);
    } else {
        alert("Veuillez entrer un nombre valide !");
    }
}

// Calculer les calories brûlées
function calculerCalories() {
    const poids = parseFloat(prompt("Entrez votre poids (kg) :"));
    const temps = parseFloat(prompt("Entrez le temps de course (minutes) :"));
    if (!isNaN(poids) && !isNaN(temps)) {
        const calories = (poids * 0.063) * temps;
        alert(`Vous avez brûlé environ ${calories.toFixed(2)} calories.`);
    } else {
        alert("Veuillez entrer des valeurs valides !");
    }
}

// Calculer le périmètre d'un rectangle
function calculerPerimetre() {
    const longueur = parseFloat(prompt("Entrez la longueur du rectangle (cm) :"));
    const largeur = parseFloat(prompt("Entrez la largeur du rectangle (cm) :"));
    if (!isNaN(longueur) && !isNaN(largeur)) {
        const perimetre = 2 * (longueur + largeur);
        alert(`Le périmètre du rectangle est : ${perimetre} cm`);
    } else {
        alert("Veuillez entrer des dimensions valides !");
    }
}

// Créer un tableau dynamique
function creerTableau() {
    const taille = parseInt(prompt("Entrez la taille du tableau :"));
    if (!isNaN(taille) && taille > 0) {
        let tableau = [];
        for (let i = 0; i < taille; i++) {
            tableau.push(prompt(`Entrez l'élément ${i+1} :`));
        }
        alert(`Tableau créé: ${tableau.join(', ')}`);
    } else {
        alert("Veuillez entrer une taille valide !");
    }
}

// Vérifier si un mot est un palindrome
function verifierPalindrome() {
    const mot = prompt("Entrez un mot :").toLowerCase();
    if (mot) {
        const motInverse = mot.split('').reverse().join('');
        alert(mot === motInverse ? "Le mot est un palindrome." : "Le mot n'est pas un palindrome.");
    } else {
        alert("Veuillez entrer un mot !");
    }
}

// Convertir un nombre en binaire
function convertirBinaire() {
    const nombre = parseInt(prompt("Entrez un nombre :"));
    if (!isNaN(nombre)) {
        alert(`Le nombre ${nombre} en binaire est : ${nombre.toString(2)}`);
    } else {
        alert("Veuillez entrer un nombre valide !");
    }
}

function animerElement() {
    let elem = document.createElement('div');
    elem.textContent = "Je suis animé!";
    elem.style.position = "absolute";
    elem.style.left = "0px";
    elem.style.top = "0px";
    elem.style.backgroundColor = "red";
    elem.style.padding = "10px";
    document.body.appendChild(elem);

    let posX = 0;
    let posY = 0;
    function deplacer() {
        if (posX < window.innerWidth - 100) {
            posX += 5;
            posY += 3;
            elem.style.left = posX + "px";
            elem.style.top = posY + "px";
            requestAnimationFrame(deplacer);
        }
    }
    deplacer();
}
