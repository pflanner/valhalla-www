function loadBody(fileName) {
    $('#body-wrapper').load(fileName + ' #body'); 
    return false;
}

window.addEventListener("hashchange", function(e) {
    fileName = location.hash.substring(1) + '.html';
    loadBody(fileName);
});

window.addEventListener("load", function(e) {
    if (location.hash == '') {
        loadBody('home.html');
    } else {
        fileName = location.hash.substring(1) + '.html';
        loadBody(fileName);
    }
});