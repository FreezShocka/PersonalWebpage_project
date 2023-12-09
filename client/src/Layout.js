// Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Your hotbar goes here */}
      <header>
        {/* Hotbar content */}
        <button>Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
        <button>Sign In</button>
      </header>
      {/* Page content */}
      {children}
    </div>
  );
}

export default Layout;