import React from "react";

const ClickIndicator = ({ className = "" }) => {
    return (
        <span className={`flex h-4 w-4 ${className}`}>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border-2 border-white dark:border-gray-800"></span>
        </span>
    );
};

export default ClickIndicator;