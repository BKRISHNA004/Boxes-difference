const Box = (props) => {
  //  Write your code here.
  const { boxCls, boxText } = props;
  return (
    <div className={boxCls}>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="box-bg-con">
    <h1 className="box-heading">Boxes</h1>
    <div className="box-con">
      <Box boxCls="box-small" boxTest="Small" />
      <Box boxCls="box-medium" boxTest="Medium" />
      <Box boxCls="box-large" boxTest="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
