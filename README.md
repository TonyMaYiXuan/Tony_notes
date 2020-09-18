# _Tony notes_

## Description
Tony's notes, such as _Introducing Rigorous Mathematics_, _On behavior of Cauchy products_, etc.

## Comments for myself
### Comment [2020-09-16 18:46]
> I have just tidied this repository, renaming folder _Data_ to _DATA_, which for all-capital file / folder name I intend to be edited without the need to code --- like those for user (kind of, manager of this repository), although I am actually the only user. In other words, things in folder with all capital letters are intended to be more _user-friendly_.
### Comment [2020-09-17 16:17]
> To get rid of something like _DOMException: Blocked a frame with origin "https://www.desmos.com" from accessing a cross-origin..._, which made my testing frustrating (e.g. want to test `window.top` in a sub HTML file in `<iframe>`), refer to **https://stackoverflow.com/a/19317888** in https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome, telling you that you can put this line: `"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security` into _Windows_ command prompt and then it creates a new folder `C:/Chrome dev session` for **temporary _Chrome_**.

> Just remember to **delete** that folder after testing as the above post mentioned.

> However, though it is annoying, **make sure you know what you are doing** before browsing insecurely. You may not know if the website you embed in your webpage is absolutely safe.

> To give more guiding, first open the local HTML file by clicking it, and then in the default _Chrome_ browser you can copy the file link in it to paste on the insecure _Chrome_. 
### Comment [2020-09-17 22:00] and TODOs
You may learn / recall something from comment**s** in **commit 362a9a6** and /or **https://github.com/TonyMaYiXuan/Tony_notes/commit/f5a3e33d3cc6da8df18d69cfd85b2aae1cde87f5** (for **TODOs** there!).
### Comment [2020-09-18 11:56]
May refer to https://github.com/TonyMaYiXuan/Tony_notes/commit/93777dde85f32bb4a50ac614e7512ee595563a7b#commitcomment-42418912, it is particularly complicated to set sizes across different devices systematically and thoroughly, and **it requires a lot of testing and careful planning**, like defining a file _style.css_ for every _HTML_ file to use.
### TODO [2020-09-18 12:19]
- [**Unnecessary**] Some links like https://tonymayixuan.github.io/Tony_notes/DATA/, https://tonymayixuan.github.io/Tony_notes/dogBoneShape/, https://tonymayixuan.github.io/Tony_notes/homePage/ may be included to the page as a reference.
