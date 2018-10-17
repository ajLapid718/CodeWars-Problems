/*

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One"

*/

// My solution, which involves an interface with a specific index signature;
export function switchItUp(intNumber: number): string {
  interface ILegend {
    [index: string]: string
  }

  const myNumberLegend: ILegend = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
  }

  return myNumberLegend[intNumber];
}

// My solution, which involves an enum;
// MyLegend[2] returns the property "Two";
// MyLegend["Two"] returns the auto-incremented value of 2;
// If, for some reason, we set a value in the first property, the other values would auto-increment accordingly;
export function switchItUp(intNumber: number): string {
  enum MyLegend {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
  }

  return MyLegend[intNumber];
}
