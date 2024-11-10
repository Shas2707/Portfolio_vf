function calculerArticle1() {
    var prix = Number(document.getElementById("prix1").value);
    var quantite = Number(document.getElementById("quantite1").value);
    document.getElementById("resultat1").value = (prix * quantite).toFixed(2);
}

function calculerArticle2() {
    var prix = Number(document.getElementById("prix2").value);
    var quantite = Number(document.getElementById("quantite2").value);
    document.getElementById("resultat2").value = (prix * quantite).toFixed(2);
}

function calculerArticle3() {
    var prix = Number(document.getElementById("prix3").value);
    var quantite = Number(document.getElementById("quantite3").value);
    document.getElementById("resultat3").value = (prix * quantite).toFixed(2);
}

function calculerTotal() {
    var resultat1 = Number(document.getElementById("resultat1").value);
    var resultat2 = Number(document.getElementById("resultat2").value);
    var resultat3 = Number(document.getElementById("resultat3").value);
    document.getElementById("total").value = (resultat1 + resultat2 + resultat3).toFixed(2);
}
function calculer() {
    calculerArticle1();
    calculerArticle2();
    calculerArticle3();
    calculerTotal();
}

function reinitialiser() {
    document.getElementById("prix1").value = "";
    document.getElementById("quantite1").value = "";
    document.getElementById("resultat1").value = "";
    document.getElementById("prix2").value = "";
    document.getElementById("quantite2").value = "";
    document.getElementById("resultat2").value = "";
    document.getElementById("prix3").value = "";
    document.getElementById("quantite3").value = "";
    document.getElementById("resultat3").value = "";
    document.getElementById("total").value = "";
}
function retour() {
    window.location.href = "../index.html?skipIntro=true"; 
}
