class Food {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
}

const orderList = [];

function addOrder() {
  const nameInput = document.getElementById('food-name');
  const quantityInput = document.getElementById('quantity');

  const name = nameInput.value;
  const quantity = parseInt(quantityInput.value);

  const message = document.getElementById('food-message');

  if (name === '' || quantity > 10 || quantity < 1) {
    message.textContent =
      'Please enter a food name and a quantity between 1 to 10';
  } else {
    const food = new Food(name, quantity);

    message.textContent = `Added ${quantity} orders of ${name} to the list!`;

    orderList.push(food);

    nameInput.value = '';
    nameInput.focus();
    quantityInput.value = '';
    quantityInput.focus();
  }
  showsFoodList();
}

function showsFoodList() {
  const foodList = document.getElementById('food-list').tBodies[0];

  foodList.innerHTML = '';
  for (const food of orderList) {
    const row = document.createElement('tr');

    row.innerHTML = `<td>${food.name}</td>
    <td>${food.quantity}</td>`;

    foodList.appendChild(row);
  }
}
