
    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Replace the 'ytplayer' element with an <iframe> and
    // YouTube player after the API code downloads.

    var player;

    window.onYouTubePlayerAPIReady = function() {
        console.log("iframe ready");
        player = new YT.Player('video', {
            videoId: 'oWwsnzUUpy4',
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'showinfo': 0,
                'height': 0,
                'width': 1,
                'modestbranding': 1,
                'rel': 0
            }
        });
    }

    // Launch video By Id with effect
    $('.discover_male').click(function() {
      player.loadVideoById('oWwsnzUUpy4');
    });

    $('.discover_classic').click(function() {
      player.loadVideoById('N0T7r5AHN80');
    });

    $('.close').click(function() {
      $('.part_right').removeClass('hide_part_right');
      $('.part_left').removeClass('hide_part_left');
        setTimeout(function(){
          $('#ytcontainer').removeClass('show_video');
          $('#ytcontainer').addClass('hide_video');
        },1000);

        setTimeout(function() {
            player.pauseVideo();
            player.seekTo(0);
        }, 1500);
    });

    // Youtube fullscreen
    setTimeout(function() {
        var container = document.getElementById('ytcontainer');
        var video = document.getElementById('video');
        var ratio = 9 / 16; //this is why the 56.25% padding hack exists

        $('.discover').click(function() {
            $('#ytcontainer').show();
            var height = $('#ytcontainer').innerHeight();
            var width = $('#ytcontainer').innerWidth();
            resizer();
        });

        $('#video').css({
            width: $(window).innerWidth() + 'px',
            height: $(window).innerHeight() + 'px'
        });

        $(window).resize(function() {
            $('#video').css({
                width: $(window).innerWidth() + 'px',
                height: $(window).innerHeight() + 'px'
            });
        });

        function resizer() {
            var width = parseInt(window.getComputedStyle(container)['width'], 10);
            var height = (width * ratio);
            video.style.width = width + 'px';
            video.style.height = height + 'px';
            video.style.marginTop = '-3.278%'; //~732px wide, the video border is about 24px thick (24/732)
            container.style.height = (height * 0.88) + 'px'; //0.88 was the magic number that you needed to shrink the height of the outer container with.
        }

        window.addEventListener('resize', resizer, false);
    }, 300);
