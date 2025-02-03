const Chart = require("chart.js/auto");
//const ctx = document.getElementById("chart")

let req = {
    id: "1",
    get url() {
        return `https://github.com/SuperMeerkat345/${this.id}`
    }
}

console.log(req.id)
console.log(req.url)

async function initChart () {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];

    new Chart(
        //ctx,    
        {
            type: "scatter",
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: "Test Graph",
                        data: data
                    }
                ]
            }
        }
    )
}

//initChart()