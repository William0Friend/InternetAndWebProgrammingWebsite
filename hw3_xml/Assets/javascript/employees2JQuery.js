$(document).ready(function () {
    // Load employees from XML file
    $.ajax({
        type: "GET",
        url: "employee2.xml",
        dataType: "xml",
        success: function (xml) {
            // Parse XML and display employees
            $('#employee-list').empty(); // Clear existing employees
            // Rest of the code to parse XML and display employees, same as before
            // Parse XML and display employees
            $(xml).find("department").each(function () {
                var departmentName = $(this).attr("name");
                var $departmentSection = $('<section class="empSection container-flex"><h2 class="my-h2">' + departmentName + '</h2></section>');
                $(this).find("subdepartment").each(function () {
                    var subdepartmentName = $(this).attr("name");
                    var $subdepartmentSection = $('<section class="empSection"><h3 class="my-h3">' + subdepartmentName + '</h3></section>');

                    $(this).find('employee').each(function () {
                        var name = $(this).attr("name");
                        var image = $(this).attr("image");
                        var title = $(this).attr("title");
                        var email = $(this).attr("email");
                        var category = $(this).attr("category");
                        // create the employee div with the my-employee and category classes

                        //test
                        console.log(name, image, title, email, departmentName, category);
                        //test

                        var $employeeDiv = $('<div class="my-employee ' + category + ' ' + departmentName + ' container-flex row">' +
                            '<img class="image" height=auto width=auto src="' + image + '" alt="' + name + '">' +
                            '<h4 class="name">' + name + '</h4>' +
                            '<p class="title">' + title + '</p>' +
                            '<a class="email" href="mailto:' + email + '">' + email + '</a>' +
                            '</div>');

                        $subdepartmentSection.append($employeeDiv);
                    });
                    $departmentSection.append($subdepartmentSection);
                });
                $('#employee-list').append($departmentSection);
            });
        },
        error: function () {
            alert('Error loading employees.');
        },
    });

    // Filter employees by category
    $("#category").on('change', function () {
        var category = $(this).val();
        if (category === 'All') {
            $('.my-employee').show();
            $('h2.my-h2, h3.my-h3').show();
        } else {
            $('.my-employee').hide();
            $('.' + category).show();
            $('h2.my-h2').each(function () {
                var $this = $(this);
                var $subsections = $this.nextUntil('h2.my-h2');
                if ($subsections.find('.' + category).length > 0) {
                    $this.show();
                    $subsections.show();
                } else {
                    $this.hide();
                    $subsections.hide();
                }
            });
        }
    });
});



// still image issues
//$(document).ready(function () {
//    // Load employees from XML file
//    $.ajax({
//        type: "GET",
//        url: "employee2.xml",
//        dataType: "xml",
//        success: function (xml) {
//            // Parse XML and display employees
//            displayEmployees(xml);
//        },
//        error: function () {
//            alert('Error loading employees.');
//        },
//    });

//    // Filter employees by category
//    $("#category").on('change', function () {
//        var category = $(this).val();
//        if (category === "All") {
//            $('my-employee').show();
//            $('h2').show();
//            $('h3').show();
//        } else {
//            $('my-employee').hide();
//            $('.' + category).show();
//            $('h2').hide();
//            $('h2.' + category).show();
//            $('h3').hide();
//            $('h3.' + category).show();
//        }
//    });

//    function displayEmployees(xml) {
//        $('#employee-list').empty(); // Clear existing employees
//        $(xml).find("department").each(function () {
//            var departmentName = $(this).attr("name");
//            var $departmentSection = $('<section class="empSection container-flex"><h2 class="my-h2 ' + departmentName + '">' + departmentName + '</h2></section>');
//            $(this).find("subdepartment").each(function () {
//                var subdepartmentName = $(this).attr("name");
//                var $subdepartmentSection = $('<section class="empSection"><h3 class="my-h3 ' + subdepartmentName + '">' + subdepartmentName + '</h3></section>');

