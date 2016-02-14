// ==UserScript==
// @name         Replay.gg OneClick
// @namespace    http://www.replay.gg
// @version      0.2
// @description  Click-to-run on Replay.gg
// @author       iggyvolz
// @include      http://www.replay.gg/*
// @grant        none
// ==/UserScript==
if(window.location.pathname.indexOf("/search/na/")===0)
{
    var oldGet=jQuery.get
    jQuery.get=function(a,c,d,e) {
        if(a.indexOf("http://www.replay.gg/ajax/replay/")===0)
        {
            var id=a.split("/")[5]
            window.location="rgg://"+id
            $("#modal-view-replay button[data-dismiss=modal].close").click()
        }
        else
        {
            return oldGet(a,c,d,e)
        }
    }
}
else if(window.location.pathname==="/")
{
    $($(".row")[1]).html($($(".row")[1]).html()+"<div class=\"col-xs-12 text-center\">Running Replay.GG OneClick version 0.2 by Iggyvolz</div>")
}
