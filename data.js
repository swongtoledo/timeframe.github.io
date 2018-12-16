$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
	var topNavigation = $("#topNavigation").html();
    
    
	// Have MustacheJS render our script tags
	Mustache.parse(topNavigation);

	
	// Define our data objects
	var topNav = Mustache.render(topNavigation, {
        item:
		[
			{
                name: "Home",
                link: "index.html"
            },
            {
                name: "Spreedsheet",
                link: "spreadSheet.html"
            },
            {
                name: "Calendar",
                link: "calendar.html"
            },


		]
    });

	
	// Place data into the HTML of our page with the html() jQuery method
	$("#render_topLinks").html(topNav);
	
});