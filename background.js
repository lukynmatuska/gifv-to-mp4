chrome.tabs.onActivated.addListener(() => {
  chrome.tabs.query(
    {
      active: true,
      windowId: chrome.windows.WINDOW_ID_CURRENT
    },
    (tabs) => {
      // console.log("tabs: ", tabs);
      redirectFromGifToVideo(tabs[0]);
    }
  );
});

function redirectFromGifToVideo(tab) {
  // get file extension
  splitted = tab.url.split(".");
  file_extension = splitted[splitted.length - 1];

  if (file_extension.toLowerCase() == "gifv") {
    // console.log("redirecting!");

    // get new url
    splitted[splitted.length - 1] = null;
    new_url = splitted.join(".") + "mp4";
    // console.log("new_url: ", new_url);

    // redirect to new url
    chrome.tabs.update(
      tab.id,
      {
        url: new_url
      },
      params => {
        // console.log("params: ", params);
        return;
      }
    );
  }
  return;
}
