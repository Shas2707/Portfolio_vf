document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.querySelector('.sub-menu').style.display = 'block';
    });
    item.addEventListener('mouseleave', function () {
        this.querySelector('.sub-menu').style.display = 'none';
    });
});

function playMusic(id) {
    console.log('Lecture de la musique pour:', id);
    if (players[id]) {
        players[id].playVideo();
    }
}
<script>
// Charger les avis depuis le localStorage et afficher
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const reviewsContainer = document.getElementById("reviewsContainer");
    reviewsContainer.innerHTML = ""; 
    reviews.forEach(review => {
        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");
        reviewDiv.innerHTML = `
            <p><strong>Note:</strong> ${review.rating} étoiles</p>
            <p><strong>Commentaire:</strong> ${review.comment}</p>
            <hr>
        `;
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Ajouter un nouvel avis
function addReview(event) {
    event.preventDefault(); 
    const rating = document.querySelector('input[name="rating"]:checked');
    const comment = document.getElementById("comment").value;

    if (!rating) {
        alert("Veuillez sélectionner une note.");
        return;
    }

    const newReview = {
        rating: rating.value,
        comment: comment || "Pas de commentaire"
    };

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    loadReviews();
    document.getElementById("reviewForm").reset();
}

// Ajouter un événement au formulaire
document.getElementById("reviewForm").addEventListener("submit", addReview);

// Charger les avis existants au chargement de la page
window.onload = loadReviews;
</script>