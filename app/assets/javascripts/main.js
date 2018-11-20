$(document).ready(function() {
 	
$('ul > .card').hide();

$('.container-categories > ul > li').click(function(){
	if( $(this).next().is(":hidden") ) {
			$('ul > .card').hide(500);
	 		$(this).next().show(500);
		}
	else
		{
	  	$(this).next().hide(500);
	 	}
});

$('.nav-link').hide()

$('.rounded-circle').click(function(){
	$('nav-link').hide(500);
     if( $('.nav-link').is(":hidden") ) {
       $('.nav-link').toggle(500);
      }
      else
      {
       $('.nav-link').hide(500);
      }
   });

});







