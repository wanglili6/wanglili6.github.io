function playPause(img) {
	var player = document.getElementById("musicPlayer");
	//	paused 过去时 如果在暂停状态
	if (player.paused) {
		//		播放音乐  播放的方法 audio自带的方法
		player.play();

		img.src = "1989 Polaroid/musicBtn.png";
	} else {
		//		暂停方法
		player.pause();

		img.src = "1989 Polaroid/musicBtnOff.png"
	}
}