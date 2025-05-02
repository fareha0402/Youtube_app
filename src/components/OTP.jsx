import { useEffect, useRef, useState } from "react";

const OTP = () => {
  const OTP_LEN = 5;
  const [inputArr, setInputArr] = useState(new Array(OTP_LEN).fill(""));
  const refArr = useRef([]);
  const handleInput = (e, index) => {
    let updateArr = [...inputArr];
    updateArr[index] = e.target.value.trim().slice(-1);
     setInputArr(updateArr);
     e.target.value && refArr.current[index + 1].focus();
  };
  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1].focus();
    }
  };
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  return (
    <>
      <h1>Validate OTP</h1>
      {inputArr.map((ele, index) => {
        return (
          <input
            className="border p-2 m-2 border-black h-12 w-12"
            key={index}
            value={inputArr[index]}
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ele) => (refArr.current[index] = ele)}
          ></input>
        );
      })}
    </>
  );
};

export default OTP;
