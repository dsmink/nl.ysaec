/**
 * Makes the top level navigation menu item clickable
 */
(function($){
    
    //handles top level menu item without children
    $( '.navbar-nav > li.menu-item > a' ).click( function(){
    	if($(this).attr('target') != '_blank' && $(this).attr('class') != 'dropdown-toggle')    		
          window.location = $( this ).attr( 'href' );   	
    });

    //handles top level menu item having children
    $( '.navbar-nav > li.menu-item > .dropdown-toggle' ).click( function(){
    	if($(this).attr('target') == '_blank')
          window.open(this.href); // $( this ).attr( 'href' );   
        else
          window.location = $( this ).attr( 'href' );   		
    });

    $('.dropdown').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });

    var setHeight = function (h) {
		
	height = h;

	$("#cc_spacer").css("height", height + "px");
	}

	$(window).resize(function(){
		setHeight($("#navigation_menu").height());
	})

	$(window).ready(function(){
		setHeight($("#navigation_menu").height());
	})
})(jQuery);

/**
 * 
 */
( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
})();

// Smink Menu fixing
(function($) {
    $('.navbar-nav').on('click', '.menu-item-toggle', function() {

		var $parentItem = $(this).parent('.menu-item');

		setTimeout(function() {

			
			console.log($parentItem);
			$parentItem.toggleClass('open');

		}, 250);
    });
})(jQuery);

// Nofollow
(function($) {
	$('.widget').each(function() {
		$(this).find('a').each(function() {
			$(this)
				.prop('rel', 'nofollow')
				.prop('target', '_blank');
		});
	});
})(jQuery);

// Hreflang attribute
(function($) {
	$('a').each(function() {
		$(this).prop('hreflang', 'nl');
	});
})(jQuery);