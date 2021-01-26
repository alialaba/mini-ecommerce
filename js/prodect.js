//function that toggle on clicking aproduct
const displaySingleProduct = () => {
        const API = "https://fakestoreapi.com/products/=?id";
        //  console.log(id)
        // console.log(API)

        fetch(API)
            .then((res) => {
                if (true) {
                    console.log(res);
                    //  return res.json();
                } else {
                    console.log('error ')
                }
            })
            .then((data) => {
                let output = ``;
                console.log(data);
                data.forEach((item) => {
                    const { image } = item;
                    output += `
                       <div>
                       <img src="${image}">;
                       </div>

                       `
                    console, log(data)
                    displayData2(output)
                })
            }).catch((err) => console.log(err))

        window.location.href = "./single.html";

    }
    //function for displaying HTML for  single product
const displayData2 = (output) => {
    document.querySelector('.single-product').innerHTML = output;
}