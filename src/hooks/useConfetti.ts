import { useCallback } from 'react';

// Hook para lanzar confetti visual usando canvas-confetti
export function useConfetti() {
  const checkAndTriggerConfetti = useCallback(() => {
    if (typeof window !== 'undefined') {
      import('canvas-confetti').then((confetti) => {
        // Confetti desde la izquierda
        confetti.default({
          particleCount: 100,
          spread: 70,
          origin: { x: 0.1, y: 0.6 },
          colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']
        });
        
        // Confetti desde la derecha
        confetti.default({
          particleCount: 100,
          spread: 70,
          origin: { x: 0.9, y: 0.6 },
          colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']
        });
        
        // Confetti desde el centro superior
        confetti.default({
          particleCount: 150,
          spread: 90,
          origin: { x: 0.5, y: 0.3 },
          colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']
        });
        
        // Confetti adicional desde abajo
        setTimeout(() => {
          confetti.default({
            particleCount: 80,
            spread: 60,
            origin: { x: 0.3, y: 0.8 },
            colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']
          });
          
          confetti.default({
            particleCount: 80,
            spread: 60,
            origin: { x: 0.7, y: 0.8 },
            colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']
          });
        }, 300);
      });
    }
  }, []);

  return { checkAndTriggerConfetti };
}
