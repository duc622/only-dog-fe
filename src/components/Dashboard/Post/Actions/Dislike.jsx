import React, { useContext, useState } from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AppContext } from "../../../../contexts/AppProvider";
//--------------------------------------------------
export default function Dislike({ like, setLike, dislike, setDislike }) {
  const { setShowModalLogin, stateAccessToken } = useContext(AppContext);
  const [numberOfDislike, setNumberOfDislike] = useState(0);
  //--------------------------------------------------
  const handleSetDislike = () => {
    !stateAccessToken && setShowModalLogin(true);
    numberOfDislike === 0
      ? setNumberOfDislike(numberOfDislike + 1)
      : setNumberOfDislike(numberOfDislike - 1);
    setDislike(!dislike);
    like && setLike(!like);
    console.log("set dislike");
  };
  //--------------------------------------------------
  return (
    <div onClick={handleSetDislike}>
      <small>{numberOfDislike}</small>
      <AiOutlineDislike
        size="25"
        role="button"
        className={dislike ? "d-none" : "mt-2"}
      />
      <AiFillDislike
        size="25"
        role="button"
        className={dislike ? "mt-2" : "d-none"}
      />
    </div>
  );
}
