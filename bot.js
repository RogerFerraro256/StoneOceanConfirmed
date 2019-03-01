//debug
console.log('the bot is starting');



//those are like imports on java
var Twit = require('twit');
var config = require('./config');
let date = require('date-and-time')


//putting the autentication on the T variable
var T = new Twit(config);

function tweetIt() {

	var r = Math.floor(Math.random() * 100);


	//this is the actual tweet
	var tweet = {
		status: 'Day ' + countday() + ' Nope.'
	};

	//this will return the error
	function tweeted(err, data, response) {
		if (err) {
			console.log(err)
			console.log(countday())
		} else {
			console.log("it worked")
			console.log(countday())
		}
	};

	//tweeting
	//	T.post('statuses/update', tweet, tweeted);



};

//console.log(p);

//tweetIt();

//var date = new Date();
//var current_hour = date.getHours();
//var current_min = date.getMinutes();

function countday() {

	//this function will count the days by comparing 2 dates

	//this is what one day is in milliseconds
	var ONE_DAY = 1000 * 60 * 60 * 24;

	//this will only pick the dates we want, the first date, and the final date
	var date1_ms = new Date(2018, 11, 27);
	var date2 = new Date();

	// Calculate the difference in milliseconds
	var difference_ms = Math.abs(date1_ms - date2);

	// Convert back to days and return
	var diffDays = Math.round(difference_ms / ONE_DAY);

	//this will return the difference, i really rope that the result comes out correctly
	return diffDays;

}

//console.log(countday());


//this function will check the hour to tweet on the right time
function hourCheck() {

	//just picking up the time
	var hour = date.format(new Date(), 'hh');
	var min = date.format(new Date(), 'mm')
	var sec = date.format(new Date(), "ss")
	var meridiem = date.format(new Date(), 'A')
	//some debug
	//console.log(hour);
	//console.log(min);
	//console.log(sec);

	//creating a separator
	var t = " ";

	//putting everything in one string
	var txt = meridiem.concat(t, hour, t, min, t, sec);


	//this will check if the time is right, you can put a.m. or p.m., anything that suits to your project
	if (meridiem == "p.m.") {
		console.log(meridiem);
	}

	//checking the right time to tweet, you can do this the way you want, but for this project i think that was the better solution
	if (hour == 12 && min == 00 && sec == 01 && meridiem == "p.m.") {
		console.log("done");
		tweetIt();
	} else {
		//this will print the day count, and the time it is
		console.log(countday());
		console.log(txt);

	}
}
//just checkin every second
setInterval(hourCheck, 1000);


