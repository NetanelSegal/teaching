import React from 'react';

export default function AnimatedUnderlineText({
  children,
  textColor = 'text-blue-200',
  lineColor = 'bg-blue-500',
  fontWeight = 'font-semibold',
}) {
  return (
    <span className={`${textColor} ${fontWeight} relative group`}>
      {children}
      <span
        className={`block absolute transition-all duration-150 ease-in-out left-0 bottom-0 right-full top-[92%] group-hover:right-0 ${lineColor}`}
      ></span>
    </span>
  );
}
