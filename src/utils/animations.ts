

export const fadeInUp = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0,
    x: -20 
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0,
    x: 20 
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { 
    opacity: 0,
    y: 15 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0,
    scale: 0.95 
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const slideInHorizontal = {
  hidden: { 
    opacity: 0,
    x: 30 
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

