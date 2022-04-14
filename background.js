chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  redirectFromGifToVideo(tab);
});

function redirectFromGifToVideo(tab) {
  if (tab.url.length < 1) {
    return;
  }

  // get file extension
  splitted = tab.url.split(".");
  file_extension = splitted[splitted.length - 1];

  if (file_extension.toLowerCase() == "gifv") {
    // get new url
    splitted[splitted.length - 1] = null;
    new_url = splitted.join(".") + "mp4";

    // redirect to new url
    chrome.tabs.update(
      tab.id,
      {
        url: new_url
      },
      params => {
        return;
      }
    );
  }
  return;
}
