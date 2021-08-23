import React, { useState } from "react";
import { useContext } from "react";
import { CommunityContext } from "../context/CommunityContext";
import { Table } from "./table";

const Main = () => {
  const communityContext = useContext(CommunityContext);
  const { community, addCommunity, editCommunity, removeCommunity } =
    communityContext;
  // const [dummy, setDummy] = useState([
  //   {
  //     id: 1,
  //     name: "1",
  //     type: "Media Partner",
  //     location: "Jkt",
  //     phone: "123",
  //     email: "email 1@gm.co",
  //   },
  //   {
  //     id: 2,
  //     name: "2",
  //     type: "Hiring Partner",
  //     location: "Jkt",
  //     phone: "223",
  //     email: "email 2@gm.co",
  //   },
  //   {
  //     id: 3,
  //     name: "3",
  //     type: "Influencer",
  //     location: "Jkt",
  //     phone: "323",
  //     email: "email 3@gm.co",
  //   },
  // ])

  // const addData = (item) => {
  //   setDummy([...dummy, item])
  // }
  // const editData = (newData) => {
  //   const temp = dummy;
  //   const findIdx = dummy.findIndex(item => item.id === newData.id);
  //   temp.splice(findIdx, 1, newData)
  //   setDummy(temp);
  // }

  // const removeDummy = (itemId) => {
  //   setDummy([...dummy.filter((item) => item.id !== itemId)]);
  // };

  return (
    <div>
      <Table
        data={community}
        addData={addCommunity}
        editData={editCommunity}
        removeData={removeCommunity}
      />
    </div>
  );
};

export default Main;
