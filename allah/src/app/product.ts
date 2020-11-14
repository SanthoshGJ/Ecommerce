export class Product {
    id:number;
    name:string;
    description:string;
    price:string;
    imageUrl:string;

    constructor(id, name, description= '', price, imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTusjNh9x4oyc5Ercb_WbnIsNOhx0LKrbEseg&usqp=CAU"){
        this.id=id;
        this.name=name;
        this.description= description;
        this.price =price;
        this.imageUrl=imageUrl;
    }
}

