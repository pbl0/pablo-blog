---
title: "Remove Kobo DRM"
excerpt: "How to remove DRM from books downloaded on Kobo store"
coverImage: "/assets/blog/remove-kobo-drm/cover.png"
date: "2023-01-14T20:05:00.000Z"
author:
  name: Pablo
  picture: ""
ogImage:
  url: "/assets/blog/remove-kobo-drm/cover.png"
width: "700"
height: "455"
---

How to remove DRM of books purchased on Kobo store using **[kobo-book-downloader](https://github.com/TnS-hun/kobo-book-downloader)**.

1. Clone kobo-book-downloader repo:

```
git clone https://github.com/TnS-hun/kobo-book-downloader.git
```

2. Create python virtual environment and activate it:

```
python -m venv env
source env/bin/activate
```

3. Install dependencies:

```
pip install -r requirements.txt
```

4. Now we can start using kobo-book-downloader, the first time it will ask for your Kobo credentials.
5. This only seems to work if you have a Kobo account that was registered using an email instead of an external login provider (e.g. google, facebook, rakuten). If your account isn't registered with an email you can create a new account and then link it with your original account as explained [here](https://github.com/TnS-hun/kobo-book-downloader/issues/10#issuecomment-536278278).

```
python kobo-book-downloader list --all
```

6. After following the initial setup instructions, a list will be shown with the books you've bought.

<img src="/assets/blog/remove-kobo-drm/list.png" alt="List command image" width="720"/>

7. To download a book run the following command and choose the file(s) to download.

```
python kobo-book-downloader pick destination_dir/
```

<img src="/assets/blog/remove-kobo-drm/list.png" alt="Pick command image" width="720"/>

8.  The end result is a lovely DRM-free `.epub` file ready to be read in any eReader!

9.  kobo-book-downloader also offers other commands. Read more at their [Github readme](https://github.com/TnS-hun/kobo-book-downloader#readme).

> I noticed that on some free books it will fail to download, it usually means that the original file is already DRM-free.

Bye.
