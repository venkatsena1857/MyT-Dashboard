setTimeout(function(){

$(document).ready(function() {
	console.log("creating DataTable")
    $('#topSkills').DataTable({
    	"paging":   false,
    	"searching": false,
    	"columnDefs": [
    { className: "dt-body-left", "targets": [ 1 ] },
    { "width": "20%", "targets": 1 }
  ]
    });

} );

$(document).ready(function() {
	console.log("creating DataTable")
    $('#stemSkills').DataTable({
    	"paging":   false,
    	"searching": false,
    		"columnDefs": [
    { className: "dt-body-left", "targets": [ 1 ] },
    { "width": "20%", "targets": 1 }
  ]

    });
    
} );
}, 2000); 

