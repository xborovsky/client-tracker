export class Client {
    constructor(
        private id:String,
        private name:String,
        private surname:String,
        private title:String,
        private specialization:String) {}

    public getId():String {
        return this.id;
    }
    public getName():String {
        return this.name;
    }
    public getSurname():String {
        return this.surname;
    }
    public getTitle():String {
        return this.title;
    }
    public getSpecialization():String {
        return this.specialization;
    }
}

export class ClientBuilder {
    private id:String;
    private name:String;
    private surname:String;
    private title:String;
    private specialization:String;

    public getId():String {
        return this.id;
    }

    public getName():String {
        return this.name;
    }

    public getSurname():String {
        return this.surname;
    }

    public getTitle():String {
        return this.title;
    }

    public getSpecialization():String {
        return this.specialization;
    }

    public withId(id:String):ClientBuilder {
        this.id = id;
        return this;
    }

    public withName(name:String):ClientBuilder {
        this.name = name;
        return this;
    }
    
    public withSurname(surname:String):ClientBuilder {
        this.surname = surname;
        return this;
    }

    public withTitle(title:String):ClientBuilder {
        this.title = title;
        return this;
    }

    public withSpecialization(specialization:String):ClientBuilder {
        this.specialization = specialization;
        return this;
    }

    public build():Client {
        return new Client(this.id, this.name, this.surname, this.title, this.specialization);
    }
}
