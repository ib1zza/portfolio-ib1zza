import s from "./Flip.module.scss";

interface Props {
    flipped?: boolean;
}

const Flip = ({flipped = false}: Props) => {
  const cls = `${s.button} ${flipped ? s.flipped : ""}`;
  return (
      <>
          {/*<div className={cls} data-back="ибизза" data-front="ибизза"></div>*/}
          <div className={cls} data-back="ибизза" data-front="ib1zza"></div>
      </>
  );
};

export default Flip;
