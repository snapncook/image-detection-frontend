import React, { FC } from "react";

type ButtonProps = {
    title: string | React.ReactNode;
    id?: string;
    onClick?: () => void;
    buttonStyle: string;
    textStyle: string;
};

const Button: FC<ButtonProps> = ({ title, id, onClick, buttonStyle, textStyle }) => {
    return (
        <button onClick={onClick} className={buttonStyle}>
            {onClick ? <p className={textStyle}>{title}</p> : <a href={`#${id}`} key={id}> <p className={textStyle}>{title}</p> </a>}
        </button>
    );
};

export default Button;