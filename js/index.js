exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
    console.log('-------------------------------------------------------');
    args.content = require('ep_etherpad-lite/node/eejs/').require("ep_chaptermarks/templates/audioPlayer.ejs") + args.content;
}
