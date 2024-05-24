function getUniqueName() {
  $('.btn').hide();
  chrome.tabs.getSelected(null, function (tab) {
    var href = tab.url;
    var re = /problems?\/(.*?)\//i;
    var result = href.match(re);
    if (result) {
      var uniqueName = result[1];
        $('#go-button').attr('href', "https://www.leetcode.cn/problems/" + uniqueName + "/solutions/").show();
        $('html').keydown(function(event) {
          console.log(event.keyCode);
          if (event.keyCode == 32) {
            window.open("https://www.leetcode.cn/problems/" + uniqueName + "/solutions/");
        };
        })
    }
  });
}
getUniqueName();
