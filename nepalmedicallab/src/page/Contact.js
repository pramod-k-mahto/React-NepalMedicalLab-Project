import Payment from "./Payment";
import './contact.css'
function Contact() {
    return (
        <div className="contact">
            <h1>
                Contact Us
            </h1>

           <form>
            <label htmlFor=""></label>
            <input type="text"  placeholder="Name" className="contact-name"/><br />
            <label htmlFor=""></label>
            <input type="text"  placeholder="Email" className="email"/><br />
            <label htmlFor=""></label>
            <textarea name="" id="" cols="30" rows="10" className="textarea" placeholder="Message"></textarea><br />
            <input type="submit" value="Submit" className="contact-submit"/>
           </form>
<div className="add">
    <h2>kathmandu</h2>
    <h2>9800841208</h2>
    <h2>mahtop324@gmail.com

    </h2>
</div>
        </div>
    )
}
export default Contact;