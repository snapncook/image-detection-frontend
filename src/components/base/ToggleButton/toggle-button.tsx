import { useState } from 'react';

interface ToggleButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  buttonClassName?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  children,
  icon,
  buttonClassName = "bg-blue-500 text-white p-2 rounded-md",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div className="">
      <button
        onClick={toggleVisibility}
        className={` ${buttonClassName}`}
      >
        {icon}
      </button>

      {isVisible && (
        <div className=''>
          <div className="">{children}</div>
        </div>
      )}
    </div>
  );
};

export default ToggleButton;