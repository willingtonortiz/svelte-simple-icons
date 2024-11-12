import { describe, it, expect } from "vitest";
import { type SimpleIcon } from "simple-icons";
import { render } from "@testing-library/svelte";
import SIIcon from "./si-icon.svelte";

describe("SIIcon Component", () => {
  const mockIcon: SimpleIcon = {
    title: "Icon Title",
    hex: "112233",
    source: "mock",
    svg: "",
    slug: "mock-icon",
    path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
  };

  it("renders correctly with default props", () => {
    const { container } = render(SIIcon, { props: { icon: mockIcon } });
    const svg = container.querySelector("svg");

    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("width")).toBe("24");
    expect(svg?.getAttribute("height")).toBe("24");
  });

  it("renders the simple-icons icon configuration (title, color, path)", () => {
    const { container } = render(SIIcon, { props: { icon: mockIcon } });
    const svg = container.querySelector("svg");

    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("fill")).toBe("currentColor");
    expect(svg?.querySelector("title")?.textContent).toBe(mockIcon.title);
    expect(svg?.getAttribute("color")).toBe(`#${mockIcon.hex}`);
    expect(svg?.querySelector("path")?.getAttribute("d")).toBe(mockIcon.path);
  });

  it("renders custom props", () => {
    const { container } = render(SIIcon, {
      props: {
        icon: mockIcon,
        size: 48,
        title: "Custom Title",
        color: "#445566",
      },
    });
    const svg = container.querySelector("svg");

    expect(svg?.getAttribute("width")).toBe("48");
    expect(svg?.getAttribute("height")).toBe("48");
    expect(svg?.querySelector("title")?.textContent).toBe("Custom Title");
    expect(svg?.getAttribute("color")).toBe("#445566");
  });
});
