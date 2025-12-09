'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface ProgressToastProps {
  show: boolean;
  onHide: () => void;
}

export default function ProgressToast({ show, onHide }: ProgressToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-from-top">
      <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
        <FontAwesomeIcon icon={faCheck} className="text-sm" />
        <span className="text-sm font-medium">Progreso guardado</span>
      </div>
    </div>
  );
}
