< !--< script >
	$(document).ready(function () {
		$.ajax({
			type: "GET",
			url: "stocks.xml",
			dataType: "xml",
			success: function (xml) {
				var $stocks = $(xml).find("Stock");

				$stocks.sort(function (a, b) {
					return $(a).attr("symbol").localeCompare($(b).attr("symbol"));
				});

				var $stockList = $("#stockList");

				$stocks.each(function () {
					var $stock = $(this);
					var symbol = $stock.attr("symbol");
					var $symbolLink = $("<a> <li>")
						.text(symbol)
						.css("color", "navy")
						.mouseenter(function () {
							$(this).css("color", "red");

							var $stockInfo = $("#stockInfo");

							setTimeout(function () {
								$stockInfo.empty();

								var $company = $stock.find("Company");
								var $market = $stock.find("Market");
								var $sector = $stock.find("Sector");
								var $price = $stock.find("Price");
								var $low = $stock.find("YearRange Low");
								var $high = $stock.find("YearRange High");
								var $dividend = $stock.find("Dividend");

								var html = "<strong>" + symbol + "</strong><br>" +
									"Company: " + $company.text() + "<br>" +
									"Market: " + $market.text() + "<br>" +
									"Sector: " + $sector.text() + "<br>" +
									"Price: " + $price.text() + "<br>" +
									"Year Range: " + $low.text() + " - " + $high.text();

								if ($dividend.attr("available") == "true") {
									var $amount = $dividend.find("Amount");
									var $yield = $dividend.find("Yield");
									var $frequency = $dividend.find("Frequency");

									html += "<br>" +
										"Dividend: " + $amount.text() + " (" + $yield.text() + " yield, " + $frequency.text() + " frequency)";
								}
								if ($dividend.attr("available") == "false") {
									html += "<br>" +
										"Dividend is not avalible";
								}
								$stockInfo.html(html);
							}, 3000);
						})
						.mouseleave(function () {
							$(this).css("color", "navy");
						});

					$stockList.append($symbolLink);
					$stockList.append("<br>");
				});
			}
		});
	});
	</script > -->