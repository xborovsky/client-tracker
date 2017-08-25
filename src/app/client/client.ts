export class Client {
    constructor(
        private id:string,
        private name:string,
        private surname:string,
        private title:string,
        private specialization:string,
        private groupId:string) {}

    public getId():string {
        return this.id;
    }
    public getName():string {
        return this.name;
    }
    public getSurname():string {
        return this.surname;
    }
    public getTitle():string {
        return this.title;
    }
    public getSpecialization():string {
        return this.specialization;
    }
    public getGroupId():string {
        return this.groupId;
    }
}

export class ClientBuilder {
    private id:string;
    private name:string;
    private surname:string;
    private title:string;
    private specialization:string;
    private groupId:string;

    public withId(id:string):ClientBuilder {
        this.id = id;
        return this;
    }

    public withName(name:string):ClientBuilder {
        this.name = name;
        return this;
    }
    
    public withSurname(surname:string):ClientBuilder {
        this.surname = surname;
        return this;
    }

    public withTitle(title:string):ClientBuilder {
        this.title = title;
        return this;
    }

    public withSpecialization(specialization:string):ClientBuilder {
        this.specialization = specialization;
        return this;
    }

    public withGroupId(groupId:string):ClientBuilder {
        this.groupId = groupId;
        return this;
    }

    public build():Client {
        return new Client(
            this.id, this.name, this.surname,
            this.title, this.specialization, this.groupId
        );
    }
}
