const products = [
  {
    id: 1,
    name: "Designer Kurti",
    price: 499,
    image: "assets/images/kurti.png",
    category: "Kurti"
  },
  {
    id: 2,
    name: "Stylish Saree",
    price: 799,
    image: "assets/images/saree.png",
    category: "Saree"
  },
  {
    id: 3,
    name: "Women's Suit",
    price: 899,
    image: "assets/images/suit.png",
    category: "Suit"
  },
  {
    id: 4,
    name: "Designer Lehenga",
    price: 1499,
    image: "assets/images/lehenga.png",
    category: "Lehenga"
  }
];

function displayProducts() {
  const productList = document.getElementById("product-list");

  if (!productList) return;

  productList.innerHTML = "";

  products.forEach(product => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add To Cart</button>
      </div>
    `;
  });
}

displayProducts();
