 const menuBtn = document.querySelector(".menu-icon");
 const nav = document.querySelector(".nav");

 menuBtn.addEventListener("click", () => {
     nav.classList.toggle('nav-visible');

 })


 const loadData = () => {
     const API = 'https://fakestoreapi.com/products';
     fetch(API)
         .then((res) => {
             if (true) {
                 return res.json()
             } else {
                 alert('there is is error in fetching of data')
             }
         })
         .then((data) => {
             let head = `<h1>Products</h1>`;
             let output = ``;
             data.forEach((item) => {
                 const { image, title, price, category } = item;
                 output += `
                <div class="product">
                <div>
                <img class="image" src="${image}" >
                </div>
                <ul class="product-lists">
                <li>${title}</li>
                <li>$${price}</li>
                <li>Category: ${category}</li>
                <button class="cart-btn">Add to Cart</button>
                </ul>
                
                
                </div>
                
                
                `
                     // console.log(item)
                 displayData(output, head)
             })
         }).catch((err) => console.log(err))
 }
 const displayData = (output, head) => {
     document.querySelector('.header'), innerHTML = head;
     document.querySelector('.products').innerHTML = output;

 }
 window.onload = () => {
     loadData();
 }