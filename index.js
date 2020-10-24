// hides all watched videos
var progresses = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-resume-playback-renderer");
for(var i=0; i < progresses.length; i++) {
	var video = progresses[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
	video.style.display = "none";
}

// hides all videos (watched or not) that are shorter than a certain time length
var time = 20; // time length in minutes
var videosLength = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer");
for(var i=0; i < videosLength.length; i++) {
	if(videosLength[i].innerText == "") continue;
	
	if(videosLength[i].innerText.split(":")[0] < time) {
		var video = videosLength[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
		video.style.display = "none";
	}
}