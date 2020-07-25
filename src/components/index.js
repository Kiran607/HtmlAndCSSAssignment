let information={
    "heading":" <b> Textify</b> <span id=sub>Because Text Message Rocks</span>",
        "text":" Phone number or name",
        "number":"(212) 555-1234",
        "numberBelow":"what is this number?",
        "attach":"Attach a photo to text message",
        "later":"or send later delivery",
        "send":"Send Text Message",
        "recent":"Recent Conversations",
        "all":"All Conversation",
        "photo":"photo",
}

let heading=document.getElementById('heading');
heading.innerHTML=information.heading;

let headingId=document.getElementById('headingId');
headingId.innerHTML=information.number;

let what=document.getElementById('what');
what.innerHTML=information.numberBelow;

let phone=document.getElementById('phone');
phone.innerHTML=information.text;

let attach=document.getElementById('attach');
attach.innerHTML=information.attach;

let sendMsg=document.getElementById('btnSend');
sendMsg.innerHTML=information.send;


let photoText={
    "one":"(508) 555-1234",
    "two":"Sarah Kelly",
    "three":"Luke Jones",
    "sent":"sent on 03/01/2011",
    "imageHeading":"Photos From All Conversations",
    "schedule":" Or, <span id=or>schedule it for later delivery </span>",
    "password":"Change PassWord",
    "loadText":"There are 93 more photos across 7 conversations"
}

let imgHeading=document.getElementById("imageHeading");
imgHeading.innerHTML=photoText.imageHeading;

let load=document.getElementById('load');
load.innerHTML=photoText.loadText;

let schedule=document.getElementById('schedule');
schedule.innerHTML=photoText.schedule;

let password=document.getElementById('password');
password.innerHTML=photoText.password;
