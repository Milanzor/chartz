// Some demo data, only load it when the original window.charts is empty
if (!'charts' in window || window.charts.length === 0) {
    window.charts = [

        // Taart 1
        {
            title: {
                text: "Voorbeeld 1"
            },
            series: [{
                name: "Aantal",
                data: [
                    ['A', 88.19],
                    ['B', 9.22],
                    ['C', 1.58],
                    ['D', 1.01]
                ]
            }],
        },

        // Taart 2
        {
            title: {
                text: "Voorbeeld 2"
            },
            series: [{
                name: "Aantal",
                data: [
                    ['A', 77.83],
                    ['B', 17.8],
                    ['C', 2.94],
                    ['D', 0.72],
                ]
            }],
        },
    ];
}