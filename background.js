chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if(request.contentScriptQuery == "getFrench"){
      fetch(request.url, {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
         }
       })
      .then(res => res.json())
      .then(res => { var t = res["data"]["translations"][0]["translatedText"]; var r = confirm("Translation: " + t + "\n" + "\n" + "Would you like to see a definition of this word?"); if (r == true) { window.open("https://www.dictionary.com/browse/" + t);}})
      .catch(error => console.log('Error:', error));
      return true;
      
    }
     sendResponse({
        response: "Message received"
    });
   return true;
 });
       