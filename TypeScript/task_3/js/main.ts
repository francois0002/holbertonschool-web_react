
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetterName: string = firstName [0];
    return firstLetterName + ". " + lastName;
}

