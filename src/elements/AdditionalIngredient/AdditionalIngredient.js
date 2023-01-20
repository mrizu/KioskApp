class AdditionalIngredient {
  name;
  pricePerServing;
  maxServings;
  numberOfServings;

  constructor(name, pricePerServing, maxServings) {
    this.name = name;
    this.pricePerServing = pricePerServing;
    this.maxServings = maxServings;
    this.numberOfServings = 0;
  }

  add() {
    this.numberOfServings++;
  }

  delete() {
    this.numberOfServings--;
  }

  getPrice() {
    return this.numberOfServings * this.pricePerServing;
  }
}

export default AdditionalIngredient;
