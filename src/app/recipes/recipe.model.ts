export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, detail: string, imagePath: string){
    this.name = name;
    this.description = detail;
    this.imagePath = imagePath;
  }
}
