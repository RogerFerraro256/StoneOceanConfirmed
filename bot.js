console.log('the bot is starting');

var Twit = require('twit');
var config = require('./config');
let date = require('date-and-time')

var T = new Twit(config);

function tweetIt() {
	var r = Math.floor(Math.random() * 100);

	var tweet = {
		status: 'Day ' + countday() + ' Nope.'
	};
	function tweeted(err, data, response) {
		if (err) {
			console.log(err)
			console.log(countday())
		} else {
			console.log("it worked")
			console.log(countday())
		}
	};

};

function countday() {

	var ONE_DAY = 1000 * 60 * 60 * 24;

	var date1_ms = new Date(2018, 11, 27);
	var date2 = new Date();

	var difference_ms = Math.abs(date1_ms - date2);

	var diffDays = Math.round(difference_ms / ONE_DAY);

	return diffDays;

}

function hourCheck() {

	var hour = date.format(new Date(), 'hh');
	var min = date.format(new Date(), 'mm')
	var sec = date.format(new Date(), "ss")
	var meridiem = date.format(new Date(), 'A')

	var t = " ";

	var txt = meridiem.concat(t, hour, t, min, t, sec);


	if (meridiem == "p.m.") {
		console.log(meridiem);
	}

	if (hour == 12 && min == 00 && sec == 01 && meridiem == "p.m.") {
		console.log("done");
		tweetIt();
	} else {
		console.log(countday());
		console.log(txt);

	}
}
setInterval(hourCheck, 1000);


