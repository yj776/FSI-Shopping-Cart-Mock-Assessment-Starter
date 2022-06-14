// The + and - buttons are clickable for the product in the cart.
// The + button for the product increases the quantity by 1.
// The - button for the product removes 1 from the quantity.
// The quantity cannot drop below 0.
// The quantity number is updated and displayed when clicking the + or - buttons.

let plusButton = document.querySelector('#quantity-up');
let minusButton = document.querySelector('#quantity-down');
let totalQuantity = document.querySelector('.total-quantity');

console.log(plusButton);
console.log(minusButton);
console.log(totalQuantity);

let quantity = 1


// plusButton.addEventListener ('click', function(){
//     console.log('clicked');
// })

// plusButton.addEventListener ('click', function(){
//     quantity +=1;
//     console.log(quantity);
// })

plusButton.addEventListener ('click', function(){
    quantity +=1;
    totalQuantity.textContent = "Quantity: " + quantity;
})

minusButton.addEventListener ('click', function(){
    if(quantity > 0) {
        quantity -=1;
        totalQuantity.textContent = `Quantity: ${quantity}`;
    }
})

// Bonus Criteria
// If you are finished and ready for a challenge, try the bonus below:

// Add functionality to the remove button to remove the item entirely.
// Add a second item to the shopping cart through the HTML/CSS. Write functionality to control the second item.
// Have the item display the total (price * quantity).

let rmvButton = document.querySelector('.remove');
rmvButton.addEventListener('click',function(){
    
})
