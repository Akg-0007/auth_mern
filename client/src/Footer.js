import React from "react";
const Footer = ()=>{
    return(
        <div>
            
<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Scout Verse Co.</h1>
        
    <h2>Contact</h2>
    
    <address>
      Gurgaon
      <a class="footer__btn" href="mailto:pranshu002y@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Instagram</a>
        </li>

        <li>
          <a href="#">Linkedin</a>
        </li>
            
        <li>
          <a href="#">Youtube </a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">About</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Here's how we do it!</a>
        </li>
        
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  
</footer>
        
        <div class="darkfooter">
  <p>© Copyright Scout Verse Co. All Rights Reserved</p>
  <p>Designed by <a >Scout Verse Co.</a></p>
</div>
</div>
    )
}

export default Footer