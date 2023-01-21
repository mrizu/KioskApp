import {Component} from "react";
import MenuItemsManager from "../../../elements/MenuItemsManager/MenuItemsManager";
import BigButton from "../../base/BigButton/BigButton";
import MenuItem from "../../Menu/MenuItem/MenuItem";

class MenuView extends Component {
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
            menuItem => <MenuItem key={menuItem.id} text={menuItem.name} price={menuItem.basePrice} imageSrc="" />
          )
        }
      </>
    )
  }
}

export default MenuView;
