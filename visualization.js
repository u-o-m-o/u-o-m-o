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
    //BARRA Attributi common
                        var datibar = {
                        labels: featureslabels,
                        datasets: [
                            {
                                "label": "Common Profile Feature",
                                fontColor: "black",
                                data: featuresdata,
                                backgroundColor: "#808080"
                                },
                            ]
                        };
                        var opzionibarfeatures = {
                                            responsiveAnimationDuration: 1000,
                                            //"tooltips": {
                                            //    "enabled": true,
                                            //    "mode": 'single',
                                            //    "callbacks": {
                                            //        "label": function(tooltipItems, data) {
                                            //            return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + '%';
                                            //        }
                                            //    }
                                            //},
                                            legend: {
                                                fontColor: "black"
                                            },
                                            "scales": {
                                                "yAxes": [{
                                                    "ticks": {
                                                        fontColor: "black",
                                                        "beginAtZero": true,
                                                        "callback": function(value, index, values) {
                                                            return value + '%';
                                                        }
                                                    }
                                                }],
                                            "xAxes": [{
                                                    "ticks": {
                                                        fontColor: "black"}
                                                }],
                                            plugins: {
                                              datalabels: {
                                                 // hide datalabels for all datasets
                                                 display: false
                                                      }
                                                    }
                                            }
                        };



                    var barrafeatures = document.getElementById("StatsChartbar").getContext("2d");

                    new Chart(barrafeatures,{
                                                "type": "bar",
                                                "data": datibar,
                                                //"options": opzionibarfeatures
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
      //BARRA ATTRIBUTI (totali e unici)
                        var datibaratt = {
                        labels: socialname,
                        datasets: [
                            {
                                "label": "Profile Features",
                                fontColor: "black",
                                data: attributi,
                                backgroundColor: "#808080"
                                },
                                {
                                    "label": "Unique Profile Features",
                                    fontColor: "black",
                                    data: attributiunici,
                                    backgroundColor: "#000000"
                                    },
                                ]
                        };

                        var opzionibaratt = {
                                            responsiveAnimationDuration: 1000,
                                            "tooltips": {
                                                "enabled": true,
                                                "mode": 'single',
                                            },
                                            legend: {
                                                fontColor: "black"
                                            },
                                            "scales": {
                                                "xAxes": [{
                                                    "ticks": {
                                                        fontColor: "black",
                                                        "beginAtZero": true,
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
         //RADAR
                    
                    var datirad = {
                        labels: socialname,
                        datasets: [{
                            "label": "Social Profile Completeness",
                            data: percentualecompletezza
                        }]
                    };
                    var opzioniradar = {
                                                    responsiveAnimationDuration: 1000,
                                                    "tooltips": {
                                                        "enabled": true,
                                                        "mode": 'single',
                                                        "callbacks": {
                                                            "label": function(tooltipItems, data) {
                                                                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + '%';
                                                            }
                                                        }
                                                    },
                                                    "scale": {
                                                        "ticks": {
                                                            "beginAtZero": true,
                                                             "callback": function(value, index, values) {
                                                                            return value + '%';}
                                                        }
                                                    },
                                                    legend: {
                                                        display: true
                                                    },
                                                };

                    
                    var radarfeatures = document.getElementById("EleChartrad").getContext("2d");
                    new Chart(radarfeatures, {
                                                "type": 'radar',
                                                "data": datirad,
                                                "options": opzioniradar
                                            });

        }
    })
    
})
