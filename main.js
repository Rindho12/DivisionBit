$(function () {
	function inttobinary(angkanya) {
		return (angkanya >>> 0).toString(2);
	}

	function makebin(Anya, lenn) {
		var Mantul = "";
		Mantul = inttobinary(Anya);
		while(Mantul.length < lenn) {
			Mantul = "0"+Mantul;
		}
		return Mantul;
	}

	function normalize(number, lenn) {
		var angkanya = number;
		if(number >= Math.pow(2, lenn)) {
			angkanya = angkanya-Math.pow(2, lenn);
		}

		return angkanya;
	}

	$(document).on('submit', '#formDivision', function(event) {
		event.preventDefault();
		var bindivider, binsource;
		var html;
		var source = $('#formDivision input[name=source]').val();
		var divider = $('#formDivision input[name=divider]').val();

		var M = divider;
		var A = 0;
		var Q = source;

		var banyakQ = inttobinary(Q).length;

		$('#result > tbody').html(' ');

		html = "<tr class='underline'>"+
			"<td>"+0+
			"</td>"+
			"<td>"+inttobinary(M)+
			"</td>"+
			"<td>"+makebin(A, banyakQ)+
			"</td>"+
			"<td>"+makebin(Q, banyakQ)+
			"</td>"+
			+"</tr>";

			$('#result > tbody').append(html);

		for (var i = 0; i < banyakQ; i++) {
			A = A << 1;
			var check = makebin(Q, banyakQ).substr(0,1);
			if (check == "1") {
				A = A+1;
			}
			Q = Q << 1;

			A = normalize(A, banyakQ);
			Q = normalize(Q, banyakQ);

			html = "<tr>"+
			"<td>"+(i+1)+
			"</td>"+
			"<td>"+inttobinary(M)+
			"</td>"+
			"<td>"+makebin(A, banyakQ)+
			"</td>"+
			"<td>"+makebin(Q, banyakQ)+
			"</td>"+
			+"</tr>";

			$('#result > tbody').append(html);

			var hasilAM = A-M;

			if (hasilAM >= 0) {
				Q = Q+1;
				A = hasilAM;
			}

			html = "<tr class='underline'>"+
			"<td>"+
			"</td>"+
			"<td>"+inttobinary(M)+
			"</td>"+
			"<td>"+makebin(A, banyakQ)+
			"</td>"+
			"<td>"+makebin(Q, banyakQ)+
			"</td>"+
			+"</tr>";

			$('#result > tbody').append(html);
		}

		$('#second-part #hasilnya #hasil-A').text(A);
		$('#second-part #hasilnya #hasil-Q').text(Q);

		$('html, body').animate({
		    scrollTop: $("#second-part").offset().top
		}, 1000);
	});
})