(function () {
    "use strict";

    //Parse the current GitHub repo url. Examples:
    //  Repo root:           /Sphinxxxx/vanilla-picker
    //  Subfolder:           /Sphinxxxx/vanilla-picker/tree/master/src/css
    //  Subfolder at commit: /Sphinxxxx/vanilla-picker/tree/382231756aac75a49f046ccee1b04263196f9a22/src/css
    //  Subfolder at tag:    /Sphinxxxx/vanilla-picker/tree/v2.2.0/src/css
    //
    //If applicable, the name of the commit/branch/tag is always the 4th element in the url path.
    //Here, we put that in the "ref" variable:
    const [/* Leading slash */, owner, repo, /* "tree" */, ref, ...path] = window.location.pathname.split('/');

    //Create the URL to query GitHub's API: https://developer.github.com/v3/repos/contents/#get-contents
    //Example:
    //  https://api.github.com/repos/Sphinxxxx/vanilla-picker/contents/src/css?ref=382231756aac75a49f046ccee1b04263196f9a22
    const query = ['https://api.github.com/repos', owner, repo, 'contents'].concat(path || []),
          url = query.join('/') + (ref ? '?ref=' + ref : '');
    console.log(url);

    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url).then(r => r.json())
              .then(j => Array.isArray(j) ? j.forEach(handleFileInfo) : console.warn(j));

    function handleFileInfo(info) {
        //console.log(info);
        const link = document.querySelector(`div[role="rowheader"] a[title="${info.name}"]`);
        const commitCol = link.closest('div[role="row"]').querySelector('.commit-message');

        const sizeCol = document.createElement('div');
        sizeCol.style.width = '5em';
        if(info.type === 'file') {
            //http://stackoverflow.com/a/17663871/1869660
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Parameters
            sizeCol.textContent = (info.size/1024).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' KB';
            sizeCol.style.textAlign = 'right';
            sizeCol.style.whiteSpace = 'nowrap';
        }

        commitCol.insertAdjacentElement('afterend', sizeCol);
    }
})();
