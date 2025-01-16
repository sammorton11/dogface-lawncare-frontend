import React from 'react';
export default function GoogleMap() {

    const key = process.env.REACT_APP_GOOGLE_MAP_KEY;
    console.log("KEEEEY:", key);

    return (
        <div className="h-full w-full md:w-1/2 py-14">
            <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=Eufaula,OK`}>
            </iframe>
        </div>
    );
};

