import React from "react";
import styles from "./StepAvatar.jsx";

const StepAvatar = ({ onNext }) => {
  return (
    <>
      <div>Avatar Component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepAvatar;
