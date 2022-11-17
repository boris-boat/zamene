import { User } from './user';
export class Item {
    _id: string;
    createdBy: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    swap: boolean;
    price: number;
    img: File;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.img = obj && obj.img || null;
        this.swap = obj && obj.swap || false;
        this.createdBy = obj && obj.createdBy || null;
        this.shortDescription = obj && obj.shortDescription || null;
        this.longDescription = obj && obj.longDescription || null;
        this.price = obj && obj.price || null

    }
}