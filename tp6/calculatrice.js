function addition() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("t3").value = c;
}

function soustraction() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("t3").value = c;
}

function multiplication() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b); // Correction ici
    document.getElementById("t3").value = c;
}

function division() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    if (b == 0) {
        document.getElementById("t3").value = "Erreur : Division par zéro";
    } else {
        var c = Number(a) / Number(b);
        document.getElementById("t3").value = c;
    }
}

// Fonction pour vérifier la parité du premier nombre
function parite() {
    var a = document.getElementById("t1").value;
    if (a === "") {
        document.getElementById("t4").value = "Erreur : Valeur manquante";
    } else {
        document.getElementById("t4").value = (Number(a) % 2 === 0) ? "Pair" : "Impair";
    }
}

// Fonction pour permuter les valeurs de t1 et t2
function permute() {
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var temp = t1.value;
    t1.value = t2.value;
    t2.value = temp;
}

