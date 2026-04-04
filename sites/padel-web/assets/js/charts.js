var options = {
    series: [{
        name: 'Inflation',
        data: [123, 63, 88, 64, 61, 85, 120, 85, 64, 61, 120, 85]
    }],
    chart: {
        height: 150,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            dataLabels: {
                position: 'top',
            },
            colors: {
                ranges: [{
                    from: 0,
                    to: 70,
                    color: '#D92D20'
                }, {
                    from: 70,
                    to: 1000,
                    color: '#68BC45'
                }]
            }
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function(val) {
            return val;
        },
        offsetY: -25,
        style: {
            fontSize: '12px',
            fontWeight: '700',
        },
        background: {
            enabled: true,
            foreColor: '#304758',
            padding: 4,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#EAECF0',
            dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#EAECF0',
            }
        },
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
            show: true,
            rotate: -45,
            offsetY: 0,
            style: {
                fontSize: '12px',
                colors: "#64748B",
                fontWeight: '700',
            }
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function(val) {
                return val;
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// ============================================================================================

var data = [54, 46];

// Calculate percentages
var total = data.reduce((a, b) => a + b, 0);
var percentages = data.map(value => (value / total) * 100);

// Determine colors based on percentages
var colors = percentages.map(percent => percent < 50 ? '#D92D20' : '#68BC45');

var options = {
    series: data,
    chart: {
        width: 210,  // Set width to 300
        height: 210, // Set height to 300
        type: 'pie',
    },
    dataLabels: {
        enabled: true,
        formatter: function(val) {
            return val;
        },
        style: {
            fontSize: '12px',
            fontWeight: '700',
        },
        background: {
            enabled: true,
            foreColor: '#304758',
            padding: 12,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#EAECF0',
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                color: '#FFF',
                opacity: 0
            }
        },
    },
    // labels: ['Team A', 'Team B'],
    colors: colors, // Set colors dynamically
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();