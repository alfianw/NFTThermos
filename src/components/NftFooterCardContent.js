import React from "react";

const Content =()=>{
    return(
<div className="content">
    <div className="content-text">
        <h1>Stay in the Loop</h1>
        <p>Join our mailling list to stay in the loop with our newest feature
release, NFT drops and tricks for navigating NFTThermos.</p>
    </div>
    <div className="content-form">
    <form>
  <label>
    <input type="text" name="name" placeholder="Your E-mail addess" id="form"/>
  </label>
  <input type="submit" value="Sign Up" id="btn" />
</form>
    </div>
</div>
    );
}

export default Content;