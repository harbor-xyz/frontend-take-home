import React, { ReactElement } from 'react';
import classnames from 'classnames';

interface CardProps {
    title?: string | ReactElement;
    content?: string | ReactElement;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, className }) => {
    return (
        <div className={classnames("card", { [`${className}`]: className })}>
            <div className="card-body">
                {title && <div className="card-title">{title}</div>}
                {content && <div className="card-content">{content}</div>}
            </div>
        </div>
    );
};

export default Card;
