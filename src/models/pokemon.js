export class Pokemon {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.weight = params.weight;
    this.height = params.height;
    this.abilities = params.abilities;
  }

  getIMC() {
    return this.weight / (this.height * this.height);
  }
}
