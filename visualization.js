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
                        console.log(featuresdata);
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
        
    $.ajax({
            dataType: "json",
            url: "attributisocial.json",
            success: function(datisegn) {
                        var socialname = [];
                        var attributiunici = [];
                        var attributi = [];
                        var percentualecompletezza = [];
                        datisegn.forEach(function(arrayItem) {
                            socialname.push(arrayItem["social"])
                            attributiunici.push(arrayItem["attributi unici"])
                            attributi.push(arrayItem["attributi"])
                            percentualecompletezza.push(Math.round(arrayItem["percentualecompletezza"]))
                        });
                        var datibaratt = {
                        labels: featureslabels,
                        datasets: [
                            {
                                "label": "Features",
                                fontColor: "black",
                                data: attributi,
                                backgroundColor: "#808080"
                                },
                                {
                                    "label": "Unique Features",
                                    fontColor: "black",
                                    data: attributiunici,
                                    backgroundColor: "#808080"
                                    },
                                ]
                        };

                        var opzionibaratt = {
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
                                                        "max": 35,
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



                    var barratt = document.getElementById("FeaturesChartbar").getContext("2d");

                    new Chart(barratt,{
                                                "type": "horizontalBar",
                                                "data": datibaratt,
                                                "options": opzionibaratt
                                            });

        }
    })
    
})
