var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuRight = function(hook_name, args, cb) {
    console.log('------------------------------------------------------- right');
    args.content = eejs.require('ep_chaptermarks/templates/audioPlayer.ejs') + args.content;
}

exports.eejsBlock_editbarMenuLeft = function(hook_name, args, cb) {
    console.log('------------------------------------------------------- left');
    args.content += eejs.require('ep_chaptermarks/templates/timestampButton.ejs');
}

exports.eejsBlock_scripts = function (hook_name, args, cb)
{
    console.log('------------------------------------------------------- eejsBlock_scripts');
    args.content = args.content + eejs.require("ep_chaptermarks/templates/scripts.ejs");
}
