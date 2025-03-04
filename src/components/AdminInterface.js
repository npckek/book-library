import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const AdminPanel = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        id: nanoid(10),
        title: "",
        author: "",
        year: "",
        category: "",
        price: "",
        available: true,
    });

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        setBooks(storedBooks);
    }, []);

    const handleChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value });
    };

    const addBook = () => {
        if (!newBook.title || !newBook.author || !newBook.year || !newBook.category || !newBook.price) {
            alert("Заполните все поля!");
            return;
        }

        const updatedBooks = [...books, newBook];
        setBooks(updatedBooks);
        localStorage.setItem("books", JSON.stringify(updatedBooks));

        setNewBook({ id: nanoid(10), title: "", author: "", year: "", category: "", price: "", available: true });
    };

    const editBook = (id, key, value) => {
        const updatedBooks = books.map((book) =>
            book.id === id ? { ...book, [key]: value } : book
        );
        setBooks(updatedBooks);
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    };

    const deleteBook = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
        localStorage.setItem("books", JSON.stringify(updatedBooks));
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl">Админ-панель</h2>

            <div className="mt-4 p-4 border border-gray-300 rounded-md">
                <h3 className="text-xl mb-2">Добавить книгу</h3>
                <input type="text" name="title" placeholder="Название" value={newBook.title} onChange={handleChange} className="border p-2 m-1" />
                <input type="text" name="author" placeholder="Автор" value={newBook.author} onChange={handleChange} className="border p-2 m-1" />
                <input type="number" name="year" placeholder="Год" value={newBook.year} onChange={handleChange} className="border p-2 m-1" />
                <input type="text" name="category" placeholder="Категория" value={newBook.category} onChange={handleChange} className="border p-2 m-1" />
                <input type="number" name="price" placeholder="Цена" value={newBook.price} onChange={handleChange} className="border p-2 m-1" />
                <button className="bg-green-500 text-white p-2 mt-2 rounded-md" onClick={addBook}>Добавить</button>
            </div>

            <h3 className="text-xl mt-6">Список книг</h3>
            {books.map((book) => (
                <div key={book.id} className="p-4 border border-gray-300 rounded-md my-2 flex justify-between items-center">
                    <div>
                        <input type="text" value={book.title} onChange={(e) => editBook(book.id, "title", e.target.value)} className="border p-1 m-1" />
                        <input type="text" value={book.author} onChange={(e) => editBook(book.id, "author", e.target.value)} className="border p-1 m-1" />
                        <input type="number" value={book.year} onChange={(e) => editBook(book.id, "year", e.target.value)} className="border p-1 m-1" />
                        <input type="text" value={book.category} onChange={(e) => editBook(book.id, "category", e.target.value)} className="border p-1 m-1" />
                        <input type="number" value={book.price} onChange={(e) => editBook(book.id, "price", e.target.value)} className="border p-1 m-1" />
                        <select value={book.available} onChange={(e) => editBook(book.id, "available", e.target.value === "true")}>
                            <option value="true">Доступно</option>
                            <option value="false">Недоступно</option>
                        </select>
                    </div>
                    <button className="bg-red-500 text-white p-2 rounded-md" onClick={() => deleteBook(book.id)}>Удалить</button>
                </div>
            ))}
        </div>
    );
};

export default AdminPanel;
