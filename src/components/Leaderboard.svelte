<script>
    export let examInfo;
</script>

{#if examInfo.standings === null} 
<div class="flex justify-center text-4xl font-light mt-20 px-5">Top 10 list will be published soon.</div>
{:else}
<div>
    <div class="flex justify-center items-end mb-5 lg:-ml-3 mt-3 text-3xl font-light">
        Leaderboard
    </div>
    <div class="flex flex-col justify-center">
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-5 mx-auto">
              <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-center whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Rank</th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                      {#each examInfo.standings as stand, i}
                      <tr>
                        <td class=" border-b-2 border-gray-200 px-4 py-3">#{i+1}</td>
                        <td class=" border-b-2 border-gray-200 px-4 py-3">{stand.name}</td>
                        <td class=" border-b-2 border-gray-200 px-4 py-3">{stand.marks}</td>
                      </tr>
                      {/each}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
    </div>
</div>
{/if}