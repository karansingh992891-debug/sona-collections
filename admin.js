let products = JSON.parse(localStorage.getItem("products")) || [];

const form = document.getElementById("productForm");
const list = document.getElementById("admin-products");

function showProducts(){

list.innerHTML="";

products.forEach((p,index)=>{

list.innerHTML += `
<div class="product-card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p class="price">₹${p.price}</p>
<p>${p.category}</p>

<button onclick="deleteProduct(${index})">
Delete
</button>

</div>
`;

});

}

form.addEventListener("submit",function(e){

e.preventDefault();

products.push({

name:name.value,
price:price.value,
image:image.value,
category:category.value

});

localStorage.setItem("products",JSON.stringify(products));

form.reset();

showProducts();

});

function deleteProduct(index){

products.splice(index,1);

localStorage.setItem("products",JSON.stringify(products));

showProducts();

}

showProducts();
