import React, { useState } from "react";
import { useRef } from "react";
import StarterLoader from "../ui/add/StarterLoader";
import Spinner from "../ui/Spinner";
import GlobalStyles from "../styles/GlobalStyles";
import HomeHeader from "../ui/home/HomeHeader";

export default function Home() {
  const [isStartAnimFinished, setIsStartAnimFinished] = useState(false);
  if (!isStartAnimFinished)
    return <StarterLoader setIsStartAnimFinished={setIsStartAnimFinished} />;
  return <HomeHeader />;
}
