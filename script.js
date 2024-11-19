/* .js files add interaction to your website */

/*making my buttons interactive*/

var donateListText = [
  "Join Girls Who Code Program!",
  "Join Kode With Klossy Program!",
  "Join TechGirlz Program!",
  "Join Google's Code Next Connect Program!"
];

var donateListLinks = [
  "https://give.girlswhocode.com/give/77372/#!/donation/checkout",
  "https://secure.donationpay.org/kodewithklossy/",
  "https://www.techgirlz.org/donate/give-to-techgirlz/",
  "https://girlsintech.org/donate/"
];

var donateCount = 0;

var donateLinkButton = document.getElementById("donateButton");
var donateLinkElement = document.getElementById("donateLink");

donateLinkButton.addEventListener("click", displayDonateList);

function displayDonateList() {
  donateLinkElement.innerHTML = donateListText[donateCount];
  donateLinkElement.href = donateListLinks[donateCount];
  
  donateCount++;
  
  if (donateCount == donateListLinks.length) {
    donateCount = 0;
  }
}


var participateListText = [
  "Join Girls Who Code!",
  "Join Kode With Klossy!",
  "Join Google's Code Next Connect!",
  "Join TechGirlz!"
];

var participateListLinks = [
  "https://girlswhocode.com/",
  "https://www.kodewithklossy.com/",
  "https://codenext.withgoogle.com/",
  "https://www.techgirlz.org/"
];

var participateCount = 0;

var participateLinkButton = document.getElementById("participateButton");
var participateLinkElement = document.getElementById("participateLink");

participateLinkButton.addEventListener("click", displayParticipateList);

function displayParticipateList() {
  participateLinkElement.innerHTML = participateListText[participateCount];
  participateLinkElement.href = participateListLinks[participateCount];
  
  participateCount++;
  
  if (participateCount == participateListLinks.length) {
    participateCount = 0;
  }
}

