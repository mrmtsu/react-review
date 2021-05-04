export const ChildArea = (props) => {
  const { open } = props;

  return (
    <div>
      {open ? (
        <div>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </div>
  );
};
