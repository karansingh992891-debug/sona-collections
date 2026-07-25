// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

// Cart dikhane ka function
function displayCart() {

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        total.innerHTML = "Total : ₹0";
        return;
    }

    let html = "";
    let grandTotal = 0;

    cart.forEach((item, index) => {

        let price = Number(item.price.replace("₹",""));

        grandTotal += price;

        html += `
        <div class="product-card">
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p class="price">₹${price}</p>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        </div>
        `;

    });

    cartItems.innerHTML = html;
    total.innerHTML = "Total : ₹" + grandTotal;

}

// Product remove
function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}

// Checkout button
document.getElementById("checkout-btn").addEventListener("click",()=>{

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

    alert("Checkout page coming soon.");

});

displayCart();
