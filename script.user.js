// ==UserScript==
// @name         Replay.gg OneClick
// @namespace    http://www.replay.gg
// @version      0.1
// @description  Click-to-run on Replay.gg
// @author       iggyvolz
// @include      http://www.replay.gg/*
// @grant        none
// ==/UserScript==
if(window.location.pathname.indexOf("/search/na/")===0)
{
    $("a[data-target=#modal-view-replay]").click(function(a) {window.location="rgg://"+a.currentTarget.dataset.gameId;return false})
}
else if(window.location.pathname==="/")
{
    $($(".row")[1]).html($($(".row")[1]).html()+"<div class=\"col-xs-12 text-center\">Running Replay.GG OneClick version 1.0 by Iggyvolz</div>")
}