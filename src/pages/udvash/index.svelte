<script>
    import {Button2} from "../../components"
    import {goto} from "@roxi/routify"

    let courses = ['DU Crash Course', 'Varsity KA Exam Batch', 'Engineering Full Course', 'Medical Crash Revision'];
</script>


<div>
    <br>
<div on:click="{() => $goto('/udvash')}" class="flex justify-center items-center cursor-pointer">
    <div class="bg-primary w-4 h-4 mr-3 mt-1"></div>
    <div class="title-font sm:text-3xl text-2xl font-medium text-gray-900">Udvash</div>
</div>
<br>



<section class="text-gray-600 body-font  md:mx-20">
    <div class="container px-5 py-5 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 lg:w-1/3 ">
          <div on:click={()=> $goto(`/udvash/${courses[0].split(" ").join("")}`)} class="transition duration-300 transform hover:scale-110 ease-in-out h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg shadow-md overflow-hidden text-center relative">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">COURSE</h2>
            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{courses[0]}</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a href={`/udvash/${courses[0].split(" ").join("")}`} class="text-primary font-semibold inline-flex items-center">Take Exam
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
            </a>
          </div>
        </div>

        <div class="p-4 lg:w-1/3 ">
            <div on:click={()=> $goto(`/udvash/${courses[1].split(" ").join("")}`)} class="transition duration-300 transform hover:scale-110 ease-in-out h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg shadow-md overflow-hidden text-center relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">COURSE</h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{courses[1]}</h1>
              <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              <a href={`/udvash/${courses[1].split(" ").join("")}`} class="text-primary font-semibold inline-flex items-center">Take Exam
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
              </a>
            </div>
          </div>

             <div class="p-4 lg:w-1/3 ">
          <div on:click={()=> $goto(`/udvash/${courses[2].split(" ").join("")}`)} class="transition duration-300 transform hover:scale-110 ease-in-out h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg shadow-md overflow-hidden text-center relative">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">COURSE</h2>
            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{courses[2]}</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a href={`/udvash/${courses[2].split(" ").join("")}`} class="text-primary font-semibold inline-flex items-center">Take Exam
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
            </a>
          </div>
        </div>


        <div class="p-4 lg:w-1/3 ">
            <div on:click={()=> $goto(`/udvash/${courses[3].split(" ").join("")}`)} class="transition duration-300 transform hover:scale-110 ease-in-out h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg shadow-md overflow-hidden text-center relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">COURSE</h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{courses[3]}</h1>
              <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              <a href={`/udvash/${courses[3].split(" ").join("")}`} class="text-primary font-semibold inline-flex items-center">Take Exam
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
              </a>
            </div>
          </div>

      </div>
    </div>
  </section>

<br> <br><br>

</div>