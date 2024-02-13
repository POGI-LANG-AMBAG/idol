function yes(){
  playyes();
  var img = document.getElementById("img");
  img.src = 'image/yey.jpg';
  let bg = document.getElementById("bg");
  bg.className="celebrate";
  
  var no = document.getElementById('no');
  no.style.display = "none";

  var yes = document.getElementById('yes');
  yes.style.display = "none";
  third();
}
console.log("loaded");

function no(){
  var button = document.getElementById('no');
  var newTop = Math.floor(Math.random() * window.innerHeight);
  var newLeft = Math.floor(Math.random() * window.innerWidth);
  button.style.top = newTop + 'px';
  button.style.left = newLeft + 'px';
  playno();
  imgno();
}
function playno() {
  var audioFiles = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3'];

  var randomAudioFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];

  var audio = document.getElementById('audio');
  var audioSource = document.getElementById('source');

  audioSource.src = 'audios/no/' + randomAudioFile;

  audio.load();
  audio.play();
}

function playyes() {
  var audioFiles = ['1.mp3', '2.mp3'];

  var randomAudioFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];

  var audio = document.getElementById('audio');
  var audioSource = document.getElementById('source');

  audioSource.src = 'audios/yes/' + randomAudioFile;

  audio.load();
  audio.play();
}
function imgno(){
  var imgFiles = ["1.jpg",'2.jpg',"3.jpg",'4.jpg','5.jpg','6.jpg','7.jpg'];
  var randomImg = imgFiles[Math.floor(Math.random() * imgFiles.length)];
  var img = document.getElementById("img");
  img.src = 'image/no/'+ randomImg
}

function next(){
  intro = document.getElementById("intro");
  container = document.getElementById("second");

  intro.className = "hidden";
  container.className = "container";

}

function third(){
  third = document.getElementById("third");

  third.className = "third";
}
console.log("loaded");