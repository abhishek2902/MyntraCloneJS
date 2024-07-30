# E-Commerce Bag Feature
Overview
The E-Commerce Bag Feature is a dynamic web application component designed to enhance the shopping experience by allowing users to add items to a virtual shopping bag, view item details, and see the count of items in their bag. This application is built using HTML, CSS, and JavaScript, demonstrating practical skills in front-end development, local storage management, and interactive UI design.

Key Features
Add to Bag: Users can add items to their shopping bag with a single click.
Item Display: Displays a list of items with details such as image, rating, company name, item name, price, and discount.
Bag Icon: Shows the count of items in the shopping bag and updates in real-time.
Local Storage: Persists the shopping bag items across browser sessions using local storage.

Technologies Used
HTML5: Structure and content of the web page.
CSS3: Styling and layout to ensure a responsive design.
JavaScript: Logic for managing the shopping bag, updating the UI, and handling local storage.

How It Works
On Load:

The onLoad function retrieves the saved bag items from local storage and displays them on the home page.
Adding Items to Bag:

The addToBag function adds an item to the shopping bag, updates the bag icon, and saves the updated bag items to local storage.
Displaying Items:

The displayItemsOnHomePage function renders the list of items on the home page with their details and an "Add to Bag" button.
Updating Bag Icon:

The displayBagIcon function updates the bag icon to show the current count of items in the shopping bag.


Code Snippet
JavaScript (script.js)
javascript
Copy code
let bagItems = [];
onLoad();

function onLoad() {
    bagitemstr = localStorage.getItem('bagItems');
    bagItems = bagitemstr ? JSON.parse(bagitemstr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    displayBagIcon();
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
}

function displayItemsOnHomePage() {
    let itemscontelement = document.querySelector('.items-container');
    if (!itemscontelement) { return; }
        
    let items = [
        // Add your items here
    ];

    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `<div class="item-container">
            <img class="item-image" src=${item.item_image} alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.no_of_rating}
            </div>
            <div class="company-name">${item.company_name}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount}% OFF)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`;
    });
    
    itemscontelement.innerHTML = innerHTML;
}

function displayBagIcon() {
    let itemcount = document.querySelector('.bag-item-count');
    
    if (bagItems.length > 0) {
        itemcount.innerHTML = bagItems.length;
        itemcount.style.visibility = "visible";
    } else {
        itemcount.style.visibility = "hidden";
    }
}

Future Enhancements
User Authentication: Allow users to save their shopping bag items across different devices.
Item Categories: Implement categories for better item organization.
Search Functionality: Add a search bar to filter items based on keywords.
