import React from 'react';
import vapor_comp from './vapor_comp.gif'; 


function Header() {
  return (
    <div>
      <div class="glitch" data-text="ラズベリーパイ"><sub class="sub">by: chris</sub></div>
      <img src={vapor_comp} alt="vaporwave" class="center"></img>
    </div>
  );
}

export default Header;
