chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var url = details.url.toLowerCase();
    if (
      url.includes("porn") ||
      url.includes("sex") ||
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
      url.includes("adult") ||
      url.includes("hentai") ||
      url.includes("brazzers") ||
      url.includes("nublies") ||
      url.includes("xvideos") ||
      url.includes("face")
    ) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
