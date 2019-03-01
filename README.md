

# StoneOceanConfirmed

  

this is a project for an autonomous Twitter posting bot, this don't need to be pretty or have an actual site, this will work on Heroku, and this repository is just to save my code

  

  ```sh
I commented the code to don't have problems during the tests, 
again,to make it work you should put your twitter keys in the 
configuration file
```

# To begin:
```sh
install dependencys
$ npm install
execute it, theres others ways to do it,
$ npm start
for this project i use
$ node bot.js
```

  

## About the packages i used:

### Twit

Twit is a package that simplify the interation with twitter API, using lines like post, get and stream you can tweet the way you want, Twit is made by ttezel
  

### date-and-time

Date and time is a package that helps when we use time, before this, i was using the setInterval to tweet, but due some problems with heroku, i decided to use the date and time package.
On this project, since i have to post on the right time, i use this, if you don't need to worry about it, just leave it

## License

MIT


**Free Software, Hell Yeah!**
