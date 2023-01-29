class MenuItem {
  id;
  name;
  basePrice;
  image;
  type;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.basePrice = data.basePrice;
    this.image = data.image;
    this.type = data.type;
  }

  getProductType(){
    return this.type;
  }

}

export default MenuItem;
