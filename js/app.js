function cardTransition() {
    var iconid1 = document.getElementById('card-icon1');
    var iconid2 = document.getElementById('card-icon2');
    var iconid3 = document.getElementById('card-icon3');
    var iconid4 = document.getElementById('card-icon4');
    var iconid5 = document.getElementById('card-icon5');
    var iconid6 = document.getElementById('card-icon6');
    var timertext = document.getElementById('timer');

    var temp = 0;

    //timer
    setInterval(function () {

        iconid1.style.transform = "rotate(" + temp + "deg)";
        iconid2.style.transform = "rotate(" + temp + "deg)";
        iconid3.style.transform = "rotate(" + temp + "deg)";
        iconid4.style.transform = "rotate(" + temp + "deg)";
        iconid5.style.transform = "rotate(" + temp + "deg)";
        iconid6.style.transform = "rotate(" + temp + "deg)";

        temp++;

    }, 30);

}


//function to change eduction color and show description



function educationToggle(eduinfo, eduicon) {


    var edu_info = document.getElementById(eduinfo);
    var edu_icon = document.getElementById('education-bs');
    var education = document.getElementById(eduicon);





    if (edu_info.style.display == "none") {
        education.style.backgroundColor = "lightblue";
        education.style.Color = "white";

        edu_info.style.display = "block";
        edu_info.style.opacity = "1";
        edu_info.style.transition = "opacity 6s ease-out";
        tag_icon.classList.toggle('fas');
        //edu_icon.className="fas fa-minus";

    } else {
        education.style.backgroundColor = "lightgrey";
        edu_info.style.display = "none";
        edu_info.style.transition = "opacity 6s ease-out";
        edu_info.style.opacity = "0";


    }





}

function showText(account, id) {

    var text_id = document.getElementById('social-text');
    text_id.style.transition=" 3s linear"
    text_id.style.display = "block";
    text_id.innerHTML=account+"/username";
 
}

function hideText() {

    var text_id = document.getElementById('social-text');
 text_id.style.transition=" 3s linear"
    text_id.style.display = "none";
 
}

//calling all functions
cardTransition();
