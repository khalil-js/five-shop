document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnails");
  const addToCartBtn = document.getElementById("addToCart");
  const cartMessage = document.getElementById("cartMessage");
  let product = document.getElementsByClassName("product-card");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      mainImage.src = thumbnail.src;
    });
  });

  addToCartBtn.addEventListener("click", () => {
    cartMessage.classList.remove("hidden");
    setTimeout(() => {
      cartMessage.classList.add("hidden");
    }, 2000);
  });
});

function goToProductPage(event) {
  let productCard = event.currentTarget;

  let title = productCard.querySelector(".product-title").innerText;
  let description = productCard.querySelector(".product-description").innerText;
  let price = productCard.querySelector(".product-price").innerText;
  let image = productCard.querySelector(".product-img").src;

  let thumbnails = [];
  let thumbnailElements = productCard.querySelectorAll(".product-img");
  thumbnailElements.forEach((thumb) => thumbnails.push(thumb.src));

  const product = { title, description, price, image, thumbnails };

  localStorage.setItem("selectedProduct", JSON.stringify(product));

  window.location.href = "product.html";
}

document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", goToProductPage);
});
document.addEventListener("DOMContentLoaded", function () {
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
});
