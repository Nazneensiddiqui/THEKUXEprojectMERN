import l1 from "../images/l1.webp";
import l2 from "../images/l2.webp";

const Footer=()=>{
    return(
        <>
        
<div className="kart">
<h3>The Luxe Corner</h3>
<div className="foot">
    <div>
    <p><b>Company</b></p>
    <ul type="none">
                <li>About us</li>
                <li>Terms & conditions </li>
                <li>Privacy policy </li>
                <li>Anti-discrimination policy </li>
                <li>UC impact </li>
                <li>Careers </li>
            </ul>
        </div>

        <div>
            <p><b>For customers</b></p>
            <ul type="none">
                <li>UC reviews </li>
                <li>Categories near you </li>
                <li>Blog </li>
                <li>Contact us </li>

            </ul>
        </div>

        <div>
            <p><b>For partners</b></p>
            <ul type="none">
        <li>Register as a professional </li>
            </ul>
        </div>

        <div className="link">
            <p><b>Social links</b></p>
           <img src= {l1}/>
            <br/>
            <img src={l2}/>
        </div>
</div>

<hr/>
<div className="mail"><p>© Copyright 2024 Urban Company. All rights reserved. | CIN: U74140DL2014PTC274413</p></div>

</div>

        </>
    )
}

export default Footer;

