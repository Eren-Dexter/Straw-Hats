<script>
import {url, isActive} from "@roxi/routify";
</script>

<header class="xl:ml-5 md:ml-10 mt-2 md:mt-1 text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="./" class="flex order-1 title-font justify-center font-medium items-center text-gray-900 mb-5 md:mb-0 md:ml-10 mr-40  md:mr-0">
        <span style="font-size: 23px;" class=" text-gray-900 md:text-primary">Aalo Academy</span>       
       </a>
      <nav class="order-3 md:order-2 md:mr-auto md:ml-4 md:pt-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-lg justify-between">

        <a href={$url("/")} class="{$isActive("./index") ? 'text-red-600 font-semibold' : 'text-gray-800'} font-semibold mr-8 md:ml-2 md:mr-7 hover:text-primary" >Home</a>

        <a href={$url("./exams")} class="{$isActive("./exams") ? 'text-red-600 font-semibold' : 'text-gray-800'} font-semibold mr-8 md:ml-2 md:mr-7 hover:text-primary" >Exams</a>

        <a href={$url("./blog")} class="{$isActive("./blog") ? 'text-red-600 font-semibold' : 'text-gray-800'} font-semibold mr-8 md:mr-7 hover:text-primary">Blog</a>

        <a href={$url("./about")} class= "{$isActive("./about") ? 'text-red-600 font-semibold' : 'text-gray-800'} font-semibold md:mr-5 hover:text-primary">About</a>
      </nav>
      <button style="margin-left: 220px;" class="order-2 md:order-3 transition duration-300 transform hover:scale-110 ease-in-out inline-flex items-center border-2 py-1 px-2 focus:outline-none  border-primary rounded text-base -mt-14 mb-5 md:ml-0 md:mb-0 md:mt-0 md:mr-10  bg-primary text-white font-semibold hover:bg-white hover:text-primary">Telegram
      </button>
    </div>
</header>