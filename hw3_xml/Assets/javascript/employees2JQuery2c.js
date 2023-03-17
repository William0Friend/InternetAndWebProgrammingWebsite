$(document).ready(function () {
    // Load the XML data using Ajax
    $.ajax({
        type: "POST",
        url: "employees2.xml",
        dataType: "xml",
        success: function (xml) {
            // Parse the XML data and generate the employee list
            generateEmployeeList(xml);

            // Handle the change event of the category drop-down list
            $('#category').on('change', function () {
                // Get the selected category
                var selectedCategory = $(this).val();

                // Clear the employee list
                $('#employee-list').empty();

                // Generate the employee list based on the selected category
                generateEmployeeList(xml, selectedCategory);
            });
        },
        error: function () {
            alert('Error loading XML document');
        }
    });

    // Function to generate the employee list from the XML data
    function generateEmployeeList(xml, category) {
        // If no category is specified, show all employees
        if (!category || category == 'All') {
            $(xml).find('employee').each(function () {
                // Create a new employee div
                var employeeDiv = $('<div>').addClass('employee');

                // Add the employee name, title, email, and image to the employee div
                employeeDiv.append($('<h3>').text($(this).attr('name')));
                employeeDiv.append($('<p>').text($(this).attr('title')));
                employeeDiv.append($('<p>').text($(this).attr('email')));
                employeeDiv.append($('<img>').attr('src', $(this).attr('image')));

                // Add the employee div to the employee list
                $('#employee-list').append(employeeDiv);
            });
        }
        // Otherwise, show only employees in the specified category
        else {
            $(xml).find('department[name="' + category + '"] employee').each(function () {
                // Create a new employee div
                var employeeDiv = $('<div>').addClass('employee');

                // Add the employee name, title, email, and image to the employee div
                employeeDiv.append($('<h3>').text($(this).attr('name')));
                employeeDiv.append($('<p>').text($(this).attr('title')));
                employeeDiv.append($('<p>').text($(this).attr('email')));
                employeeDiv.append($('<img>').attr('src', $(this).attr('image')));

                // Add the employee div to the employee list
                $('#employee-list').append(employeeDiv);
            });
        }
    }
});



//function displayEmployee(employee) {
//    var html = '<div class="employee">';
//    html += '<h3>' + employee.getAttribute('name') + '</h3>';
//    html += '<img src="' + employee.getAttribute('image') + '">';
//    html += '<p>' + employee.getAttribute('title') + '</p>';
//    html += '<p>' + employee.getAttribute('email') + '</p>';
//    html += '</div>';
//    $('#employee-list').html(html);
//}