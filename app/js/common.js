$(function() {

	// banner main

	$('.slider__big').slick({
		dots: true,
		arrows: true,
		infinite: false,
		nextArrow: $('.slider__big-arr-right'),
		prevArrow: $('.slider__big-arr-left'),
	});

	$('.slider__big').on('afterChange', function(slick, currentSlide) {
		$('.slider__big-item-img img').removeClass('anim');
		$('.slick-active .slider__big-item-img img').addClass('anim');
	});

  // menu hover top

	$('.menu__opener').on( 'mouseenter mouseleave', function(){
		$(this).find('.hover__menu').slideToggle();
	})

  // estate switch

	$(document).ready(function() {
		if ($('#switch-1').is(':checked')) {
			$('.estate__item').hide();
		} else {
			$('.map').hide();
		}
	});

	$('#switch-1').click(function() {
		if ($('#switch-1').is(':checked')) {
			$('.map').show();
			$('.estate__item').hide();
		} else {
			$('.estate__item').show();
			$('.map').hide();
		}
	});

  // calc

  // здесь задаются параметры для размера первого взноса
  function setMinMaxValue(max, el) {
    $(el).attr({
      "max": 0.9 * max,
      "min": 0.15 * max
    }) 
  }

  // попап с графиком платежей1 
  function paymentGraf(time, pay) {
    $('#mort-payment').html('');
    var timeMonth  = time * 12;
    var monthName = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var dateMortStart = new Date();
    var dateMortMonth = +dateMortStart.getMonth();
    var dateMortYear = +dateMortStart.getFullYear();
    var lm = 11;
    for (var i = 0; i < timeMonth; i++) {
      console.log(monthName[dateMortMonth] + ' ' + dateMortYear);
      $('#mort-payment').append('<div class="payment__block-item">' + monthName[dateMortMonth] + ' ' + dateMortYear + '</div>' + '<div class="payment__block-item">' + pay + ' ₽' + '</div>')
      dateMortMonth++;
      if (dateMortMonth > 11) {
        dateMortMonth = 0;
        dateMortYear++;


      }
    }

  }

  function mCalc() {

    // берем данные с инпутов
    var calcProcent = (+$('#calc-procent').val()) / 10;
    var calcPrice = +$('#calc-price').val();
    var calcDepo  = +$('#calc-depo').val();
    var calcTime = +$('#calc-time').val();

    // первый взнос
    var Depo = $('#calc-depo');
    setMinMaxValue(calcPrice, Depo);
    if (calcDepo > calcPrice) {
      calcDepo = calcPrice * 0.9;
    }


    // ежемесячный платеж
    var mounthProcent = (calcProcent / 12) / 100;
    // коэффициент аннуитета
    var annuitet = (mounthProcent * (Math.pow(1 + mounthProcent, calcTime * 12))) / (Math.pow(1 + mounthProcent, calcTime * 12) - 1);
    // размер кредита
    var creditAmount = calcPrice - calcDepo;
    var result = creditAmount * annuitet;
    var salary = result * 1.6;

    //  делим на разряды
    var creditAmountToStr = creditAmount.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    var calcPriceToStr = calcPrice.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    var calcDepoToStr = calcDepo.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    var resultToStr = result.toFixed().toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    var salaryToStr = salary.toFixed().toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');


    // подставляем значения 
    $('#calc-procent-val').text((calcProcent).toFixed(1) + ' %');
    $('#calc-price-val').text(calcPriceToStr + ' ₽');
    $('#calc-depo-val').text(calcDepoToStr  + ' ₽');
    $('#calc-time-val').text(calcTime + ' лет');
    $('#calc-res-sum').text(creditAmountToStr + ' ₽');
    $('#calc-res-price').text(resultToStr + ' ₽');
    $('#calc-res-salary').text(salaryToStr + ' ₽');    

    paymentGraf(calcTime, resultToStr);

  }

      mCalc();
  $('#calc-procent, #calc-price, #calc-depo, #calc-time').on('change', function() {
      mCalc();
  })


});

// map

      function initMap() {
        // Styles a map in night mode.
        var mark1 = {lat: 56.306, lng: 44.029};
        var mark2 = {lat: 56.282, lng: 43.931};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 56.284, lng: 43.997},
          zoom: 12,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });

        var markerContent = '<div class="marker-clicker">'   +   '<div class="project__item project__item-comm">' +
                '<div class="project__item-img">' +
                  '<a href="#"><img src="img/chicken-pho-1.jpg" alt="item"></a>' +
                '</div>' + 
                '<div class="project__item-text">' +
                  '<h3>Жилой комплекс "Комарово"</h3>' +
                  '<p class="project__adr-comm">Коммерческие помещения от 70 м2</p>' +
                  '<p class="project__amount">От 1.2 млн руб.</p>' +
                '</div>' +
              '</div>' + '</div>'

        var markerContentBooks = '<div class="marker-clicker">' + '<div class="project__item project__item-comm">' +
                '<div class="project__item-img">' +
                  '<a href="#"><img src="img/chicken-pho-2.jpg" alt="item"></a>' +
                '</div>' +
                '<div class="project__item-text">' +
                  '<h3>Жилой комплекс "Книги"</h3>' +
                  '<p class="project__adr-comm">Коммерческие помещения от 70 м2</p>' +
                  '<p class="project__amount">От 2.1 млн руб.</p>' +
                '</div>' +
              '</div>' + '</div>'

        var infowindow1 = new google.maps.InfoWindow({
          content: markerContent
        });

        var infowindow2 = new google.maps.InfoWindow({
          content: markerContentBooks
        });

        var marker = new google.maps.Marker({
          position: mark1,
          map: map,
          icon: 'img/oval-map-1.png'
        });

        var marker2 = new google.maps.Marker({
          position: mark2,
          map: map,
          icon: 'img/oval-map-2.png'
        });

        marker.addListener('click', function() {
            infowindow2.open(map, marker);
        });

        marker2.addListener('click', function() {
            infowindow1.open(map, marker2);
        });
      }


            