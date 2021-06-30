<script>

    import Sub from "./sub.svelte"
    export let course = 'course';

    const courseName = course === 'DUSpecial' ? 'DU A-Unit Special' : (course === 'VarsityStandard' ? 'Varsity Standard' : (course === 'EngineeringStandard' ? 'Engineering Standard' : 'Medical Standard'));

    
    let state = localStorage.getItem("lastChosenAdmissionSub") ? localStorage.getItem("lastChosenAdmissionSub") : "phx1";
</script>
<div>

<div class="hidden xl:block">
<div class="grid grid-cols-4 justify-items-center xl:visible">
    <div class="mt-14 ml-20">
   <div class="flex items-center">
     <div class="bg-primary w-2.5 h-2.5 mr-3 mt-1"></div>
     <div class="title-font sm:text-xl text-lg font-medium text-gray-900">{courseName}</div>
   </div>
   <div class="pt-4 pl-6">
    <div on:click={() => {state='phx1'; localStorage.setItem("lastChosenAdmissionSub", "phx1")}} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-20 hover:text-primary cursor-pointer {state ==='phx1' ? ' border-primary text-primary' : ''}">Physics 1st Paper</div> 

    <div on:click={() =>{state='phx2'; localStorage.setItem("lastChosenAdmissionSub", "phx2")}} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-20 hover:text-primary cursor-pointer {state ==='phx2' ? 'border-primary text-primary' : ''}">Physics 2nd Paper</div>

    {#if course === 'VarsityStandard' || course === 'EngineeringStandard' || course === 'DUSpecial'}

    <div on:click={() => {state='hm1'; localStorage.setItem("lastChosenAdmissionSub", "hm1")}} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-20 hover:text-primary cursor-pointer {state ==='hm1' ? ' border-primary text-primary' : ''}">Higher Math 1st Paper</div>

    <div on:click={() => {state='hm2'; localStorage.setItem("lastChosenAdmissionSub", "hm2")}} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-20 hover:text-primary cursor-pointer {state ==='hm2' ? ' border-primary text-primary' : ''}">Higher Math 2nd Paper</div>

    {/if}


    {#if course === 'MedicalStandard' || course === 'DUSpecial' || course === 'VarsityStandard'}

    <div on:click={() => {state='zoo'; localStorage.setItem("lastChosenAdmissionSub", "zoo")}} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-20 hover:text-primary cursor-pointer {state ==='zoo' ? ' border-primary text-primary' : ''}">Zoology</div>

    <div on:click={() => {state='bot'; localStorage.setItem("lastChosenAdmissionSub", "bot")}} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-20 hover:text-primary cursor-pointer {state ==='bot' ? ' border-primary text-primary' : ''}">Botany</div>

    {/if}

    <div on:click={() => {state='chem1'; localStorage.setItem("lastChosenAdmissionSub", "chem1")}} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-20 hover:text-primary cursor-pointer {state ==='chem1' ? ' border-primary text-primary' : ''}">Chemistry 1st Paper</div>

    <div on:click={() => {state='chem2'; localStorage.setItem("lastChosenAdmissionSub", "chem2")}} class="md:mt-5 border-r-4 border-white text-lg font-semibold md:pr-20 hover:text-primary cursor-pointer {state ==='chem2' ? ' border-primary text-primary' : ''}">Chemistry 2nd Paper</div>

</div>
 </div>
   <div class="ml-8 col-span-3">
       <Sub state={state}/>
   </div> 
</div> 
</div>


<!---Mobile version-->


<div class="xl:hidden">
    <div class="flex items-center ml-8 mt-2">
        <div class="bg-primary w-2.5 h-2.5 mr-3 mt-1"></div>
        <div class="title-font sm:text-xl text-lg font-medium text-gray-900">{courseName}</div>
    </div>
    <div class="flex flex-row flex-wrap pl-5 pr-0 mt-5 overflow-y-scroll">
        
        {#if state==='phx1'}
        <div on:click={() => {state='phx1'; localStorage.setItem("lastChosenAdmissionSub", "phx1")}} class="text-white bg-primary mb-2 mr-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Physics 1</div> 
        {:else}
        <div on:click={() => {state='phx1'; localStorage.setItem("lastChosenAdmissionSub", "phx1")}} class="text-primary mr-2 mb-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Physics 1</div> 
        {/if}

        {#if state==='phx2'}
        <div on:click={() => {state='phx2'; localStorage.setItem("lastChosenAdmissionSub", "phx2")}} class="text-white bg-primary mr-2 mb-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Physics 2</div> 
        {:else}
        <div on:click={() => {state='phx2'; localStorage.setItem("lastChosenAdmissionSub", "phx2")}} class="text-primary mr-2 px-3 mb-2 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Physics 2</div> 
        {/if}


        {#if course === 'VarsityStandard' || course === 'EngineeringStandard' || course === 'DUSpecial'}
        {#if state==='hm1'}
        <div on:click={() => {state='hm1'; localStorage.setItem("lastChosenAdmissionSub", "hm1")}} class="text-white bg-primary mb-2 mr-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">H. Math 1</div> 
        {:else}
        <div on:click={() => {state='hm1'; localStorage.setItem("lastChosenAdmissionSub", "hm1")}} class="text-primary mb-2 mr-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">H. Math 1</div> 
        {/if}

        {#if state==='hm2'}
        <div on:click={() => {state='hm2'; localStorage.setItem("lastChosenAdmissionSub", "hm2")}} class="text-white bg-primary mb-2 mr-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">H. Math 2</div> 
        {:else}
        <div on:click={() => {state='hm2'; localStorage.setItem("lastChosenAdmissionSub", "hm2")}} class="text-primary mr-2 mb-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">H. Math 2</div> 
        {/if}
        {/if}


        {#if course === 'MedicalStandard' || course === 'DUSpecial' || course === 'VarsityStandard'}
        {#if state==='zoo'}
        <div on:click={() => {state='zoo'; localStorage.setItem("lastChosenAdmissionSub", "zoo")}} class="text-white bg-primary mb-2 mr-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Zoology</div> 
        {:else}
        <div on:click={() => {state='zoo'; localStorage.setItem("lastChosenAdmissionSub", "zoo")}} class="text-primary mr-2 mb-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Zoology</div> 
        {/if}

        {#if state==='bot'}
        <div on:click={() => {state='bot'; localStorage.setItem("lastChosenAdmissionSub", "bot")}} class="text-white bg-primary mb-2 mr-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Botany</div> 
        {:else}
        <div on:click={() => {state='bot'; localStorage.setItem("lastChosenAdmissionSub", "bot")}} class="text-primary mr-2 mb-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Botany</div> 
        {/if}
        {/if}
            

        {#if state==='chem1'}
        <div on:click={() => {state='chem1'; localStorage.setItem("lastChosenAdmissionSub", "chem1")}} class="text-white bg-primary mb-2 mr-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Chemistry 1</div> 
        {:else}
        <div on:click={() => {state='chem1'; localStorage.setItem("lastChosenAdmissionSub", "chem1")}} class="text-primary mr-2 mb-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Chemistry 1</div> 
        {/if}

        {#if state==='chem2'}
        <div on:click={() => {state='chem2'; localStorage.setItem("lastChosenAdmissionSub", "chem2")}} class="text-white bg-primary mb-2 mr-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Chemistry 2</div> 
        {:else}
        <div on:click={() => {state='chem2'; localStorage.setItem("lastChosenAdmissionSub", "chem2")}} class="text-primary mr-2 mb-2 px-3 py-1 border-2 border-primary rounded-full text-base font-semibold  cursor-pointer ">Chemistry 2</div> 
        {/if}
        
        
      
    </div>

    <div>
        <Sub state={state}/>
    </div> 
</div>






</div>