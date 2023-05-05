import React from 'react';
import vapor_comp from './vapor_comp.gif'; 


function Header() {
  return (
    <div>
      <div class="header">
        <div class="glitch" data-text="ラズベリーパイ"></div>
        <div class="glitch" data-text="RASPBERRYPIE"></div>
      </div>  
      <img src={vapor_comp} alt="vaporwave" class="center"></img>
      <sub class="sub">by: chris</sub>
    </div>
  );
}

export default Header;
