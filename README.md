# CS472-07-Final-Project
# Final Project: Implement an e-commerce project
## Technologies:
1. Front End: HTML, CSS, JS
2. Backend: NodeJS, Express, nodemon, Restful API
3. Data: should save into or load from the file. If you have enough time, you can save data to a database.

## Database:
1. Customer
```JavaScript
{
  id: 'C001',//should be unique
  name: "John",
  username: "john",//should be unique
  phone: "123",
  password: "123"
}
```
2. Product
```JavaScript
{
  id: "001", //should be unique
  name: "Laptop",
  price: 700,
  image: "https://png.pngtree.com/element_our/20190524/ourmid/pngtree-2-5d-electronic-device-laptop-vector-element-image_1101889.jpg"
}
```
3. Order
```JavaScript
{
  id: "001", //should be unique
  createdTime: "2023-07-13T01:34:39.303Z",
  products: [
    {productId: "001", name: "Laptop", price: 700, image: "https://example.com/laptop.png", quantity: 2}
  ]
  totalPrice: 1400, //
}


```
## Requirements
1. The systems will generate several users at the beginning
2. A user can log in using a username or password on the `login` page
3. After logging in successfully, this user can see the home page, which satisfies the following requirements.
* This page shows this user's information, like name and phone.
* This user can use different buttons to switch between Products, Cart, or Orders. By default, the products will be displayed. The selected button should be highlighted.
* Products: Display all available products. Each product has a button to add to the cart. When clicking this button, please provide a way to let users enter the number of the selected product.
* Cart: Display all selected products and a button to check out. If clicking this button, all information from this card will be sent to the server and the cart will be empty.
* Orders: Show all existing orders that the current users do
* The app should have a button, `logout`. When users click this button, it will go to the login page.
4. Implement a signup page for users to register their accounts. After signing up successfully, this website will redirect to the `login` page. Please provide a button `signup` on the login page. When users click this button, the website redirects to the signup page.
5. Provide a way to save the `cart` into the browser by using `localstorage`. This information will be loaded again when this user logs in successfully.
6. Please encrypt the password before saving it to files or databases.
## Please submit the final and stable version by 10:00 PM, Monday (07/17/2023)
## Your group will have 15 minutes to present on Tuesday (07/18/2023). I will send the email for the schedule later. You only need to come in your timetable to illustrate your software.
## You need to demonstrate the program and answer my questions. You do not need to prepare any report or ppt documents.
******* Happy Coding **********

