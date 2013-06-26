/* Version 0.1
 * @author fabrice
 * created 5 mai 2012
 * plugins jQuery pour faire des equipe de babyfoot
 */

(function($) { // définition du plugin jQuery
    $.fn.ptitBaby = function(params) {
            
        params = $.extend( {width: 0, height : 0}, params); // Fusionner les paramètres
        
        this.each(function() { // Traverser tous les nœuds.
            var $t = $(this);
            
            $('.baby-moins, .baby-plus').on('click', function(e){
            	e.preventDefault();
            	var nb = parseInt($('.baby-nb-player').val());
            	$('.baby-nb-player').val( ($(this).hasClass('baby-moins')) ? (nb - 1) : (nb + 1) );
            	if($('.baby-nb-player').val() < 0) $('.baby-nb-player').val(0);
            });
            
            $('.baby-refresh').on('click', function(e){
            	e.preventDefault();
            	var str = "", nb = parseInt($('.baby-nb-player').val());
            	for (var i=1; i <= nb; i++) {
				  str += '<div class="input-prepend"><span class="add-on">'+i+'</span><input id="prependedInput" class="baby-name" type="text" placeholder="name..."></div>';
				};
				$('.baby-name-wraper').html(str);
            });
            
            $('.btn-success').on('click', function(e){
            	e.preventDefault();
            	var complete = true, names = [];
            	$('.baby-name').each(function(index){
	            	if($(this).val() == ""){
	            		$(this).parent('div').addClass('control-group error');
	            		complete = false;
	            	}
	            	else{
						names.push($(this).val());
	            	}
	            	if(index == ($('.baby-name').size() - 1) && complete){
	            		
						var _html = "", arrRes = [], arrNew = [],arr = names, arrLength = arr.length;
						while(arrNew.length < arrLength){
						    var randNb = parseInt(Math.random() * arrLength);
						    if(arrRes.indexOf(randNb) < 0){
						        arrNew.push(arr[randNb]);
						        arrRes.push(randNb);
						    }
						}
						var currentTeam = 0;
						for (var i=0; i < arrNew.length; i++) {
							if(i/2 == Math.round(i/2)) currentTeam++;
							_html += "<tr><td>" + currentTeam + "</td><td>" + arrNew[i] + "</td></tr>"
						};
						$('tbody').html("");
						$('tbody').append(_html);
						$('table').fadeIn();
	            		
	            	}
	            });
            });
            
            $('.baby-name').on('blur', function(){
            	if($(this).val() != "" && $(this).parent('div').hasClass('error')) $(this).parent('div').removeClass('error');
            	if($(this).val() != "" && $(this).parent('div').hasClass('control-group')) $(this).parent('div').removeClass('control-group');
            });
        });
    	
    	return this; // pour chaînage jQuery
    };
    
})(jQuery);