import React from "react";
import { PopupWidget } from "react-calendly";

const AppointmentScheduler = () => {
    return (
        <div className="App">
            <PopupWidget
                url="https://calendly.com/mortonwebsolutions/free-estimate-call"
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                textColor="#000000"
                color="#D9F99D"
            />
        </div>
    );
};

export default AppointmentScheduler;
