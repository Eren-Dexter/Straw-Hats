<script>
import {
    onDestroy
} from "svelte";
import store from "../../../../database/store"
import {
getDirection,
    goto
} from "@roxi/routify"

let data = {};
const unsub = store.subscribe(db => {
    data = db;
})

onDestroy(() => {
    unsub();
})

export let state = 'Exam';
let newState, newIcon, course;
course = data.admission[window.location.pathname.split('/')[3]];

let icon = ["M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",

    "M22 12h-4l-3 9L9 3l-3 9H2",

    "M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8",

    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",

    "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",

    "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",

]

$: newIcon = state === "phx1" ? icon[0] : (state === "phx2" ? icon[1] : (state === 'hm1' ? icon[2] : (state === 'hm2' ? icon[3] : (state === "chem1" ? icon[4] : icon[5]))));

$: newState = state === "phx1" ? "Physics 1st Paper" : (state === "phx2" ? 'Physics 2nd Paper' : (state === 'hm1' ? 'Higher Math 1st Paper' : (state === 'hm2' ? 'Higher Math 2nd' : (state === "chem1" ? 'Chemistry 1st paper' : 'Chemistry 2nd Paper'))));

function returnId(link) {
    var linkArr = link.split("/");
    linkArr.pop();
    var filtered = linkArr[6].split('').filter(char => char !== '_');
    console.log(filtered.join(""))
    return filtered.join("");
}

</script>

<div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center md:mr-14 md:ml-10 xl:ml-0 mt-2 gap-4 h-100 p-4 pr-4 { course[state].length > 0 ? 'overflow-scroll overflow-x-hidden': ''}">

    {#if course[state].length > 0}
    {#each course[state] as sub}
    <section class="text-gray-600 body-font">
        <div on:click={$goto(`${window.location.pathname}/${state}_${returnId(sub.link)}`)} class="border relative border-gray-200 pl-6 pt-6 pb-6 pr-20 rounded-lg transition duration-300 transform hover:scale-105 ease-in-out cursor-pointer shadow-md">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d={newIcon}></path>
                </svg>
            </div>
            {#if localStorage.getItem(`${state}_${returnId(sub.link)}-taken`)}
            <div class="absolute  top-8 right-5 text-base text-primary">Taken ✓</div>
            {/if}
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{newState} - {sub.id}</h2>
            <p class="leading-relaxed text-base">Syllabus: {sub.syllabus}<br> Full Marks: {sub.marks} <br> Time: {sub.time}</p>
        </div>
    </section>
    {/each}
    {:else}
    <center>No Exam Available...</center>
    {/if}
</div>
