import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'

document.querySelector('#app').innerHTML = `
  <main class="flex flex-col gap-6">

      <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1 bg-green-200 p-4">Tiffany Green</div>
          <div class="flex-1 bg-green-300 p-4">Home | Resume | Web | Writing</div>
      </div>

      <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-[2_1_60%] bg-yellow-200 p-4">
              <!-- Nested Flexbox Layout Inside Column -->
              <div class="flex flex-col gap-2">
                  <div class="flex-1 bg-yellow-300 p-2">Nested Top</div>
                  <div class="flex-1 bg-yellow-400 p-2">Nested Bottom</div>
              </div>
          </div>
          <div class="flex-1 bg-yellow-500 p-4">Side Column</div>
      </div>

      <!-- Bottom Row: Flex Wrap Grid Layout -->
      <div class="flex flex-wrap gap-4">
          <div class="flex-[1_1_30%] bg-red-200 p-4">Grid Item 1</div>
          <div class="flex-[1_1_30%] bg-red-300 p-4">Grid Item 2</div>
          <div class="flex-[1_1_30%] bg-red-400 p-4">Grid Item 3</div>
          <div class="flex-[1_1_30%] bg-red-500 p-4">Grid Item 4</div>
      </div>

  </main>

`

