import "./style.scss";


interface Props{
  num:number,
  title:string,
  description:string,
  allStep:number
}

const CustomStepBar = (props:Props) => {
  
  return (
    <div className="step-bar_container">
      <ul>
        <li>
          <div className="step_top">
            <div className="step-num"></div>
            <p className="step_title"></p>
            <div className="step_line"></div>
          </div>
          <div className="step_bottom">
            <p></p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CustomStepBar;
