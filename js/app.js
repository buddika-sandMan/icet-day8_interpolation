let customerList = [];
function btnAddCustomerOnAction() {
    let name = document.getElementById("txtName").value
    let address = document.getElementById("txtAddress").value
    let contact = document.getElementById("txtContact").value
    let email = document.getElementById("txtEmail").value

    let Customer = {
        name: name,
        address: address,
        contact: contact,
        email: email
    }
    customerList.push(Customer);
    console.log(customerList);
}

// function btnLoadTableOnAction() {
//     let tblCustomer=document.getElementById("tblCustomer");

//     let body ="";

//     for(let i = 0; i < customerList.length; i++){
//         body += `
//             <tr>
//                 <td>${customerList[i].name}</td>
//                 <td>${customerList[i].address}</td>
//                 <td>${customerList[i].contact}</td>
//                 <td>${customerList[i].email}</td>
//             </tr>
//         `
//         }
//         tblCustomer.innerHTML = body;
// }

// let customer = "Nimal";
// console.log(customer);
// console.log(typeof customer);

// customer = 25;
// console.log(customer);
// console.log(typeof customer);

// const customer2 = "Nimal";
// console.log(customer);
// console.log(typeof customer);

// customer2 = "Kamal";
// console.log(customer);
// console.log(typeof customer);

// const customerList2 = [];

// customerList2.push(1);
// customerList2.push(2);
// customerList2.push(3);
// customerList2.push(4);
// customerList2.push(5);
// customerList2.push(6);

// console.log(customerList2);
// customerList2.reverse();
// console.log(customerList2);

// filter method
// const productList = [
//     {name:"Kamal",inStoke:true,price:20.50},
//     {name:"Nuwan",inStoke:false,price:145.00},
//     {name:"Jagath",inStoke:false,price:60.50},
//     {name:"Renu",inStoke:true,price:22.50},
//     {name:"Kusum",inStoke:false,price:90.50},
// ]

// let inStockProductList = productList.filter(
//     function(product) {
//         return productFiler(product)
//     }
// );

// function productFiler(product) {
//     return product.inStoke == true;
// }

// console.log(inStockProductList);

// let inStockProductList = productList.filter(product => product.inStoke == true);

// console.log(inStockProductList);

// const alphebetList = ["K","L","C","A","M","F","I","H","B","J"];
// console.log(alphebetList);
// alphebetList.sort();
// console.log(alphebetList);

// const slaryList = [1000, 5000, 2000, 3000, 4000, 6000, 7000, 8000, 9000];
// console.log(slaryList);
// slaryList.map(salary => {
//     console.log(salary * 2);
// });

// const studentList = [
//     {name:"Kamal",age:20,gender:"Male"},
//     {name:"Nuwan",age:25,gender:"Male"},
//     {name:"Jagath",age:30,gender:"Male"},
//     {name:"Renu",age:35,gender:"Female"},
//     {name:"Kusum",age:30,gender:"Female"},
// ]

// studentList.find(student => {
//     if(student.age == 30){
//         console.log(student);
//     }
// });




// ---------------------JSON - Java Script Object Notation---------------------
fetch("https://jsonplaceholder.typicode.com/posts/").then(response => response.json()).then(data => {
    console.log(data);
})


let tblCustomer=document.getElementById("tblCustomer");

let body ="";

data.forEach(element => {
    body += `
        <tr>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.userId}</td>
        `
}
tblCustomer.innerHTML = body;