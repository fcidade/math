import { ChangeEvent, Dispatch, SetStateAction } from "react";


export namespace Handle {
  export const onChange = (setFn: Dispatch<SetStateAction<string>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setFn(e.target.value);
    };
  };

  export const onChangeNumber = (setFn: Dispatch<SetStateAction<number>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setFn(Number(e.target.value));
    };
  };
}
