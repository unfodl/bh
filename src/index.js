export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = "https://api.bithumb.com" + url.pathname + url.search;

    const response = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/json",
        "Referer": "https://www.bithumb.com/",
      },
    });

    const data = await response.text();
    return new Response(data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
};
