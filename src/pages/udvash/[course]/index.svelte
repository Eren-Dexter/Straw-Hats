<script>
    import {goto} from "@roxi/routify"
    import Sub from "./sub.svelte"
    export let course = 'course';

    const courseName = course === 'DUCrashCourse' ? 'DU Crash Course' : (course === 'VarsityKAExamBatch' ? 'Varsity KA Exam Batch' : (course === 'EngineeringFullCourse' ? 'Engineering Full Course': 'Medical Crash Revision'));

    let state = 'phx1';
</script>
<div>
    <div on:click="{() => $goto('/udvash')}" class="flex justify-center items-center cursor-pointer">
        <div class="bg-primary w-4 h-4 mr-3 mt-1"></div>
        <div class="title-font sm:text-3xl text-2xl font-medium text-gray-900">Udvash</div>
    </div>  

<div class="grid grid-cols-3 justify-items-center">
    <div class="mt-20 md:-ml-8">
   <div class="flex items-center">
     <div class="bg-primary w-2.5 h-2.5 mr-3 mt-1"></div>
     <div class="title-font sm:text-xl text-lg font-medium text-gray-900">{courseName}</div>
   </div>
   <div class="pt-4">
    <div on:click={() => state='phx1'} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-28 hover:text-primary cursor-pointer {state ==='phx1' ? ' border-primary text-primary' : ''}">Physics 1st Paper</div> 

    <div on:click={() => state='phx2'} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-28 hover:text-primary cursor-pointer {state ==='phx2' ? 'border-primary text-primary' : ''}">Physics 2nd Paper</div>

    <div on:click={() => state='hm1'} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-28 hover:text-primary cursor-pointer {state ==='hm1' ? ' border-primary text-primary' : ''}">Higher Math 1st Paper</div>

    <div on:click={() => state='hm2'} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-28 hover:text-primary cursor-pointer {state ==='hm2' ? ' border-primary text-primary' : ''}">Higher Math 2nd Paper</div>

    <div on:click={() => state='chem1'} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-28 hover:text-primary cursor-pointer {state ==='chem1' ? ' border-primary text-primary' : ''}">Chemistry 1st Paper</div>

    <div on:click={() => state='chem2'} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-28 hover:text-primary cursor-pointer {state ==='chem2' ? ' border-primary text-primary' : ''}">Chemistry 2nd Paper</div>

</div>
</div>
   <div class="col-span-2">
       <br>
       <Sub state={state}/>
   </div>
</div> 
</div>