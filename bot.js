var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\!Preview JoJo$/, botReg = /^\!Preview Code Geass$/,
	  botR = /^\!Preview Naruto$/, botReturn = /^\!Preview My Hero Academia$/;
	  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    joJo();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }

  if(request.text && botReg.test(request.text)) {
	this.res.writeHead(200);
	codeGeass();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  if(request.text && botR.test(request.text)) {
	this.res.writeHead(200);
	naRuto();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  if(request.text && botReturn.test(request.text)) {
	this.res.writeHead(200);
	myHero();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function joJo() {
  var botResponse, options, body, botReq;

	botResponse = "Literally ME Stando";
  }

function codeGeass() {
  var botResponse, options, body, botReq;

        botResponse = "Where the FUCK DID MY DICK GO?";
}

function naRuto() {
  var botResponse, options, body, botReq;

        botResponse = "Giant Meteor No-Justsu";
}

function myHero() {
var botResponse, options, body, botReq;

        botResponse = "Ow, ouch, oof, my bones";
}
  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}



exports.respond = respond;