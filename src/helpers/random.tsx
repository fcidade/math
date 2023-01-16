
export namespace Random {
  export const int = (min: number, max: number) => Math.floor(Math.random() * (max + 1) + min);

  export const oneOf = <T,>(list: T[]) => list[int(0, list.length - 1)] 
}
