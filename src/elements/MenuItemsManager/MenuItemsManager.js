import itemsData from "../../data/products.json";
import MenuItem from "../MenuItem/MenuItem";

class MenuItemsManager {
  static itemsData;

  static loadFromFile() {
    // ladujemy z json do memory przegladarki
    // localStorage.setItem("menuData", jsondata);
  }

  static loadItemsData() {
    MenuItemsManager.itemsData = itemsData;
  }

  static getItems() {
    const items = [];

    for (let i = 0; i < itemsData.length; i++) {
      let newItem = new MenuItem(itemsData[i]);
      items.push(newItem);
    }

    return items;
  }

}

export default MenuItemsManager;
