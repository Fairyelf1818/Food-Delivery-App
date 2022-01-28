document.getElementById("getPosition").addEventListener("click", getPosition);

function getPosition() { // Get Location
   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {
       document.getElementById("line1").value="LA " + position.coords.latitude ;
       document.getElementById("city").value="LO " + position.coords.longitude ;
       document.getElementById("parish").value="AC " + position.coords.accuracy ;
      alert("Successful! Please Enter your name and phone number");
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}
