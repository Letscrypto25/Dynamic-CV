
// Simple Cart Logic (fake cart for demo)
document.addEventListener("DOMContentLoaded", () => {
  const prices = document.querySelectorAll(".price");
  prices.forEach(p => {
    let value = parseFloat(p.textContent.replace(/[^0-9.]/g, ''));
    if (!isNaN(value)) {
      p.textContent = `R${value.toFixed(2)}`;
    }
  });

  const cartButtons = document.querySelectorAll(".add-to-cart");
  let cart = [];

  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.dataset.item || "Item";
      cart.push(item);
      alert(item + " added to cart! Total items: " + cart.length);
    });
  });
});
