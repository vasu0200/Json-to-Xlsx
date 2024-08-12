const XLSX = require('xlsx');

const data = [
    { Name: "John Doe", Age: 28, Email: "johndoe@example.com" },
    { Name: "Jane Doe", Age: 25, Email: "janedoe@example.com" },
    { Name: "Alice Smith", Age: 30, Email: "alice@example.com" }
];

// XLSX.utils.json_to_sheet(data): Converts the JSON data into a format that Excel can understand (a worksheet).
const worksheet = XLSX.utils.json_to_sheet(data);

// XLSX.utils.book_new(): Creates a new Excel workbook.
const workbook = XLSX.utils.book_new();

// XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1"): Adds the worksheet to the workbook and names it "Sheet1".
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

// XLSX.writeFile(workbook, filePath): Writes the workbook to a file on your filesystem.
const filePath = './output.xlsx';

XLSX.writeFile(workbook, filePath);

console.log(`Excel file has been saved to ${filePath}`);
