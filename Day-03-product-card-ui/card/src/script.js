const productGrid = document.getElementById("productGrid");

function createStars(rating) {
    let stars = "";

    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += `<i class="fa-solid fa-star"></i>`;
        } else {
            stars += `<i class="fa-regular fa-star"></i>`;
        }
    }

    return stars;
}

function displayProducts() {
    productGrid.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="tag">${product.tag}</div>

            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>

            <div class="card-content">

                <div class="product-category">
                    ${product.category}
                </div>

                <div class="product-title">
                    ${product.title}
                </div>

                <div class="product-description">
                    ${product.description}
                </div>

                <div class="rating-price">

                    <div class="rating">
                        ${createStars(product.rating)}
                        <span>(${product.rating})</span>
                    </div>

                    <div class="price">
                        ${product.price}
                    </div>

                </div>

                <div class="card-buttons">
                    <button class="add-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add Cart
                    </button>

                    <button class="buy-now">
                        Buy Now
                    </button>
                </div>

            </div>
        `;

        productGrid.appendChild(card);
    });
}

displayProducts();