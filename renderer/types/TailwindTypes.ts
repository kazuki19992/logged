type dark = "dark:" | "";

type ColorApply = "bg" | "text" | "border" | "outline";

export type Color = "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

export type Colorfulness = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

export type Transparent = "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90";

export type TailwindColor = `${dark}${ColorApply}-${Color}-${Colorfulness}` | `${dark}${ColorApply}-${Color}-${Colorfulness}\/${Transparent}` | `${dark}${ColorApply}-${"black" | "white"}` | `${dark}${ColorApply}-${"black" | "white"}\/${Transparent}`

export type TailwindColorClasses<S> = S extends `${infer Class} ${infer Rest}`
  ? Class extends TailwindColor
  ? `${Class} ${TailwindColorClasses<Rest>}`
  : never
  : S extends `${infer Class}`
  ? Class extends TailwindColor
  ? S
  : never
  : never;