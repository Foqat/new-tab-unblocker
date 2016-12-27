function normal()
{
    window.open("test.php", '_blank');
}

function unblocked()
{
    var win = window.open('');

    window.oldOpen = window.open;

    window.open = function(url) {
        win.location = url;
        window.open = oldOpen;
        win.focus();
    };
    
    window.open("test.php", '_blank');
}
