export class Income {

    public constructor
        (public id?:number,
            public userName?: string ,
            public date?: Date,
            public description?: string,
            public amount?:number,
               public role?:string
            ) {
    }
}