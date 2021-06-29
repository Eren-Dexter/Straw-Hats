<script>
export let examInfo;
</script>

{#if examInfo.answerLink === null}
<div class="flex justify-center text-4xl font-light mt-20 px-5">Answer Sheet will be available after 24 hours.</div>
{:else}
<div>

    <div class="flex justify-center items-end mb-5 lg:-mt-2 text-3xl font-light">
        Answer Sheet
    </div>

    <div class="flex justify-center">

        <object
            title=""
            type="text/html"
            data={examInfo.answerLink}
            width="100%"
            height="550px"
            style="overflow: auto"
            />

            </div>

            </div>

            {/if}
