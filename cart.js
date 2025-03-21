document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.getElementById("addToCart");
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartItemsContainer = document.getElementById("cart-items");
  const closeCartBtn = document.getElementById("close-cart");
  const openCartBtn = document.getElementById("btn-cart");
  const totalPriceElement = document.getElementById("cart-total");
  const checkoutBtn = document.querySelector(".checkout-btn");

  let cartStorage = JSON.parse(localStorage.getItem("cartStorage")) || [];

  function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    if (cartStorage.length === 0) {
      cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
      totalPriceElement.innerText = "Total: $0.00";
      return;
      
    }

    let total = 0;
    cartStorage.forEach((item, index) => {
      let cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${item.image}" class="cart-img" alt="Item">
        <div class="cart-details">
          <p class="cart-title">${item.name}</p>
          <span class="cart-price">${item.price}</span>
          <input type="number" class="cart-quantity" data-index="${index}" value="${item.quantity}" min="1">
        </div>
        <button class="remove-item" data-index="${index}">&times;</button>
      `;
      cartItemsContainer.appendChild(cartItem);
      total += parseFloat(item.price.replace("$", "")) * item.quantity;
    });

    totalPriceElement.innerText = `Total: $${total.toFixed(2)}`;

    document.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        cartStorage.splice(index, 1);
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));
        updateCartUI();
      });
    });

    document.querySelectorAll(".cart-quantity").forEach(input => {
      input.addEventListener("change", function () {
        let index = this.getAttribute("data-index");
        cartStorage[index].quantity = parseInt(this.value) || 1;
        localStorage.setItem("cartStorage", JSON.stringify(cartStorage));
        updateCartUI();
      });
    });
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      let image = document.getElementById("mainImage").src;
      let name = document.getElementById("productTitle").innerText;
      let price = document.querySelector(".product-price").innerText;
      
      let existingItem = cartStorage.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartStorage.push({ image, name, price, quantity: 1 });
      }
      localStorage.setItem("cartStorage", JSON.stringify(cartStorage));
      updateCartUI();
      cartSidebar.classList.add("show-cart");
    });
  }

  if (openCartBtn) {
    openCartBtn.addEventListener("click", function () {
      cartSidebar.classList.add("show-cart");
    });
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", function () {
      cartSidebar.classList.remove("show-cart");
    });
  }

  checkoutBtn.addEventListener("click", function () {
    let clientName = document.getElementById("clientName");
    let clientEmail = document.getElementById("clientEmail");
    let errorMessage = document.getElementById("error-message");
    
    if (!clientName || !clientEmail) return;
    if (!clientName.value.trim() || !clientEmail.value.trim()) {
      if (errorMessage) errorMessage.style.display = "block";
      return;
    } else {
      if (errorMessage) errorMessage.style.display = "none";
    }
    
    alert("Thank you for your purchase, " + clientName.value + "!");
    
   
    clientName.value = "";
    clientEmail.value = "";
    
   
    cartStorage = [];
    localStorage.setItem("cartStorage", JSON.stringify(cartStorage));
    updateCartUI();
  });

  updateCartUI();
});
