import { AxiosError } from "axios";
import React from "react";

type IProps = {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: AxiosError | null;
};

export const Input: React.FC<IProps> = ({ value, onChangeInput, error }) => {
  return (
    <form>
      <div className="h-16">
        <input
          className="bg-gray-50 border-gray-300 text-black border-2 text-md rounded focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400  focus:border-blue-500"
          placeholder="Search"
          value={value}
          onChange={(e) => onChangeInput(e)}
        />
        {error?.response?.status === 404 || error?.response?.status === 400 ? (
          <>
            <span className="text-sm text-red-500 font-medium">
              City not found
            </span>
          </>
        ) : (
          <></>
        )}
        {error &&
        error?.response?.status !== 404 &&
        error?.response?.status !== 400 ? (
          <>
            <span className="text-sm text-red-500 font-medium">
              Something went wrong {error?.response?.status}
            </span>
          </>
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};
