function addition() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = a + b;
}

function soustraction() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = a - b;
}

function multiplication() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = a * b;
}

function division() {
    var a = Number(document.getElementById("t1").value);
    var b = Number(document.getElementById("t2").value);
    if (b === 0) {
        document.getElementById("t3").value = "Erreur : Division par zéro";
    } else {
        document.getElementById("t3").value = a / b;
    }
}

function parite() {
    var a = document.getElementById("t1").value;
    if (a === "") {
        document.getElementById("t4").value = "Erreur : Valeur manquante";
    } else {
        document.getElementById("t4").value = (Number(a) % 2 === 0) ? "Pair" : "Impair";
    }
}
function permute() {
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    [t1.value, t2.value] = [t2.value, t1.value]; 
}
