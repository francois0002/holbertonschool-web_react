interface StudentConstructor {
    firstName: string;
    lastName: string;
}

interface Student{
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor({firstName, lastName} : StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(){
        return "Currently working";
    }

    displayName(){
        return this.firstName;
    }

}
