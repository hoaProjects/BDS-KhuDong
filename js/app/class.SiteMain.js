var SiteMain = (function() {
	//PARAMATER
	
	//INIT	
	function init(){
        clsSlider.init();
        clsResponsize.init();
        clsMenu.init();
        clsPopup.init();
        clsVoted.init();
        clsLocations.init();
        clsMyQuickUI.init();
        clsQuestions.init();

        $('.processsliderother').each(function () {
            var slider = new clsOtherProducts($(this));
        });

        $('.processslider_myquick').each(function () {
            var sliderMyQuick = new clsMyquickSlider('#' + $(this).attr('id'));
        });

        //console.log(bowser.name, bowser.version);
        $('body').addClass(bowser.name);
    }
	
	//FUNCTION
    function getBootstrapDeviceSize() {
        return $('#users-device-size').find('div:visible').first().attr('id');
    }

    function mobile() {
        return $('body').hasClass('Mobile');
    }

    function ie() {
        return $('body').hasClass('Explorer');
    }

    //MOVE TO
    function goto(id) {
	    var obj = id;
        var parentid = $(obj).attr('parentid')

        if(parentid || '') {
            obj = parentid;
        }

        console.log(obj, $(obj).position().top);
	    var pos = $(obj).position().top - para_main.menu_height;

	    var size = getBootstrapDeviceSize();

        if(mobile()) {
            pos = pos - 150;
        }else {
            if( size == 'sm' || size == 'xs' ) {
                pos = pos - 59;
            }
        }

        $('body').scrollTo({ top:pos, left:0 }, 500, function(){
            //close MENU
        });

        clsMenu.closesub();
    }

    //ROUTE
    function route_hide() {
        $('header').removeClass('header-direction');
    }

    function route_show() {
        $('header').addClass('header-direction');
    }

    //SCROLL
    function scroll_add(divID){
	    if(mobile()) return;
        $(divID).mCustomScrollbar();
    }

    function scroll_clear(divID){
        //$(divID).mCustomScrollbar();
    }

    //RETURN
	return {
		init:init,
        goto:goto,
        mobile:mobile,
        ie:ie,
        route_hide:route_hide,
        route_show:route_show,
        getBootstrapDeviceSize:getBootstrapDeviceSize,
        scroll_add:scroll_add,

	}
})();		

$(document).ready( function() {
	SiteMain.init();

    //clsLocations.locationNotification_open('#nightdrive-notification');
    clsLocations.locationNotification_open('#location-notification');
    //clsLocations.locationNotification_open('#locationchange-notification');
});

$(window).load( function() {


});

