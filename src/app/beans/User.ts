import { Coupon } from './Coupon';

export class User {

    public constructor
        (public id?:number,
            public userName?: string ,
            public email?:string,
            public password?: string,
            public role?: string,
            public coupons?:Coupon[]) {

    }

}