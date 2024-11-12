<script lang="ts">
  import type { SimpleIcon } from "simple-icons";
  import type { SVGAttributes } from "svelte/elements";

  type Props = SVGAttributes<SVGElement> & {
    icon: SimpleIcon;
    element?: SVGElement;
    title?: string;
    size?: number;
  };

  let {
    icon,
    element = $bindable(),
    title,
    color = `#${icon.hex}`,
    size = 24,
    ...rest
  }: Props = $props();
</script>

<svg
  bind:this={element}
  role="img"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  width={size}
  height={size}
  {color}
  {...rest}
>
  {#if title}
    <title>{icon.title}</title>
  {/if}

  <path d={icon.path} />
</svg>
