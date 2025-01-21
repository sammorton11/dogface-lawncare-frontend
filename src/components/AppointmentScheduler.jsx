import React from "react";
import { PopupWidget } from "react-calendly";

const AppointmentScheduler = () => {
    return (
        <div className="App">
            <PopupWidget
                url="https://calendly.com/dogfacelawnllc/30min?month=2025-01"
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                textColor="#000000"
                color="#D9F99D"
            />
        </div>
    );
};

export default AppointmentScheduler;
