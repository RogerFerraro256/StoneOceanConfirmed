//this is like a Sysout on java
console.log('the bot is starting');

//those are like imports on java
var Twit = require('twit');
var config = require('./config');

//putting the autentication on the T variable
var T = new Twit(config);

var p = 1;
var c = 1;

function tweetIt() {

	var r = Math.floor(Math.random()*100);
	

	//this is the actual tweet
	var tweet={
		status:'Day '+p+' nope.'
	};

	//this will return the error
	function tweeted(err,data,response){
		if (err) {
			console.log("error")
			console.log(p)
		}else{
		console.log("it worked")
		console.log(p)
		}
	};

	//tweeting
	T.post('statuses/update', tweet, tweeted);

	p= p+c;

};

setInterval(tweetIt,1000*60*60*24);
//tweetIt();
