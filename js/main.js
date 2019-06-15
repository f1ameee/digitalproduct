;
(function () {

	function baMap() {

		let mapCenter = {
			lat: 40.683266,
				lng: -73.895457
		}


		let baMap = new google.maps.Map(document.getElementById('ba-map'), {
			center: mapCenter,
			zoom: 15
		});

		// The marker, positioned at Uluru

		let cities = {
			rome: {
				lat: 40.683266,
				lng: -73.895457
			}
			
		}

		for (let key in cities) {

			let markerCord = cities[key];

			var marker = new google.maps.Marker({
				position: cities[key],
				map: baMap,
				animation: google.maps.Animation.DROP,
				icon: 'img/Ellipse 11.png'
			});
		}

	}

	baMap();


	let heroSlider = $('.single-slide');

	heroSlider.slick({
		dots: true,
		arrows: true,
		fade: true,
	});






})();