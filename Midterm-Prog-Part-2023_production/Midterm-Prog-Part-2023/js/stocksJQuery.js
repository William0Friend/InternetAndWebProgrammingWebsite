// Wait for the document to be ready before running the script
$(document).ready(function () {

    // Use AJAX to get the XML file containing the stocks data
    $.ajax({
        type: "GET",
        url: "stocks.xml",
        dataType: "xml",
        success: function (xml) {

            // Find all the Stock elements in the XML file and sort them by symbol
            var $stocks = $(xml).find("Stock");
            $stocks.sort(function (a, b) {
                return $(a).attr("symbol").localeCompare($(b).attr("symbol"));
            });

            // Find the stock list element in the HTML
            var $stockList = $("#stockList");

            // Loop through each stock in the XML and create a link for it in the stock list
            $stocks.each(function () {
                var $stock = $(this);
                var symbol = $stock.attr("symbol");

                // Create a link with the stock symbol as the text
                var $symbolLink = $("<li>")
                    .text(symbol)
                    .css("color", "navy")
                    // When the user hovers over the link, show the stock information
                    .mouseenter(function () {
                        $(this).css("color", "red");

                        // Find the stock info element in the HTML
                        var $stockInfo = $("#stockInfo");

                        // Wait 1 seconds before showing the stock information
                        setTimeout(function () {
                            // Clear any previous stock information
                            $stockInfo.empty();

                            // Find the stock's company, market, sector, price, year range, and dividend information in the XML
                            var $company = $stock.find("Company");
                            var $market = $stock.find("Market");
                            var $sector = $stock.find("Sector");
                            var $price = $stock.find("Price");
                            var $low = $stock.find("YearRange Low");
                            var $high = $stock.find("YearRange High");
                            var $dividend = $stock.find("Dividend");

                            // Create a string with all the stock information
                            //var html = "<strong>" + symbol + "</strong><br>" + "<ol>" +
                            var html = "<ol>" +

                                "<li>Company = " + $company.text() + "</li><br>" +
                                "<li>Market = " + $market.text() + "</li><br>" +
                                "<li>Sector = " + $sector.text() + "</li><br>" +
                                "<li>Price = " + $price.text() + "</li><br>" +
                                "<li>Year Range = " + $low.text() + " - " + $high.text() + "<br>";

                            // If the stock has a dividend, add the dividend information to the string
                            if ($dividend.attr("available") == "true") {
                                var $amount = $dividend.find("Amount");
                                var $yield = $dividend.find("Yield");
                                var $frequency = $dividend.find("Frequency");

                                html += "<br>" +
                                    "<li>Dividend = " + $amount.text() + " (" + $yield.text() + " yield, " + $frequency.text() + " frequency)" + "</li><br></ol>";
                            }
                            // If the stock does not have a dividend, add a message to the string
                            if ($dividend.attr("available") == "false") {
                                html += "<br>" +
                                    "<li> Dividend is not available </li><br> </ol>";
                            }
                            // Add the stock information to the stock info element
                            $stockInfo.html(html);
                        }, 500);//1 second load
                    })
                   
                    // When the user stops hovering over the link, change the color back to navy
                    // and remove the stock information after 5 seconds
                    .mouseleave(function () {
                        $(this).css("color", "navy");
                        setTimeout(function () {
                            $("#stockInfo").empty();
                        }, 5000); // 5 seconds
                    });
                // Append the stock symbol link to the stock list
                $stockList.append($symbolLink);

                // Append a line break after the stock symbol link
                $stockList.append("<br>");
            });
        }
    });
});
