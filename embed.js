let embedresult = document.getElementById('embed-result'); 

let descresult = document.getElementById("descresult")
document.getElementById("description").addEventListener("input", function(desc) {
  descresult.innerHTML = desc.target.value;
});

let colresult = document.getElementById("colresult")
document.getElementById("color").addEventListener("input", function(corl) {
  colresult.innerHTML = corl.target.value;
});

let titlresult = document.getElementById("titlresult")
document.getElementById("title").addEventListener("input", function(titr) {
  titlresult.innerHTML = titr.target.value;
});

function resultvisibility() 
{
  let descres = document.getElementById("description");
  let titres = document.getElementById("title").value;
  let clres = document.getElementById("color").value;
  embedresult.innerHTML = "// If the message is commandname<br>if (message.content === 'commandname') {<br>// We can create embeds using the MessageEmbed constructor<br>// Read more about all that you can do with the constructor<br>// over at https://discord.js.org/#/docs/main/master<br>/class/MessageEmbed<br>const embed = new MessageEmbed()<br>// Set the title of the field<br>.setTitle(" + titres + ")<br>// Set the color of the embed<br>.setColor(" + clres + ")<br>// Set the main content of the embed<br>.setDescription(" + descres + ");<br>// Send the embed to the same channel as the message<br>message.channel.send(embed);<br>  }<br>});";
}

