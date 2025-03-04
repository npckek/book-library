import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RentReminder from "./RentReminder";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [purchases, setPurchases] = useState([]);
    const [rents, setRents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            navigate("/login"); // Если нет пользователя, отправляем на страницу входа
        } else {
            setUser(currentUser);
            setPurchases(JSON.parse(localStorage.getItem("purchases")) || []);
            setRents(JSON.parse(localStorage.getItem("rents")) || []);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login");
    };

    const handleRemovePurchase = (id) => {
        const updatedPurchases = purchases.filter((book) => book.id !== id);
        setPurchases(updatedPurchases);
        localStorage.setItem("purchases", JSON.stringify(updatedPurchases));
    };

    const handleRemoveRent = (id) => {
        const updatedRents = rents.filter((book) => book.id !== id);
        setRents(updatedRents);
        localStorage.setItem("rents", JSON.stringify(updatedRents));
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-3xl">Профиль пользователя</h2>
            {user && <p className="text-gray-600">Вы вошли как: {user.username}</p>}

            <h3 className="text-xl mt-4">Купленные книги</h3>
            {purchases.length > 0 ? (
                purchases.map((book) => (
                    <div key={book.id} className="p-4 border border-gray-200 rounded-md my-2">
                        <h4>{book.title}</h4>
                        <button className="bg-red-500 text-white p-2 rounded-md mt-2" onClick={() => handleRemovePurchase(book.id)}>
                            Удалить
                        </button>
                    </div>
                ))
            ) : (
                <p>У вас нет купленных книг.</p>
            )}

            <h3 className="text-xl mt-4">Арендованные книги</h3>
            {rents.length > 0 ? (
                rents.map((book) => (
                    <div key={book.id} className="p-4 border border-gray-200 rounded-md my-2">
                        <h4>{book.title}</h4>
                        <RentReminder expirationDate={book.expirationDate} />
                        <p>Срок аренды: {new Date(book.rentalDate).toLocaleDateString()} - {new Date(book.expirationDate).toLocaleDateString()}</p>
                        {book.expired && <p className="text-red-500">Срок аренды истёк!</p>}
                        <button className="bg-red-500 text-white p-2 rounded-md mt-2" onClick={() => handleRemoveRent(book.id)}>
                            Удалить
                        </button>
                    </div>
                ))
            ) : (
                <p>У вас нет арендованных книг.</p>
            )}

            <button className="bg-gray-600 text-white p-2 rounded-md mt-4" onClick={handleLogout}>
                Выйти
            </button>
        </div>
    );
};

export default ProfilePage;
