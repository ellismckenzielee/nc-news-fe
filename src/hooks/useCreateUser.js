import { useState } from "react";
const useCreateUser = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [previewAvatar, setPreviewAvatar] = useState("");
  return [username, setUsername, avatar, setAvatar, name, setName, previewAvatar, setPreviewAvatar];
};

export default useCreateUser;
