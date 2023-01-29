import itemsData from "../../data/additionalIngredients.json";
import AdditionalIngredient from "./AdditionalIngredient";

class AdditionalIngredientsManager {
    static itemsData;

    static loadItemsData() {
        AdditionalIngredientsManager.itemsData = itemsData;
    }

    static getItems() {
        const items = [];

        for (let i = 0; i < itemsData.length; i++) {
            let newItem = new AdditionalIngredient(itemsData[i]);
            items.push(newItem);
        }

        return items;
    }

    static getItemById(id){
        return new AdditionalIngredient(itemsData[id]);
    }

}

export default AdditionalIngredientsManager;
