'use client';

import { useEffect, useState } from 'react';

export default function BodyWrapper({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className: string;
}) {
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    const updateColor = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setBgColor(isDark ? '#111827' : '#ffffff');
    };

    updateColor();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateColor);

    return () => mediaQuery.removeEventListener('change', updateColor);
  }, []);

  return (
    <body 
      className={className}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </body>
  );
}
