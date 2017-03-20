console.log("Hello World from main.js!");

// header
TweenMax.from( '.logo', 4, {scale: '0'});
TweenMax.from( '.logo h1', 2, {top:'-100%', delay: '2', ease:Linear.easeOut});
TweenMax.from( '.header-first-text p', 2, {opacity: '0', delay: '3'});
TweenMax.from( '.intro-text', 1, {color: 'white', delay: '4'});
TweenMax.from( '.header-second-span', 1, {color: 'white', delay: '4'});
TweenMax.from( '.header-text-div .header-second-text', 2, {opacity: '0', delay: '3'});
TweenMax.from( '.intro-text2', 1, {color: 'white', delay: '4'});
TweenMax.from( '.intro-saber', 2, {right: '17.9%', scale: '0', delay: '4'});
TweenMax.from( '.intro-blaster', 2, {left: '0%',scale: '0', delay: '4'});
TweenMax.from( '.intro-battery', 2, {scale: '0', rotation: '720', delay: '4'});
TweenMax.from( '.intro-xwing', 2, {top: '0%', left: '0%', scale:'0', delay: '4'});

// intro graph
TweenMax.from( '.intro-graph', 3, {opacity: '0'} );
TweenMax.staggerFrom( '.first-graph-imgs', 1, {scale: '2', rotation: '320',opacity: '0', ease:Elastic.easeOut}, .5);

// lightsaber

var saberHeader = new Waypoint({
	element: document.querySelector('.lightsaber-header h1'),
	handler: function(direction) {
		TweenMax.to( '.lightsaber-header h1', 2, {color: '#4ffb6b', repeat: 'infinite', overwrite:'none'});
		TweenMax.to( '.dashed-circle', 10,{rotation: '360', repeat: 'infinite', ease:Linear.easeNone, overwrite:'none'});
		this.destroy();
	},
	offset: '50%'
});

var saberInfo = new Waypoint({
	element: document.querySelector('.blast-door-wrapper'),
	handler: function(direction) {
		TweenMax.from('.second-saber-bracket .horizontal-line', 4, {height: '0'});
		TweenMax.from('.second-saber-bracket .mid-line', 1, {width:'0', delay: '4'});
		TweenMax.from('.second-saber-bracket .top-line', 1, {width:'0', delay: '4'});
		TweenMax.from('.second-saber-bracket .bot-line', 1, {width:'0', delay: '4'});
		TweenMax.from('.blast-door-img', 1.5, {scale:'0', rotation: '360', opacity:'0'});
		TweenMax.from('.blast-door-circle', 5, {opacity:'0', delay: '2'});
		TweenMax.from('.blast-door-circle-line', 2, {width:'0', delay: '2.5'});
		TweenMax.from('.blast-door-third-text', 2, {top: '-30%', opacity:'0'});
		this.destroy();
		
	},
	offset: '75%'
});

var saberPower = new Waypoint({
	element: document.querySelector('.GJ'),
	handler: function(direction) {
		TweenMax.from('.GJ', .1,{color:'white', repeat:'2', delay: '.5'});
		TweenMax.from('.gj-line .vertical-line', .5,{height:'0'});
		TweenMax.from('.gj-line .bot-line', .5,{width: '0', delay:'.5'});
		TweenMax.from('.open-bracket-saber', .1,{color:'#e5fe4a', repeat:'2',delay:'1'});
		TweenMax.from('.close-bracket-saber', .1,{color:'#e5fe4a', repeat:'2',delay:'1'});
		this.destroy();
	},
	offset: '50%'
});

var turnOnSaber = new Waypoint({
	element: document.querySelector('.GJ'),
	handler: function(direction) {
		TweenMax.from('.saber-blade', .5, {width:'0%'});
		this.destroy();
	},
	offset: '25%'
});

var saberGraph = new Waypoint({
	element: document.querySelector('.lightsaber-graph'),
	handler: function(direction){
		TweenMax.staggerFrom('.ls-graph-imgs', 1, {backgroundPosition:'0em 5em', opacity:'0'}, .5);
		TweenMax.staggerFrom('.ls--text', 1,{rotationX:'-90'}, .6);
		this.destroy();
	},
	offset:'75%'
});

