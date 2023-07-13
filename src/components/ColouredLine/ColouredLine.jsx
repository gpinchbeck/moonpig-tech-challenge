export const ColouredLine = ({ colour }) => (
  <hr
    style={{
      color: colour,
      backgroundColor: colour,
      height: 5,
      marginLeft: "2em",
      marginRight: "2em",
      borderRadius: 5,
      border: 0,
    }}
  />
);
