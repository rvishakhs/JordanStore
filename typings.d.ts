interface Sanitybody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
    otherProp?: any;
}


interface  image {
    _type : "image";
    asset :{
        _ref: string,
        _type: "reference"
    };
}


export interface categories extends Sanitybody {
    _type : "categories";
    title : string
    slug : {
        title : string
        _type : "reference"
    }
}

export interface products extends Sanitybody {
    _type : "products";
    brand   : string;
    colour : string;
    image : image;
    price : number;
    title : string;
    year : number;
    description : {
        _type : "block";
        text : string;

    }
}