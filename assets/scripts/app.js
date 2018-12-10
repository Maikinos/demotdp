//new WOW().init();
function openCity(cityName,elmnt) { 

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = '#f52d2d';

    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = '#f52d2d';
    elmnt.style.color = '#ffff';

    
}

function oTab(){
    $( "#check-prod" ).click(function() {
        $("#l-pedido").click();
      });
}

function ontaber(){
    $(".promo").show();
}

function traeMe(){
    $('#buscar').on('click', function(){

    
        compruebaim = $('#txtbuscar').val();
    
        pat1 = /bactrim/;
        pat2 = /repriman/;
            
        siinst = pat1.test(compruebaim);
        siinst2 = pat2.test(compruebaim);
    
        if (siinst) {
            $('.returna-cos').show();
            $('.returna-bactrim').show();
            $('.returna-repriman').hide();
        }
    
        else if(siinst2){
            $('.returna-cos').show();
            $('.returna-bactrim').hide();
            $('.returna-repriman').show();
        }
        
    });
}

function agregadoSelecto(){
    $('.prod-selec').on('click', function(){

        $('.returna-wos').show();
        $('.ccptt01').show();
       
        
    });

    $('.prod-selec2').on('click', function(){

        $('.returna-wos').show();
        $('.ccptt02').show();
       
        
    });
}

//Toggle chevrons
function toggleChevron(e) {
$(e.target)
.prev('.panel-heading')
.find("i.indicator")
.toggleClass('glyphicon-chevron-down-custom glyphicon-chevron-up-custom');
        }
        $('#accordion').on('hidden.bs.collapse', toggleChevron);
        $('#accordion').on('shown.bs.collapse', toggleChevron);

        


        