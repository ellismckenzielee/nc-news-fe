import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createPaginationButtons } from "../utils/utils";
const useUpdateParams = (articles) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const pageNum = searchParams.get("p");
  const numberOfPages = articles[0] !== undefined ? articles[0].total_count : 0;
  const paginationButtons = createPaginationButtons(numberOfPages, 6, setSearchParams);
  return [topic, sort_by, order, pageNum, paginationButtons, setSearchParams];
};

export default useUpdateParams;
