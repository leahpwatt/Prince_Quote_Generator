var quotes = [
	{
		quotation: '"I don\'t wanna die, I\'d rather dance my life away."',
		songtitle: "Song: 1999",
		album: "Album: 1999"
	},
	{
		quotation: '"I asked if she wanted to dance, and she said all she wanted was a good man."',
		songtitle: "Song: I Could Never Take the Place of Your Man",
		album: "Album: Sign 'O' the Times"
	},
	{
		quotation: '"Excuse me, baby, I don\'t mean 2 be rude. But I guess tonight I\'m just not in the mood."',
		songtitle: "Song: Alphabet St.",
		album: "Album: Lovesexy"
	},
	{
		quotation: '"All seven and we\'ll watch them fall. They stand in the way of love and we will smoke them all."',
		songtitle: "Song: 7",
		album: "Album: Love Symbol Album"
	},
];
	
button.addEventListener("click", function(){
	var randomQuote = Math.floor((Math.random() * quotes.length));
	var getQuote = quotes[randomQuote];
	document.getElementById("quote").innerText = getQuote.quotation;
	document.getElementById("title").innerText = getQuote.songtitle;
	document.getElementById("album").innerText = getQuote.album;

});

