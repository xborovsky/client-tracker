export class Group {
    constructor(private id:string, private name:string, private created:Date) { }

    public getId():string {
        return this.id;
    }

    public getName():string {
        return this.name;
    }

    public getCreated():Date {
        return this.created;
    }
}
