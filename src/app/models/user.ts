import { Item } from "./item";
export class User {
    _id?: string
    type: string;
    username: string;
    password: string;
    fullname: string;
    phoneNumber: string;
    items: Item[];
    constructor(obj?: any) {
        this._id = obj && obj._id
        this.type = obj && obj.type || "user";
        this.username = obj && obj.username || null;
        this.fullname = obj && obj.fullname || null;
        this.password = obj && obj.password || null;
        this.phoneNumber = obj && obj.phoneNumber || null;
        this.items = obj && obj.items || []

    }

}