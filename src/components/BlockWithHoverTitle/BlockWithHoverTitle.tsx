import React, { useMemo, useRef, useState } from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import { useResize } from "../../hooks/useResize";
import { useInView } from "framer-motion";
import s from "./BlockWithHoverTitle.module.scss";

interface Props {
  title: string;
  page: React.ReactNode;
}
const BlockWithHoverTitle = ({ title, page: Page }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [sizeW] = useResize();

  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleEnter = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const NewPage = useMemo(() => {
    return Page;
  }, []);

  return (
    <div
      className={s.mainContainer}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <BlockTitle
        text={title}
        isHovered={isHovered || (isInView && sizeW < 600)}
      />
      <div>{NewPage}</div>
      <div className={s.ref} ref={ref} />
    </div>
  );
};

export default BlockWithHoverTitle;
