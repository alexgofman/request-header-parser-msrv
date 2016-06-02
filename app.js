module.exports = function(IP, lang, user) {
  var arrOS = user.split("(");
  arrOS = arrOS[1].split(")");
  var OS = arrOS[0];
  var langArr = lang.split(",");
  lang = langArr[0];
  var infoObj = {
    "Language": lang,
    "Software OS": OS,
    "IP": IP
  };
  return infoObj;
}
