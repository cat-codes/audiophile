export const breakpoints = {
  desktop: 1240,
  tablet: 768,
  mobile: 320,
};

// Helper function to get the current breakpoint as a string
export const getCurrentBreakpoint = (width) => {
  if (width >= breakpoints.desktop) {
    return "desktop";
  } else if (width >= breakpoints.tablet) {
    return "tablet";
  } else {
    return "mobile";
  }
};
