// Check browser - JS script
//
// Description:
// This script check what is a browser client use, and if client are using IE, script show special message on the screen.
//
// Script author: D. Flanagan
// Script modify: Michalski Grzegorz
// Date: 02.04.2014

// Define browser.name and browser.version for client sniffing, using code
// derived from jQuery 1.4.1. Both the name and number are strings, and both
// may differ from the public browser name and version. Detected names are:
//
// "webkit": Safari or Chrome; version is WebKit build number
// "opera": the Opera browser; version is the public version number
// "mozilla": Firefox or other gecko-based browsers; version is Gecko version
// "msie": IE; version is public version number

function BrowserDetection () {

	var s = navigator.userAgent.toLowerCase();
	var match = /(webkit)[ \/]([\w.]+)/.exec(s) || 
				/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(s) ||
				/(msie) ([\w.]+)/.exec(s) ||
				!/compatible/.test(s) && 
				/(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) ||
				[];
	
	return { name: match[1] || "", version: match[2] || "0" };
};

// Check in console
// BrowserDetection();
