<script>
import {
    goto
} from "@roxi/routify"

import {Button} from "../../components"

</script>

<div class="mt-16 px-5">
    <div class="flex justify-center text-4xl font-light">You wanna take...</div>
    <div class="flex flex-col sm:flex-row justify-center items-center flex-wrap mt-16">
        <div on:click={$goto('/exams/hsc')} class="mr-0 sm:mr-14 mb-5"><Button string='HSC Preparation' /></div>
        <div on:click={$goto('/exams/admission')} class=""><Button string='Admission Prepapration' /></div>
    </div>
</div>
