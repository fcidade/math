import { ChangeEvent, Dispatch, SetStateAction } from "react";


export namespace Handle {
  export const onChangeNumber = (setFn: Dispatch<SetStateAction<number>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setFn(Number(e.target.value));
    };
  };
}
