$(document).ready(function () {
  if (!location.pathname.match(/^(\/\w+)?\/modules$/))
    $("a[href*='" + location.pathname + "']").addClass("currentlink");
});
