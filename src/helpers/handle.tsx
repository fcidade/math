import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type InputChangeEvent = ChangeEvent<HTMLInputElement>
export type SetStateFn<T> = Dispatch<SetStateAction<T>>

export namespace Handle {
  export const onChange = (setFn: SetStateFn<string>) => {
    return (e: InputChangeEvent) => {
      setFn(e.target.value);
    };
  };

  export const onChangeNumber = (setFn: SetStateFn<number>) => {
    return (e: InputChangeEvent) => {
      setFn(Number(e.target.value));
    };
  };
}
