let bagItems=[];
onLoad()

function onLoad(){
    bagitemstr = localStorage.getItem('bagItems');
    bagItems=bagitemstr ? (JSON.parse(bagitemstr)):[];
    displayItemsOnHomePage()
    displayBagIcon();
}
function addToBag(itemId){
    bagItems.push(itemId);
    displayBagIcon();
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
}
function displayItemsOnHomePage(){
    let itemscontelement=document.querySelector('.items-container');
    if(!itemscontelement){return;}
        
    let item={
        item_image:'images/1.jpg',
        rating:{stars:4.5,no_of_rating:'1.5k'},
        company_name:'Tanishq',
        item_name:'Earrings',
        current_price:50000,
        original_price:100000,
        discount:50,
    }
    let innerHTML=''
    items.forEach(item=>{
        innerHTML+=`<div class="item-container">
        <img class="item-image" src=${item.image} alt="item image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})" >Add to Bag</button>
    </div>`
    });
    
    itemscontelement.innerHTML=innerHTML;
}
function displayBagIcon(){
    let itemcount=document.querySelector('.bag-item-count');
    
    if(bagItems.length>0){
    itemcount.innerHTML=bagItems.length;
    itemcount.style.visibility="visible";}
    else
    itemcount.style.visibility="hidden";//or `hidden` or "hidden"
}

//localStorage.clear();