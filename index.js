/**
 * Hides the video.
 * @param {Element} video the video (as a DOM element) that have to be hidden
 * @returns {boolean} **true** if hidden, **false** if already hidden
 */
let hideVideoIfNotAlreadyHidden = (video) => {
	if (video.style.display != "none") {
		video.style.display = "none";
		return true;
	}
	return false;
}

/**
 * Hides all watched videos.
 * Logs the count of the hidden videos.
 * @returns {number} the count of the hidden videos
 */
let hideWatchedVideos = () => {
	let countOfHiddenVideos = 0;
	let progresses = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-resume-playback-renderer");
	for(let i=0; i < progresses.length; i++) {
		let video = progresses[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
		if (hideVideoIfNotAlreadyHidden(video)) {
			countOfHiddenVideos++;
		}
	}
	console.log(`${countOfHiddenVideos} watched videos were hidden.`);
	return countOfHiddenVideos;
}

/**
 * Hides all videos (watched or not) that are shorter than a certain time length.
 * Logs the count of the hidden videos.
 * @param {number} time time length in minutes
 * @returns {number} the count of the hidden videos
 */
let hideVideosShorterThan = (time) => {
	let countOfHiddenVideos = 0;
	let videosLength = document.getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer");
	for(let i=0; i < videosLength.length; i++) {
		if(videosLength[i].innerText == "") continue;
		
		if(videosLength[i].innerText.split(":")[0] < time) {
			let video = videosLength[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
			if (hideVideoIfNotAlreadyHidden(video)) {
				countOfHiddenVideos++;
			}
		}
	}
	console.log(`${countOfHiddenVideos} videos shorted than ${time} were hidden.`);
	return countOfHiddenVideos;
}

let countOfAllVideosHidden = 0;

countOfAllVideosHidden += hideWatchedVideos();
countOfAllVideosHidden += hideVideosShorterThan(20);

console.log(`Total videos hidden: ${countOfAllVideosHidden}`);
