export const toggleMenu = (isMenuOpen, setIsMenuOpen) => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
};

export const closeMenu = (isMenuOpen, setIsMenuOpen) => {
    setIsMenuOpen(false);
    if (!isMenuOpen) {
        document.body.classList.remove('no-scroll');
    } else {
        document.body.classList.add('no-scroll');
    }
};

export const handleScroll = (prevScrollPos, setPrevScrollPos, setIsNavbarVisible) => {
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > prevScrollPos) {
            setIsNavbarVisible(true);
        } else if (currentScrollPos === 0) {
            setIsNavbarVisible(false);
        }
        setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
};

export const handleNavItemClick = (e, navItem, setActiveHeadNav) => {
    e.preventDefault();
    const sectionElement = document.getElementById(navItem);
    if (sectionElement) {
        sectionElement.scrollIntoView();
    }
    setActiveHeadNav(navItem);
};
