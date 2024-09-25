function dynamicallyLoadScript(url) {
  // create a script DOM node
  var script = document.createElement("script");
  // set its src to the provided URL
  script.src = url;
  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
  document.head.appendChild(script);
}

dynamicallyLoadScript("//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit")

function setCookie(key, value, expiry) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

// setCookie('googtrans', '/en/fr',1)

setCookie("googtrans", "en/fr", time()-3600,'/','');
setCookie("googtrans", "en/fr", time()-3600,'/','.domain.com');

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    includedLanguages: 'en,es,it,fr,ru,tr'
    // layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    });
}