//                $(this).find('employee').each(function () {
//                    var name = $(this).attr("name");
//                    var image = $(this).attr("image");
//                    var title = $(this).attr("title");
//                    var email = $(this).attr("email");

//                    var $employeeDiv = $('<div class="my-employee ' + departmentName + ' ' + subdepartmentName + ' container-flex row">' +
//                        '<img class="image" height=auto width=auto src="' + image + '" alt="' + name + '">' +
//                        '<h4 class="name">' + name + '</h4>' +
//                        '<p class="title">' + title + '</p>' +
//                        '<a class="email" href="mailto:' + email + '">' + email + '</a>' +
//                        '</div>');

//                    $subdepartmentSection.append($employeeDiv);
//                });
//                $departmentSection.append($subdepartmentSection);
//            });
//            $('#employee-list').append($departmentSection);
//        });
//    }
//});


//3 now still shows images but coreect select h2 h3
//$(document).ready(function () {
//    // Load employees from XML file
//    $.ajax({
//        type: "GET",
//        url: "employee2.xml",
//        dataType: "xml",
//        success: function (xml) {
//            // Parse XML and display employees
//            $('#employee-list').empty(); // Clear existing employees
//            // Rest of the code to parse XML and display employees, same as before
//            // Parse XML and display employees
//            $(xml).find("department").each(function () {
//                var departmentName = $(this).attr("name");
//                var $departmentSection = $('<section class="empSection container-flex"><h2 class="my-h2">' + departmentName + '</h2></section>');
//                $(this).find("subdepartment").each(function () {
//                    var subdepartmentName = $(this).attr("name");
//                    var $subdepartmentSection = $('<section class="empSection"><h3 class="my-h3">' + subdepartmentName + '</h3></section>');

//                    $(this).find('employee').each(function () {
//                        var name = $(this).attr("name");
//                        var image = $(this).attr("image");
//                        var title = $(this).attr("title");
//                        var email = $(this).attr("email");
//                        // create the employee div with the my-employee and category classes

//                        //test
//                        console.log(name, image, title, email, departmentName,);
//                        //test

//                        var $employeeDiv = $('<div id="myEmployee" class="' + departmentName + ' container-flex row">' +
//                            '<img class="image" height=auto width=auto src="' + image + '" alt="' + name + '">' +
//                            '<h4 class="name">' + name + '</h4>' +
//                            '<p class="title">' + title + '</p>' +
//                            '<a class="email" href="mailto:' + email + '">' + email + '</a>' +

//                            '</div>');

//                        $subdepartmentSection.append($employeeDiv);
//                    });
//                    $departmentSection.append($subdepartmentSection);
//                });
//                $('#employee-list').append($departmentSection);
//            });
//        },
//        error: function () {
//            alert('Error loading employees.');
//        },
//    });

//    // Filter employees by category
//    $("#category").on('change', function () {
//        var category = $(this).val();
//        if (category === 'All') {
//            $('my-employee').show();
//            $('h2.my-h2, h3.my-h3').show();
//        } else {
//            $('my-employee').hide();
//            $('.' + category).show();
//            $('h2.my-h2').each(function () {
//                $(this).toggle($(this).next().find('.my-employee:visible').length > 0);
//            });
//            $('h3.my-h3').each(function () {
//                $(this).toggle($(this).next().find('.my-employee:visible').length > 0);
//            });
//        }
//    });
//});

//2 - works almost good still shows h2 h3 select
//$(document).ready(function () {
//    // Load employees from XML file
//    $.ajax({
//        type: "GET",
//        url: "employee2.xml",
//        dataType: "xml",
//        success: function (xml) {
//            // Parse XML and display employees
//            displayEmployees(xml);
//        },
//        error: function () {
//            alert('Error loading employees.');
//        },
//    });

