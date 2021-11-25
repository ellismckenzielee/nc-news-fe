import { useState } from "react";

const useErrors = () => {
  const [errorMessage, setErrorMessage] = useState("");
  return [errorMessage, setErrorMessage];
};

export default useErrors;
