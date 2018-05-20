setTimeout(function(){

$(document).ready(function() {
	console.log("creating DataTable")
    $('#topSkills').DataTable({
    	"paging":   false,
    	"searching": false
    });

} );

$(document).ready(function() {
	console.log("creating DataTable")
    $('#stemSkills').DataTable({
    	"paging":   false,
    	"searching": false

    });
    
} );
}, 2000); 

