document.addEventListener("change", function () {
  const filterDropdown = document.getElementById("filter-category");
  const searchInput = document.getElementById("search");
  const productSections = document.querySelectorAll(".section");
  const allTitles = document.querySelectorAll("#title");

  function filterProducts() {
    const selectedCategory = filterDropdown.value;
    const searchTerm = searchInput.value.toLowerCase();

    productSections.forEach((section) => {
      const titleElement = section.querySelector("#mentitle");
      const sectionTitle = titleElement ? titleElement.textContent.trim().toLowerCase() : "";
      const productCards = section.querySelectorAll(".product-card");
      const previousTitle = section.previousElementSibling;

      let sectionHasVisible = false;
      
      productCards.forEach((card) => {
        const cardId = card.id;
        const productTitle = card.querySelector(".product-title").textContent.toLowerCase();
        const productDescription = card.querySelector(".product-description").textContent.toLowerCase();

        const matchesCategory = selectedCategory === "all" || cardId === selectedCategory;
        const matchesSearch = productTitle.includes(searchTerm) || productDescription.includes(searchTerm);

        if (matchesCategory && matchesSearch) {
          card.style.display = "block";
          sectionHasVisible = true;
        } else {
          card.style.display = "none";
        }
      });

     
      section.style.display = sectionHasVisible ? "block" : "none";
      
     
      if (sectionHasVisible && previousTitle && previousTitle.id === "title") {
        previousTitle.style.display = "block";
      } else if (previousTitle && previousTitle.id === "title") {
        previousTitle.style.display = "none";
      }
    });
  }

  filterDropdown.addEventListener("change", filterProducts);
  searchInput.addEventListener("input", filterProducts);

  filterProducts(); 
});
