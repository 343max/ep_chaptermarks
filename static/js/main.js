var timestampSpanCSSClass = 'timestamp';
var timestampRegexp = new RegExp(/(([0-9]{1,3}):)?([0-9]{1,3}):([0-9]{2,2})/g);

var $ = require('ep_etherpad-lite/static/js/rjquery').$;
var padeditor = require('ep_etherpad-lite/static/js/pad_editor').padeditor;

ep_chaptermarks = {
    audioplayer: function() {
        return $('#audioplayer')[0];
    },

    linkClick: function() {
        var text = $(this).text();
        console.log(text);

        timestampRegexp.lastIndex = 0;
        var parts = timestampRegexp.exec(text);

        if (parts) {
            if (!parts[2]) parts[2] = '0';
            var time = parts[4] * 1 + parts[3] * 60 + parts[2] * 3600;
            console.dir($('#audioplayer'));

            ep_chaptermarks.audioplayer().currentTime = time;
        };

        return false;
    },

    insertTimestamp: function(offset) {
        var time = Math.round(ep_chaptermarks.audioplayer().currentTime + offset);
        time = Math.max(0, time);

        var s = time % 60;
        var m = Math.floor(time / 60) % 60;
        var h = Math.floor(time / 3600);

        var dd = function(i) {
            var s = '' + i;
            if (s.length == 2) {
                return s;
            } else {
                return '0' + s;
            }
        }
        var timestampString = dd(h) + ':' + dd(m) + ':' + dd(s);

        console.log(time);
        console.log(timestampString);

        padeditor.ace.callWithAce(function (ace) {
            rep = ace.ace_getRep();
            console.dir(rep.selStart);
            var string = (rep.selStart[1] == 0 ? '' : "\n") + timestampString + ' ';
            ace.ace_replaceRange(rep.selStart, rep.selEnd, string);
            // ace.ace_performSelectionChange(rep.selStart, rep.selEnd, false);
            ace.ace_focus();
        }, "chaptermarks", true);
    }
};
