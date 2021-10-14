chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getWord'){
        window.addEventListener("mouseup", function()
        {
         var text = window.getSelection();
         curl = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBGh9AkK45yqgSvQCLWytjRO6BdetQ2M6Y";
         rurl = curl += "&q=" + encodeURI(text);
         if(request.lang == "french" || request.lang == "French"){
           rurl += "&source=fr&target=en";
         }
         else if(request.lang == "spanish" || request.lang == "Spanish"){
           rurl += "&source=es&target=en"
         }
         chrome.runtime.sendMessage(
          {
            contentScriptQuery: "getFrench"
            , url: rurl
          }, function (response){
              debugger;
         });
           sendResponse('done!');
        });
   
   }
    sendResponse('done!');
   return true;
});
