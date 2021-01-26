 const menuBtn = document.querySelector(".menu-icon");
 const nav = document.querySelector(".nav");

 menuBtn.addEventListener("click", () => {
     nav.classList.toggle('nav-visible');

 })


 const loadData = () => {
     const API = '../data/stores.json';
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
                 const { id, image, title, price, category } = item;
                 output += `
                  <div class="product">
                  <div>
                  <img class="product-image" src="${image}" >
                  </div>
                  <ul class="product-lists">
                  <li>${title}</li>
                  <div class="flex-product">
                  <li>${price}</li>
                  <li onClick="displaySingleProduct(${id})"><i class="fas fa-plus"></i></li>
                  </div>
                  </ul>
                  </div>`
                     // console.log(item)
                 displayData(output)
             })
         }).catch((err) => console.log(err))
 }

 //function for displaying the HTMl for products
 const displayData = (output) => {
     document.querySelector('.products').innerHTML = output;
 }

 window.onload = () => {
     loadData();
     //  displaySingleProduct();
 }

 //making some search
 const searchInput = document.getElementById('search');
 const matchInput = document.querySelector('.products');
 //search items.json and filter
 const searchItems = async searchText => {
         const res = await fetch("../data/stores.json");
         const items = await res.json();

         //get matches to current input 
         let matches = items.filter(item => {
             const regex = new RegExp(`^${searchText}`, 'gi');
             return item.title.match(regex);

         })
         if (searchText.length === 0) {
             matches = [];
             //displaying the whole item after search is cleared
             matchInput.innerHTML = loadData();;
         }

         outputHtml(matches);

     }
     //displaying search items
 const outputHtml = matches => {
     if (matches.length > 0) {
         const html = matches.map(match => `
         <div class="product">
                   <div>
                  <img class="product-image" src="${match.image}" >
                  </div>
                 <ul class="product-lists">
                 <li>${match.title}</li>
               <div class="flex-product">
                <li>$${match.price}</li>
                <li><i class="fas fa-plus"></i></li>
                  </div>
                 </ul>
              </div>
         
         `).join('');
         matchInput.innerHTML = html;

     } else {
         matchInput.innerHTML = `<h3 style="color:#fff;">Sorry, No Products Matched Your Search</h3>`
     }
 }
 searchInput.addEventListener('input', () => searchItems(search.value));