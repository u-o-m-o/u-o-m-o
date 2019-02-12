$(document).ready(function() {

        $.ajax({
            dataType: "json",
            url: "features.json",
            success: function(datisegn) {
                        var featureslabels = [];
                        var featuresdata = [];
                        datisegn.forEach(function(arrayItem) {
                            featureslabels.push(arrayItem["nome_coso"])
                            featuresdata.push(Math.round(arrayItem["percentuale utilizzo"]))
                        });
                        var datibar = {
                        labels: featureslabels,
                        datasets: [
                            {
                                "label": "Most Common Profile Features",
                                fontColor: "black",
                                data: featuresdata,
                                backgroundColor: "#808080"
                                },
                            ]
                        };

                        var opzionibarfeatures = {
                                            responsiveAnimationDuration: 1000,
                                            "tooltips": {
                                                "enabled": true,
                                                "mode": 'single',
                                                "callbacks": {
                                                    "label": function(tooltipItems, data) {
                                                        return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + '%';
                                                    }
                                                }
                                            },
                                            legend: {
                                                fontColor: "black"
                                            },
                                            "scales": {
                                                "xAxes": [{
                                                    "ticks": {
                                                        fontColor: "black",
                                                        "beginAtZero": true,
                                                        "max": 100,
                                                        "callback": function(value, index, values) {
                                                            return value + '%';
                                                        }
                                                    }
                                                }],
                                            "yAxes": [{
                                                    "ticks": {
                                                        fontColor: "black"}
                                                }]
                                            }
                        };



                    var barrafeatures = document.getElementById("StatsChartbar").getContext("2d");

                    new Chart(barrafeatures,{
                                                "type": "horizontalBar",
                                                "data": datibar,
                                                "options": opzionibarfeatures
                                            });

        }
    })

})
