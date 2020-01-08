export class ResistorColor {
  private static colorCodes: string[] = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }
  value = (): number => {
    const resistorReducer = (values: string, color: string): string => `${values}${ResistorColor.colorCodes.indexOf(color)}`;
    return Number(this.colors.slice(0, 2).reduce(resistorReducer, ""));
  };
}
