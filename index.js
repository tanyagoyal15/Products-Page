$('.cart-btn').click(function(){
	var value = parseInt($('#nav-cart').text());
	value++;
	$('#nav-cart').text(value);
})