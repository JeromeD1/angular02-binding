export class User {
    private name: string;
    private firstName: string;
    private age: number;
    public quote: string;
    private photo: string;

    constructor(name: string, firstName: string, age: number, quote: string, photo: string) {
        this.name= name;
        this.firstName=firstName;
        this.age = age;
        this.quote=quote;
        this.photo=photo;
    }

    setQuote(quote: string) :void {
        this.quote = quote;
    }

    getName() : string {
        return this.name;
    }

    getFirstName() : string {
        return this.firstName;
    }

    getAge() : number {
        return this.age;
    }

    getQuote() : string {
        return this.quote;
    }

    getPhoto() : string {
        return this.photo;
    }
}