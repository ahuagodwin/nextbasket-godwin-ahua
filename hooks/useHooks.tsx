"use client"

import React, { useEffect, useState } from 'react';

const useHooks = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isOpenLike, setIsOpenLike] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  // Modal overlay and inner width
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (isOpen || isOpenLike) {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.marginRight = '0';
    }

    // Cleanup function to restore the original styles when the component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.marginRight = '0';
    };
  }, [isOpen, isOpenLike]);

  // Handling of the navigation bar fixed on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = 100;
      setIsFixed(scrollY > triggerHeight);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close menu when switching to desktop view
  useEffect(() => {
    const desktopBreakpoint = 768;
    if (windowWidth >= desktopBreakpoint && isMenu) {
      setIsMenu(false);
    }
  }, [windowWidth, isMenu]);

  useEffect(() => {
    if (isOpen || isOpenLike) {
      setIsMenu(false);
    }
  }, [isOpen, isOpenLike]);

  // Function to open the mobile nav menu
  const handleMenuOpen = () => {
    setIsMenu(!isMenu);
  };

  // Function to open the cart popup modal
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Function to open the favorite popup modal
  const handleOpenLike = () => {
    setIsOpenLike(!isOpenLike);
  };

  return {
    isOpen,
    handleOpen,
    isFixed,
    handleOpenLike,
    isOpenLike,
    handleMenuOpen,
    isMenu,
  };
};

export default useHooks;
