import React from "react";
import styled from 'styled-components'

const styles = {
  // back: {
  //   position: "absolute" as any,
  //   backgroundColor: "black",
  //   opacity: "0.5",
  //   top: 0,
  //   left: 0,
  //   zIndex: 100,
  //   width: "100%",
  //   height: "100%",
  // },
};

interface Props {
  open: boolean;
  onClose: () => void;
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const { open, onClose, children } = props;
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    if (!rootRef.current) return;

    document.addEventListener("click", onClose);

    return () => {
      document.removeEventListener("click", onClose);
    };
  }, [rootRef.current, onClose]);

  if (!open) return null;

  return (
    <>
      <DialogContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </DialogContainer>
      <div
        style={{
          position: "absolute",
          backgroundColor: "black",
          opacity: "0.5",
          top: 0,
          left: 0,
          zIndex: 100,
          width: "100%",
          height: "100%",
        }}
        ref={rootRef}
      ></div>
    </>
  );
};

export default Dialog;

const DialogContainer = styled.div`
  background: transparent;
  color: white;
  // border: solid green 2px;
  position: absolute;
  padding: 1em;
  top: 200px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
`;
