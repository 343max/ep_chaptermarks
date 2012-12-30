var timestampSpanCSSClass = 'timestamp';
var timestampRegexp = new RegExp(/(([0-9]{1,3}):)?([0-9]{1,3}):([0-9]{2,2})/g);

var $ = require('ep_etherpad-lite/static/js/rjquery').$;

function clickedTimestampLink() {
    var text = $(this).text();
    console.log(text);

    timestampRegexp.lastIndex = 0;
    var parts = timestampRegexp.exec(text);

    if (parts) {
        if (!parts[2]) parts[2] = '0';
        var time = parts[4] * 1 + parts[3] * 60 + parts[2] * 3600;
        console.log('seek to time: ' + time);

        console.dir($('#audioplayer'));

        $('#audioplayer')[0].currentTime = time;
    };

    return false;
}