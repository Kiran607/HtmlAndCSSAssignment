
let information={
        "heading":" <b> Textify</b> <span id=head>Because Text Message Rocks</span>",
        "text":"Phone number or name",
        "number":"(212) 555-1234",
        "numberBelow":"what is this number?",
        "attach":"Attach a photo to text message",
        "later":"or send later delivery",
        "numberTwo":"(508) 555-1234 set a name for this number",
        "laterAgain":"<span id=again>Attach a photo or schedule it for later delivery</span>",
        "sent":"Send Text Message",
        "recent":"Recent Conversations",
        "all":"All Conversation",
        "photo":"photo",
        "view":"View All Conversation",
        "newText":"New Text Message :",
        "send":"Send Message",
        "id":"<b>(508) 555-1234</b> <span id=today>Today</span>",
        "idYest":"<b>you-(512)</b> 555-1234 <span id=today> Today</span>",
        "idNew":"<b>(508) 555-1234</b> <span id=today> Yesterday</span>",
        "idYestNew":"<b>you-(512) 555-1234</b> <span id=today> Yesterday</span>",
        "laterMsg":"You have <b> 1 message schedule</b> for later delivery</span> ",
        "msgSent":"Hiii hello",
        "msgReceive":"Hello",
        "msgToady":"Welcome to company",
        "msgRecToday":"Good what about you"
     
}

let headingId=document.getElementById('headingId');
headingId.innerHTML=information.number;

let what=document.getElementById('what');
what.innerHTML=information.numberBelow;

let outPut=document.getElementById('phone');
outPut.innerHTML=information.text;

let value=document.getElementById('heading');
value.innerHTML=information.heading;

let attach=document.getElementById('attach');
attach.innerHTML=information.attach;

let sent=document.getElementById('btnSend');
sent.innerHTML=information.sent;

let newTextMsg=document.getElementById('newText');
newTextMsg.innerHTML=information.newText;

let sendMsg=document.getElementById('btnsendMsg');
sendMsg.innerHTML=information.send;

let attachNew=document.getElementById('newAttach');
attachNew.innerHTML=information.laterAgain;

let laterMsg=document.getElementById('laterDelivery');
laterMsg.innerHTML=information.laterMsg;

let id=document.getElementById('idDisplay');
id.innerHTML=information.id;

let idRight=document.getElementById('right');
idRight.innerHTML=information.idYest;

let idNew=document.getElementById('idNew');
idNew.innerHTML=information.idNew;

let newYest=document.getElementById('idNewRight');
newYest.innerHTML=information.idYestNew;

let msgSent=document.getElementById('firstMsg');
msgSent.innerHTML=information.msgSent;

let msgReceive=document.getElementById('secondMsg');
msgReceive.innerHTML=information.msgReceive;

let msgToday=document.getElementById('newYest');
msgToday.innerHTML=information.msgToady;

let msgRecToday=document.getElementById('newYestRight');
msgRecToday.innerHTML=information.msgRecToday;