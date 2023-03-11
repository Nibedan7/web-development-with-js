function removeDuplicates(cart) {
    for (let i = 0; i < cart.length; i++) {
        let current = cart[i];
        for (let j = i+1; j < cart.length; j++) {
            if (cart[j] == current) {
                cart.splice(j, 1);
            }
        }
    }
    // Array value change is global. Not value but reference is passed to the function.
}

let cart = ["a", "b", "c", "d", "e", "a", "lol", "d"];
removeDuplicates(cart);
console.log(cart);