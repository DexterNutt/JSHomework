window.onload = () => {
// - Табела за приказ на податоци од StarWars API

    async function getStarWarsInfo() {
        try{
            const result = await fetch('https://swapi.dev/api/people') 
            const data = await result.json()
            const array = data.results
            const filteredArray = array.map(({name, height, hair_color, skin_color, eye_color, birth_year }) => ({
                name,
                height,
                hair_color,
                skin_color,
                eye_color,
                birth_year,
            }));

            let table = document.createElement('table')
            let thead = document.createElement('thead')
            let tbody = document.createElement('tbody')

            let headerRow = document.createElement('tr')
            for (key in filteredArray[0]) {
                th = document.createElement('th')
                th.innerHTML = key
                headerRow.appendChild(th);
            }
            thead.appendChild(headerRow)
            table.appendChild(thead)

            filteredArray.forEach((element) => {
                tr = document.createElement('tr')
                for (key in element) {
                    td = document.createElement('td')
                    td.innerHTML = element[key]
                    tr.appendChild(td)
                }
                tbody.appendChild(tr)
            })

            // Add Table Style and Formatting
            table.style.color = '#bd8306'
            table.style.border = '2px solid #7b2706'
            thead.style.backgroundColor = '#4b3e08'
            tbody.style.backgroundColor = '#233d05'
            table.style.fontFamily = 'Arial'

            // Draw the table
            table.appendChild(tbody)
            document.body.appendChild(table)

        }   catch (error) {
            console.log(error)
        }
    }

    getStarWarsInfo()
    
}

        