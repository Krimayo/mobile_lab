export class Property {
    pp_img: string;
    name: string;
    property_name: string;
    date: string;
    address: string;
    img: string;
    vr: string;
    description: string;
    

    constructor(
        pp_img: string,
        name: string, 
        property_name: string, 
        date: string, 
        address: string, 
        img: string,
        vr: string, 
        description: string) {

            this.pp_img = pp_img;
            this.name = name;
            this.property_name = property_name;
            this.date = date;
            this.address = address;
            this.img = img;
            this.vr = vr;
            this.description = description;
    }
}