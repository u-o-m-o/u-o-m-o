     function  generateChart(featureslabels,featuresdata,socialname,attributiunici,attributi,percentualecompletezza) {


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
                                "tooltips": {
                                    "enabled": true,
                                    "mode": 'single',
                                    "callbacks": {
                                        "label": function(tooltipItems, data) {
                                            return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + '%';
                                        }
                                    }
                                },
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
                                        },
            };



        var barrafeatures = document.getElementById("StatsChartbar").getContext("2d");

        new Chart(barrafeatures,{
                                    "type": "bar",
                                    "data": datibar,
                                    "options": opzionibarfeatures
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



    
$(document).ready(function() {
    var featureslabels = [];
    var featuresdata = [];
    var socialname = [];
    var attributiunici = [];
    var attributi = [];
    var percentualecompletezza = [];
    $.ajax({
        dataType: "json",
        url: "features.json",
        success: function(datisegn) {
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
                    datisegn.forEach(function(arrayItem) {
                        socialname.push(arrayItem["social"])
                        attributiunici.push(arrayItem["attributi unici"])
                        attributi.push(arrayItem["attributi"])
                        percentualecompletezza.push(arrayItem["percentualecompletezza"])
                    });
                }
            })
            generateChart(featureslabels,featuresdata,socialname,attributiunici,attributi,percentualecompletezza)

    function resetChart() {
        //Reset chart data 
        $('canvas').remove();
        $('.item1').prepend('<canvas id="StatsChartbar" style="width: 200px;"></canvas>');
        $('.item2').prepend('<canvas id="FeaturesChartbar" style="width: 200px;"></canvas>');
        $('.item3').prepend('<canvas id="EleChartrad" style="width: 200px;"></canvas>');
    
        generateChart(featureslabels,featuresdata,socialname,attributiunici,attributi,percentualecompletezza);
    }
    
    $(document).on('click', '.carousel-control', function () {
        resetChart();
    });
        })