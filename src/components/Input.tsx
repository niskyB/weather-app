import React from "react";

type IProps = {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<IProps> = ({ value, onChangeInput }) => {
  return (
    <form className={"dark"}>
      <div className="h-16">
        <input
          className="bg-gray-50 border-gray-300 dark:bg-[#1F2937] text-black border-2 dark:border-gray-600 text-md rounded focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400 dark:text-white  focus:border-blue-500"
          placeholder="&#xF002;   Search"
          value={value}
          onChange={(e) => onChangeInput(e)}
        />
      </div>
    </form>
  );
};
