class MenuItem {
  id;
  name;
  basePrice;
  image;
  type
  additionalIngredients;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.basePrice = data.basePrice;
    this.image = data.image;
    this.type = data.type
    this.additionalIngredients = data.additionalIngredients;
  }
}

export default MenuItem;
