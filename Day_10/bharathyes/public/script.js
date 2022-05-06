document.getElementById('colour-container').addEventListener('click', function() {
    document.getElementById('colour-container').style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

document.getElementById('counter-container').addEventListener('click', function() {
    var counter = parseInt(document.getElementById('counter-container').innerText);
    document.getElementById('counter-container').innerText = counter + 1;
});

document.getElementById('http-container').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://firstjsrequest.web.app/simple-text-file.txt');

    xhr.onreadystatechange = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            document.getElementById('http-container').innerHTML = xhr.responseText;
        }
        else {
            console.log('HTTP error', xhr.status, xhr.statusText);
        }
    };

    xhr.send();
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('http-container').innerHTML = 'Make a XHR....';
});