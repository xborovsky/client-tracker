export class Group {
    constructor(private id:String, private name:String, private created:Date) { }

    public getId():String {
        return this.id;
    }

    public getName():String {
        return this.name;
    }

    public getCreated():Date {
        return this.created;
    }
}
