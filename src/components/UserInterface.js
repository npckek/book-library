import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { booksData } from "../util/initData";
import Header from "./Header"; // Мы создадим этот файл для базы данных

const UserInterface = () => {
    const [books, setBooks] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [authorFilter, setAuthorFilter] = useState("all");
    const [yearFilter, setYearFilter] = useState("");
    const [priceOrder, setPriceOrder] = useState("asc");
    const navigate = useNavigate();

    // Загрузка книг из localStorage
    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("books"));
        if (storedBooks) {
            setBooks(storedBooks);
        } else {
            setBooks(booksData); // Если книг в localStorage нет, используем дефолтные
        }
    }, []);

    // Фильтрация книг
    const filteredBooks = books
        .filter((book) => categoryFilter === "all" || book.category === categoryFilter)
        .filter((book) => authorFilter === "all" || book.author === authorFilter)
        .filter((book) => yearFilter === "" || book.year.toString().includes(yearFilter)); // Проверка на год

    // Сортировка книг по цене
    const sortedBooks = filteredBooks.sort((a, b) => {
        let comparison = a.price - b.price;
        if (priceOrder === "desc") {
            comparison = -comparison; // Меняем порядок для убывающей сортировки
        }
        return comparison;
    });

    // Получаем уникальные значения для фильтров
    const categories = [...new Set(books.map(book => book.category))];
    const authors = [...new Set(books.map(book => book.author))];

    const handleCategoryChange = (e) => {
        setCategoryFilter(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setAuthorFilter(e.target.value);
    };

    const handleYearChange = (e) => {
        setYearFilter(e.target.value);
    };

    const handlePriceOrderChange = (e) => {
        setPriceOrder(e.target.value);
    };

    return (
        <div className="p-4">
            <Header/>
            <h1 className="text-2xl mb-4 text-text">Библиотека книг</h1>

            <div className="flex flex-wrap flex-row justify-between items-center">
                {/* Фильтрация по категориям */}
                <div className="mb-4 ">
                    <label htmlFor="category" className="mr-2 text-text">Категория:</label>
                    <select id="category" onChange={handleCategoryChange} value={categoryFilter} className='bg-block p-3 text-text border border-border'>
                        <option value="all">Все категории</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category} >{category}</option>
                        ))}
                    </select>
                </div>

                {/* Фильтрация по авторам */}
                <div className="mb-4">
                    <label htmlFor="author" className="mr-2 text-text">Автор:</label>
                    <select id="author" onChange={handleAuthorChange} value={authorFilter} className='bg-block p-3 text-text border border-border'>
                        <option value="all">Все авторы</option>
                        {authors.map((author, index) => (
                            <option key={index} value={author}>{author}</option>
                        ))}
                    </select>
                </div>

                {/* Фильтрация по году */}
                <div className="mb-4">
                    <label htmlFor="year" className="mr-2 text-text">Год написания:</label>
                    <input
                        id="year"
                        type="number"
                        placeholder="Введите год"
                        value={yearFilter}
                        onChange={handleYearChange}
                        className="border p-2 border-border bg-block text-text appearance-none"
                    />
                </div>

                {/* Сортировка по цене */}
                <div className="mb-4">
                    <label htmlFor="priceOrder" className="mr-2 text-text">Цена:</label>
                    <select id="priceOrder" onChange={handlePriceOrderChange} value={priceOrder} className='bg-block p-3 text-text border border-border' >
                        <option value="asc">По возрастанию</option>
                        <option value="desc">По убыванию</option>
                    </select>
                </div>
            </div>


            {/* Отображение книг */}
            <div className="grid grid-cols-3 gap-4">
                {sortedBooks.map((book) => (
                    <div key={book.id} className="p-4 border border-border rounded-md bg-block text-text">
                        <h2 className="text-xl">{book.title}</h2>
                        <p>Автор: {book.author}</p>
                        <p>Год: {book.year}</p>
                        <p>Категория: {book.category}</p>
                        <p>Цена: {book.price}₽</p>
                        <button className="bg-blue-500 text-white p-2 mt-2 rounded-md"
                                onClick={() => navigate(`/book/${book.id}`)}
                        >Подробнее</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserInterface;
