
export namespace Random {
  export const int = (min: number, max: number) => Math.floor(Math.random() * (max + 1) + min);
}
