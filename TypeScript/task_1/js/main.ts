interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience? : number;
    location: string;

    [key: string]: any;      // Allows any additional properties with any type
}

interface Directors extends Teacher {
    numberOfReports: number;
}


interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetterName: string = firstName [0];
    return firstLetterName + ". " + lastName;
}

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
