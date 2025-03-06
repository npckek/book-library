import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RentReminder from "./RentReminder";
import Header from "./Header";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (!currentUser) {
            navigate("/login"); // Если нет пользователя, отправляем на страницу входа
        } else {
            setUser(currentUser);
        }

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/login");
    };

    const handleRemovePurchase = (bookId) => {
        const updatedPurchases = user.purchases.filter((book) => book.bookId !== bookId);
        user.purchases = updatedPurchases;
        localStorage.setItem("currentUser", JSON.stringify(user));
        setUser({ ...user });

        // Обновляем данные в массиве users
        const updatedUsers = users.map((u) =>
            u.id === user.id ? { ...u, purchases: updatedPurchases } : u
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    const handleRemoveRent = (bookId) => {
        const updatedRents = user.rents.filter((book) => book.bookId !== bookId);
        user.rents = updatedRents;
        localStorage.setItem("currentUser", JSON.stringify(user));
        setUser({ ...user });

        // Обновляем данные в массиве users
        const updatedUsers = users.map((u) =>
            u.id === user.id ? { ...u, rents: updatedRents } : u
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    };

    return (
        <>
            <div className='p-4'>
                <Header/>
            </div>
            <div className="p-6 max-w-2xl mx-auto text-text">
            <h2 className="text-3xl">Профиль пользователя</h2>
            {user && <p className="text-gray-600">Вы вошли как: {user.username}</p>}

            <h3 className="text-xl mt-4">Купленные книги</h3>
            {user?.purchases?.length > 0 ? (
                user.purchases.map((book) => (
                    <div key={book.bookId} className="p-4 border border-border bg-block rounded-md my-2">
                        <h4>{book.title}</h4>
                        <button className="bg-red-500 text-white p-2 rounded-md mt-2" onClick={() => handleRemovePurchase(book.bookId)}>
                            Удалить
                        </button>
                    </div>
                ))
            ) : (
                <p>У вас нет купленных книг.</p>
            )}

            <h3 className="text-xl mt-4">Арендованные книги</h3>
            {user?.rents?.length > 0 ? (
                user.rents.map((book) => (
                    <div key={book.bookId} className="p-4 border border-border bg-block rounded-md my-2">
                        <h4>{book.title}</h4>
                        <RentReminder expirationDate={book.expirationDate} />
                        <p>Срок аренды: {new Date(book.rentalDate).toLocaleDateString()} - {new Date(book.expirationDate).toLocaleDateString()}</p>
                        {new Date(book.expirationDate) < new Date() && <p className="text-red-500">Срок аренды истёк!</p>}
                        <button className="bg-red-500 text-white p-2 rounded-md mt-2" onClick={() => handleRemoveRent(book.bookId)}>
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
        </>

    );
};

export default ProfilePage;
