export class Product {
  constructor(
    public nazwa: string,
    public cena: number,
    public dataUtworzenia: Date,
    public czyPromocja: boolean,
    public iloscWKoszyku: number = 0
  ) {}
}