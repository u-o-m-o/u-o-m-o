     function  generateChart(featureslabels,featuresdata,socialname,attributiunici,attributi,percentualecompletezza) {


        //BARRA Attributi common
        var datibar = {
            labels: featureslabels,
            datasets: [
                {
                    "label": "Common Profile Feature",
                    fontColor: "black",
                    data: featuresdata,
                    backgroundColor: "#7ecc8c"
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
                                                    fontColor: "black",
                                                    autoSkip: false
                                                    }
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
                backgroundColor: "#7ecc8c"
                },
                {
                    "label": "Unique Profile Features",
                    fontColor: "black",
                    data: attributiunici,
                    backgroundColor: "#5a9164"
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
                                     stacked: true,
                                    "ticks": {
                                        fontColor: "black",
                                        "beginAtZero": true,
                                        autoSkip: false
                                    }
                                }],
                            "yAxes": [{
                                    stacked: true,
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
                        data: percentualecompletezza,
                        backgroundColor: "#7ecc8c"
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
                                                    pointLabels: {
                                                        fontSize: 16
                                                      },
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
        url: "json/features.json",
        success: function(datisegn) {
                    datisegn.forEach(function(arrayItem) {
                        featureslabels.push(arrayItem["nome_coso"])
                        featuresdata.push(Math.round(arrayItem["percentuale utilizzo"]))
                    });
                }
            })
    $.ajax({
        dataType: "json",
        url: "json/newattributisocial.json",
        success: function(datisegn) {
                    datisegn.forEach(function(arrayItem) {
                        socialname.push(arrayItem["Social"])
                        attributiunici.push(arrayItem["Attributi Unici"])
                        attributi.push(arrayItem["Attributi"])
                        percentualecompletezza.push(Math.round(arrayItem["Percentualecompletezza"]))
                    });
                }
            })
            generateChart(featureslabels,featuresdata,socialname,attributiunici,attributi,percentualecompletezza)

   // function resetChart() {
        //Reset chart data 
   //     $('canvas').remove();
   //     $('.item1').prepend('<div class="row item1"> <div class="col-sm-1"> </div> <div class="col-sm-10"> <canvas id="StatsChartbar" style="width: 200px;"></canvas> <h1>HIHIHIHI</h1> </div> <div class="col-sm-1"> </div> </div>');
   //     $('.item2').prepend('<div class="row"> <div class="col-sm-1"> </div> <div class="col-sm-10"> <canvas id="FeaturesChartbar" style="width: 200px;"></canvas> <h1>HIHIHIHI</h1> </div> <div class="col-sm-1"> </div> </div>');
   //     $('.item3').prepend('<div class="row"> <div class="col-sm-1"> </div> <div class="col-sm-10"> <canvas id="EleChartrad" style="width: 200px;"></canvas> <h1>HIHIHIHI</h1> </div> <div class="col-sm-1"> </div> </div>');
    
   //     generateChart(featureslabels,featuresdata,socialname,attributiunici,attributi,percentualecompletezza);
   // }
    
   // $(document).on('click', '.carousel-control', function () {
   //     resetChart();
   // });
        })
