import React from "react";

type IProps = {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<IProps> = ({ value, onChangeInput }) => {
  return (
    <form>
      <div className="h-16">
        <input
          className="bg-gray-50 border-gray-300 text-black border-2 text-md rounded focus:ring-blue-500 block w-full p-2.5 placeholder-gray-400  focus:border-blue-500"
          placeholder="Search"
          value={value}
          onChange={(e) => onChangeInput(e)}
        />
      </div>
    </form>
  );
};
