import { useState } from "react";

const usePageStatus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");
  return [isLoading, setIsLoading, isError, setIsError];
};

export default usePageStatus;
