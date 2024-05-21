"use client";

import { useContext } from "react";
import { MyContext } from "@/context/MyContext";
import { useStore } from "@/state-management/zustand/store";
function Profile() {
  const [Mydata, setMydata] = useStore((state) => [
    state.Mydata,
    state.setMydata,
  ]);
  console.log("my data in profile", Mydata);

  const { setData } = useContext(MyContext);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    </div>
  );
}

export default Profile;
