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

 //function for displaying the HTMl
 const displayData = (output) => {
     document.querySelector('.products').innerHTML = output;
 }
 window.onload = () => {
     loadData();
 }

 //making some search
 const searchInput = document.getElementById('search');
 const matchInput = document.getElementById('match-products');
 //search items.json and filter
 const searchItems = async searchText => {
         const res = await fetch('https://fakestoreapi.com/products');
         const items = await res.json();
         //  console.log(items)
         //get matches to current input 
         let matches = items.filter(item => {
             const regex = new RegExp(`^${searchText}`, 'gi');
             return item.title.match(regex);

         })
         if (searchText.length === 0) {
             matches = [];
         }
         //  console.log(matches)


     }
     //displaying search items
 const outputHtml = matches => {
     if (matches.length > 0) {


     }

 }
 searchInput.addEventListener('input', () => searchItems(search.value))