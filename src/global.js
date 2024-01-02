window.repo = "ydarissep/Unknown-Pokedex"
window.checkUpdate = "9 Unown"


fetch('https://raw.githubusercontent.com/ydarissep/dex-core/main/index.html').then(async response => {
	return response.text()
}).then(async rawHTMLText => {
	const parser = new DOMParser()
	const doc = parser.parseFromString(rawHTMLText, 'text/html')
    document.querySelector('html').innerHTML = doc.querySelector('html').innerHTML

    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = 'https://unown.foobear.org/unown.ico';

    document.title = "Unknown Dex"
    document.getElementById("footerName").innerText = "Unknown\nYdarissep Pokedex"



    await fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/global.js").then(async response => {
        return response.text()
    }).then(async text => {
        await eval.call(window,text)
    }).catch(error => {
        console.warn(error)
    })    

}).catch(error => {
	console.warn(error)
})


