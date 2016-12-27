## What is this?

This is a small javascript script that will unblock your blocked window.open request.

Sometimes using window.open in ajax success call or any other place will get the request blocked and your page will show a blocked popup.
This code is the solution to that problem. It will open your new tab without getting blocked. 
It has been tested in Safari, Chrome and Firefox.

### How to use it?

Just see the example code for usage. I am also putting the **sample code** here to give you an idea.

```markdown
function openNewTab()
{
    // Code responsible for bypassing the tab blocker
    var win = window.open('');
    window.oldOpen = window.open;
    window.open = function(url) {
        win.location = url;
        window.open = oldOpen;
        win.focus();
    };

    // Sample ajax request to show you the case when your window.open may block your new tab requests
    $.ajax({
        type: "POST",
        url: "test.php",
        data: {
            id: 8
        }
    }).done(function (msg) {
        window.open("success-page.php", '_blank');
    });
}
```


### Support or Contact

Please contact me if you are having trouble with this script.
