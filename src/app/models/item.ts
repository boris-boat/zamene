import { User } from './user';
export class Item {
    _id: string;
    createdBy: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    creatorPhoneNumber: string
    swap: boolean;
    gift: Boolean
    price: number;
    images: File[];

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.gift = obj && obj.gift || null;
        this.creatorPhoneNumber = obj && obj.creatorPhoneNumber || null;
        this.images = obj && obj.images || null;
        this.swap = obj && obj.swap || false;
        this.createdBy = obj && obj.createdBy || null;
        this.shortDescription = obj && obj.shortDescription || null;
        this.longDescription = obj && obj.longDescription || null;
        this.price = obj && obj.price || "0"

    }
}