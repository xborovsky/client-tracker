export class Group {
    constructor(private name:String, private created:Date) { }

    public getName():String {
        return this.name;
    }

    public getCreated():Date {
        return this.created;
    }
}
