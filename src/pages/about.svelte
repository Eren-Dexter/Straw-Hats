<script>
import {
    onDestroy
} from "svelte"

import store from "../database/store"

let members = {}, qs = {};
const unsub = store.subscribe(db => {
    members = db.team.coreMembers;
    qs = db.team.questionSetters;

})

onDestroy(() => {
    unsub();
})
</script>

<section class="text-gray-600 body-font">
    <div class="container lg:px-24 px-5 py-16 mx-auto overflow-y-scroll h-100">
        <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-lg">We seek an Education System which can turn data into information, information into knowledge and knowledge into wisdom.</p>
        </div>

        <div class="flex flex-wrap -m-4 xl:ml-14">
            {#each members as member}

            <div class="p-4 xl:w-1/3 lg:w-1/2 w-full">
                <div class="h-full flex flex-row items-center justify-center text-left">
                    <img alt="dp" class="flex-shrink-0 rounded-lg w-32 h-32 object-cover object-center sm:mb-0 mb-4" src={`/images/blog/dp/${member.image}.jpg`}>
                    <div class="flex-grow pl-8">
                        <h2 class="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                        <h3 class="text-gray-500 mb-3">{member.rank}</h3>
                        <p class="mb-4"></p>
                        <span class="inline-flex">
                            <a href={member.fbProfile} target="_blank" class="text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href={`mailto:${member.email}`} class="ml-2 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </a>
                            <a href={`tel:${member.phone}`} class="ml-2 mt-0.5 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>    
            {/each}
        </div>

        <div class="flex flex-wrap -m-4 mt-32 xl:ml-14">
            {#each qs as member}

            <div class="p-4 xl:w-1/3 lg:w-1/2 w-full">
                <div class="h-full flex flex-row items-center justify-center text-left">
                    <img alt="dp" class="flex-shrink-0 rounded-lg w-32 h-32 object-cover object-center sm:mb-0 mb-4" src={`/images/blog/dp/${member.image}.jpg`}>
                    <div class="flex-grow pl-8">
                        <h2 class="title-font font-medium text-lg text-gray-900">{member.name}</h2>
                        <h3 class="text-gray-500 mb-3">{member.rank}</h3>
                        <p class="mb-4"></p>
                        <span class="inline-flex">
                            <a href={member.fbProfile} target="_blank" class="text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href={`mailto:${member.email}`} class="ml-2 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </a>
                            <a href={`tel:${member.phone}`} class="ml-2 mt-0.5 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>    
            {/each}
        </div>



    </div>
</section>
