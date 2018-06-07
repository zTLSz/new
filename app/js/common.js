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

	$('.menu__opener').on( 'mouseenter mouseleave', function(){
		$(this).find('.hover__menu').slideToggle();
	})

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


            