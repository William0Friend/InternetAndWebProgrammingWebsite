$(document).ready(function () {
	$.ajax({
		url: "skeletons.xml",
		dataType: "xml",
		success: function (data) {
			$(data).find("skeleton").each(function () {
				var skeleton = $(this);
				var name = skeleton.attr("name");
				var price = parseFloat(skeleton.find("price").text());
				var image = skeleton.find("image").text();
				var quantity = parseInt(skeleton.find("quantity").text());
				var description = skeleton.find("description").text();
				var html = '<div class="skeleton">' +
					'<h2>' + name + '</h2>' +
					'<img type="image/svg" height=auto width=auto src="' + image + '" alt="' + name + '">' +
					'<p>' + description + '</p>' +
					'<p>Price: $' + price.toFixed(2) + '</p>';
				if (quantity > 0) {
					html += '<button class="buy">Buy</button>';
				} else {
					html += '<p>Out of stock</p>';
				}
				html += '</div>';
				$("#skeletons").append(html);
			});
			$(".buy").click(function () {
				var skeleton = $(this).closest(".skeleton");
				var name = skeleton.find("h2").text();
				var price = parseFloat(skeleton.find("p").text().substr(7));
				alert("You bought " + name + " for $" + price.toFixed(2) + ".");
				skeleton.find(".buy").remove();
				var quantity = parseInt(skeleton.find("quantity").text());
				skeleton.find("quantity").text(quantity - 1);
			});
		},
		error: function () {
			alert("Error loading XML file.");
		}
	});
});
