import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUser from "../hooks/useGetOtherUser";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  useGetOtherUser();
  const { otherUsers } = useSelector((store) => store.user);
  if (!otherUsers) {
    return;
  }
  return (
    <div className="overflow-auto flex-1">
      {otherUsers?.map((user) => {
        return <OtherUser key={user._id} user={user} />;
      })}
      {/* <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser /> */}
    </div>
  );
};

export default OtherUsers;
