// Toggling Dark and Light Mode
var button=document.getElementById("btn")
var label ="Dark-Mode";
button.textContent = label;
button.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if (label === "Dark-Mode")
    { label = "Light-Mode";
    } else {
      label = "Dark-Mode";
    }    
    button.textContent = label;
});
// Updating Time Function
var time = document.getElementById("time");
var wish =document.getElementById("wishText");
function updateTime() 
{
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // dispays time zone
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
     //convert to 12 - Hour Format
     let meridian = "AM";
     if (hours >=    12) {
        meridian = "PM";
        if (hours > 12) hours = hours -12;
      if (hours === 0) hours = 12;
     }
     // Adding leading zeros
     hours = String(hours).padStart(2, "0");
     minutes = String(minutes).padStart(2, "0");
     seconds = String(seconds).padStart(2, "0");
     time.textContent = `${hours}:${minutes}:${seconds} ${timeZone}`;

    // for wish
    if( hours >= 6 && hours < 12 && meridian === "AM") {
        wish.textContent="Hello, Good Morning!";
    }else if (meridian === "PM" && (hours === 12 || hours < 4))  {
    wish.textContent = "Hello, Good Afternoon!";}
    else if ( hours >= 4 && hours < 8 && meridian === "PM"){
        wish.textContent="Hello, Good Evening!";
    } else {
        wish.textContent= "Hello, Good Night!";
    }

}
updateTime();
setInterval(updateTime, 1000);

