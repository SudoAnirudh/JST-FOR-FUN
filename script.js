var targethead = window.document.getElementsByTagName("head")[0],
  loadedSpiders = false,
  jst = window.document.createElement("script");
jst.async = true;
jst.type = "text/javascript";
jst.src = "/path/to/bug-min.js";
jst.onload = jst.onreadystatechange = function() {
  if (!loadedSpiders && (!this.readyState || this.readyState == 'complete')) {
    loadedSpiders = true;
    // start fire the JS.
    new BugController();
  }
};
targethead.appendChild(jst);
            