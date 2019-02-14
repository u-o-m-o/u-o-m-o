function resetChart() {
    //Reset chart data 
    $('canvas').remove();
    $('.item1').prepend('<canvas id="bar-chart" style="width:100%; height:360px;"></canvas>');
    $('.item2').prepend('<canvas id="line-chart" style="width:100%; height:360px;"></canvas>');
    $('.item3').prepend('<canvas id="pie-chart" style="width:100%; height:360px;"></canvas>');

    generateChart();
}

$(document).on('click', '.carousel-control', function () {
    resetChart();
});












            function  generateChart() {

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



                    var barrafeatures = document.getElementById("StatsChartbar").getContext("2d");

                    new Chart(barrafeatures,{
                                                "type": "horizontalBar",
                                                "data": datibar,
                                                "options": opzionibarfeatures
                                            });


   
                        var datibar = {
                        labels: socialname,
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



                    var barrafeatures = document.getElementById("FeaturesChartbar").getContext("2d");

                    new Chart(barrafeatures,{
                                                "type": "horizontalBar",
                                                "data": datibar,
                                                "options": opzionibarfeatures
                                            });
                    

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
                                                            "max": 35,
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



    
$(document).ready(function() {

    $.ajax({
        dataType: "json",
        url: "features.json",
        success: function(datisegn) {
                    var featureslabels = [];
                    var featuresdata = [];
                    datisegn.forEach(function(arrayItem) {
                        featureslabels.push(arrayItem["nome_coso"])
                        featuresdata.push(arrayItem["percentuale utilizzo"])
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
                        percentualecompletezza.push(arrayItem["percentualecompletezza"])
                    });
                }
            })
            generateChart()
        })