
exports.aceGetFilterStack = function(name, context) {
  var regExpFilter = context.linestylefilter.getRegexpFilter(timestampRegexp, timestampSpanCSSClass + ' ');
  return [ regExpFilter ];
}

exports.acePostWriteDomLineHTML = function(hook_name, args, callback) {
  $(args.node).children('span.timestamp').each(
    function() {
      var a = $('<a>').attr('class', $(this).attr('class')).text($(this).text()).attr('href', '#').click(clickedTimestampLink);
      $(this).replaceWith(a);
    }
  );

  return callback;
}