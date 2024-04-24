const OperatingZone = () => {
    return (
        <div className="main">
            <iframe 
                title="Operating Zone Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6805661465814!2d76.68899857565013!3d30.699262474600374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefb3a5eb21e7%3A0x89798321433f1815!2sHopingMinds!5e0!3m2!1sen!2sin!4v1713176454772!5m2!1sen!2sin" 
                width="900" 
                height="600" 
                style={{ border: "0" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default OperatingZone;
