const readline = require('readline');

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

let books = ["Atomic Habits", "Hamlet", "Rich dad, poor dad"];
readline1.setPrompt(`Press 1, 2 or 3 to do the below actions based on your selection \n 1 - Show all books \n 2 - Add a new book \n 3 - Quit \n Input: `);
readline1.prompt();

readline1.on("line", option => {

        if (option == 1) {
            console.log(books);
            readline1.prompt();
        } else if (option == 2) {
            readline1.question(`\n Enter the name of the book that you want to add: \n Input: `, (bookName) => {
                books.push(bookName);
                console.log("Book has been added successfully!");
                readline1.prompt();
            });
        } else if (option == 3) {
            readline1.question(`Are you sure you want to quit - press Y to quit. \n Input: `, (confirmation) => {
                if (confirmation == "Y" || confirmation == 'y') {
                    readline1.close();
                } else {
                    readline1.prompt()
                }
            });
        } else {
            console.log("Invalid input!");
            readline1.prompt();
        }
});

readline1.on("close", function () {
    console.log("Bye Bye!");
});