import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [rentalDuration, setRentalDuration] = useState(1); // по умолчанию на 1 месяц

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        const selectedBook = storedBooks.find((b) => b.id === id);
        setBook(selectedBook);
    }, [id]);

    const handleRent = () => {
        if (!book) return;

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            alert('Пользователь не залогинен.');
            return;
        }

        const rentalDate = new Date();
        const expirationDate = new Date(rentalDate);
        expirationDate.setMonth(expirationDate.getMonth() + rentalDuration);

        const rents = JSON.parse(localStorage.getItem("rents")) || [];
        const rent = {
            ...book,
            rentalDate,
            rentalDuration,
            expirationDate,
            renter: currentUser.id
        };
        localStorage.setItem("rents", JSON.stringify([...rents, rent]));

        alert(`Вы арендовали "${book.title}" на ${rentalDuration} месяц(ев)!`);
    };

    const handleBuy = () => {
        if (!book) return;

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            alert('Пользователь не залогинен.');
            return;
        }

        const purchases = JSON.parse(localStorage.getItem("purchases")) || [];
        const purchase = {
            ...book,
            purchaseDate: new Date(),
            buyer: currentUser.id
        };
        localStorage.setItem("purchases", JSON.stringify([...purchases, purchase]));

        alert(`Вы купили книгу "${book.title}" за ${book.price}₽!`);
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            {book ? (
                <>
                    <h2 className="text-3xl">{book.title}</h2>
                    <p>Автор: {book.author}</p>
                    <p>Год написания: {book.year}</p>
                    <p>Категория: {book.category}</p>
                    <p>Цена: {book.price}₽</p>

                    <div className="mt-4">
                        <h3 className="text-xl">Выберите срок аренды:</h3>
                        <select
                            className="border p-2 m-1"
                            value={rentalDuration}
                            onChange={(e) => setRentalDuration(parseInt(e.target.value))}
                        >
                            <option value={1}>1 месяц</option>
                            <option value={2}>2 месяца</option>
                            <option value={3}>3 месяца</option>
                        </select>
                    </div>

                    <div className="mt-4 flex gap-4">
                        <button
                            onClick={handleRent}
                            className="bg-blue-500 text-white p-2 rounded-md"
                        >
                            Арендовать
                        </button>
                        <button
                            onClick={handleBuy}
                            className="bg-green-500 text-white p-2 rounded-md"
                        >
                            Купить
                        </button>
                    </div>
                </>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

export default BookDetailPage;
