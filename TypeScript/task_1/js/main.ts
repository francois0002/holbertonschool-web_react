interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience? : number;
    location: string;

    [key: string]: any;      // Allows any additional properties with any type
}
