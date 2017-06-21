$(document).ready(function () {
	/* ################## Rejoindre une partie ################## */
	$( "#formGameJoin" ).submit(function( event ) {
	  event.preventDefault();

	  var playerName = $('#playerName').val();
	  // gameRejoin(playerName);
	  console.log(playerName)
	});
	
	function gameRejoin(playerName) {
		var data = {"playerName": playerName}
		$.ajax({
			url: "/players", 
			data : JSON.stringify(data),
			type: "POST",
			contentType: 'application/json',
			success: function(result){
	        	
	    	}
		});
	}
})