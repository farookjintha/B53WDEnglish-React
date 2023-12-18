const FuncCompC = (props) => {
  console.log("Props: ", props);
  const { email, printEmail } = props;

  console.log("Email: in CompC: ", email);
  printEmail();
  return <div>FuncCompC</div>;
};

export default FuncCompC;
