<script module lang="ts">
  export type SIIconProps = SVGAttributes<SVGElement> & {
    icon: SimpleIcon;
    element?: SVGElement;
    title?: string;
    size?: number;
  };
</script>

<script lang="ts">
  import type { SimpleIcon } from "simple-icons";
  import type { SVGAttributes } from "svelte/elements";

  let {
    icon,
    element = $bindable(),
    title = icon.title,
    color = `#${icon.hex}`,
    size = 24,
    ...rest
  }: SIIconProps = $props();
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
    <title>{title}</title>
  {/if}

  <path d={icon.path} />
</svg>
