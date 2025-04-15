import { useState, useRef } from 'react';


export const useDropdownHandlers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
    const handleEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsOpen(true);
    };
  
    const handleLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 20);
    };
  
    return { isOpen, handleEnter, handleLeave };
  };