document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const totalDisplay = document.getElementById("total");

    let total = 0;

    // Mettre à jour l'affichage du total
    function updateTotal() {
        totalDisplay.innerText = total.toFixed(2);
    }

    // Recalculer le total pour tous les articles
    function recalculateTotal() {
        total = 0;
        const items = document.querySelectorAll(".item"); // Re-sélectionner les articles
        items.forEach((item) => {
            const price = parseFloat(item.querySelector(".price").innerText);
            const quantity = parseInt(item.querySelector(".quantity").innerText);
            total += price * quantity;
        });
        updateTotal();
    }

    items.forEach((item) => {
        const increaseButton = item.querySelector(".add");
        const decreaseButton = item.querySelector(".substract");
        const quantityDisplay = item.querySelector(".quantity");
        const deleteButton = item.querySelector(".delete");
        const likeButton = item.querySelector(".like");

        // Styler notre boutton coeur
        likeButton.style.background = "none";
        likeButton.style.border = "none";
        likeButton.style.fontSize = "20px";
        likeButton.style.color = "black"; 

        // Événement pour augmenter la quantité
        increaseButton.addEventListener("click", () => {
            let quantity = parseInt(quantityDisplay.innerText);
            quantity++;
            quantityDisplay.innerText = quantity;
            recalculateTotal();
        });

        // Événement pour diminuer la quantité
        decreaseButton.addEventListener("click", () => {
            let quantity = parseInt(quantityDisplay.innerText);
            if (quantity > 1) {
                quantity--;
                quantityDisplay.innerText = quantity;
                recalculateTotal();
            }
        });

        // Événement pour supprimer l'article
        deleteButton.addEventListener("click", () => {
            item.remove();
            recalculateTotal(); // Mise à jour du total après suppression
        });

        // Événement pour aimer/désaimer un article (icône cœur)
        likeButton.addEventListener("click", () => {
            if (likeButton.style.color === "black") {
                likeButton.style.color = "red"; // Couleur lors de l'activation
            } else {
                likeButton.style.color = "black"; // Retour à la couleur par défaut
            }
        });
    });

    // Initialiser le total
    recalculateTotal();
});
