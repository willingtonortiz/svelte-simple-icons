# @willingtonortiz/svelte-simple-icons

<p align="center">
  <a href="https://www.npmjs.com/package/@willingtonortiz/svelte-simple-icons">
    <img src="https://img.shields.io/npm/dm/@willingtonortiz/svelte-simple-icons.svg" alt="downloads" height="18">
  </a>
  <a href="https://www.npmjs.com/package/@willingtonortiz/svelte-simple-icons">
    <img src="https://img.shields.io/npm/v/@willingtonortiz/svelte-simple-icons.svg" alt="npm version" height="18">
  </a>
  <a href="https://github.com/gvergnaud/@willingtonortiz/svelte-simple-icons">
    <img src="https://img.shields.io/npm/l/@willingtonortiz/svelte-simple-icons.svg" alt="MIT license" height="18">
  </a>
</p>

## What is this?

This package exports a single Svelte component that allows you to use Simple Icons in your Svelte projects in a simple and efficient way.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)
- [Contributing](#contributing)

## Features

- 🌟 **Designed for Svelte 5**: Fully compatible with the latest version of Svelte.
- 🔒 **Fully type safe**: Ensures your code is robust and error-free.
- 📦 **Small bundle size**: Only ~2kB, ideal for keeping your applications lightweight.
- 🧪 **Open source and fully tested**: With 100% coverage.

## Installation

To get started, install the package along with Simple Icons in your project:

```sh
npm install simple-icons @willingtonortiz/svelte-simple-icons
```

Alternatively, you can use:

```sh
yarn add simple-icons @willingtonortiz/svelte-simple-icons
```

```sh
pnpm add simple-icons @willingtonortiz/svelte-simple-icons
```

```sh
bun add simple-icons @willingtonortiz/svelte-simple-icons
```

## Usage

The only required prop is `icon`, which is the Simple Icon to use.

```svelte
<script lang="ts">
  import { SIIcon } from "@willingtonortiz/svelte-simple-icons";
  import { siSvelte } from "simple-icons";
</script>

<SIIcon icon={siSvelte} />
```

## API

Customization is as easy as passing props to the component. SIIcon supports all the props that a normal SVG element supports, plus a few extras:

- `icon`: The Simple Icon to use (required).
- `element`: A bindable Svelte reference to the SVG element.
- `size`: The size of the icon (sets both width and height).

```svelte
<script lang="ts">
  import { SIIcon } from "@willingtonortiz/svelte-simple-icons";
  import { siSvelte } from "simple-icons";

  let element = $state<>();
</script>

<SIIcon icon={siSvelte} color="#000000" size={64} />
```

## License

This package is completely free and licensed under the [MIT license](https://choosealicense.com/licenses/mit/).

## Contributing

Contributions are welcome. If you wish to make major changes, please open an issue first to discuss what you would like to change.

Make sure to update tests as appropriate.

Thank you for using @willingtonortiz/svelte-simple-icons! If you have any questions or suggestions, feel free to open an issue or submit a pull request.