var blasterH1 = new Waypoint({
	element: document.querySelector('.blaster-header'),
	handler: function(direction) {
		TweenMax.from('.blaster-header h1', 2, {color:'red', repeat:'infinite'});
		TweenMax.from('.leia-img-wrapper .vertical-line', 2,{height:'0'});
		TweenMax.from('.leia-img-wrapper .vertical-line', 2,{width:'0', delay:'2'});
		TweenMax.from('.leia-img', 2,{backgroundPosition:'-20em', delay: 2.5});
		TweenMax.from('.blaster-beam-img', .5,{backgroundPosition:'-20em 20em', width:'0', height:'0', delay:4});
		this.destroy();
	},
	offset: '50%'
});

var blasterStickey = new Waypoint({
	element: document.querySelector('.red-box'),
	handler: function(direction) {
		TweenMax.from('.red-box p', 2, {color:'red'});
		TweenMax.to('.blaster-saber-img', 1,{rotation:'20', repeat:'infinite',yoyo: true});
		TweenMax.to('.blaster-rifle-img', 1,{rotation:'-20', repeat:'infinite', yoyo: true});
		TweenMax.from('.left-box p', 3, {rotationY:'90', opacity:'0'});
		TweenMax.from('.han-img', 1.5,{backgroundPosition:'40em'});
		this.destroy();
	},
	offset:'50%'
});

var blasterGraph = new Waypoint({
	element: document.querySelector('.blaster-graph'),
	handler: function(direction){
		TweenMax.staggerFrom('.blaster-graph-imgs', 1, {backgroundPosition:'0em 5em', opacity:'0'}, .5);
		TweenMax.staggerFrom('.blaster--text', 1,{rotationX:'-90'}, .6);
		this.destroy();
	},
	offset: '70%'
});

var sdH1 = new Waypoint({
	element: document.querySelector('.star-destroyer-header'),
	handler: function(direction){
		TweenMax.from('.star-destroyer-header h1', .2,{color:'#3fffff', repeat:'infinite'});
		TweenMax.staggerFrom('.sd--number', 1.5,{left:'-100%', ease:Linear.easeNone}, -.1);
		TweenMax.from('.star-destroyer-header .second-header-text', 3, {opacity:'0', delay:'2'});;
		this.destroy();
	},
	offset:'75%'
});

var sdImg = new Waypoint({
	element: document.querySelector('.star-destroyer-img-wrapper'),
	handler: function(direction){
		TweenMax.from('.star-destroyer-img', 1,{right:'-100%'});
		TweenMax.from('.star-destroyer-blast-line', .2,{width:'0', delay: '1'});
		TweenMax.from('.star-destroyer-blast-ball', .2, {scale:'0', delay:'1.2', repeat:'infinite', repeatDelay: 2});
		this.destroy();

	},
	offset:'60%'
});

var sdFirstGraph = new Waypoint({
	element: document.querySelector('.star-destroyer-first-graph'),
	handler: function(direction) {
		TweenMax.staggerFrom('.sd-graph-imgs', 2, {backgroundPosition:'0em 5em', opacity:'0'}, .5);
		TweenMax.staggerFrom('.sd-graph--text', 1,{rotationX:'-90'}, .6);
		this.destroy();
	},
	offset:'50%'
});

var sdSecondHeader = new Waypoint({
	element: document.querySelector('.star-destroyer-third-header'),
	handler: function(direction){
		TweenMax.staggerFrom('.sd-third-power', .6,{left: '-100%', ease:Linear.easeNone}, -.2);
		this.destroy();
	},
	offset:'75%'
});

var sdSecondGraph = new Waypoint({
	element: document.querySelector('.star-destroyer-second-graph'),
	handler: function(direction){
		TweenMax.staggerFrom('.sd2-graph-imgs', 1, {backgroundPosition:'0em 5em', opacity:'0'}, .5);
		TweenMax.staggerFrom('.sd2-graph--text', 1,{rotationX:'-90'}, .6);
		this.destroy();
	},
	offset:'75%'
});

var clouds = new Waypoint({
	element: document.querySelector('.cloud-img'),
	handler: function(direction){
		TweenMax.staggerFrom('.cloud-img', 1, {backgroundPosition:'0 10em', scale: '4'}, .5);
		this.destroy();
	},
	offset: '50%'
});

var xWing = new Waypoint({
	element: document.querySelector('.xwing-img'),
	handler: function(direction){
		TweenMax.from('.xwing-img', 1, {scale:'0', top:'100%', right:'-100%', ease:Linear.easeOut});
		this.destroy();
	},
	offset: '50%'
});

