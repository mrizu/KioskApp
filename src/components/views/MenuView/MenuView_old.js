import {Component} from "react";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import BigButton from "../../base/BigButton/BigButton";
import MenuProduct from "../../Menu/MenuProduct/MenuProduct";

class MenuView_old extends Component {
  constructor() {
    super();
    this.state = {
      menuItems: []
    }
  }


  componentDidMount() {
    this.loadMenuItems();
  }

  loadMenuItems() {
    let menuItems = MenuItemsManager.getItems();
    console.log(menuItems);
    this.setState({menuItems: menuItems});
  }

  render() {
    return(
      <>
        Menu view {this.state.menuItems.length}

        {
          this.state.menuItems.map(
            menuItem => <MenuProduct key={menuItem.id} text={menuItem.name} price={menuItem.basePrice} imageSrc="" />
          )
        }
      </>
    )
  }
}

export default MenuView_old;
