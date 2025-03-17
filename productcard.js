// Sample product data
const products = [
  {
    title: "Stylish Hoodie",
    description: "Comfortable and trendy hoodie for all seasons.",
    price: "$79.99",
    image: "clothes/Girocollo.jpeg",
    thumbnails: ["clothes/Girocollo.jpeg", "clothes/Girocollo2.jpeg"],
  },
  {
    title: "Retro Jacket",
    description: "A classic style jacket for any occasion.",
    price: "$79.99",
    image: "clothes/Retro modello.jpeg",
    thumbnails: ["clothes/Retro modello.jpeg", "clothes/Retro2.jpeg"],
  },
  {
    title: "Casual T-Shirt",
    description: "Perfect for everyday wear, soft and stylish.",
    price: "$79.99",
    image: "clothes/téléchargé (5).jpeg",
    thumbnails: ["clothes/téléchargé (5).jpeg", "clothes/tshirt2.jpeg"],
  },
  {
    title: "Winter Coat",
    description: "Stay warm and cozy with this premium coat.",
    price: "$79.99",
    image: "clothes/téléchargé (5).jpeg",
    thumbnails: ["clothes/téléchargé (5).jpeg", "clothes/coat2.jpeg"],
  },
];

// Function to create a product card
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <div class="cardimg">
      <img src="${product.image}" alt="${product.title}" class="product-img"/>
      <div class="product-actions">
        <button class="btn cart-btn">
          <img src="icons/shopping-bag.png" alt="Cart"/>
        </button>
        <button class="btn fav-btn">
          <img src="icons/favourite.png" alt="Favorite"/>
        </button>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-description">${product.description}</p>
      <span class="product-price">${product.price}</span>
    </div>
  `;

  // Add event listener to the whole card
  card.addEventListener("click", function () {
    goToProductPage(product);
  });

  return card;
}

// Function to load products into the page
function loadProducts() {
  const productContainer = document.querySelector(".product-container");

  products.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}

// Function to go to product details page
function goToProductPage(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product)); // Save product details
  window.location.href = "product.html"; // Redirect to details page
}

// Load products when the page loads
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    loadProducts();
  }

  if (window.location.pathname.includes("product.html")) {
    let product = JSON.parse(localStorage.getItem("selectedProduct"));

    if (product) {
      document.getElementById("mainImage").src = product.image;
      document.getElementById("productTitle").innerText = product.title;
      document.querySelector(".product-description").innerText =
        product.description;
      document.querySelector(".product-price").innerText = product.price;

      let thumbnailsContainer = document.querySelector(".thumbnails");
      thumbnailsContainer.innerHTML = "";
      product.thumbnails.forEach((thumbSrc) => {
        let thumbImg = document.createElement("img");
        thumbImg.classList.add("thumbnail");
        thumbImg.src = thumbSrc;
        thumbImg.alt = "Thumbnail";
        thumbImg.addEventListener("click", function () {
          document.getElementById("mainImage").src = thumbSrc;
        });
        thumbnailsContainer.appendChild(thumbImg);
      });
    }
  }
});