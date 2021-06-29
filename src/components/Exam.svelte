<script>
import {
    goto
} from "@roxi/routify"
import {
    onMount
} from "svelte"

import
Button
from "./Button.svelte"

export let examId;

let submitted = false;

window.onbeforeunload = function() {
    if (!submitted) {
        return "Data will be lost if you leave the page, are you sure?";
    } else return void(0);
};

export let time = '',
    link;

let xmTime = time.split(" ")[1] === 'mins' ? time.split(" ")[0] * 60 * 1000 + 60 * 1000 : time.split(" ")[0] * 60 * 60 * 1000 + 60 * 1000;

var interval, crrntTime, millisec, extraTime = false,
    showExamDiv = true;

var interval = setInterval(function() {
    if (millisec > 0)
        millisec = millisec - 1000;
    else {
        clearInterval(interval);
        submitted = true
    }

}, 1000)

$: showExamDiv = millisec > 0 ? true : false;

$: extraTime = millisec <= 60 * 1000 ? true : false;

$: crrntTime = msToTime(extraTime ? millisec : millisec - 60 * 1000);

function msToTime(s) {

    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
}

onMount(() => {
    if (localStorage.getItem(`${examId}-startTime`)) {
        var d = new Date();
        var initTime2 = d.getTime();
        var timeSpent = initTime2 - localStorage.getItem(`${examId}-startTime`)
        if (timeSpent < xmTime) {
            millisec = xmTime - timeSpent;
        } else millisec = 0;
    } else {
        var d = new Date();
        var initTime = d.getTime()
        localStorage.setItem(`${examId}-startTime`, initTime)
        millisec = xmTime;
    }
})
</script>

<div>
    <div class="flex justify-center items-end mb-5 lg:-mt-2 text-3xl font-light">
        <div>{extraTime ? '00:00:00' : crrntTime}</div>
        {#if extraTime}
        <div class="text-primary ml-3">{crrntTime}</div>
        {/if}

        <div><button on:click={() => { submitted=true; localStorage.setItem(`${examId}-taken`, true); localStorage.removeItem(`${examId}-startTime`); window.location.reload()}} class="transition duration-300 transform hover:scale-110 ease-in-out border-2 border-primary text-white font-semibold hover:bg-white hover:text-primary bg-primary px-3 focus:outline-none rounded text-lg ml-5">✓</button></div>

    </div>
    {#if millisec > 0}
    <div class="text-primary flex justify-center text-base font-semibold -mt-3 mb-2">{extraTime && !submitted ? 'Submit your answers now!' : ''}</div>
    {/if}
    <div class="flex justify-center">
        {#if showExamDiv}
        <object
            title=""
            type="text/html"
            data={link}
            width="100%"
            height="550px"
            style="overflow: auto"
            />
            {:else} <div class="mt-20 text-3xl text-primary">Opps... Time's Up!</div>
            {/if}
            </div>

            </div>