var xwingGraph = new Waypoint({
	element: document.querySelector('.xwing-graph'),
	handler: function(direction){
		TweenMax.staggerFrom('.xwing-graph-imgs', 1, {backgroundPosition:'0em 5em', opacity:'0'}, .5);
		TweenMax.staggerFrom('.xwing-graph--text', 1,{rotationX:'-90'}, .6);
		this.destroy();
	},
	offset: '70%'
});

var fireAtWill = new Waypoint({
	element: document.querySelector('.death-star-img'),
	handler: function(direction) {
		TweenMax.from('.death-star-img', 5, {right: '-100%'})
		TweenMax.staggerFrom('.fire', 4,{width:'0'}, .1);
		TweenMax.from('.death-star-main-beam', .5,{width:'0', delay:'5'});
		TweenMax.from('.death-star-planet-text p span', .1,{color:'white', delay: '5', repeat: '5'});
		this.destroy();
	},
	offset: '50%'
});

var hyperMatter = new Waypoint({
	element: document.querySelector('.death-star-second-header'),
	handler: function (direction) {
		TweenMax.from('.death-star-hypermatter-img', 4, {rotation:'360', repeat:'infinite', ease:Linear.easeNone});
		this.destroy();
	},
	offset: '50%'
});

var dsGraphHeader = new Waypoint({
	element: document.querySelector('.hypermatter-number'),
	handler: function(direction){
		TweenMax.from('.hypermatter-number', 2, {rotationX:'90', opacity:'0'});
		this.destroy();
	},
	offset: '75%'
});

var deathStarGraph = new Waypoint({
	element: document.querySelector('.death-star-graph'),
	handler: function(direction){
		TweenMax.staggerFrom('.ds-graph-imgs', 1, {backgroundPosition:'0em 5em', opacity:'0'}, .5);
		TweenMax.staggerFrom('.ds-graph--text', 1,{rotationX:'-90'}, .6);
		this.destroy();
	},
	offset: '70%'
});

var droidsHeader = new Waypoint({
	element: document.querySelector('.droids-header'),
	handler: function(direction) {
		TweenMax.from('.droids-first', 1,{opacity:'0'});
		TweenMax.from('.droids-second', 1,{opacity:'0'});
		TweenMax.from('.droids-info', 2,{width:'0%', opacity:'0'});
		this.destroy();
	},
	offset: '50%'
});

var droidsGraph = new Waypoint({
	element: document.querySelector('.droids-graph'),
	handler: function(direction){
		TweenMax.staggerFrom('.droids-graph-imgs', 1, {backgroundPosition:'0em 5em', opacity:'0'}, .5);
		TweenMax.staggerFrom('.droids-graph--text', 1,{rotationX:'-90'}, .6);
		this.destroy();
	},
	offset: '70%'
});

var hyperspace = new Waypoint({
	element: document.querySelector('.hyperspace-header'),
	handler: function (direction) {
		TweenMax.from('.hyperspace-planet-img', 3,{backgroundPosition:'-50em'});
		TweenMax.from('.hyperspace-planet-wrapper', 3,{opacity:'0'});
		TweenMax.from('.hyperspace-voyager-wrapper p', 2,{rotationY:'90', opacity: '0', delay: '1'});
		TweenMax.from('.hyperspace-voyager-img', 2, {right:'-100%'});
		TweenMax.staggerFrom('.hyperspace-voyager-info-text p', 1,{rotationX:'-90'}, 1);
		this.destroy();
	},
	offset:'75%'
});

var hyperspaceGraph = new Waypoint({
	element: document.querySelector('.hyperspace-graph'),
	handler: function(direction){
		TweenMax.staggerFrom('.hs-graph-imgs', 1, {backgroundPosition:'0em 5em', opacity:'0'}, .5);
		TweenMax.staggerFrom('.hs-graph--text', 1,{rotationX:'-90'}, .6);
		this.destroy();
	},
	offset: '70%'
});

var footer = new Waypoint({
	element: document.querySelector('.footer'),
	handler: function(direction){
		TweenMax.to('.footer h2', .1, {color: '#' + Math.floor(Math.random() * 16777215).toString(16), repeat:'infinite'});
		this.destroy();
	},
	offset:'100%'
});