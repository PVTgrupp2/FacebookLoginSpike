$(document).ready(function(){
	$('#fblogin').click(function(){
		var anv = $.fblogin({fbId: '392795464233014'});
		
		anv.done(function(data){
			console.log(data);
			$('#status').text("Välkommen " + data.name + "!");
		});
	});
	
	$('#fblogout').click(function(){
		FB.logout(function(response){
			$('#status').text("Du loggades ut");
		});
	});
});

