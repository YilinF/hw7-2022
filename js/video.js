var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.loop = false;
	video.autoplay = false;
	console.log("Loop is set to " + video.loop);
	console.log("Autoplay is set to " + video.autoplay);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var v = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = v+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause the video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Sppeed up video");
	video.playbackRate *= 1.1;
	console.log("Speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead 10s");
	video.currentTime += 10;
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.play();
	}
	console.log("The current time is ", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == false){
		console.log("Mute");
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	else {
		console.log("Unmute");
		video.muted = false;
		this.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current value is ", video.volume);
	video.volume = this.value/100;
	console.log("The current volume is ", video.volume);
	var v = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = v+"%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old school style");
	video.classList.add('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original style");
	video.classList.remove('oldSchool');
});
