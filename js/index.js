const ANDROID_USER_AGENT_REGEX = /android/i;
const PLUMPOP_GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.plumpop.android.consumer";

function initDownloadAppButtonSmallScreen() {
    let showButton = false;
    const downloadAppButton = document.querySelector("a.download-app-small");

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (ANDROID_USER_AGENT_REGEX.test(userAgent)) {
        downloadAppButton.href = PLUMPOP_GOOGLE_PLAY_URL;
        showButton = true;
    }

    if (showButton) {
        downloadAppButton.style.visibility = "visible";
    }
}

function initDownloadAppButtonsMediumScreen() {
    const downloadAndroidAppButton = document.querySelector("a#download-android-app-medium");
    downloadAndroidAppButton.href = PLUMPOP_GOOGLE_PLAY_URL;
}

window.addEventListener("DOMContentLoaded", function () {
    initDownloadAppButtonSmallScreen();
    initDownloadAppButtonsMediumScreen();
});
