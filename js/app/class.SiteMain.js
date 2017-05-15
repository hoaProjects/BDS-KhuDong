var SiteMain = (function() {
	//PARAMATER

	//INIT
	function init(){
		setupSliderBanner();
		selectbox();
    }
	function setupSliderBanner(){
		$(".single-item").slick({
            dots: true,
            infinite: true,
            lazyLoad: 'ondemand', // ondemand progressive anticipated
        });
		$('.multiple-items').slick({
			  infinite: true,
			  speed: 300,
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]
			});
			$('.hot-product').slick({
				  infinite: true,
				  speed: 300,
				  slidesToShow: 4,
				  slidesToScroll: 4,
				  responsive: [
				    {
				      breakpoint: 1024,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 3,
				        infinite: true,
				        dots: true
				      }
				    },
				    {
				      breakpoint: 600,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				    // You can unslick at a given breakpoint now by adding:
				    // settings: "unslick"
				    // instead of a settings object
				  ]
		});
	}
	function selectbox(){
		$('.sec-search .select').click(function(e){
			$('.sec-search .list').css('display','none');
			$('.sec-search .list').removeClass('active');
			if(!$(this).hasClass('active')) {
				$(this).find('.list').css('display','block');
				$(this).addClass('active');
			}
			else {
				$(this).find('.list').css('display','none');
				$(this).removeClass('active');
			}
		})
		$('.sec-search .selectbox .list span').click(function(e){
			$(this).parents('.select').find('input').val($(this).text());
			$('.sec-search .list').css('display','none');
			$('.sec-search .list').removeClass('active');
		})
	}
    //RETURN
	return {
		init:init
	}
})();

$(document).ready( function() {
	SiteMain.init();
});
