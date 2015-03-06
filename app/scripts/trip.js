var options = {
    delay: -1,
    tripTheme: "yeti",
    showNavigation: true,
    showCloseBox: true,
    enableKeyBinding: true
};
var trip = new Trip([
    {
        content: "<h3>Welcome, We present a web based platform that provides comprehensive, flexible and easy communication between the city and its citizens.</h3><p>Use Right and Down arrows Go to next,</p> <p>Left and Up arrows Go back to previous,</p><p>Esc Stop </p>",
        position: 'screen-center',
        animation: 'fadeInUp',
        expose: true
    },
    {
        sel: $('nav'),
        content: "Lorem ipsum dolor sit amet, wisi dui egestas provident. Luctus lorem et, mattis et wisi nibh a, vel in vestibulum semper. At ligula pede laoreet lacus donec ultricies, duis vel tincidunt consectetuer. Ligula varius massa auctor, laoreet volutpat sed condimentum, purus lorem. Libero fermentum, tortor vitae ornare. Odio ultricies, sed gravida magna, mauris sem faucibus per pharetra, fusce sapien in tellus ut varius tincidunt. Nonummy nec mauris pellentesque vitae, nulla aliquam volutpat occaecati, sed non porttitor varius euismod tortor ac, amet pede ipsum suspendisse quis id erat, purus nisl lacinia sodales vel sed.",
        expose: true,
        position: "s",
        animation: 'fadeInUp'
   },
    {
        content: "A street address or zip code based search process is implemented along with an interactive map using Google Maps. Specifications of the property, information such as address the assessed value for land and building and a Google street view of the property. ",
        position: "screen-center",
        animation: 'fadeInUp'
   },
    
    {
        sel: $('nav'),
        content: 'The same information is also available as a table.',
        expose: true,
        position: "s",
        animation: 'fadeInUp'
   },
    {
        sel: $('nav'),
        content: 'Online application form for seamlessly connecting potential buyers and the city.',
        expose: true,
        position: "s",
        animation: 'fadeInUp'
   },
    {
        content: "There are numerous other features throughout the application they are built on standard web technologies so should be easily understood by the general public.For instance:The maps are Based on Google maps so satellite view, streetview and  and pan and zoom in for detail which includes neighborhood amenities such as schools, churches and nearby retailers are all present.The map and table view are both fully searchable, narrowing down the display by zip code or street name or full address. The information screens are made available when needed such as the background tab and the information selection at the bottom of the offer screen, which cites the official City terms and conditions.",
        position: 'screen-center',
        animation: 'fadeInUP',
        expose: true
    },
    {
        content: "This will be achieved by taking input from citizens living in the specific neighborhood. These comments will be screened and categorized based on the zip code and address it came from.  This portion of the system will enable the city to take in complaints and respond to them appropriately when they are submitted by the neighborhood.",
        position: 'screen-center',
        animation: 'fadeInUP',
        expose: true
    }



], options); // details about options are listed below

$(".navbar-brand").on("click", function () {
    trip.start();
});


$(document).ready(function () {
    trip.start();
});