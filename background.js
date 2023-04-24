chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var url = details.url.toLowerCase();
    if (
      url.includes("porn") ||
      url.includes("sex") ||
      url.includes("adult") ||
      url.includes("nude") ||
      url.includes("xxx") ||
      url.includes("erotic") ||
      url.includes("nsfw") ||
      url.includes("sensual") ||
      url.includes("seductive") ||
      url.includes("spank") ||
      url.includes("hanime") ||
      url.includes("hentai") ||
      url.includes("brazzers") ||
      url.includes("nublies") ||
      url.includes("xvideos") ||
      url.includes("pirate") ||
      url.includes("proxybay")
    ) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
