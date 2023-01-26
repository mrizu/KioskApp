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

  // getAsJson()  {
  //   return {
  //     id: this.id, name: this.name, basePrice: this.basePrice, image: this.image, type: this.type
  //   }
  // }

}

export default MenuItem;