//    // Filter employees by category
//    $("#category").on('change', function () {
//        var category = $(this).val();
//        if (category === 'All') {
//            $('.my-employee').show();
//        } else {
//            $('.my-employee').hide();
//            $('.' + category).show();
//        }
//    });

//    function displayEmployees(xml) {
//        $('#employee-list').empty(); // Clear existing employees
//        // Parse XML and display employees
//        $(xml).find("department").each(function () {
//            var departmentName = $(this).attr("name");
//            var $departmentSection = $('<section class="empSection container-flex"><h2 class="my-h2">' + departmentName + '</h2></section>');
//            $(this).find("subdepartment").each(function () {
//                var subdepartmentName = $(this).attr("name");
//                var $subdepartmentSection = $('<section class="empSection"><h3 class="my-h3">' + subdepartmentName + '</h3></section>');

//                $(this).find('employee').each(function () {
//                    var name = $(this).attr("name");
//                    var image = $(this).attr("image");
//                    var title = $(this).attr("title");
//                    var email = $(this).attr("email");
//                    // create the employee div with the my-employee and category classes

//                    //test
//                    console.log(name, image, title, email, departmentName);
//                    //test

//                    var $employeeDiv = $('<div class="my-employee ' + departmentName + ' container-flex row">' +
//                        '<img class="image" height=auto width=auto src="' + image + '" alt="' + name + '">' +
//                        '<h4 class="name">' + name + '</h4>' +
//                        '<p class="title">' + title + '</p>' +
//                        '<a class="email" href="mailto:' + email + '">' + email + '</a>' +

//                        '</div>');

//                    $subdepartmentSection.append($employeeDiv);
//                });
//                $departmentSection.append($subdepartmentSection);
//            });
//            $('#employee-list').append($departmentSection);
//        });
//    }
//});



//1
//$(document).ready(function () {
//    // Load employees from XML file
//    $.ajax({
//        type: "GET",
//        url: "employee2.xml",
//        dataType: "xml",
//        success: function (xml) {
//            // Parse XML and display employees
//            $('#employee-list').empty(); // Clear existing employees
//            // Rest of the code to parse XML and display employees, same as before
//            // Parse XML and display employees
//            $(xml).find("department").each(function () {
//                var departmentName = $(this).attr("name");
//                var $departmentSection = $('<section class="empSection container-flex"><h2 class="my-h2">' + departmentName + '</h2></section>');
//                $(this).find("subdepartment").each(function () {
//                    var subdepartmentName = $(this).attr("name");
//                    var $subdepartmentSection = $('<section class="empSection"><h3 class="my-h3">' + subdepartmentName + '</h3></section>');

//                    $(this).find('employee').each(function () {
//                        var name = $(this).attr("name");
//                        var image = $(this).attr("image");
//                        var title = $(this).attr("title");
//                        var email = $(this).attr("email");
//                        // create the employee div with the my-employee and category classes

//                        //test
//                        console.log(name, image, title, email, departmentName,);
//                        //test

//                        var $employeeDiv = $('<div id="myEmployee" class="' + departmentName + ' container-flex row">' +
//                            '<img class="image" height=auto width=auto src="' + image + '" alt="' + name + '">' +
//                            '<h4 class="name">' + name + '</h4>' +
//                            '<p class="title">' + title + '</p>' +
//                            '<a class="email" href="mailto:' + email + '">' + email + '</a>' +

//                            '</div>');

//                        $subdepartmentSection.append($employeeDiv);
//                    });
//                    $departmentSection.append($subdepartmentSection);
//                });
//                $('#employee-list').append($departmentSection);
//            });
//        },
//        error: function () {
//            alert('Error loading employees.');
//        },
//    });

//    // Filter employees by category
//    $("#category").on('change', function () {
//        var category = $(this).val();
//        if (category === All) {
//            $('my-employee').show();
//        }
//    } else {
//        $('my-employee').hide();
//            $('.' + category).show();
//        }
//    });
//});