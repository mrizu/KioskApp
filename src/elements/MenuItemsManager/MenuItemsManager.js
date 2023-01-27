import itemsData from "../../data/products.json";
import MenuItem from "../MenuItem/MenuItem";

class MenuItemsManager {
  static itemsData;

  static loadItemsData() {
    if (!localStorage.getItem("itemsData")) {
      // if the items data is not in localStorage, load items data from file and set in to browser's localStorage
      MenuItemsManager.itemsData = itemsData;

      localStorage.setItem("itemsData", JSON.stringify(itemsData));
    } else {
      MenuItemsManager.itemsData = JSON.parse(localStorage.getItem("itemsData"));
      console.log(MenuItemsManager.itemsData);

    }
  }

  static getItems() {
    MenuItemsManager.loadItemsData();
    const items = [];

    for (let i = 0; i < MenuItemsManager.itemsData.length; i++) {
      let newItem = new MenuItem(MenuItemsManager.itemsData[i]);
      items.push(newItem);
    }

    return items;
  }

  static getItemById(id){
    MenuItemsManager.loadItemsData();
    return new MenuItem(MenuItemsManager.itemsData[id]);
  }

  static editProduct(productId, name, basePrice, type) {
    this.loadItemsData();
    let items = MenuItemsManager.itemsData;

    for (let i = 0; i < items.length; i++) {
      if (i === productId) {
        items[i].name = name;
        items[i].basePrice = basePrice;
        items[i].type = type;
      }
    }
    MenuItemsManager.itemsData = items;
    localStorage.setItem("itemsData", JSON.stringify(items));
    console.log(MenuItemsManager.itemsData);
  }
}

export default MenuItemsManager;
