class AdditionalIngredient {
  name;
  pricePerServing;
  maxServings;
  numberOfServings;

  constructor(data) {
    this.name = data.name;
    this.pricePerServing = data.price;
    this.maxServings = 5;
    this.numberOfServings = 0;
  }

  add() {
    if (this.numberOfServings < this.maxServings){
      this.numberOfServings++;
    }
  }

  delete() {
    if (this.numberOfServings > 0){
      this.numberOfServings--;
    }
  }

  getPrice() {
    return this.numberOfServings * this.pricePerServing;
  }

  getNumberOfServings(){
    return this.numberOfServings;
  }

}

export default AdditionalIngredient;
