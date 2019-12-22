$(document).ready(function () {
    var player = videojs('video');

    player.playlist([
        {
            name: 'Peacetv Bangla',
            autoplay: true,
            sources: [
                {src: 'http://peacetv.ashttp22.visionip.tv/live/peacetv-peacetv-peacetv-bangla-hsslive-25f-16x9-SD/chunklist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'peacetv urdu',
            sources: [
                {src: 'http://peacetv.ashttp22.visionip.tv/live/peacetv-peacetv-peacetv-urdu-hsslive-25f-16x9-SD/chunklist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        {
            name: 'Peacetv china',
            sources: [
                {src: 'http://peacetv.ashttp22.visionip.tv/live/peacetv-peacetv-peacetv-china-hsslive-25f-16x9-SD/chunklist.m3u8', type: 'application/x-mpegURL'},
            ]
        },
        
            ]
        }]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
});
