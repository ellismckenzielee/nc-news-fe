import { useState } from "react";

const useVotes = () => {
  const [voteIncrement, setVoteIncrement] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  return [voteIncrement, setVoteIncrement, hasVoted, setHasVoted];
};

export default useVotes;
