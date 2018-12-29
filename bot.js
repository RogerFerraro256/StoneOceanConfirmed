//this is like a Sysout on java
console.log('the bot is starting');


//those are like imports on java
	//var Twit = require('twit');
	//var config = require('./config');
	let date = require('date-and-time')


//putting the autentication on the T variable
	//var T = new Twit(config);

var p = 1;
var c = 1;

function tweetIt() {
	//this create a random number, was used to tweet a random number... maybe i use it on a future bot
	var r = Math.floor(Math.random()*100);
	

	//this is the actual tweet
//	var tweet={
//		status:'Day '+p+' Nope.'
//	};

	//this will return the error
//	function tweeted(err,data,response){
//		if (err) {
//			console.log(err)
//			console.log(p)
//		}else{
//		console.log("it worked")
//		console.log(p)
//		}
//	};

	//tweeting
//	T.post('statuses/update', tweet, tweeted);

	//in a future version maybe i change the  auto increment thing...
	p= p+c;

};

console.log(p);

//tweetIt();

//var date = new Date();
//var current_hour = date.getHours();
//var current_min = date.getMinutes();


//this function was created to update time and tweet in the right time
function hourCheck(){
	
	var hour = date.format(new Date(), 'hh');
	var min = date.format(new Date(), 'mm')
	var sec = date.format(new Date(), "ss")
	var meridiem = date.format(new Date(),'A')
	
	var t = " ";

	//just to have a good Debug
	var txt = meridiem.concat(t,hour,t,min,t,sec);

	//this check if the time is 12:00:01PM, if it is, then tweet.
	if(hour==12 && min==00 && sec==01 && meridiem=="p.m."){
		console.log("foi");
		//tweetIt();
	}else{
		console.log(txt);
	}



}
//every 1 second it will call the hourcheck function.
setInterval(hourCheck,1000);


