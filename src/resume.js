import './assets/style.css'
import { header, footer } from './nav.js'

document.querySelector('#app').innerHTML = `
  <main class="flex flex-col gap-6">
    ${header}

    <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-[2_1_60%] bg-yellow-200 p-4">
            <div class="flex flex-col gap-2">
                <div class="flex-1 bg-yellow-300 p-2">Nested Top</div>
                <div class="flex-1 bg-yellow-400 p-2">Nested Bottom</div>
            </div>
        </div>
        <div class="flex-1 bg-yellow-500 p-4">A smooth sea never made a skilled sailor.</div>
    </div>

    ${footer}
  </main>

`
