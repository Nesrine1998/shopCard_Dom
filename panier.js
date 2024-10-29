document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const totalDisplay = document.getElementById("total");

    let total = 0;

    function updateTotal() {
        totalDisplay.innerText = total.toFixed(2);
    }

    function recalculateTotal() {
        total = 0;
        items.forEach((item) => {
            const price = parseFloat(item.querySelector("p span").innerText);
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

        increaseButton.addEventListener("click", () => {
            let quantity = parseInt(quantityDisplay.innerText);
            quantity++;
            quantityDisplay.innerText = quantity;
            recalculateTotal();
        });

        decreaseButton.addEventListener("click", () => {
            let quantity = parseInt(quantityDisplay.innerText);
            if (quantity > 1) {
                quantity--;
                quantityDisplay.innerText = quantity;
                recalculateTotal();
            }
        });

        deleteButton.addEventListener("click", () => {
            item.remove();
            recalculateTotal();
        });

        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle('liked'); // Changer l'état du cœur
        });
    });

    recalculateTotal();
});
