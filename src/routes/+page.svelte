<script lang="ts">
  import { siSvelte } from "simple-icons";
  import { SIIcon } from "$lib/index.js";

  let size = $state(64);
  let color = $state("#FF3E00");

  const code = $derived(
    `<script lang="ts">
  import { siSvelte } from "simple-icons";
  import { SIIcon } from "$lib/index.js";

  <SIIcon icon={siSvelte} size={${size}} color={"${color}"} />
</script` + ">",
  );
</script>

<div class="container mx-auto px-4 py-8">
  <header class="mb-8 text-center">
    <h1 class="text-3xl font-bold">@willingtonortiz/svelte-simple-icons</h1>
  </header>

  <section class="mx-auto flex flex-col flex-nowrap items-center gap-4">
    <SIIcon icon={siSvelte} {size} {color} />

    <div class="w-full max-w-[300px] space-y-4 rounded-lg bg-gray-100 p-4">
      <div class="space-y-2">
        <label for="size" class="block text-sm font-medium text-gray-700">Size</label>

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
        <label for="color" class="block text-sm font-medium text-gray-700">Color</label>
        <input
          type="color"
          id="color"
          class="h-10 w-full cursor-pointer rounded border border-gray-300 bg-white p-1"
          bind:value={color}
        />
      </div>
    </div>
  </section>

  <section class="mt-8">
    <p class="mb-2 text-left text-gray-500">As simple as this:</p>

    <pre class="mx-auto w-full rounded-lg bg-gray-100 p-4"><code>{code}</code></pre>
  </section>
</div>
