$(window).on('load', () => {

  if (document.domain === 'nytimes.com') {
    // remove main ads
    $('#top-wrapper, #bottom-wrapper, div[class="css-16l7vy9"]').remove();
    // remove story ads
    $('#story-ad-1-wrapper, #story-ad-2-wrapper, #story-ad-3-wrapper, #story-ad-4-wrapper, #story-ad-5-wrapper').remove();
    // remove login wall
    $('#gateway-content').remove();
    // remove blur div
    $('div[class="css-1bd8bfl"]').remove();
    // revert header div from fixed to initial
    $('div[class="css-mcm29f').css('position', 'initial');
  }
  
  if (document.domain === 'www.foxnews.com') {
  
  const headLine = document.querySelectorAll('.headline')[0].innerText;
  console.log('HEADLINE!!!!!!!!!!!!!!', headLine);
  
  // fetch(`https://www.googleapis.com/customsearch/v1?key=&cx=&q=${headLine.replace(/ +/g, '+')}`)
  //   .then(data => data.json())
  //   .then(data => hndlr(data))
  //   .catch(error => console.error('ERRRRRROR! Invalid request!!'));
  
  const jsonResult = {
    "kind": "customsearch#search",
    "url": {
      "type": "application/json",
      "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
      "request": [
        {
          "title": "Google Custom Search - hillary clinton",
          "totalResults": "85200",
          "searchTerms": "hillary clinton",
          "count": 10,
          "startIndex": 1,
          "inputEncoding": "utf8",
          "outputEncoding": "utf8",
          "safe": "off",
          "cx": "015994897476927364704:yyst67zqj6s"
        }
      ],
      "nextPage": [
        {
          "title": "Google Custom Search - hillary clinton",
          "totalResults": "85200",
          "searchTerms": "hillary clinton",
          "count": 10,
          "startIndex": 11,
          "inputEncoding": "utf8",
          "outputEncoding": "utf8",
          "safe": "off",
          "cx": "015994897476927364704:yyst67zqj6s"
        }
      ]
    },
    "context": {
      "title": "New York Times"
    },
    "searchInformation": {
      "searchTime": 0.34798,
      "formattedSearchTime": "0.35",
      "totalResults": "85200",
      "formattedTotalResults": "85,200"
    },
    "items": [
      {
        "kind": "customsearch#result",
        "title": "Hillary Clinton: Presidential Candidates on the Issues - The New ...",
        "htmlTitle": "\u003cb\u003eHillary Clinton\u003c/b\u003e: Presidential Candidates on the Issues - The New ...",
        "link": "https://www.nytimes.com/interactive/2016/us/elections/hillary-clinton-on-the-issues.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Dec 15, 2015 ... Hillary Clinton Democrat Former United States secretary of state. For the past \nseveral decades, Mrs. Clinton, 68, has lived in the public eye as ...",
        "htmlSnippet": "Dec 15, 2015 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eHillary Clinton\u003c/b\u003e Democrat Former United States secretary of state. For the past \u003cbr\u003e\nseveral decades, Mrs. Clinton, 68, has lived in the public eye as&nbsp;...",
        "formattedUrl": "https://www.nytimes.com/interactive/.../hillary-clinton-on-the-issues.html",
        "htmlFormattedUrl": "https://www.nytimes.com/interactive/.../\u003cb\u003ehillary\u003c/b\u003e-\u003cb\u003eclinton\u003c/b\u003e-on-the-issues.html",
        "pagemap": {
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/images/2015/12/14/us/elections/hillary-clinton-on-the-issues-1450121845059/hillary-clinton-on-the-issues-1450121845059-thumbStandard.jpg"
            }
          ],
          "organization": [
            {
              "tickersymbol": "NYSE NYT",
              "name": "The New York Times Company"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://interactive/1f2b4684-98c7-543f-9fb0-1f63c3031a37",
              "og:image": "https://static01.nyt.com/images/2015/12/14/us/elections/hillary-clinton-on-the-issues-1450121845059/hillary-clinton-on-the-issues-1450121845059-facebookJumbo.jpg",
              "twitter:card": "summary_large_image",
              "pt": "Multimedia",
              "lp": "Read the latest updates from Mrs. Clinton.",
              "displaydate": "Dec. 15, 2015",
              "twitter:url": "https://www.nytimes.com/interactive/2016/us/elections/hillary-clinton-on-the-issues.html",
              "hostapp": "vi",
              "pdate": "20151215",
              "article:collection": "https://static01.nyt.com/services/json/sectionfronts/us/index.jsonp",
              "articleid": "100000003859984",
              "og:description": "Read the latest updates from Mrs. Clinton.",
              "twitter:image": "https://static01.nyt.com/images/2015/12/14/us/elections/hillary-clinton-on-the-issues-1450121845059/hillary-clinton-on-the-issues-1450121845059-articleLarge.jpg",
              "pst": "Interactive",
              "foundation-build-id": "nyt-v5",
              "tom": "interactive_feature",
              "adtargeting": "{}",
              "dat": "Dec. 15, 2015",
              "scg": "elections",
              "article:content_tier": "metered",
              "article:published": "2015-12-15T05:09:54.000Z",
              "slug": "hillary-clinton-on-the-issues",
              "image": "https://static01.nyt.com/images/2015/12/14/us/elections/hillary-clinton-on-the-issues-1450121845059/hillary-clinton-on-the-issues-1450121845059-facebookJumbo.jpg",
              "sourceapp": "nyt-v5",
              "thumbnail": "https://static01.nyt.com/images/2015/12/14/us/elections/hillary-clinton-on-the-issues-1450121845059/hillary-clinton-on-the-issues-1450121845059-thumbStandard.jpg",
              "og:type": "article",
              "twitter:title": "Hillary Clinton: Presidential Candidates on the Issues",
              "article:section": "U.S.",
              "cg": "us",
              "pubp_event_id": "pubp://event/b0f36626e07b4d2ea1d1441153070105",
              "og:title": "Hillary Clinton: Presidential Candidates on the Issues",
              "applicationname": "interactive",
              "hdl": "Hillary Clinton: Presidential Candidates on the Issues",
              "fb:app_id": "9869919170",
              "viewport": "width=device-width, initial-scale=1, maximum-scale=1",
              "twitter:description": "Read the latest updates from Mrs. Clinton.",
              "og:url": "https://www.nytimes.com/interactive/2016/us/elections/hillary-clinton-on-the-issues.html",
              "article:modified": "2015-12-15T04:32:43.000Z",
              "dfp-ad-unit-path": "us/elections",
              "article:opinion": "false"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/newsgraphics/2015/01/30/candidate-tracker/assets/images/clinton-square-150.jpg",
              "width": "150",
              "type": "1",
              "height": "150"
            }
          ],
          "newsarticle": [
            {
              "inlanguage": "en-US",
              "datemodified": "2015-12-15",
              "copyrightyear": "2020",
              "usageterms": "Terms of Service",
              "headline": "Hillary Clinton: Presidential Candidates on the Issues",
              "copyrightnotice": "Â© 2020 The New York Times Company"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Hillary Clinton Used Personal Email Account at State Dept., Possibly ...",
        "htmlTitle": "\u003cb\u003eHillary Clinton\u003c/b\u003e Used Personal Email Account at State Dept., Possibly ...",
        "link": "https://www.nytimes.com/2015/03/03/us/politics/hillary-clintons-use-of-private-email-at-state-department-raises-flags.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Mar 2, 2015 ... Hillary Rodham Clinton did not have a government email address while secretary \nof state and may have violated federal rules that officials' ...",
        "htmlSnippet": "Mar 2, 2015 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eHillary\u003c/b\u003e Rodham \u003cb\u003eClinton\u003c/b\u003e did not have a government email address while secretary \u003cbr\u003e\nof state and may have violated federal rules that officials&#39;&nbsp;...",
        "formattedUrl": "https://www.nytimes.com/.../hillary-clintons-use-of-private-email-at-state- department-raises-flags.html",
        "htmlFormattedUrl": "https://www.nytimes.com/.../\u003cb\u003ehillary\u003c/b\u003e-\u003cb\u003eclintons\u003c/b\u003e-use-of-private-email-at-state- department-raises-flags.html",
        "pagemap": {
          "hcard": [
            {
              "fn": "Michael S. Schmidt"
            }
          ],
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/images/2015/03/03/us/03EMAILSjp/03EMAILSjp-thumbStandard-v3.jpg"
            }
          ],
          "imageobject": [
            {
              "copyrightholder": "Credit...Liam Richards/The Canadian Press, via Associated Press",
              "caption": "Hillary Rodham Clinton had no government email address.Credit...Liam Richards/The Canadian Press, via Associated Press",
              "description": "Hillary Rodham Clinton had no government email address.Credit...Liam Richards/The Canadian Press, via Associated Press",
              "url": "https://static01.nyt.com/images/2015/03/03/us/03EMAILSjp/03EMAILSjp-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "url": "https://static01.nyt.com/images/2015/03/04/us/04CLINTONwebsub/04CLINTONwebsub-thumbLarge-v2.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "url": "https://static01.nyt.com/images/2015/02/08/us/08HILLARY01/08HILLARY01-thumbLarge.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "url": "https://static01.nyt.com/images/2015/03/01/us/01omalley-web/01omalley-web-thumbLarge.jpg?quality=75&auto=webp&disable=upscale"
            }
          ],
          "person": [
            {
              "name": "Michael S. Schmidt"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://article/45edc17c-a401-5c99-9f0c-d2bcd350100d",
              "og:image": "https://static01.nyt.com/images/2015/03/03/us/03EMAILSjp/03EMAILSjp-facebookJumbo-v3.jpg",
              "twitter:app:id:googleplay": "com.nytimes.android",
              "twitter:card": "summary_large_image",
              "pt": "article",
              "twitter:url": "https://www.nytimes.com/2015/03/03/us/politics/hillary-clintons-use-of-private-email-at-state-department-raises-flags.html",
              "pdate": "20150302",
              "articleid": "100000003545228",
              "al:android:package": "com.nytimes.android",
              "twitter:app:name:googleplay": "NYTimes",
              "og:description": "Hillary Rodham Clinton did not have a government email address while secretary of state and may have violated federal rules that officialsâ€™ correspondence be retained.",
              "twitter:image": "https://static01.nyt.com/images/2015/03/03/us/03EMAILSjp/03EMAILSjp-articleLarge-v3.jpg",
              "pst": "News",
              "twitter:image:alt": "Hillary Rodham Clinton had no government email address.",
              "al:iphone:app_name": "NYTimes",
              "news_keywords": ",Hillary Clinton,Archives,State Department,Email,2016 Presidential Election,US Foreign Policy,US Politics",
              "scg": "politics",
              "article:content_tier": "metered",
              "article:published": "2015-03-03T02:07:14.000Z",
              "msapplication-starturl": "https://www.nytimes.com",
              "image": "https://static01.nyt.com/images/2015/03/03/us/03EMAILSjp/03EMAILSjp-facebookJumbo-v3.jpg",
              "thumbnail": "https://static01.nyt.com/images/2015/03/03/us/03EMAILSjp/03EMAILSjp-thumbStandard-v3.jpg",
              "og:type": "article",
              "og:image:alt": "Hillary Rodham Clinton had no government email address.",
              "twitter:title": "Hillary Clinton Used Personal Email Account at State Dept., Possibly Breaking Rules",
              "article:section": "U.S.",
              "cg": "us",
              "pubp_event_id": "pubp://event/2f279811f1754217ba95865e0b114f29",
              "og:title": "Hillary Clinton Used Personal Email Account at State Dept., Possibly Breaking Rules",
              "article:author": "http://www.nytimes.com/by/michael-s-schmidt",
              "url": "https://www.nytimes.com/2015/03/03/us/politics/hillary-clintons-use-of-private-email-at-state-department-raises-flags.html",
              "article:tag": "Schmidt, Michael S",
              "al:iphone:url": "nytimes://www.nytimes.com/2015/03/03/us/politics/hillary-clintons-use-of-private-email-at-state-department-raises-flags.html",
              "al:android:url": "nyt://article/45edc17c-a401-5c99-9f0c-d2bcd350100d",
              "twitter:app:url:googleplay": "nyt://article/45edc17c-a401-5c99-9f0c-d2bcd350100d",
              "al:ipad:url": "nytimes://www.nytimes.com/2015/03/03/us/politics/hillary-clintons-use-of-private-email-at-state-department-raises-flags.html",
              "byl": "By Michael S. Schmidt",
              "twitter:description": "Hillary Rodham Clinton did not have a government email address while secretary of state and may have violated federal rules that officialsâ€™ correspondence be retained.",
              "al:iphone:app_store_id": "284862083",
              "og:url": "https://www.nytimes.com/2015/03/03/us/politics/hillary-clintons-use-of-private-email-at-state-department-raises-flags.html",
              "article:modified": "2015-03-03T02:09:24.000Z",
              "al:android:app_name": "NYTimes",
              "article:opinion": "false"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/images/2015/03/03/us/03EMAILSjp/03EMAILSjp-thumbStandard-v3.jpg",
              "width": "75",
              "type": "1",
              "height": "75"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Opinion | Hillary Clinton for the Democratic Nomination - The New ...",
        "htmlTitle": "Opinion | \u003cb\u003eHillary Clinton\u003c/b\u003e for the Democratic Nomination - The New ...",
        "link": "https://www.nytimes.com/2016/01/31/opinion/sunday/hillary-clinton-endorsement.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Jan 30, 2016 ... Hillary Clinton would be the first woman nominated by a major party. She served \nas a senator from a major state (New York) and as secretary of ...",
        "htmlSnippet": "Jan 30, 2016 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eHillary Clinton\u003c/b\u003e would be the first woman nominated by a major party. She served \u003cbr\u003e\nas a senator from a major state (New York) and as secretary of&nbsp;...",
        "formattedUrl": "https://www.nytimes.com/2016/01/31/.../hillary-clinton-endorsement.html",
        "htmlFormattedUrl": "https://www.nytimes.com/2016/01/31/.../\u003cb\u003ehillary\u003c/b\u003e-\u003cb\u003eclinton\u003c/b\u003e-endorsement.html",
        "pagemap": {
          "hcard": [
            {
              "fn": "The Editorial Board"
            }
          ],
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/images/2016/01/31/opinion/31sun1web/31sun1web-thumbStandard.jpg"
            }
          ],
          "imageobject": [
            {
              "copyrightholder": "Credit...Doug Mills/The New York Times",
              "caption": "Hillary Clinton, 2015.Credit...Doug Mills/The New York Times",
              "description": "Hillary Clinton, 2015.Credit...Doug Mills/The New York Times",
              "url": "https://static01.nyt.com/images/2016/01/31/opinion/31sun1web/31sun1web-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "url": "https://static01.nyt.com/images/2016/01/15/multimedia/opinion-clinton/opinion-clinton-thumbLarge.jpg?quality=75&auto=webp&disable=upscale"
            }
          ],
          "person": [
            {
              "name": "The Editorial Board"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://article/0232cdfe-096c-5c1d-8d6c-5156ca03888a",
              "og:image": "https://static01.nyt.com/images/2016/01/31/opinion/31sun1web/31sun1web-facebookJumbo.jpg",
              "twitter:app:id:googleplay": "com.nytimes.android",
              "twitter:card": "summary_large_image",
              "pt": "article",
              "twitter:url": "https://www.nytimes.com/2016/01/31/opinion/sunday/hillary-clinton-endorsement.html",
              "pdate": "20160130",
              "articleid": "100000004171104",
              "al:android:package": "com.nytimes.android",
              "al:ipad:app_store_id": "357066198",
              "twitter:app:name:googleplay": "NYTimes",
              "og:description": "Voters have the chance to choose one of the most broadly and deeply qualified presidential candidates in modern history.",
              "twitter:image": "https://static01.nyt.com/images/2016/01/31/opinion/31sun1web/31sun1web-articleLarge.jpg",
              "pst": "Editorial",
              "twitter:image:alt": "Hillary Clinton, 2015.",
              "al:iphone:app_name": "NYTimes",
              "news_keywords": "Editorial,Hillary Clinton,2016 Presidential Election,Political endorsement,Democrats,Primaries",
              "scg": "sunday",
              "article:content_tier": "metered",
              "article:published": "2016-01-30T16:00:12.000Z",
              "msapplication-starturl": "https://www.nytimes.com",
              "image": "https://static01.nyt.com/images/2016/01/31/opinion/31sun1web/31sun1web-facebookJumbo.jpg",
              "thumbnail": "https://static01.nyt.com/images/2016/01/31/opinion/31sun1web/31sun1web-thumbStandard.jpg",
              "og:type": "article",
              "og:image:alt": "Hillary Clinton, 2015.",
              "twitter:title": "Opinion | Hillary Clinton for the Democratic Nomination",
              "article:section": "Opinion",
              "cg": "opinion",
              "pubp_event_id": "pubp://event/a63cf43a702640748c214cb0fc70e325",
              "og:title": "Opinion | Hillary Clinton for the Democratic Nomination",
              "url": "https://www.nytimes.com/2016/01/31/opinion/sunday/hillary-clinton-endorsement.html",
              "article:tag": "Editorials",
              "al:iphone:url": "nytimes://www.nytimes.com/2016/01/31/opinion/sunday/hillary-clinton-endorsement.html",
              "al:android:url": "nyt://article/0232cdfe-096c-5c1d-8d6c-5156ca03888a",
              "twitter:app:url:googleplay": "nyt://article/0232cdfe-096c-5c1d-8d6c-5156ca03888a",
              "al:ipad:url": "nytimes://www.nytimes.com/2016/01/31/opinion/sunday/hillary-clinton-endorsement.html",
              "byl": "By The Editorial Board",
              "viewport": "width=device-width, initial-scale=1",
              "twitter:description": "Voters have the chance to choose one of the most broadly and deeply qualified presidential candidates in modern history.",
              "al:iphone:app_store_id": "284862083",
              "al:ipad:app_name": "NYTimes",
              "og:url": "https://www.nytimes.com/2016/01/31/opinion/sunday/hillary-clinton-endorsement.html",
              "article:modified": "2018-07-02T14:42:16.695Z",
              "al:android:app_name": "NYTimes",
              "article:opinion": "true"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/images/2016/01/31/opinion/31sun1web/31sun1web-facebookJumbo.jpg"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Opinion | Primary Choices: Hillary Clinton - The New York Times",
        "htmlTitle": "Opinion | Primary Choices: \u003cb\u003eHillary Clinton\u003c/b\u003e - The New York Times",
        "link": "https://www.nytimes.com/2008/01/25/opinion/25fri1.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Jan 25, 2008 ... The Times's editorial board strongly recommends that Democrats select Hillary \nClinton as their nominee for the 2008 presidential election.",
        "htmlSnippet": "Jan 25, 2008 \u003cb\u003e...\u003c/b\u003e The Times&#39;s editorial board strongly recommends that Democrats select \u003cb\u003eHillary\u003c/b\u003e \u003cbr\u003e\n\u003cb\u003eClinton\u003c/b\u003e as their nominee for the 2008 presidential election.",
        "formattedUrl": "https://www.nytimes.com/2008/01/25/opinion/25fri1.html",
        "htmlFormattedUrl": "https://www.nytimes.com/2008/01/25/opinion/25fri1.html",
        "pagemap": {
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/newsgraphics/images/icons/defaultCrop.png"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://article/ec9e9048-b472-5ad5-ad90-64e86dea780f",
              "og:image": "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
              "twitter:app:id:googleplay": "com.nytimes.android",
              "twitter:card": "summary_large_image",
              "pt": "article",
              "twitter:url": "https://www.nytimes.com/2008/01/25/opinion/25fri1.html",
              "pdate": "20080125",
              "articleid": "1194740405256",
              "al:android:package": "com.nytimes.android",
              "al:ipad:app_store_id": "357066198",
              "twitter:app:name:googleplay": "NYTimes",
              "og:description": "The Timesâ€™s editorial board strongly recommends that Democrats select Hillary Clinton as their nominee for the 2008 presidential election.",
              "twitter:image": "https://static01.nyt.com/newsgraphics/images/icons/defaultCrop.png",
              "pst": "Editorial",
              "al:iphone:app_name": "NYTimes",
              "news_keywords": "Editorial,2008 Presidential Election,Democrats,,US Politics,Hillary Clinton,US Presidential Elections,Barack Obama,John Edwards,Political endorsement",
              "article:content_tier": "metered",
              "article:published": "2008-01-25T05:00:00.000Z",
              "msapplication-starturl": "https://www.nytimes.com",
              "image": "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
              "thumbnail": "https://static01.nyt.com/newsgraphics/images/icons/defaultCrop.png",
              "og:type": "article",
              "twitter:title": "Opinion | Primary Choices: Hillary Clinton",
              "article:section": "Opinion",
              "cg": "opinion",
              "pubp_event_id": "pubp://event/c43bb4326db940e0ae83a238d0804caf",
              "og:title": "Opinion | Primary Choices: Hillary Clinton",
              "url": "https://www.nytimes.com/2008/01/25/opinion/25fri1.html",
              "article:tag": "Editorials",
              "al:iphone:url": "nytimes://www.nytimes.com/2008/01/25/opinion/25fri1.html",
              "al:android:url": "nyt://article/ec9e9048-b472-5ad5-ad90-64e86dea780f",
              "twitter:app:url:googleplay": "nyt://article/ec9e9048-b472-5ad5-ad90-64e86dea780f",
              "al:ipad:url": "nytimes://www.nytimes.com/2008/01/25/opinion/25fri1.html",
              "viewport": "width=device-width, initial-scale=1",
              "twitter:description": "The Timesâ€™s editorial board strongly recommends that Democrats select Hillary Clinton as their nominee for the 2008 presidential election.",
              "al:iphone:app_store_id": "284862083",
              "al:ipad:app_name": "NYTimes",
              "og:url": "https://www.nytimes.com/2008/01/25/opinion/25fri1.html",
              "article:modified": "2008-01-25T03:14:24.000Z",
              "al:android:app_name": "NYTimes",
              "article:opinion": "true"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Hillary Clinton Announces 2016 Presidential Bid - The New York ...",
        "htmlTitle": "\u003cb\u003eHillary Clinton\u003c/b\u003e Announces 2016 Presidential Bid - The New York ...",
        "link": "https://www.nytimes.com/2015/04/13/us/politics/hillary-clinton-2016-presidential-campaign.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Apr 12, 2015 ... Ending two years of speculation and coy denials, Hillary Rodham Clinton \nannounced on Sunday that she would seek the presidency for a ...",
        "htmlSnippet": "Apr 12, 2015 \u003cb\u003e...\u003c/b\u003e Ending two years of speculation and coy denials, \u003cb\u003eHillary\u003c/b\u003e Rodham \u003cb\u003eClinton\u003c/b\u003e \u003cbr\u003e\nannounced on Sunday that she would seek the presidency for a&nbsp;...",
        "formattedUrl": "https://www.nytimes.com/.../hillary-clinton-2016-presidential-campaign.html",
        "htmlFormattedUrl": "https://www.nytimes.com/.../\u003cb\u003ehillary\u003c/b\u003e-\u003cb\u003eclinton\u003c/b\u003e-2016-presidential-campaign.html",
        "pagemap": {
          "hcard": [
            {
              "fn": "Amy Chozick"
            }
          ],
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/images/2015/04/13/us/politics/13announce/00announce-clinton-thumbStandard.jpg"
            }
          ],
          "imageobject": [
            {
              "url": "https://static01.nyt.com/images/2015/04/13/us/elections/00hillaryannounce-2-ss-slide-2558/00hillaryannounce-2-ss-slide-2558-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "url": "https://static01.nyt.com/images/2015/04/12/multimedia/hillary-announce-video/hillary-announce-video-thumbLarge.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "url": "https://static01.nyt.com/images/2015/04/13/us/politics/13ISSUES-CLINTON/13ISSUES-CLINTON-web-thumbLarge.jpg?quality=75&auto=webp&disable=upscale"
            }
          ],
          "person": [
            {
              "name": "Amy Chozick"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://article/55b37384-b35b-545a-8195-2627399e7781",
              "og:image": "https://static01.nyt.com/images/2015/04/13/us/politics/13announce/00announce-clinton-facebookJumbo.jpg",
              "twitter:app:id:googleplay": "com.nytimes.android",
              "twitter:card": "summary_large_image",
              "pt": "article",
              "twitter:url": "https://www.nytimes.com/2015/04/13/us/politics/hillary-clinton-2016-presidential-campaign.html",
              "pdate": "20150412",
              "articleid": "100000003597374",
              "al:android:package": "com.nytimes.android",
              "al:ipad:app_store_id": "357066198",
              "twitter:app:name:googleplay": "NYTimes",
              "og:description": "The announcement ends two years of speculation and immediately establishes Mrs. Clinton as the likely Democratic nominee.",
              "twitter:image": "https://static01.nyt.com/images/2015/04/13/us/politics/13announce/00announce-clinton-articleLarge.jpg",
              "pst": "News",
              "twitter:image:alt": "Hillary Rodham Clinton at an event in Washington in March.",
              "al:iphone:app_name": "NYTimes",
              "news_keywords": "Hillary Clinton,2016 Presidential Election,US Politics,Democrats,Bill Clinton,Iowa,2008 Presidential Election",
              "scg": "politics",
              "article:content_tier": "metered",
              "article:published": "2015-04-12T14:30:50.000Z",
              "msapplication-starturl": "https://www.nytimes.com",
              "image": "https://static01.nyt.com/images/2015/04/13/us/politics/13announce/00announce-clinton-facebookJumbo.jpg",
              "thumbnail": "https://static01.nyt.com/images/2015/04/13/us/politics/13announce/00announce-clinton-thumbStandard.jpg",
              "og:type": "article",
              "og:image:alt": "Hillary Rodham Clinton at an event in Washington in March.",
              "twitter:title": "Hillary Clinton Announces 2016 Presidential Bid",
              "article:section": "U.S.",
              "cg": "us",
              "pubp_event_id": "pubp://event/d8f86e46c9984c49ab30cf101af4c3f8",
              "og:title": "Hillary Clinton Announces 2016 Presidential Bid",
              "article:author": "http://www.nytimes.com/by/amy-chozick",
              "url": "https://www.nytimes.com/2015/04/13/us/politics/hillary-clinton-2016-presidential-campaign.html",
              "article:tag": "Clinton, Hillary Rodham",
              "al:iphone:url": "nytimes://www.nytimes.com/2015/04/13/us/politics/hillary-clinton-2016-presidential-campaign.html",
              "al:android:url": "nyt://article/55b37384-b35b-545a-8195-2627399e7781",
              "twitter:app:url:googleplay": "nyt://article/55b37384-b35b-545a-8195-2627399e7781",
              "al:ipad:url": "nytimes://www.nytimes.com/2015/04/13/us/politics/hillary-clinton-2016-presidential-campaign.html",
              "byl": "By Amy Chozick",
              "twitter:description": "The announcement ends two years of speculation and immediately establishes Mrs. Clinton as the likely Democratic nominee.",
              "al:iphone:app_store_id": "284862083",
              "og:url": "https://www.nytimes.com/2015/04/13/us/politics/hillary-clinton-2016-presidential-campaign.html",
              "article:modified": "2015-04-12T20:08:31.000Z",
              "al:android:app_name": "NYTimes",
              "article:opinion": "false"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/images/2015/04/13/us/politics/13PATH-web1/31PAThweb-span-videoLarge.jpg",
              "width": "276",
              "type": "1",
              "height": "182"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Hillary Clinton Backs Eliot Engel, in Her First House Primary ...",
        "htmlTitle": "\u003cb\u003eHillary Clinton\u003c/b\u003e Backs Eliot Engel, in Her First House Primary ...",
        "link": "https://www.nytimes.com/2020/06/15/us/politics/hillary-clinton-eliot-engel.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Jun 15, 2020 ... Hillary Clinton delivered her first Democratic primary endorsement in a 2020 \nHouse race on Monday, throwing her support behind ...",
        "htmlSnippet": "Jun 15, 2020 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eHillary Clinton\u003c/b\u003e delivered her first Democratic primary endorsement in a 2020 \u003cbr\u003e\nHouse race on Monday, throwing her support behind&nbsp;...",
        "formattedUrl": "https://www.nytimes.com/2020/06/15/us/.../hillary-clinton-eliot-engel.html",
        "htmlFormattedUrl": "https://www.nytimes.com/2020/06/15/us/.../\u003cb\u003ehillary\u003c/b\u003e-\u003cb\u003eclinton\u003c/b\u003e-eliot-engel.html",
        "pagemap": {
          "hcard": [
            {
              "fn": "Shane Goldmacher"
            }
          ],
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/images/2020/06/15/us/politics/15clinton-engel/15clinton-engel-thumbStandard.jpg"
            }
          ],
          "imageobject": [
            {
              "copyrightholder": "Credit...Erin Scott/Reuters",
              "caption": "Representative Eliot Engel of New York, the chairman of the powerful House Foreign Affairs Committee, faced criticism this spring for his absence from his district during the coronavirus pandemic.C...",
              "description": "Representative Eliot Engel of New York, the chairman of the powerful House Foreign Affairs Committee, faced criticism this spring for his absence from his district during the coronavirus pandemic.C...",
              "url": "https://static01.nyt.com/images/2020/06/15/us/politics/15clinton-engel/merlin_171855252_cd0e80e1-0cf2-43e2-9d28-2d91835f5e74-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            }
          ],
          "person": [
            {
              "name": "Shane Goldmacher"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://article/27e34158-ccce-5987-a18e-2d15cd0939ff",
              "og:image": "https://static01.nyt.com/images/2020/06/15/us/politics/15clinton-engel/15clinton-engel-facebookJumbo.jpg",
              "twitter:app:id:googleplay": "com.nytimes.android",
              "twitter:card": "summary_large_image",
              "pt": "article",
              "twitter:url": "https://www.nytimes.com/2020/06/15/us/politics/hillary-clinton-eliot-engel.html",
              "pdate": "20200615",
              "articleid": "100000007192703",
              "al:android:package": "com.nytimes.android",
              "al:ipad:app_store_id": "357066198",
              "twitter:app:name:googleplay": "NYTimes",
              "og:description": "Mr. Engel, a longtime New York representative, is trying to fend off a serious challenge from his left by Jamaal Bowman, who has been endorsed by Bernie Sanders and Alexandria Ocasio-Cortez.",
              "twitter:image": "https://static01.nyt.com/images/2020/06/15/us/politics/15clinton-engel/15clinton-engel-videoSixteenByNineJumbo1600.jpg",
              "pst": "News",
              "twitter:image:alt": "Representative Eliot Engel of New York, the chairman of the powerful House Foreign Affairs Committee, faced criticism this spring for his absence from his district during the coronavirus pandemic.",
              "al:iphone:app_name": "NYTimes",
              "news_keywords": "Hillary Clinton,Eliot L Engel,House races,Congressional elections,Democrats,New York,Westchester,Jamaal Bowman",
              "scg": "politics",
              "article:content_tier": "metered",
              "article:published": "2020-06-15T21:00:08.000Z",
              "msapplication-starturl": "https://www.nytimes.com",
              "image": "https://static01.nyt.com/images/2020/06/15/us/politics/15clinton-engel/15clinton-engel-facebookJumbo.jpg",
              "thumbnail": "https://static01.nyt.com/images/2020/06/15/us/politics/15clinton-engel/15clinton-engel-thumbStandard.jpg",
              "og:type": "article",
              "og:image:alt": "Representative Eliot Engel of New York, the chairman of the powerful House Foreign Affairs Committee, faced criticism this spring for his absence from his district during the coronavirus pandemic.",
              "twitter:title": "Hillary Clinton Backs Eliot Engel, in Her First House Primary Endorsement of 2020",
              "article:section": "U.S.",
              "cg": "us",
              "pubp_event_id": "pubp://event/ff3d92f09a1f48ac91a092a66e5a2152",
              "og:title": "Hillary Clinton Backs Eliot Engel, in Her First House Primary Endorsement of 2020",
              "url": "https://www.nytimes.com/2020/06/15/us/politics/hillary-clinton-eliot-engel.html",
              "article:tag": "Clinton, Hillary Rodham",
              "al:iphone:url": "nytimes://www.nytimes.com/2020/06/15/us/politics/hillary-clinton-eliot-engel.html",
              "al:android:url": "nyt://article/27e34158-ccce-5987-a18e-2d15cd0939ff",
              "twitter:app:url:googleplay": "nyt://article/27e34158-ccce-5987-a18e-2d15cd0939ff",
              "al:ipad:url": "nytimes://www.nytimes.com/2020/06/15/us/politics/hillary-clinton-eliot-engel.html",
              "byl": "By Shane Goldmacher",
              "twitter:description": "Mr. Engel, a longtime New York representative, is trying to fend off a serious challenge from his left by Jamaal Bowman, who has been endorsed by Bernie Sanders and Alexandria Ocasio-Cortez.",
              "al:iphone:app_store_id": "284862083",
              "al:ipad:app_name": "NYTimes",
              "og:url": "https://www.nytimes.com/2020/06/15/us/politics/hillary-clinton-eliot-engel.html",
              "article:modified": "2020-06-24T16:22:01.966Z",
              "al:android:app_name": "NYTimes",
              "article:opinion": "false"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/images/2020/06/15/us/politics/15clinton-engel/15clinton-engel-thumbStandard.jpg",
              "width": "75",
              "type": "1",
              "height": "75"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Hillary Clinton Chose to Shield a Top Adviser Accused of ...",
        "htmlTitle": "\u003cb\u003eHillary Clinton\u003c/b\u003e Chose to Shield a Top Adviser Accused of ...",
        "link": "https://www.nytimes.com/2018/01/26/us/politics/hillary-clinton-chose-to-shield-a-top-adviser-accused-of-harassment-in-2008.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Jan 26, 2018 ... WASHINGTON â€” A senior adviser to Hillary Clinton's 2008 presidential \ncampaign who was accused of repeatedly sexually harassing a young ...",
        "htmlSnippet": "Jan 26, 2018 \u003cb\u003e...\u003c/b\u003e WASHINGTON â€” A senior adviser to \u003cb\u003eHillary Clinton&#39;s\u003c/b\u003e 2008 presidential \u003cbr\u003e\ncampaign who was accused of repeatedly sexually harassing a young&nbsp;...",
        "formattedUrl": "https://www.nytimes.com/.../hillary-clinton-chose-to-shield-a-top-adviser- accused-of-harassment-in-2008.html",
        "htmlFormattedUrl": "https://www.nytimes.com/.../\u003cb\u003ehillary\u003c/b\u003e-\u003cb\u003eclinton\u003c/b\u003e-chose-to-shield-a-top-adviser- accused-of-harassment-in-2008.html",
        "pagemap": {
          "hcard": [
            {
              "fn": "Amy Chozick"
            }
          ],
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/images/2018/01/27/us/politics/27dc-hillary/27dc-hillary-1-thumbStandard.jpg"
            }
          ],
          "imageobject": [
            {
              "copyrightholder": "Credit...Jeremy Lange for The New York Times",
              "caption": "Hillary Clinton campaignâ€™s Senior Adviser for Faith Based Operations, Burns Strider, in 2008.Credit...Jeremy Lange for The New York Times",
              "description": "Hillary Clinton campaignâ€™s Senior Adviser for Faith Based Operations, Burns Strider, in 2008.Credit...Jeremy Lange for The New York Times",
              "url": "https://static01.nyt.com/images/2018/01/27/us/politics/27dc-hillary/merlin_23045675_725d4da9-d78f-48a6-af18-1e9ce7560c26-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "url": "https://static01.nyt.com/images/2018/01/14/opinion/sunday/14chozick/14chozick-thumbLarge-v2.jpg?quality=75&auto=webp&disable=upscale"
            }
          ],
          "person": [
            {
              "name": "Maggie Haberman"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://article/82f07933-90dd-5550-9fb0-d421a2390fc9",
              "og:image": "https://static01.nyt.com/images/2018/01/27/us/politics/27dc-hillary/27dc-hillary-1-facebookJumbo.jpg",
              "twitter:app:id:googleplay": "com.nytimes.android",
              "twitter:card": "summary_large_image",
              "pt": "article",
              "twitter:url": "https://www.nytimes.com/2018/01/26/us/politics/hillary-clinton-chose-to-shield-a-top-adviser-accused-of-harassment-in-2008.html",
              "pdate": "20180126",
              "articleid": "100000005703550",
              "al:android:package": "com.nytimes.android",
              "al:ipad:app_store_id": "357066198",
              "twitter:app:name:googleplay": "NYTimes",
              "og:description": "Mrs. Clintonâ€™s campaign manager at the time recommended that she fire the adviser, Burns Strider. Instead, Mr. Strider was docked several weeks of pay and ordered to undergo counseling.",
              "twitter:image": "https://static01.nyt.com/images/2018/01/27/us/politics/27dc-hillary/27dc-hillary-1-videoSixteenByNineJumbo1600.jpg",
              "pst": "News",
              "twitter:image:alt": "Hillary Clinton campaign&rsquo;s Senior Adviser for Faith Based Operations, Burns Strider, in 2008.",
              "al:iphone:app_name": "NYTimes",
              "news_keywords": "Burns Strider,2016 Presidential Election,MeToo Movement,Sexual harassment,Hillary Clinton,US Politics",
              "scg": "politics",
              "article:content_tier": "metered",
              "article:published": "2018-01-26T16:29:22.000Z",
              "msapplication-starturl": "https://www.nytimes.com",
              "image": "https://static01.nyt.com/images/2018/01/27/us/politics/27dc-hillary/27dc-hillary-1-facebookJumbo.jpg",
              "thumbnail": "https://static01.nyt.com/images/2018/01/27/us/politics/27dc-hillary/27dc-hillary-1-thumbStandard.jpg",
              "og:type": "article",
              "og:image:alt": "Hillary Clinton campaign&rsquo;s Senior Adviser for Faith Based Operations, Burns Strider, in 2008.",
              "twitter:title": "Hillary Clinton Chose to Shield a Top Adviser Accused of Harassment in 2008",
              "article:section": "U.S.",
              "cg": "us",
              "pubp_event_id": "pubp://event/a485703eaedc4dd49966159d4f2d470a",
              "og:title": "Hillary Clinton Chose to Shield a Top Adviser Accused of Harassment in 2008",
              "article:author": "http://www.nytimes.com/by/amy-chozick",
              "url": "https://www.nytimes.com/2018/01/26/us/politics/hillary-clinton-chose-to-shield-a-top-adviser-accused-of-harassment-in-2008.html",
              "article:tag": "Strider, Burns",
              "al:iphone:url": "nytimes://www.nytimes.com/2018/01/26/us/politics/hillary-clinton-chose-to-shield-a-top-adviser-accused-of-harassment-in-2008.html",
              "al:android:url": "nyt://article/82f07933-90dd-5550-9fb0-d421a2390fc9",
              "twitter:app:url:googleplay": "nyt://article/82f07933-90dd-5550-9fb0-d421a2390fc9",
              "al:ipad:url": "nytimes://www.nytimes.com/2018/01/26/us/politics/hillary-clinton-chose-to-shield-a-top-adviser-accused-of-harassment-in-2008.html",
              "byl": "By Maggie Haberman and Amy Chozick",
              "twitter:description": "Mrs. Clintonâ€™s campaign manager at the time recommended that she fire the adviser, Burns Strider. Instead, Mr. Strider was docked several weeks of pay and ordered to undergo counseling.",
              "al:iphone:app_store_id": "284862083",
              "al:ipad:app_name": "NYTimes",
              "og:url": "https://www.nytimes.com/2018/01/26/us/politics/hillary-clinton-chose-to-shield-a-top-adviser-accused-of-harassment-in-2008.html",
              "article:modified": "2018-01-27T03:51:37.000Z",
              "al:android:app_name": "NYTimes",
              "article:opinion": "false"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/images/2018/01/27/us/politics/27dc-hillary/27dc-hillary-1-facebookJumbo.jpg"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "What Hillary Clinton Would Need to Do to Win - The New York Times",
        "htmlTitle": "What \u003cb\u003eHillary Clinton\u003c/b\u003e Would Need to Do to Win - The New York Times",
        "link": "https://www.nytimes.com/interactive/2016/us/elections/hillary-clinton.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Apr 12, 2015 ... Hillary Rodham Clinton in March in New York City. Credit Ruth Fremson/The \nNew York Times. The Coalition. Mrs. Clinton can expect little if any ...",
        "htmlSnippet": "Apr 12, 2015 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eHillary\u003c/b\u003e Rodham \u003cb\u003eClinton\u003c/b\u003e in March in New York City. Credit Ruth Fremson/The \u003cbr\u003e\nNew York Times. The Coalition. Mrs. \u003cb\u003eClinton\u003c/b\u003e can expect little if any&nbsp;...",
        "formattedUrl": "https://www.nytimes.com/interactive/2016/us/elections/hillary-clinton.html",
        "htmlFormattedUrl": "https://www.nytimes.com/interactive/2016/us/elections/\u003cb\u003ehillary\u003c/b\u003e-\u003cb\u003eclinton\u003c/b\u003e.html",
        "pagemap": {
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/images/2015/04/13/us/politics/13PATH-web1/31PAThweb-span-thumbStandard.jpg"
            }
          ],
          "person": [
            {
              "name": "AMY CHOZICK"
            }
          ],
          "organization": [
            {
              "tickersymbol": "NYSE NYT",
              "name": "The New York Times Company"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://interactive/f067edc7-56ce-5ff2-a548-f255516c7f15",
              "og:image": "https://static01.nyt.com/images/2015/04/13/us/politics/13PATH-web1/31PAThweb-span-facebookJumbo.jpg",
              "twitter:card": "summary_large_image",
              "pt": "Multimedia",
              "lp": "Mrs. Clinton can expect little if any opposition in the Democratic primaries. But she was similarly well positioned when she declared her candidacy in 2007.",
              "displaydate": "April 12, 2015",
              "twitter:url": "https://www.nytimes.com/interactive/2016/us/elections/hillary-clinton.html",
              "hostapp": "vi",
              "pdate": "20150412",
              "article:collection": "https://static01.nyt.com/services/json/sectionfronts/us/index.jsonp",
              "articleid": "100000003621835",
              "og:description": "Mrs. Clinton can expect little if any opposition in the Democratic primaries. But she was similarly well positioned when she declared her candidacy in 2007.",
              "twitter:image": "https://static01.nyt.com/images/2015/04/13/us/politics/13PATH-web1/31PAThweb-span-articleLarge.jpg",
              "pst": "Interactive",
              "wt.z_cad": "0",
              "twitter:image:alt": "Hillary Rodham Clinton in March in New York City.",
              "foundation-build-id": "nyt-v5",
              "tom": "interactive_feature",
              "news_keywords": "Hillary Clinton,2016 Presidential Election,Democrats",
              "adtargeting": "{}",
              "dat": "April 12, 2015",
              "scg": "elections",
              "article:content_tier": "metered",
              "article:published": "2015-04-12T12:53:27.000Z",
              "slug": "hillary-clinton",
              "image": "https://static01.nyt.com/images/2015/04/13/us/politics/13PATH-web1/31PAThweb-span-facebookJumbo.jpg",
              "sourceapp": "nyt-v5",
              "thumbnail": "https://static01.nyt.com/images/2015/04/13/us/politics/13PATH-web1/31PAThweb-span-thumbStandard.jpg",
              "og:type": "article",
              "og:image:alt": "Hillary Rodham Clinton in March in New York City.",
              "twitter:title": "What Hillary Clinton Would Need to Do to Win",
              "article:section": "U.S.",
              "cg": "us",
              "author": "Amy Chozick",
              "pubp_event_id": "pubp://event/57a25363b5aa4478ac5dd77bc38155a5",
              "og:title": "What Hillary Clinton Would Need to Do to Win",
              "article:author": "https://www.nytimes.com/by/amy-chozick",
              "applicationname": "interactive",
              "article:tag": "Clinton, Hillary Rodham",
              "hdl": "What Hillary Clinton Would Need to Do to Win",
              "fb:app_id": "9869919170",
              "byl": "By AMY CHOZICK",
              "viewport": "width=device-width, initial-scale=1, maximum-scale=1",
              "twitter:description": "Mrs. Clinton can expect little if any opposition in the Democratic primaries. But she was similarly well positioned when she declared her candidacy in 2007.",
              "og:url": "https://www.nytimes.com/interactive/2016/us/elections/hillary-clinton.html",
              "article:modified": "2015-04-12T12:53:22.000Z",
              "dfp-ad-unit-path": "us/elections",
              "article:opinion": "false"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/images/2015/04/13/us/politics/13PATH-web1/31PAThweb-span-facebookJumbo.jpg"
            }
          ],
          "newsarticle": [
            {
              "inlanguage": "en-US",
              "datemodified": "2015-04-12",
              "copyrightyear": "2020",
              "usageterms": "Terms of Service",
              "headline": "What Hillary Clinton Would Need to Do to Win",
              "copyrightnotice": "Â© 2020 The New York Times Company"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "Hillary Clinton, 'Smart Power' and a Dictator's Fall - The New York ...",
        "htmlTitle": "\u003cb\u003eHillary Clinton\u003c/b\u003e, &#39;Smart Power&#39; and a Dictator&#39;s Fall - The New York ...",
        "link": "https://www.nytimes.com/2016/02/28/us/politics/hillary-clinton-libya.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Feb 27, 2016 ... But this was not a meeting Hillary Clinton could cancel. Their encounter could \ndecide whether America was again going to war. In the throes of ...",
        "htmlSnippet": "Feb 27, 2016 \u003cb\u003e...\u003c/b\u003e But this was not a meeting \u003cb\u003eHillary Clinton\u003c/b\u003e could cancel. Their encounter could \u003cbr\u003e\ndecide whether America was again going to war. In the throes of&nbsp;...",
        "formattedUrl": "https://www.nytimes.com/2016/02/28/us/politics/hillary-clinton-libya.html",
        "htmlFormattedUrl": "https://www.nytimes.com/2016/02/28/us/politics/\u003cb\u003ehillary\u003c/b\u003e-\u003cb\u003eclinton\u003c/b\u003e-libya.html",
        "pagemap": {
          "hcard": [
            {
              "fn": "Scott Shane"
            }
          ],
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/images/2016/02/22/world/22libya8/22libya8-thumbStandard-v2.jpg"
            }
          ],
          "imageobject": [
            {
              "copyrightholder": "Credit...Pool photo by Kevin Lamarque",
              "caption": "Secretary of State Hillary Clinton at the end of a one-day trip to Tripoli, Libya, on Oct. 18, 2011, after the fall of Col. Muammar el-Qaddafi. Media reports referred to it as a â€œvictory...",
              "description": "Secretary of State Hillary Clinton at the end of a one-day trip to Tripoli, Libya, on Oct. 18, 2011, after the fall of Col. Muammar el-Qaddafi. Media reports referred to it as a â€œvictory...",
              "url": "https://static01.nyt.com/images/2016/02/22/world/22libya8/22libya8-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "copyrightholder": "Credit...Lynsey Addario for The New York Times",
              "url": "https://static01.nyt.com/images/2016/02/19/world/22libyaswap/22libyaswap-articleInline-v2.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "copyrightholder": "Credit...Moises Saman for The New York Times",
              "url": "https://static01.nyt.com/images/2016/02/16/world/middleeast/xxlibya/xxlibya-articleInline-v2.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "copyrightholder": "Credit...Pool photograph by Lionel Bonaventure",
              "url": "https://static01.nyt.com/images/2016/02/22/world/22libya3/22libya3-articleInline-v2.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "copyrightholder": "Credit...Moises Saman for The New York Times",
              "url": "https://static01.nyt.com/images/2016/02/22/world/22libya4/22libya4-articleInline-v2.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "copyrightholder": "Credit...Bryan Denton for The New York Times",
              "url": "https://static01.nyt.com/images/2016/02/22/world/22libya2/22libya2-articleInline-v2.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "copyrightholder": "Credit...Moises Saman for The New York Times",
              "url": "https://static01.nyt.com/images/2016/02/22/world/22libya5/22libya5-articleInline-v2.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "copyrightholder": "Credit...Tyler Hicks/The New York Times",
              "url": "https://static01.nyt.com/images/2016/02/22/world/22libya6/22libya6-articleInline-v2.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "copyrightholder": "Credit...Bryan Denton for The New York Times",
              "url": "https://static01.nyt.com/images/2016/02/22/world/22libya7/22libya7-articleInline.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
              "url": "https://static01.nyt.com/images/2016/02/26/opinion/RFDLibya/RFDLibya-thumbLarge.jpg?quality=75&auto=webp&disable=upscale"
            }
          ],
          "person": [
            {
              "name": "Jo Becker"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://article/72ec8664-3745-5d20-870e-4b61bb47c47e",
              "og:image": "https://static01.nyt.com/images/2016/02/22/world/22libya8/22libya8-facebookJumbo.jpg",
              "twitter:card": "summary_large_image",
              "pt": "article",
              "twitter:url": "https://www.nytimes.com/2016/02/28/us/politics/hillary-clinton-libya.html",
              "pdate": "20160227",
              "articleid": "100000004202550",
              "og:description": "The president was wary. The secretary of state was persuasive. But the ouster of Col. Muammar el-Qaddafi left Libya a failed state and a terrorist haven.",
              "twitter:image": "https://static01.nyt.com/images/2016/02/22/world/22libya8/22libya8-articleLarge-v4.jpg",
              "pst": "News,Series",
              "twitter:image:alt": "Secretary of State Hillary Clinton at the end of a one-day trip to Tripoli, Libya, on Oct. 18, 2011, after the fall of Col. Muammar el-Qaddafi. Media reports referred to it as a â€œvictory lap.â€",
              "news_keywords": ",Libya,Hillary Clinton,,Muammar Kaddafi,,State Department,Barack Obama,Benghazi,Mahmoud Jibril,US Foreign Policy,US Military,Transitional National Council Libya,ISIS;ISIL;Islamic State",
              "scg": "politics",
              "article:content_tier": "metered",
              "article:published": "2016-02-28T04:42:46.000Z",
              "msapplication-starturl": "https://www.nytimes.com",
              "image": "https://static01.nyt.com/images/2016/02/22/world/22libya8/22libya8-facebookJumbo.jpg",
              "thumbnail": "https://static01.nyt.com/images/2016/02/22/world/22libya8/22libya8-thumbStandard-v2.jpg",
              "og:type": "article",
              "og:image:alt": "Secretary of State Hillary Clinton at the end of a one-day trip to Tripoli, Libya, on Oct. 18, 2011, after the fall of Col. Muammar el-Qaddafi. Media reports referred to it as a â€œvictory lap.â€",
              "twitter:title": "Hillary Clinton, â€˜Smart Powerâ€™ and a Dictatorâ€™s Fall",
              "article:section": "U.S.",
              "cg": "us",
              "pubp_event_id": "pubp://event/82c675e9404b428bb5bf8d5a9e26c7d6",
              "og:title": "Hillary Clinton, â€˜Smart Powerâ€™ and a Dictatorâ€™s Fall",
              "cn": "the-great-read",
              "article:author": "http://www.nytimes.com/by/jo-becker",
              "url": "https://www.nytimes.com/2016/02/28/us/politics/hillary-clinton-libya.html",
              "article:tag": "Shane, Scott",
              "al:android:url": "nyt://article/72ec8664-3745-5d20-870e-4b61bb47c47e",
              "ct": "spotlight",
              "byl": "By Jo Becker and Scott Shane",
              "twitter:description": "The president was wary. The secretary of state was persuasive. But the ouster of Col. Muammar el-Qaddafi left Libya a failed state and a terrorist haven.",
              "og:url": "https://www.nytimes.com/2016/02/28/us/politics/hillary-clinton-libya.html",
              "article:modified": "2016-02-28T04:42:43.000Z",
              "article:opinion": "false"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/images/2016/02/22/world/22libya8/22libya8-thumbStandard-v2.jpg",
              "width": "75",
              "type": "1",
              "height": "75"
            }
          ]
        }
      },
      {
        "kind": "customsearch#result",
        "title": "'Nobody Likes Him': Hillary Clinton Risks a Party Split Over Bernie ...",
        "htmlTitle": "&#39;Nobody Likes Him&#39;: \u003cb\u003eHillary Clinton\u003c/b\u003e Risks a Party Split Over Bernie ...",
        "link": "https://www.nytimes.com/2020/01/21/us/politics/hillary-clinton-bernie-sanders.html",
        "displayLink": "www.nytimes.com",
        "snippet": "Jan 21, 2020 ... Mrs. Clinton's sharp criticism of her former rival in an upcoming documentary \nseries ricocheted across the Democratic Party on Tuesday, ...",
        "htmlSnippet": "Jan 21, 2020 \u003cb\u003e...\u003c/b\u003e Mrs. \u003cb\u003eClinton&#39;s\u003c/b\u003e sharp criticism of her former rival in an upcoming documentary \u003cbr\u003e\nseries ricocheted across the Democratic Party on Tuesday,&nbsp;...",
        "formattedUrl": "https://www.nytimes.com/2020/01/21/.../hillary-clinton-bernie-sanders.html",
        "htmlFormattedUrl": "https://www.nytimes.com/2020/01/21/.../\u003cb\u003ehillary\u003c/b\u003e-\u003cb\u003eclinton\u003c/b\u003e-bernie-sanders.html",
        "pagemap": {
          "hcard": [
            {
              "fn": "Sydney Ember"
            }
          ],
          "thumbnail": [
            {
              "src": "https://static01.nyt.com/images/2020/01/21/us/politics/21Clinton-Sanders/21Clinton-Sanders-thumbStandard.jpg"
            }
          ],
          "imageobject": [
            {
              "copyrightholder": "Credit...Doug Mills/The New York Times",
              "caption": "In response to a question about whether she would support Bernie Sanders if he received the Democratic nomination, Hillary Clinton replied: â€œIâ€™m not going to go there yet.â€Credit...Doug...",
              "description": "In response to a question about whether she would support Bernie Sanders if he received the Democratic nomination, Hillary Clinton replied: â€œIâ€™m not going to go there yet.â€Credit...Doug...",
              "url": "https://static01.nyt.com/images/2020/01/21/us/politics/21Clinton-Sanders/21Clinton-Sanders-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            }
          ],
          "person": [
            {
              "name": "Lisa Lerer"
            }
          ],
          "metatags": [
            {
              "nyt_uri": "nyt://article/c0c5b8a7-d3b2-5693-85c4-4857537b9270",
              "og:image": "https://static01.nyt.com/images/2020/01/21/us/politics/21Clinton-Sanders/21Clinton-Sanders-facebookJumbo.jpg",
              "twitter:app:id:googleplay": "com.nytimes.android",
              "twitter:card": "summary_large_image",
              "pt": "article",
              "twitter:url": "https://www.nytimes.com/2020/01/21/us/politics/hillary-clinton-bernie-sanders.html",
              "pdate": "20200121",
              "articleid": "100000006932795",
              "al:android:package": "com.nytimes.android",
              "al:ipad:app_store_id": "357066198",
              "twitter:app:name:googleplay": "NYTimes",
              "og:description": "Mrs. Clintonâ€™s sharp criticism of her former rival in an upcoming documentary series ricocheted across the Democratic Party on Tuesday, threatening to reopen the barely healed wounds of 2016.",
              "twitter:image": "https://static01.nyt.com/images/2020/01/21/us/politics/21Clinton-Sanders/21Clinton-Sanders-videoSixteenByNineJumbo1600.jpg",
              "pst": "News",
              "twitter:image:alt": "In response to a question about whether she would support Bernie Sanders if he received the Democratic nomination, Hillary Clinton replied: â€œIâ€™m not going to go there yet.â€",
              "al:iphone:app_name": "NYTimes",
              "news_keywords": "Hillary Clinton,Bernard Sanders;Bernie Sanders,Democrats,2020 Election,2016 Presidential Election,US Politics",
              "scg": "politics",
              "article:content_tier": "metered",
              "article:published": "2020-01-21T14:06:38.000Z",
              "msapplication-starturl": "https://www.nytimes.com",
              "image": "https://static01.nyt.com/images/2020/01/21/us/politics/21Clinton-Sanders/21Clinton-Sanders-facebookJumbo.jpg",
              "thumbnail": "https://static01.nyt.com/images/2020/01/21/us/politics/21Clinton-Sanders/21Clinton-Sanders-thumbStandard.jpg",
              "og:type": "article",
              "og:image:alt": "In response to a question about whether she would support Bernie Sanders if he received the Democratic nomination, Hillary Clinton replied: â€œIâ€™m not going to go there yet.â€",
              "twitter:title": "â€˜Nobody Likes Himâ€™: Hillary Clinton Risks a Party Split Over Bernie Sanders",
              "article:section": "U.S.",
              "cg": "us",
              "pubp_event_id": "pubp://event/4f6911e2bb8f446480672550cecbb91e",
              "og:title": "â€˜Nobody Likes Himâ€™: Hillary Clinton Risks a Party Split Over Bernie Sanders",
              "url": "https://www.nytimes.com/2020/01/21/us/politics/hillary-clinton-bernie-sanders.html",
              "article:tag": "Clinton, Hillary Rodham",
              "al:iphone:url": "nytimes://www.nytimes.com/2020/01/21/us/politics/hillary-clinton-bernie-sanders.html",
              "al:android:url": "nyt://article/c0c5b8a7-d3b2-5693-85c4-4857537b9270",
              "twitter:app:url:googleplay": "nyt://article/c0c5b8a7-d3b2-5693-85c4-4857537b9270",
              "al:ipad:url": "nytimes://www.nytimes.com/2020/01/21/us/politics/hillary-clinton-bernie-sanders.html",
              "byl": "By Lisa Lerer and Sydney Ember",
              "viewport": "width=device-width, initial-scale=1",
              "twitter:description": "Mrs. Clintonâ€™s sharp criticism of her former rival in an upcoming documentary series ricocheted across the Democratic Party on Tuesday, threatening to reopen the barely healed wounds of 2016.",
              "al:iphone:app_store_id": "284862083",
              "al:ipad:app_name": "NYTimes",
              "og:url": "https://www.nytimes.com/2020/01/21/us/politics/hillary-clinton-bernie-sanders.html",
              "article:modified": "2020-01-22T00:49:26.000Z",
              "al:android:app_name": "NYTimes",
              "article:opinion": "false"
            }
          ],
          "cse_image": [
            {
              "src": "https://static01.nyt.com/images/2020/01/21/us/politics/21Clinton-Sanders/21Clinton-Sanders-facebookJumbo.jpg"
            }
          ]
        }
      }
    ]}
  
  function hndlr(response) {
    // create parent div
    let parent = document.createElement('div');
    parent.classList.add('bothSidesDiv');
  
    let header1 = document.createElement('h1');
    header1.innerText = 'Both Sides';
  
    // let banner = document.createElement('img');
    // banner.src = "https://acegif.com/wp-content/gifs/coin-flip-50.gif";
  
    let banner = document.createElement('img');
    banner.src = "https://pyxis.nymag.com/v1/imgs/8e0/d96/1e6aa74f5321b5672fa9d581ad76581f3e-04-donkey-elephant.2x.h473.w710.jpg";
  
    // let header2 = document.createElement('h1');
    // header2.innerText = 'sediS';
  
    let tagline = document.createElement('p');
    tagline.classList.add('tagline');
    tagline.innerText = 'You\'re smart.';
  
    let tagline2 = document.createElement('p');
    tagline2.classList.add('tagline');
    tagline2.innerText = 'You\'re fair.';
  
    let tagline3 = document.createElement('p');
    tagline3.classList.add('tagline');
    tagline3.innerText = 'You\'re not afraid of opposing ideas.';
  
    let tagline4 = document.createElement('p');
    tagline4.classList.add('tagline');
    tagline4.innerText = 'You know you\'re right.';
  
    let taglineSub = document.createElement('p');
    taglineSub.classList.add('taglineSub');
    taglineSub.innerText = 'So why not get out of your bubble and see what those co-op shopping, Prius-driving, gun-hating liberal snowflakes are reading? Here are a few related stories from the NY Times. Click away: we\'ll get you behind their paywall. They won\'t get their Ivy-League,Commie hands on any of your hard-earned American dollars.';
    
    parent.appendChild(banner); // delete this is revert
    parent.appendChild(header1);
    // parent.appendChild(header2); // uncoment if revert
    // parent.appendChild(banner); // uncomment if revert
    parent.appendChild(tagline);
    parent.appendChild(tagline2);
    parent.appendChild(tagline3);
    parent.appendChild(tagline4);
    parent.appendChild(taglineSub);
  
  
    
    
  
    for (var i = 0; i < 3; i++) {
      // label element as 'item'
      let item = response.items[i];
      // build the article div
      let articleWrapper = document.createElement('div');
      articleWrapper.classList.add('relatedArticle', `article${i}`);
      // create a link element
      let link = document.createElement('a');
      link.classList.add('link', `link${i}`);
      link.href = item.link;
      link.setAttribute("target", "_blank");
      
      let title = document.createElement('h2');
      title.classList.add('title', `title${i}`);
      title.innerHTML = item.title;
      
      let image = document.createElement('img');
      image.classList.add('thumbnail', `thumbnail${i}`);
      image.src = item.pagemap.thumbnail[0].src;
      
      let snippet = document.createElement('p');
      snippet.classList.add('snippet', `snippet${i}`);
      snippet.innerHTML = item.snippet;
  
      link.appendChild(title);
      articleWrapper.appendChild(link);
      articleWrapper.appendChild(image);
      articleWrapper.appendChild(snippet);
      // build bothSidesDiv
      parent.appendChild(articleWrapper);
    }
    
    let insertPoint = document.querySelector('.page');
    insertPoint.style.display = 'flex';
    insertPoint.style.flexDirection = 'row-reverse';
  
    // add bothSidesDiv to fox news page
    insertPoint.prepend(parent);
    $(parent).hide().slideDown(2000);
  }  
  
  // hndlr(jsonResult);
  // console.log(jsonResult.items);
  
  // domain if statement end wrapper
  }
  // jQuery end wrapper
  });
