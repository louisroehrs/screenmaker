var pager = require('webpage');



function updateRadar () {
    var page = pager.create();
    page.viewportSize = { height: 1920, width: 1080 };
    page.clipRect = { top: 190, left: 160, width: 600, height: 580 };
    page.open('http://radar.weather.gov/radar.php?rid=mux', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/radar.png');
			page.close();
			
		    },
		    2000 );
	    }
	});
}
function updateCogIncubator () {
    var page = pager.create();
    page.viewportSize = { height: 1920, width: 1080 };
    page.clipRect = { top: 0, left: 0, width: 1080, height: 1920 };
    page.open('../pixel/src/index.html', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/coginc.png');
			page.close();
			
		    },
		    2000 );
	    }
	});
}
function updateTraffic () {
    var page = pager.create();
    page.viewportSize = { height: 1920, width: 1080 };
    page.clipRect = { top: 0, left: 0, height: 1920, width: 1080     };
    page.open('https://www.google.com/maps/@37.5424125,-122.0,10z/data=!5m1!1e1', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/traffic.png');
			page.close();
			
		    },
		    5000 );
	    }
	});
}

function updateBenchmark () {
    var page = pager.create();
    page.viewportSize = { height: 1920, width: 1080 };
    page.open('http://ibmbenchmarklive.mybluemix.net/#/realtime/sales', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/benchmark.png');
			page.close();
		    },
		    2000 );
	    }
	});
}

function updateHome() {
    var page = pager.create();
    page.viewportSize = { width: 1080, height: 1920 };
    page.clipRect = { top: 0, left: 0, width: 1080, height: 1920
 };
    page.open('http://www.ibm.com/en-us/homepage-a.html', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/ibmhomepage.png');
			page.close();
		    },
		    2000 );
	    }
	});    
}

function updateCommerce() {
    var page = pager.create();
    page.viewportSize = { height: 1920, width: 1080 };
    page.clipRect = { top: 0, left: 0, height: 1920, width: 1080 };
    page.open('http://www.ibm.com/commerce/us-en/', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/ibmcommercepage.png');
			page.close();
		    },
		    2000 );
	    }
	});    
}



function updateWatsonTrend() {
    var page = pager.create();
    page.viewportSize = { width: 1024, height: 768 };
    page.open('http://50.23.97.34:9090/#/', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/watsontrend.png');
			page.close();
		    },
		    5000 );
	    }
	});    
}


function updateWatsonTrendFortune() {
    var page = pager.create();
    page.viewportSize = { width: 1024, height: 768 };
    page.open('http://fortune.com/2015/11/18/ibm-watson-holiday-shopping/', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/watsontrendfortune.png');
			page.close();
		    },
		    5000 );
	    }
	});    
}

function updateWatsonTrendMashable() {
    var page = pager.create();
    page.viewportSize = { width: 1024, height: 768 };
    page.open('http://mashable.com/2015/11/18/ibm-watson-trend-app/#vtPuS84tK5qP', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/watsontrendmashable.png');
			page.close();
		    },
		    5000 );
	    }
	});    
}

function updateWatsonTrendAdAge() {
    var page = pager.create();
    page.viewportSize = { width: 1024, height: 768 };
    page.open('http://adage.com/article/digital/ibm-watson-trend-app-shoppers-buy-legos/301398/', function(status) {
	    console.log("Status: " + status);
	    if(status === "success") {
		setTimeout(function() {
			page.render('/home/lroehrs/Pictures/watsontrendadage.png');
			page.close();
		    },
		    5000 );
	    }
	});    
}


function update() {
    updateRadar();
    //    updateBenchmark();
    updateTraffic();
    //    updateCogIncubator();
    //    updateWatsonTrend();
    //    updateWatsonTrendFortune();
    //    updateWatsonTrendMashable();
    //    updateWatsonTrendAdAge();

}
function updateIBM() {
    updateHome();
    updateCommerce();

}


update();

updateIBM();
setInterval(update,1*60*1000)
setInterval(updateIBM,24*60*60*1000)


