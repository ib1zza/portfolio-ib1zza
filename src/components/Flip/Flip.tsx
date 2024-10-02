import s from "./Flip.module.scss";

interface Props {
    flipped?: boolean;
}

const Flip = ({flipped = false}: Props) => {
  const cls = `${s.button} ${flipped ? s.flipped : ""}`;
  return (
    <div className={cls} data-back="ib1zza" data-front="ib1zza"></div>
  );
};

export default Flip;
