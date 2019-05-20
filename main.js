$(function () {
	function inttobinary(angkanya) {
		return (angkanya >>> 0).toString(2);
	}

	$(document).on('submit', '#formDivision', function(event) {
		event.preventDefault();

		var source = $('#formDivision input[name=source]').val();
		var divider = $('#formDivision input[name=divider]').val();

		var binsource = inttobinary(-3);
		var bindivider = inttobinary(divider);

		var source2 = source << 1;

		while(binsource.length % 4 != 0) {
			binsource = "0" + binsource;
		}

		alert(binsource.substring(binsource.length-4, binsource.length));
	});
})