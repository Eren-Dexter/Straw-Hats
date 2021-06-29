<script>
import {
    goto
} from "@roxi/routify"

import {Button} from "../../components"

</script>

<div class="mt-16 px-5">
    <div class="flex justify-center text-4xl font-light">You wanna take...</div>
    <div class="flex flex-col md:flex-row justify-center items-center  mt-20">
     
        <div on:click={$goto('/exams/daily')} class="md:mr-10 mb-4 md:mb-0"><Button string='Aalo Academy - Daily Exam' /></div>
        <div on:click={$goto('/exams/hsc')} class="md:mr-10 mb-4 md:mb-0"><Button string='HSC Preparation' /></div>
        <div on:click={$goto('/exams/admission')} class=""> <Button string='Admission Prepapration' /></div>

    </div>
    
</div>
