import products from "../../data/products.json"
class MenuItem {
  id;
  name;
  basePrice;
  image;
  additionalIngredients;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.basePrice = data.basePrice;
    this.image = data.image;
    this.additionalIngredients = data.additionalIngredients;
  }
}

export default MenuItem;
