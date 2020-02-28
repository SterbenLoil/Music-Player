$(function()
{
	var songs = [
     {
		artist: "Maroon 5",
		name: "Maps",
		url: "./Music/Maroon 5 - Maps (Lyric Video).mp3",
		picture: "./Picture/"
	},
    {
		artist: "Maroon 5",
		name: "Animals",
		url: "./Music/Maroon 5 - Animals (Lyrics).mp3",
		picture: "./Picture/"
    },
    {
		artist: "Maroon 5",
		name: "Sugar",
		url: "./Music/",
		picture: "./Picture"
    	},
    {
		artist: "Maroon 5 ft. Cardi B",
		name: "Girls Like You",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Maroon 5 ft. SZA",
		name: "What Lovers Do",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Maroon 5 ft. Wiz Khalifa",
		name: "Payphone",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Maroon 5",
		name: "One More Night",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Maroon 5",
		name: "Memories",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "A Great Big World, Christina Aguilera",
		name: "Say Something",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Noah Cyrus with Digital Farm Animals",
		name: "All Falls Down",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker",
		name: "Alone",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Au ra and Tomine Harket",
		name: "Darkside",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Sophia Somajo",
		name: "Diamond Heart",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker",
		name: "Faded",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Sorana",
		name: "Lost Control",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker",
		name: "Sing Me To Sleep",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker",
		name: "The Spectre",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker & Ava Max",
		name: "Alone, Pt. II",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Gavin James",
		name: "Tired",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker vs Coldplay",
		name: "Hymn For The Weekend (Remix)",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker x A$AP Rocky",
		name: "Live Fast",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker, K-391 & Emelie Hollow",
		name: "Lily",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker, K-391, Tungevaag, Mangoo",
		name: "PLAY",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alec Benjamin",
		name: "Let Me Down Slowly",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Ava Max",
		name: "So Am I",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "Broken Arrows",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "Hey Brother",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "Levels",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Avicii ft. Rita Ora",
		name: "Lonely Together",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Avicii ft. Aloe Blacc",
		name: "SOS",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "The Nights",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "Wake Me Up",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Avicii ft. Sandro Cavazza",
		name: "Without You",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "ft. Valerie Broussard - League Of Legends",
		name: "Awaken",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Bruno Mars",
		name: "That's What I Like",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Bruno Mars",
		name: "The Lazy Song",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Camila Cabello ft. Young Thug",
		name: "Havana",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Charlie Puth",
		name: "Attention",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Charlie Puth",
		name: "How Long",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Charlie Puth ft. Meghan Trainor",
		name: "Marvin Gaye",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Charlie Puth feat. Selena Gomez",
		name: "We Don't Talk Anymore",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Christina Perri",
		name: "A Thousand Years",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Clean Bandit feat. Sean Paul & Anne-Marie",
		name: "Rockabye",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Clean Bandit feat. Demi Lovato",
		name: "Solo",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Clean Bandit ft. Zara Larsson",
		name: "Symphony",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "David Guetta ft. Sia",
		name: "Titanium",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "DJ Snake, Lil Jon",
		name: "Turn Down for What",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Ed Sheeran with Beyoncé",
		name: "Perfect Duet",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Ed Sheeran",
		name: "Lego House",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Ed Sheeran",
		name: "Photograph",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Fall Out Boy",
		name: "Centuries",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Fall Out Boy",
		name: "Immortals",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Gnash ft. Olivia o'brien",
		name: "I hate U, I Love U",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Ft. Zedd - League Of Legends",
		name: "Ignite",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Imagine Dragons",
		name: "Thunder",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Imagine Dragons",
		name: "Whatever It Takes",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Jason Mraz",
		name: "I'm Yours",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Jonas Brothers",
		name: "Sucker",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker & K-391 feat. Julie Bergan & Seungri",
		name: "Ignite",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Katy Perry",
		name: "Roar",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: " Lay - Alan Walker Relift",
		name: "Sheep",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Ft. Against The Current - League Of Legends",
		name: "Legends Never Die",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Lil Nas X ft. Billy Ray Cyrus",
		name: "Old Town Road",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "MAGIC!",
		name: "Rude",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Major Lazer feat. Justin Bieber & MØ",
		name: "Cold Water",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Major Lazer & DJ Snake feat. MØ",
		name: "Lean On",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Mark Ronson",
		name: "Uptown Funk",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Marshmello & Anne-Marie",
		name: "FRIENDS",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Marshmello ft. Khalid",
		name: "Silence",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Martin Garrix & Bebe Rexha",
		name: "In The Name Of Love",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Martin Garrix & Dua Lipa",
		name: "Scared To Be Lonely",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Naughty Boy ft. Sam Smith",
		name: "La la la",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Passenger",
		name: "Let Her Go",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Pharrell Williams",
		name: "Happy",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Ft. Cailin Russo and Chrissy Costanza - League Of Legends",
		name: "Phoenix",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Ft. The Glitch Mob, Mako and The Word Alive - League Of Legends",
		name: "RISE",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Rixton",
		name: "Me And My Broken Heart",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Shawn Mendes",
		name: "There's Nothing Holdin' Me Back",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Shawn Mendes",
		name: "Treat You Better",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Shawn Mendes, Camila Cabello",
		name: "Señorita",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Sia ft. Sean Paul",
		name: "Cheap Thrills",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Martin Garrix & David Guetta (Adam Christopher Cover)",
		name: "So Far Away",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers ft. Halsey",
		name: "Closer",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers ft. Daya",
		name: "Don't Let me Down",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers",
		name: "Paris",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers",
		name: "Sick Boy",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers & Coldplay",
		name: "Something Just Like This",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers, ILLENIUM ft. Lennon Stella",
		name: "Takeaway",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Tones And I ",
		name: "Dance Monkey",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Twenty One Pilots",
		name: "Heathens",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Twenty One Pilots",
		name: "Stressed Out",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "ft. 2WEI and Edda Hayes - League Of Legends",
		name: "Warriors 2020",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Wiz Khalifa ft. Charlie Puth",
		name: "See You Again",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Y2K, bbno$",
		name: "Lalala",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "ZAYN ft. Sia",
		name: "Dusk Till Dawn",
		url: "./Music/",
		picture: "./Picture"
   	},
    {
		artist: "Zedd ft. Jon Bellion",
		name: "Beautiful Now",
		url: "./Music/",
		picture: "./Picture"
   	},

   ];
   	var playerTrack = $("#player-track");
	var bgArtwork = $('#bg-artwork');
	var bgArtworkUrl;
	var albumName = $('#album-name');
	var trackName = $('#track-name');
	var albumArt = $('#album-art'),
		sArea = $('#s-area'),
		seekBar = $('#seek-bar'),
		trackTime = $('#track-time'),
		insTime = $('#ins-time'),
		sHover = $('#s-hover'),
        playPauseButton = $("#play-pause-button"),
        playRepeatButton = $("#play-repeat"),
        openMenu = $('#play-menu'),
		i = playPauseButton.find('i'),
		tProgress = $('#current-time'),
		tTime = $('#track-length'),
		seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
		buffInterval = null, tFlag = false;
	
	var playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;
	
	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
	// songs = shuffle(songs);

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }

    // toggle repeat
    function playRepeat()
    {
        isRepeat = !isRepeat;
        audio.loop = isRepeat;
        toggleEnable(isRepeat, playRepeatButton);
    }

    function toggleEnable(condition, element)
    {
        if (condition)
            element.addClass('isEnabled');
        else
            element.removeClass('isEnabled');
    }
    
    function toggleMenu()
    {
        isOpen = !isOpen;
        toggleEnable(isOpen, openMenu);
    }

	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
			selectTrack(1);
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag, index = null)
    {
        if (index === null) {
            if( flag == 0 || flag == 1 ) {
                ++currIndex;
            } else if (flag === -1) {
                --currIndex;
            }
        } else {
            currIndex = index;
        }

        if( (currIndex > -1) && (currIndex < songs.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');
			
			currAlbum = songs[currIndex].name;
            currTrackName = songs[currIndex].artist;
            currArtwork = songs[currIndex].picture;

            audio.src = songs[currIndex].url;
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            $('#album-art img').prop('src', bgArtworkUrl);
            $('.song').removeClass('playingSong');
            $('#song' + currIndex).addClass('playingSong');
	    albumArt.find('img').attr('src', currArtwork);
			
	    bgArtwork.css({'background-image':'url('+currArtwork+')'});
        }
        else
        {
            if (currIndex < 0) {
                currIndex = songs.length - 1;
            } else if (currIndex > songs.length - 1) {
                currIndex = 0;
            }
            selectTrack(2);
        }
    }

    function initPlayer()
	{	
        audio = new Audio();
        addSongList();
		selectTrack(0);
		
		audio.loop = false;
        isRepeat = false;
        isOpen = false;

		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){
            selectTrack(-1);
        });
        playNextTrackButton.on('click',function(){
            selectTrack(1);
        });
        playRepeatButton.on('click', function(){
            playRepeat();
        });
        openMenu.on('click', function(){
            $("#list-song").fadeToggle(300);
            toggleMenu();
        });
    }
    
    function addSongList() {
        songs.forEach((song, index) => {
            const songTemplate = 
            `<div class="song" id="song${index}">
                <i class="fas fa-play"></i>
                <div class="info">
                    ${song.name} - ${song.artist}
                </div>
            </div>`

            $("#list-song").append(songTemplate);
            $('#song' + index).on('click', () => {
                selectTrack(0, index);
                playPause();
            });
        })
        
    }
    
	initPlayer();
});
