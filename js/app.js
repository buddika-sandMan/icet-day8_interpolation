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