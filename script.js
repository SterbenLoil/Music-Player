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
		url: "./Music/Sugar - Maroon 5 (Lyrics).mp3",
		picture: "./Picture"
    	},
    {
		artist: "Maroon 5 ft. Cardi B",
		name: "Girls Like You",
		url: "./Music/Maroon 5 - Girls Like You ft. Cardi B (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Maroon 5 ft. SZA",
		name: "What Lovers Do",
		url: "./Music/Maroon 5 - What Lovers Do ft. SZA (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Maroon 5 ft. Wiz Khalifa",
		name: "Payphone",
		url: "./Music/Maroon 5 - Payphone ft. Wiz Khalifa (Lyric Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Maroon 5",
		name: "One More Night",
		url: "./Music/Maroon 5 - One More Night (Lyric Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Maroon 5",
		name: "Memories",
		url: "./Music/Maroon 5 - Memories (Lyric Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "A Great Big World, Christina Aguilera",
		name: "Say Something",
		url: "./Music/A Great Big World, Christina Aguilera - Say Something.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Noah Cyrus with Digital Farm Animals",
		name: "All Falls Down",
		url: "./Music/Alan Walker - All Falls Down (feat. Noah Cyrus with Digital Farm Animals).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker",
		name: "Alone",
		url: "./Music/Alan Walker - Alone.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Au ra and Tomine Harket",
		name: "Darkside",
		url: "./Music/Alan Walker - Darkside (feat. Au Ra and Tomine Harket).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Sophia Somajo",
		name: "Diamond Heart",
		url: "./Music/Alan Walker - Diamond Heart (feat. Sophia Somajo).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker",
		name: "Faded",
		url: "./Music/Alan Walker - Faded.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Sorana",
		name: "Lost Control",
		url: "./Music/Alan Walker ‒ Lost Control (Lyrics) ft. Sorana.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker",
		name: "Sing Me To Sleep",
		url: "./Music/Alan Walker - Sing Me To Sleep.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker",
		name: "The Spectre",
		url: "./Music/Alan Walker - The Spectre.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker & Ava Max",
		name: "Alone, Pt. II",
		url: "./Music/Alan Walker & Ava Max - Alone, Pt. II.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker feat. Gavin James",
		name: "Tired",
		url: "./Music/Alan Walker ft. Gavin James - Tired.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker vs Coldplay",
		name: "Hymn For The Weekend (Remix)",
		url: "./Music/Alan Walker vs Coldplay - Hymn For The Weekend [Remix].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker x A$AP Rocky",
		name: "Live Fast",
		url: "./Music/Alan Walker x A$AP Rocky - Live Fast (PUBGM) Lyric Video.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker, K-391 & Emelie Hollow",
		name: "Lily",
		url: "./Music/Alan Walker, K-391 & Emelie Hollow - Lily (Lyrics).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker, K-391, Tungevaag, Mangoo",
		name: "PLAY",
		url: "./Music/Alan Walker, K-391, Tungevaag, Mangoo - PLAY (Alan Walker's Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alec Benjamin",
		name: "Let Me Down Slowly",
		url: "./Music/Alec Benjamin - Let Me Down Slowly [Official Music Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Ava Max",
		name: "So Am I",
		url: "./Music/Ava Max - So Am I [Official Music Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "Broken Arrows",
		url: "./Music/Avicii - Broken Arrows.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "Hey Brother",
		url: "./Music/Avicii - Hey Brother (Lyric).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "Levels",
		url: "./Music/Avicii - Levels.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Avicii ft. Rita Ora",
		name: "Lonely Together",
		url: "./Music/Avicii - Lonely Together ft. Rita Ora.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Avicii ft. Aloe Blacc",
		name: "SOS",
		url: "./Music/Avicii - SOS (Fan Memories Video) ft. Aloe Blacc.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "The Nights",
		url: "./Music/Avicii - The Nights.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "Waiting For Love",
		url: "./Music/Avicii - Waiting For Love.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Avicii",
		name: "Wake Me Up",
		url: "./Music/Avicii - Wake Me Up (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Avicii ft. Sandro Cavazza",
		name: "Without You",
		url: "./Music/Avicii - Without You “Audio” ft. Sandro Cavazza.mp3",
		picture: "./Picture"
   	},
    {
		artist: "ft. Valerie Broussard - League Of Legends",
		name: "Awaken",
		url: "./Music/Awaken (ft. Valerie Broussard) Season 2019 Cinematic - League of Legends.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Bruno Mars",
		name: "That's What I Like",
		url: "./Music/Bruno Mars - That’s What I Like (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Bruno Mars",
		name: "The Lazy Song",
		url: "./Music/Bruno Mars - The Lazy Song (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Camila Cabello ft. Young Thug",
		name: "Havana",
		url: "./Music/Camila Cabello - Havana ft. Young Thug [MP3 Free Download].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Charlie Puth",
		name: "Attention",
		url: "./Music/Charlie Puth - Attention [Official Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Charlie Puth",
		name: "How Long",
		url: "./Music/Charlie Puth - Howlong.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Charlie Puth ft. Meghan Trainor",
		name: "Marvin Gaye",
		url: "./Music/Charlie Puth - Marvin Gaye ft. Meghan Trainor [Official Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Charlie Puth feat. Selena Gomez",
		name: "We Don't Talk Anymore",
		url: "./Music/Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez) [Official Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Christina Perri",
		name: "A Thousand Years",
		url: "./Music/Christina Perri - A Thousand Years [Official Music Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Clean Bandit feat. Sean Paul & Anne-Marie",
		name: "Rockabye",
		url: "./Music/Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie) [Official Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Clean Bandit feat. Demi Lovato",
		name: "Solo",
		url: "./Music/Clean Bandit - Solo (feat. Demi Lovato) [Official Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Clean Bandit ft. Zara Larsson",
		name: "Symphony",
		url: "./Music/Clean Bandit - Symphony (feat. Zara Larsson) [Official Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "David Guetta ft. Sia",
		name: "Titanium",
		url: "./Music/David Guetta - Titanium ft. Sia (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "DJ Snake, Lil Jon",
		name: "Turn Down for What",
		url: "./Music/DJ Snake, Lil Jon - Turn Down for What.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Ed Sheeran with Beyoncé",
		name: "Perfect Duet",
		url: "./Music/Ed Sheeran - Perfect Duet (with Beyoncé) [Official Audio].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Ed Sheeran",
		name: "Lego House",
		url: "./Music/Ed Sheeran - Lego House [Official Video].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Ed Sheeran",
		name: "Photograph",
		url: "./Music/Ed Sheeran - Photograph (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Fall Out Boy",
		name: "Centuries",
		url: "./Music/Fall Out Boy - Centuries (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Fall Out Boy",
		name: "Immortals",
		url: "./Music/Fall Out Boy - Immortals (Official Music Video) (From.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Gnash ft. Olivia o'brien",
		name: "I hate U, I Love U",
		url: "./Music/gnash - i hate u, i love u ft. olivia o'brien (music video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Ft. Zedd - League Of Legends",
		name: "Ignite",
		url: "./Music/Ignite (ft. Zedd) Worlds 2016 - League of Legends.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Imagine Dragons",
		name: "Thunder",
		url: "./Music/Imagine Dragons - Thunder.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Imagine Dragons",
		name: "Whatever It Takes",
		url: "./Music/Imagine Dragons - Whatever It Takes.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Jason Mraz",
		name: "I'm Yours",
		url: "./Music/Jason Mraz - I'm Yours (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Jonas Brothers",
		name: "Sucker",
		url: "./Music/Jonas Brothers - Sucker.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Alan Walker & K-391 feat. Julie Bergan & Seungri",
		name: "Ignite",
		url: "./Music/K-391 & Alan Walker - Ignite (feat. Julie Bergan & Seungri).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Katy Perry",
		name: "Roar",
		url: "./Music/Katy Perry - Roar (Official).mp3",
		picture: "./Picture"
   	},
    {
		artist: " Lay - Alan Walker Relift",
		name: "Sheep",
		url: "./Music/Lay - Sheep (Alan Walker Relift).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Ft. Against The Current - League Of Legends",
		name: "Legends Never Die",
		url: "./Music/Legends Never Die (ft. Against The Current) Worlds 2017 - League of Legends.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Lil Nas X ft. Billy Ray Cyrus",
		name: "Old Town Road",
		url: "./Music/Lil Nas X - Old Town Road (Official Video) ft. Billy Ray Cyrus.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Louis Fonsi ft. Daddy Yankee",
		name: "Despacito",
		url: "./Music/Luis Fonsi - Despacito ft. Daddy Yankee.mp3",
		picture: "./Picture"
   	},
				
    {
		artist: "MAGIC!",
		name: "Rude",
		url: "./Music/MAGIC! - Rude (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Major Lazer feat. Justin Bieber & MØ",
		name: "Cold Water",
		url: "./Music/Major Lazer - Cold Water (feat. Justin Bieber & MØ) (Official Lyric Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Major Lazer & DJ Snake feat. MØ",
		name: "Lean On",
		url: "./Music/Major Lazer & DJ Snake - Lean On (feat. MØ) (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Mark Ronson",
		name: "Uptown Funk",
		url: "./Music/Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Marshmello & Anne-Marie",
		name: "FRIENDS",
		url: "./Music/Marshmello & Anne-Marie - FRIENDS (Lyric Video) OFFICIAL FRIENDZONE ANTHEM.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Marshmello ft. Khalid",
		name: "Silence",
		url: "./Music/Marshmello ft. Khalid - Silence (Official Lyric Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Martin Garrix & Bebe Rexha",
		name: "In The Name Of Love",
		url: "./Music/Martin Garrix & Bebe Rexha - In The Name Of Love (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Martin Garrix & Dua Lipa",
		name: "Scared To Be Lonely",
		url: "./Music/Martin Garrix & Dua Lipa - Scared To Be Lonely (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Mike Posner",
		name: "I Took A Pill In Ibiza",
		url: "./Music/Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Naughty Boy ft. Sam Smith",
		name: "La la la",
		url: "./Music/Naughty Boy - La la la ft. Sam Smith (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Passenger",
		name: "Let Her Go",
		url: "./Music/Passenger Let Her Go (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Pharrell Williams",
		name: "Happy",
		url: "./Music/Pharrell Williams - Happy (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Ft. Cailin Russo and Chrissy Costanza - League Of Legends",
		name: "Phoenix",
		url: "./Music/Phoenix (ft. Cailin Russo and Chrissy Costanza) Worlds 2019 - League of Legends.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Ft. The Glitch Mob, Mako and The Word Alive - League Of Legends",
		name: "RISE",
		url: "./Music/RISE (ft. The Glitch Mob, Mako, and The Word Alive) Worlds 2018 - League of Legends.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Rixton",
		name: "Me And My Broken Heart",
		url: "./Music/Rixton - Me and My Broken Heart (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Shawn Mendes",
		name: "There's Nothing Holdin' Me Back",
		url: "./Music/Shawn Mendes - There's Nothing Holdin' Me Back.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Shawn Mendes",
		name: "Treat You Better",
		url: "./Music/Shawn Mendes - Treat You Better.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Shawn Mendes, Camila Cabello",
		name: "Señorita",
		url: "./Music/Shawn Mendes, Camila Cabello - Señorita.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Sia ft. Sean Paul",
		name: "Cheap Thrills",
		url: "./Music/Sia - Cheap Thrills ft. Sean Paul (Lyric Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Martin Garrix & David Guetta (Adam Christopher Cover)",
		name: "So Far Away",
		url: "./Music/So Far Away (Acoustic) - Martin Garrix & David Guetta (Cover by Adam Christopher).mp3",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers ft. Halsey",
		name: "Closer",
		url: "./Music/The Chainsmokers - Closer (Lyric) ft. Halsey.mp3",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers ft. Daya",
		name: "Don't Let me Down",
		url: "./Music/The Chainsmokers - Don't Let Me Down ft. Daya (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers ft. Winoa Oak",
		name: "Hope",
		url: "./Music/The Chainsmokers - Hope ft. Winona Oak (Lyric Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers",
		name: "Paris",
		url: "./Music/The Chainsmokers - Paris (Lyric Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers",
		name: "Sick Boy",
		url: "./Music/The Chainsmokers - Sick Boy (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers & Coldplay",
		name: "Something Just Like This",
		url: "./Music/The Chainsmokers & Coldplay - Something Just Like This (Lyric).mp3",
		picture: "./Picture"
   	},
    {
		artist: "The Chainsmokers, ILLENIUM ft. Lennon Stella",
		name: "Takeaway",
		url: "./Music/The Chainsmokers, ILLENIUM - Takeaway (Official Video) ft. Lennon Stella.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Tones And I ",
		name: "Dance Monkey",
		url: "./Music/Tones And I - Dance Monkey (Lyrics).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Twenty One Pilots",
		name: "Heathens",
		url: "./Music/twenty one pilots Heathens (from Suicide Squad The Album) [OFFICIAL VIDEO].mp3",
		picture: "./Picture"
   	},
    {
		artist: "Twenty One Pilots",
		name: "Stressed Out",
		url: "./Music/twenty one pilots Stressed Out [OFFICIAL VIDEO].mp3",
		picture: "./Picture"
   	},
    {
		artist: "ft. 2WEI and Edda Hayes - League Of Legends",
		name: "Warriors 2020",
		url: "./Music/Warriors Season 2020 Cinematic - League of Legends (ft. 2WEI and Edda Hayes).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Wiz Khalifa ft. Charlie Puth",
		name: "See You Again",
		url: "./Music/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3",
		picture: "./Picture"
   	},
    {
		artist: "Y2K, bbno$",
		name: "Lalala",
		url: "./Music/Y2K, bbno$ - Lalala (Official Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "ZAYN ft. Sia",
		name: "Dusk Till Dawn",
		url: "./Music/ZAYN - Dusk Till Dawn ft. Sia (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Zedd ft. Jon Bellion",
		name: "Beautiful Now",
		url: "./Music/Zedd - Beautiful Now ft. Jon Bellion (Official Music Video).mp3",
		picture: "./Picture"
   	},
    {
		artist: "Zedd ft. Elley Duhé",
		name: "Happy Now",
		url: "./Music/Zedd - Beautiful Now ft. Jon Bellion (Official Music Video).mp3",
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
	songs = shuffle(songs);

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

        if( (currIndex > -1) && (currIndex < o.length) )
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
