$(document).ready(function () {
    // Load XML file
    $.ajax({
        url: "skeletons.xml",
        dataType: "xml",
        success: function (data) {
            // Create form elements
            var $form = $("<form>").appendTo("body");
            var $fieldset = $("<fieldset>").appendTo($form);
            var $legend = $("<legend>").text("Skeleton Purchase Form").appendTo($fieldset);
            var $select = $("<select>").appendTo($fieldset);
            var $option = $("<option>").text("Select a skeleton").appendTo($select);

            // Parse XML and populate dropdown
            $(data).find("skeleton").each(function () {
                var $skeleton = $(this);
                var name = $skeleton.attr("name");
                var price = parseFloat($skeleton.find("price").text());
                var image = $skeleton.find("image").text();
                var quantity = parseInt($skeleton.find("quantity").text());
                var description = $skeleton.find("description").text();

                // Add option to dropdown
                $("<option>")
                    .val(name)
                    .text(name + " ($" + price.toFixed(2) + ")")
                    .appendTo($select);
            });

            // Add skeleton price input field
            $("<div>")
                .append($("<label>").text("Price: "))
                .append($("<input>").attr({ type: "text", id: "price" }))
                .appendTo($fieldset);

            // Add down payment input field
            $("<div>")
                .append($("<label>").text("Down Payment: "))
                .append($("<input>").attr({ type: "text", id: "downpayment" }))
                .appendTo($fieldset);

            // Add interest rate input field
            $("<div>")
                .append($("<label>").text("Interest Rate: "))
                .append($("<input>").attr({ type: "text", id: "interestrate" }))
                .appendTo($fieldset);

            // Add term input field
            $("<div>")
                .append($("<label>").text("Term (in months): "))
                .append($("<input>").attr({ type: "text", id: "term" }))
                .appendTo($fieldset);

            // Add skeleton maintenance checkbox
            $("<div>")
                .append($("<input>").attr({ type: "checkbox", id: "maintenance" }))
                .append($("<label>").text("Add skeleton maintenance"))
                .appendTo($fieldset);

            // Add skeleton payment plan checkbox
            $("<div>")
                .append($("<input>").attr({ type: "checkbox", id: "paymentplan" }))
                .append($("<label>").text("Add skeleton payment plan"))
                .appendTo($fieldset);

            // Add submit button
            $("<div>")
                .append($("<button>").text("Calculate"))
                .appendTo($fieldset);

            // Handle form submission
            $form.submit(function (event) {
                event.preventDefault();

                // Validate inputs
                var price = parseFloat($("#price").val());
                var downpayment = parseFloat($("#downpayment").val());
                var interestrate = parseFloat($("#interestrate").val());
                var term = parseInt($("#term").val());

                if (isNaN(price) || price <= 0) {
                    alert("Please enter a valid price.");
                    return;
                }

                if (isNaN(downpayment) || downpayment < 0 || downpayment >= price) {
                    alert("Please enter a valid down payment.");
                    return;
                }

                if (isNaN(interestrate) || interestrate < 0) {
                    alert("Please enter a valid interest rate.");
                    return;