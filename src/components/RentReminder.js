// src/components/RentReminder.js
import React from "react";

const RentReminder = ({ expirationDate }) => {
    const currentDate = new Date();
    const remainingDays = Math.floor((new Date(expirationDate) - currentDate) / (1000 * 60 * 60 * 24));

    return (
        <p className={remainingDays < 0 ? "text-red-500" : ""}>
            Осталось {remainingDays < 0 ? 0 : remainingDays} {remainingDays < 1 ? "день" : "дней"} до сдачи
        </p>
    );
};

export default RentReminder;
