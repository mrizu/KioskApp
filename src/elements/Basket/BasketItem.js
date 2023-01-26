class BasketItem {
  menuItem;
  additionalIngredients;
  fullPrice;

  constructor(menuItem, additionalIngredients, fullPrice) {
    this.menuItem = menuItem;
    this.additionalIngredients = additionalIngredients;
    this.fullPrice = fullPrice;
  }

  getAsJson() {
    return {
      menuItem: JSON.stringify(this.menuItem),
      additionalIngredients: JSON.stringify(this.additionalIngredients)
    }
  }
}

export default BasketItem;
