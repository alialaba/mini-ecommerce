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
             let output = ``;
             data.forEach((item) => {
                 const { image, title, price, category } = item;
                 output += `
                <div class="product">
                <div>
                <img class="product-image" src="${image}" >
                </div>
                <ul class="product-lists">
                <li>${title}</li>
                <div class="flex-product">
                <li>$${price}</li>
                <li><i class="fas fa-plus"></i></li>
                </div>
                
                </ul>
                
                
                </div>
                
                
                `
                     // console.log(item)
                 displayData(output)
             })
         }).catch((err) => console.log(err))
 }
 const displayData = (output) => {

     document.querySelector('.products').innerHTML = output;

 }
 window.onload = () => {
     loadData();
 }