import React from 'react';
export default function GoogleMap() {
    return (
        <div className="h-full w-full md:w-1/2 py-14">
            <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAmSnOrUnIVZFcMvIlhJcJ-_ByE9WcL9cY&q=Eufaula,OK">
            </iframe>
        </div>
    );
};

