interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 : Student = {
    firstName: "François",
    lastName: "Gosselin",
    age: 31,
    location: "France"
}

const student2 : Student = {
    firstName: "Alex",
    lastName: "Crement",
    age: 25,
    location: "Lille"
}

const studentsList: Student[] = [student1, student2];


const body: HTMLBodyElement = document.getElementsByTagName("body")[0]; // Access the body element of the document

const table: HTMLTableElement = document.createElement("table"); // Create a table element
const thead: HTMLTableSectionElement = document.createElement("thead"); // Create thead element for table header
const tbody: HTMLTableSectionElement = document.createElement("tbody"); // Create tbody element for table body

const rowHead: HTMLTableRowElement = thead.insertRow(0); // Insert a row at the start of thead (header row)
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0); // Insert first cell in the header row
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1); // Insert second cell in the header row

cell1Head.innerHTML = "firstName"; // Set the text for the first header cell
cell2Head.innerHTML = "location"; // Set the text for the second header cell

table.append(thead); // Append the thead (table header) to the table

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0); // Insert a new row at the top of tbody
  const cell1: HTMLTableCellElement = row.insertCell(0); // Insert first cell for the student's first name
  const cell2: HTMLTableCellElement = row.insertCell(1); // Insert second cell for the student's location

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
