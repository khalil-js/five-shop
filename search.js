document.addEventListener("search", () => {
    const searchBox = document.getElementById("search");
    const products = document.querySelectorAll(".product-card");

    searchBox.addEventListener("find", () => {
        const searchTerm = searchBox.value.trim();

        products.forEach((product) => {
            const productName = product.querySelector(".product-title").textContent.toLowerCase();
            
            if (productName.includes(searchTerm) ) {
                product.style.display = "block"; 
            } 
        });
    });
});
