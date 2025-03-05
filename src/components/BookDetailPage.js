import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

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
        if (!book || !book.available) {
            alert('Книга недоступна для аренды.');
            return;
        }

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            alert('Пользователь не залогинен.');
            return;
        }

        const rentalDate = new Date();
        const expirationDate = new Date(rentalDate);
        expirationDate.setMonth(expirationDate.getMonth() + rentalDuration);

        const rent = {
            bookId: book.id,
            title: book.title,
            rentalDate,
            rentalDuration,
            expirationDate,
        };

        // Обновляем данные пользователя
        currentUser.rents = [...(currentUser.rents || []), rent];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Обновляем данные в массиве пользователей
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map(user =>
            user.id === currentUser.id ? currentUser : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        alert(`Вы арендовали "${book.title}" на ${rentalDuration} месяц(ев)!`);
    };

    const handleBuy = () => {
        if (!book || !book.available) {
            alert('Книга недоступна для покупки.');
            return;
        }

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            alert('Пользователь не залогинен.');
            return;
        }

        const purchase = {
            bookId: book.id,
            title: book.title,
            purchaseDate: new Date(),
        };

        // Обновляем данные пользователя
        currentUser.purchases = [...(currentUser.purchases || []), purchase];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Обновляем данные в массиве пользователей
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map(user =>
            user.id === currentUser.id ? currentUser : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        alert(`Вы купили книгу "${book.title}" за ${book.price}₽!`);
    };

    return (
        <div className="p-6 max-w-2xl mx-auto text-text">
            <Header />
            {book ? (
                <>
                    <h2 className="text-3xl">{book.title}</h2>
                    <p>Автор: {book.author}</p>
                    <p>Год написания: {book.year}</p>
                    <p>Категория: {book.category}</p>
                    <p>Цена: {book.price}₽</p>
                    {!book.available && <p className="text-red-500">Книга недоступна для аренды или покупки.</p>}

                    <div className="mt-4 text-text">
                        <h3 className="text-xl">Выберите срок аренды:</h3>
                        <select
                            className="border p-2 m-1 border-border bg-block"
                            value={rentalDuration}
                            onChange={(e) => setRentalDuration(parseInt(e.target.value))}
                            disabled={!book.available}
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
                            disabled={!book.available}
                        >
                            Арендовать
                        </button>
                        <button
                            onClick={handleBuy}
                            className="bg-green-500 text-white p-2 rounded-md"
                            disabled={!book.available}
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
