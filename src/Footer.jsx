import { useContext } from "react"
import ThemeContext from "./ThemeContext"

const Footer = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div id="last" style={{backgroundColor: theme === "light"? "blue" : "pink", color: theme === "light"? "white" : "black"}}>
    <div id='back' style={{backgroundColor: theme === "light"? "blue" : "pink", color: theme === "light"? "white" : "black"}}>
        <div class="detail">
            <p class="title">ABOUT</p>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Flipkart Stories</p>
            <p>Press</p>
            <p>Corporate Information</p>
        </div>

        <div class="detail">
            <p class="title">GROUP COMPANIES</p>
            <p>Myntra</p>
            <p>Cleartrip</p>
            <p>Shopsy</p>
        </div>

        <div class="detail">
            <p class="title">HELP</p>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Returns</p>
            <p>FAQ</p>
        </div>

        <div class="detail">
            <p class="title">CONSUMER POLICY</p>
            <p>Cancellation & Returns</p>
            <p>Terms of Use</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>Sitemap</p>
            <p>Grievance Redressal</p>
            <p>EPR Compliance</p>
        </div>

        <div class="address">
            <p class="title1">Mail Us:</p>
            <p>Flipkart Internet Private Limited,<br></br> Buildings Alyssa, Begonia & <br></br>Clove Embassy Tech Village,<br></br> Outer Ring Road, Devarabeesanahalli Village,<br></br> Bengaluru, 560103,<br></br> Karnataka, India</p>
        </div>

         <div class="address1">
            <p class="title1">Registered Office Address:</p>
            <p>Flipkart Internet Private Limited,<br></br> Buildings Alyssa, Begonia & <br></br>Clove Embassy Tech Village,<br></br> Outer Ring Road, Devarabeesanahalli Village,<br></br> Bengaluru, 560103,<br></br> Karnataka, India<br></br>CIN : U51109KA2012PTC066107<br></br>Telephone: 044-45614700 / 044-67415800</p>
        </div>
    </div>

    <div id="last1">
        <p><i class="fa-solid fa-briefcase"></i> Become a Seller</p>
        <p><i class="fa-solid fa-star"></i> Advertise</p>
        <p><i class="fa-solid fa-gift"></i> Gift Cards</p>
        <p><i class="fa-solid fa-circle-question"></i> Help Center</p>
        <b id="ksa">&copy; 2000 - 2025 Aakash</b>
    </div>
</div>
  )
}

export default Footer