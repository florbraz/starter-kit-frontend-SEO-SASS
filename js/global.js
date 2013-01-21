$(function() {	
	$('.formsHome').hide();
	$('.loginRegister button').click(function() {
		if ($(this).hasClass('active')) {
			$('.formsHome').slideUp();
			$(this).removeClass('active');
		} else {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$('.formsHome').slideUp();
			if ($(this).hasClass('login')) {
				$('.formLogin').slideDown();
			} else {
				$('.formLogin2').slideDown();
			}
		}
	});
	
	$('.mostrar li').click(function() {
		if (!$(this).hasClass('active')) {
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$(this).closest('ul, .containerArtes').siblings('ul, .containerArtes').hide();
			if ($(this).hasClass('vagas')) {
				$('.listaVagas').show();
			} else {
				$('.containerArtes').show();
				if ($('.containerArtes').html() == '') {
					$.ajax({
					  url: "_listaArtes.html",
					  success: function(data) {
						$('.containerArtes').append(data);
					  }
					});
				}
				colunasArtes();
			}
		}
	});
	
	
	try {
		$(".filter select").msDropDown();
	} catch(e) {
		alert(e.message);
	}
	
	//placeholder
	if(!Modernizr.input.placeholder){

	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});

}
	
});

$(window).load(function() {
	colunasArtes();
});

function colunasArtes() {

	var heightColumn = 0;
	$('.listaArtes li').each(function() {
		if ($(this).height() > heightColumn) {
            heightColumn = $(this).height();
        }
	});
	$('.listaArtes li').each(function() {
		$(this).find('.arte').css('margin-top', heightColumn - $(this).height());
	});
	
}