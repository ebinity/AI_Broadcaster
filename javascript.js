var listOfStreams = ["unlimitedsteam", "alwaysbreaktime"];

// Create the Twitch embed object
var embed = new Twitch.Embed("twitch-embed", {
  width: "100%",
  height: "100%",
  layout: "video",
  allowfullscreen: true,
  "allow-modals": true,
  channel: listOfStreams[0] // Set initial channel to the first item in the array
});

// Define a variable to keep track of the current stream index
var currentStreamIndex = 0;

// Create a function to change the channel
function changeChannel() {

  // Increment the current stream index
  currentStreamIndex++;
  // If the index is greater than the length of the array, reset it to 0
  if (currentStreamIndex >= listOfStreams.length) {
    currentStreamIndex = 0;
  }
  // Set the channel value to the current stream
  embed.setChannel(listOfStreams[currentStreamIndex]);
  document.getElementById("nextShowTitle").innerHTML = listOfStreams[currentStreamIndex];


  // Add the "move-animation" class to the "#nextProgram" div element
  var nextProgramElement = document.getElementById("nextProgram");
  nextProgramElement.classList.add("move-animation");

  // Remove the "move-animation" class after 14 seconds
  setTimeout(function() {
    nextProgramElement.classList.remove("move-animation");
  }, 14000);

}



// Call the changeChannel function after a set interval (e.g., every 10 seconds)
setInterval(changeChannel, 30000);

