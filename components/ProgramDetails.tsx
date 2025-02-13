import React, { useState } from 'react';

interface ProgramDetailsProps {
    title: string;
    description: string;
    detailedInfo: string;
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ title, description, detailedInfo }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="program-details">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={toggleDetails}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
            {isExpanded && <div className="detailed-info">{detailedInfo}</div>}
        </div>
    );
};

export default ProgramDetails;