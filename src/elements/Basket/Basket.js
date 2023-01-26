import BasketItem from "./BasketItem";

class Basket {
  static items = [];

  static addItem(menuItem, additionalIngredients, fullPrice) {
    Basket.loadBasket();
    let basketItem = new BasketItem(menuItem, additionalIngredients, fullPrice);
    Basket.items.push(basketItem);

    Basket.saveBasket();
  }

  static removeItemById(basketItemId){
    Basket.loadBasket();
    Basket.items.splice(basketItemId, 1);

    Basket.saveBasket();
  }

  static clearBasket() {
    localStorage.clear("basketItems");
    Basket.loadBasket();
  }

  static saveBasket() {
    let toSave = [];
    for (let i = 0; i < this.items.length; i++) {
      toSave.push(JSON.stringify(this.items[i]));
    }

    toSave = JSON.stringify(toSave);

    localStorage.setItem("basketItems", toSave);
  }

  static loadBasket() {
    console.log("BASKET CONTENT:")
    let loadedItems = localStorage.getItem("basketItems");
    if (!loadedItems) {
      loadedItems = [];
      Basket.items = [];
      return;
    }
    loadedItems = JSON.parse(loadedItems);
    for (let i = 0; i < loadedItems.length; i++) {
      loadedItems[i] = JSON.parse(loadedItems[i]);
    }
    console.log(loadedItems)

    Basket.items = loadedItems;
    return;
  }


}

export default Basket;
