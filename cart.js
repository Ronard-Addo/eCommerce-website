const products = [ 
    { id: 1, name: "Item 1", price: 10, image: "/ecommerce_test/images/img1.jpg" },
    { id: 2, name: "Item 2", price: 15, image: "images/img2.jpg" },
    { id: 3, name: "Item 3", price: 20, image: "images/img3.jpg" },
    { id: 4, name: "Item 4", price: 25, image: "images/img4.jpg" },
    { id: 5, name: "Item 5", price: 30, image: "images/img5.jpg" },
    { id: 6, name: "Item 6", price: 35, image: "images/img6.jpg" },
    { id: 7, name: "Item 7", price: 40, image: "images/img7.jpg" },
    { id: 8, name: "Item 8", price: 45, image: "images/img8.jpg" },
    { id: 9, name: "Item 9", price: 50, image: "images/img9.jpg" },
    { id: 10, name: "Item 10", price: 55, image: "images/img10.jpg" },
    { id: 11, name: "Item 11", price: 60, image: "images/img11.jpg" },
    { id: 12, name: "Item 12", price: 65, image: "images/img12.jpg" },
    { id: 13, name: "Item 13", price: 70, image: "images/img13.jpg" },
    { id: 14, name: "Item 14", price: 75, image: "images/img14.jpg" },
    { id: 15, name: "Item 15", price: 80, image: "images/img15.jpg" },
    { id: 16, name: "Item 16", price: 85, image: "images/img16.jpg" },
    { id: 17, name: "Item 17", price: 90, image: "images/img17.jpg" },
    { id: 18, name: "Item 18", price: 95, image: "images/img18.jpg" },
    { id: 19, name: "Item 19", price: 100, image: "images/img19.jpg" },
    { id: 20, name: "Item 20", price: 105, image: "images/img20.jpg" }
];

const cartList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add an item to the cart
function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    
    if (!product) return;

    let cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
    };

    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// Function to display cart items
function displayCart() {
    if (!cartList) return;

    cartList.innerHTML = "";
    let total = 0;

    console.log("Cart contents:", cart);  // Debugging: Check stored cart items

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="${item.image}" width="50" alt="${item.name}">
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalPriceElement.innerText = `Total: $${total}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to clear the entire cart
function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Load cart on page load
document.addEventListener("DOMContentLoaded", displayCart);
