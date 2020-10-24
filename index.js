// hides all watched videos
let progresses = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-resume-playback-renderer");
for(let i=0; i < progresses.length; i++) {
	let video = progresses[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
	video.style.display = "none";
}

// hides all videos (watched or not) that are shorter than a certain time length
let time = 20; // time length in minutes
let videosLength = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer");
for(let i=0; i < videosLength.length; i++) {
	if(videosLength[i].innerText == "") continue;
	
	if(videosLength[i].innerText.split(":")[0] < time) {
		let video = videosLength[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
		video.style.display = "none";
	}
}