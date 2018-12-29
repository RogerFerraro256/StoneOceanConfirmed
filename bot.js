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



function hourCheck(){
	
	var hour = date.format(new Date(), 'hh');
	var min = date.format(new Date(), 'mm')
	var sec = date.format(new Date(), "ss")
	var meridiem = date.format(new Date(),'A')
	
	var t = " ";

	var txt = meridiem.concat(t,hour,t,min,t,sec);



	if(meridiem=="p.m."){
		console.log(meridiem);
	}

	if(hour==12 && min==00 && sec==01 && meridiem=="p.m."){
		console.log("foi");
		//tweetIt();
	}else{
		console.log(txt);
	}



}
setInterval(hourCheck,1000);


