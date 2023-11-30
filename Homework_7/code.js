window.onload = () => {
        
    let books = [
        {
            name: "Mort",
            author: "Terry Pratchett",
            date: "12-XI-1987"
        },
        {
            name: "Wyrd Sisters",
            author: "Terry Pratchett",
            date: "10-XI-1987"
        },
        {
            name: "Snuff",
            author: "Terry Pratchett",
            date: "11-X-2011"
        },
        {
            name: "Going Postal",
            author: "Terry Pratchett",
            date: "25-IX-2004"
        },
        {
            name: "The Color of Magic",
            author: "Terry Pratchett",
            date: "24-XI-1983"
        },
        {
            name: "The Fellowship of the Ring",
            author: "J. R. R. Tolkien",
            date: "29-VI-1954"
        },
        {
            name: "The Two Towers",
            author: "J. R. R. Tolkien",
            date: "11-XI-1954"
        },
        {
            name: "The Return of the King",
            author: "J. R. R. Tolkien",
            date: "20-X-1955"
        },
    ];

    createTable = (array, caption) => {
        let table = document.createElement('table')
        let tableCaption = document.createElement('caption')
        tableCaption.innerText = caption
        table.appendChild(tableCaption)

        let firstRowObject = array[0]
        let firstRow = document.createElement('tr');
        
        for (key in firstRowObject){
            let th = document.createElement('th') 
            th.innerText = key
            firstRow.appendChild(th)
        }

        table.appendChild(firstRow)

        for (element of array) {
            let tr = document.createElement('tr')
            for (key in element){
                let td = document.createElement('td') 
                td.innerText = element[key]
                tr.appendChild(td)
            };
            table.appendChild(tr)
        };

        table.setAttribute("border", "1px")
        document.body.appendChild(table)
        
    };

    createTable(books, 'Books');
    
    document.querySelector('button').addEventListener('click', () => {
        var table = document.querySelector('table');
        var lastRow = table.rows[table.rows.length - 1];
        if (lastRow) {
            table.deleteRow(table.rows.length - 1);
        }
    });
};