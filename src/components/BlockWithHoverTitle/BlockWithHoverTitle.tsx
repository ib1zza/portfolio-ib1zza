import React, { useMemo, useState } from "react";
import BlockTitle from "../BlockTitle/BlockTitle";

interface Props {
  title: string;
  page: React.ReactNode;
}
const BlockWithHoverTitle = ({ title, page: Page }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

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
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <BlockTitle text={title} isHovered={isHovered} />
      <div>{NewPage}</div>
    </div>
  );
};

export default BlockWithHoverTitle;
