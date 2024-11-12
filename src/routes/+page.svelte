<script lang="ts">
  import { onMount } from "svelte";
  import { SIIcon } from "$lib/index.js";
  import * as icons from "simple-icons";

  let size = $state(64);
  let color = $state("#000000");

  const allIcons = Object.values(icons).filter((icon) => "title" in icon);
  let visibleIcons = $state<icons.SimpleIcon[]>([]);
  let loadCount = 100; // Número de iconos a cargar por vez
  let currentIndex = 0;

  function loadMoreIcons() {
    const nextIcons = allIcons.slice(currentIndex, currentIndex + loadCount);
    visibleIcons = [...visibleIcons, ...nextIcons];
    currentIndex += loadCount;
  }

  onMount(() => {
    loadMoreIcons();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      loadMoreIcons();
    }
  }

  async function copyToClipboard(icon: icons.SimpleIcon) {
    await navigator.clipboard.writeText(`<SIIcon icon={si${icon.title}} />`);
  }
</script>

<div class="container mx-auto px-4 py-8">
  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold">Svelte Simple Icons</h1>
  </header>

  <section class="mb-8 rounded-lg bg-gray-100 p-4">
    <h2 class="text-xl font-semibold">Instrucciones de Instalación</h2>
    <p class="mt-2">Para instalar la biblioteca, ejecuta el siguiente comando:</p>
    <pre class="mt-2 rounded bg-gray-200 p-2"><code>npm install simple-icons</code></pre>

    <p class="mt-2">Luego, importa los iconos que necesites en tu proyecto:</p>
    <pre class="mt-2 rounded bg-gray-200 p-2"><code
        >import {"{"} siSvelte, siFacebook {"}"} from 'simple-icons';</code
      ></pre>
  </section>

  <section class="flex flex-row flex-nowrap">
    <form class="w-full max-w-[300px] space-y-4 rounded-lg bg-gray-100 p-4">
      <div class="space-y-2">
        <label for="size" class="block text-sm font-medium text-gray-700">Icon size</label>

        <div class="flex items-center gap-4">
          <input
            type="range"
            id="size"
            min={16}
            max={128}
            step={16}
            bind:value={size}
            class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          />
          <span class="min-w-[3rem] text-sm text-gray-600">{size}px</span>
        </div>
      </div>

      <div class="space-y-2">
        <label for="color" class="block text-sm font-medium text-gray-700">Icon color</label>
        <input
          type="color"
          id="color"
          class="h-10 w-full cursor-pointer rounded border border-gray-300 bg-white p-1"
          bind:value={color}
        />
      </div>
    </form>

    <div class="flex-1">
      <SIIcon icon={icons.siSvelte} {size} {color} />
    </div>
  </section>

  <!-- <section class="mb-8">
    <h2 class="mb-4 text-xl font-semibold">Galería de Iconos</h2>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
      {#each visibleIcons as icon}
        <div
          class="rounded-lg border border-gray-200 bg-gray-50 p-2 text-center flex flex-col flex-nowrap items-center"
        >
          <SIIcon {icon} {size} />

          <div class="mt-2 text-sm text-gray-700">
            <span class="block">{icon.title}</span>

            <span class="block">#{icon.hex}</span>

            <button
              onclick={() => copyToClipboard(icon)}
              class="mt-2 rounded bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Copiar
            </button>
          </div>
        </div>
      {/each}
    </div>
  </section> -->
</div>
