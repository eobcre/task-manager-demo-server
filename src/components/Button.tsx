interface ButtonProps {
  buttonName: string;
  buttonStyle: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName, buttonStyle }) => {
  return (
    <div className='cursor-pointer'>
      <button className={buttonStyle}>{buttonName}</button>
    </div>
  );
};

export default Button;
