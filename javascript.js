
/*
var listOfStreams = ["unlimitedsteam", "alwaysbreaktime"]


new Twitch.Embed("twitch-embed", {
    width: "100%",
    height: "100%",
    layout: "video",
    allowfullscreen: true,
    channel: "unlimitedsteam",

  });
  */

        // Define the list of streams
        var listOfStreams = ["unlimitedsteam", "alwaysbreaktime"];

        // Shuffle the array function
        function shuffle(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        }
  
        // Create the Twitch embed object
        var embed = new Twitch.Embed("twitch-embed", {
          width: "100%",
          height: "100%",
          layout: "video",
          allowfullscreen: true,
          channel: listOfStreams[0], // Set initial channel
        });
  
        // Function to shuffle channel every 5 minutes
        function shuffleChannel() {
          // Shuffle the list of streams
          shuffle(listOfStreams);
          // Set the new channel
          embed.setChannel(listOfStreams[0]);
        }
  
        // Call shuffleChannel function every 5 minutes
        setInterval(shuffleChannel, 30000); // 300000 milliseconds = 5 minutes