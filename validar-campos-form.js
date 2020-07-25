
function checarCampos() {
	
	$(".checar-campo").each(function() {
		
		if ( $(this).val().localeCompare("") == 0 ) {
			$(this).css('border-color', '#dc3545');
		} else {
			$(this).css('border-color', '');
		}
		
	});	
}

$(document).on( "change", ".checar-campo", function() {checarCampos();});
$(document).on( "onkeyup", ".checar-campo", function() {checarCampos;});

function verificarInputRequered() {
	
	$(':input[required]').each(function() {	
		$(this).addClass('is-invalid');
		$(this).addClass('checar-campo');
	});
	
}

$(document).ready(function () {
	verificarInputRequered();
	checarCampos();
});


