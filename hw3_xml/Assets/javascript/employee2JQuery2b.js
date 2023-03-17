$(document).ready(function () {
    // Load the XML data using Ajax
    $.ajax({
        type: "GET",
        url: "employees2.xml",
        dataType: "xml",
        success: function (xml) {
            // Parse the XML data and populate the drop-down list
            var select = $('#employee-list');
            $(xml).find('employee').each(function () {
                var name = $(this).attr('name');
                var title = $(this).attr('title');
                var email = $(this).attr('email');
                var image = $(this).attr('image');
                var option = $('<option></option>').attr('value', email).text(name);
                select.append(option);
                // Store the employee data in the option's data attribute for later use
                option.data({
                    'title': title,
                    'email': email,
                    'image': image
                });
            });
            // Display the selected employee's information when the drop-down list changes
            select.change(function () {
                var option = $(this).find(':selected');
                var title = option.data('title');
                var email = option.data('email');
                var image = option.data('image');
                $('#employee-info').html('<h2>' + title + '</h2>' + '<img src="' + image + '">' + '<p>' + email + '</p>');
            });
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
});



//$(document).ready(function () {
//    // Handle the change event of the drop-down list
//    $('#my-dropdown').on('change', function () {
//        // Get the selected value of the drop-down list
//        var selectedOption = $(this).val();

//        // Do something with the selected value
//        console.log(selectedOption);
//    });
//});