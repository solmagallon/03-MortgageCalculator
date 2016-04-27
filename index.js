function calculate(){


	var balance = $('#balance').val();
	var rate = $('#rate').val();
	var term = $('#term').val();
	var period = $('#select').val();

	var numberOfPayments = term * period;
	var monthlyInterestRate = (rate / 100) / period;
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
	var monthlyPayment = balance * interestQuotient;

	var totalCost = monthlyPayment * numberOfPayments;


	$('#finalCalc').append("<p>Mortgage calculates to $" + Math.round(monthlyPayment) + "/month. Overall cost of loan is $" + Math.round(totalCost) + ".  </p>");

	
}