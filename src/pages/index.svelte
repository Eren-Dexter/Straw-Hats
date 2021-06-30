<script>
  import {goto} from "@roxi/routify"
  import {Button} from "../components"
</script>

<div>
  <section class="md:ml-28 lg:mt-16 text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">It's Education. It's Your Right.
        </h1>
        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex flex-col xl:flex-row justify-center">
          <Button on:click={() => $goto("/exams")} string="Take Exam" /> 
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-2/3 w-5/6 md:mr-10 xl:mr-32">
        <img class="object-cover object-center rounded" alt="hero" src="/images/logo.jpg">
      </div>
    </div>
  </section>
</div>


