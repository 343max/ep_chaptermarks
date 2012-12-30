var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuRight = function(hook_name, args, cb) {
    args.content = eejs.require('ep_chaptermarks/templates/audioPlayer.ejs') + args.content;
}

exports.eejsBlock_editbarMenuLeft = function(hook_name, args, cb) {
    args.content += eejs.require('ep_chaptermarks/templates/timestampButton.ejs');
}

exports.eejsBlock_scripts = function (hook_name, args, cb)
{
    args.content = args.content + eejs.require("ep_chaptermarks/templates/scripts.ejs");
}
