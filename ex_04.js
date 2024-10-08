document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(function(item) {
        const quantityInput = item.querySelector('input[type="text"]');
        const likeButton = item.querySelector('.like-btn');
        const deleteButton = item.querySelector('.delete-btn');
        const plusButton = item.querySelector('.plus-btn');
        const minusButton = item.querySelector('.minus-btn');

        likeButton.addEventListener('click', function() {
            toggle(likeButton);});
        function toggle(likeButton) {
            likeButton.classList.toggle('is-active'); }
        deleteButton.addEventListener('click', function() {
            removeItem(item); });
        function removeItem(item) {
            item.remove(); }
        plusButton.addEventListener('click', function() {
            let quantity = parseInt(quantityInput.value);
            quantity += 1;
            quantityInput.value = quantity; });
        minusButton.addEventListener('click', function() { 
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity -= 1;
                quantityInput.value = quantity;} });
    });
});
