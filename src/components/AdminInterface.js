import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./Header";

const AdminPanel = () => {
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [newBook, setNewBook] = useState({
        id: nanoid(10),
        title: "",
        author: "",
        year: "",
        category: "",
        description: "",
        price: "",
        available: true,
    });
    const [isAdmin, setIsAdmin] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [activeTab, setActiveTab] = useState("books");
    const [editingBook, setEditingBook] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [expandedUser, setExpandedUser] = useState(null);
    const [notificationDays, setNotificationDays] = useState("");

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        setBooks(storedBooks);

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    useEffect(() => {
        setFilteredBooks(
            books.filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );

        setSuggestions(
            books
                .filter((book) =>
                    book.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((book) => book.title)
        );
    }, [searchQuery, books]);

    const handleLogin = () => {
        if (login === "admin" && password === "admin123") {
            setIsAdmin(true);
        } else {
            alert("Неверный логин или пароль.");
        }
    };

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

        setNewBook({ id: nanoid(10), title: "", author: "", description: "", year: "", category: "", price: "", available: true });
        setEditingBook(null);
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

    const handleEditClick = (book) => {
        setEditingBook(book);
        setNewBook(book);
    };

    const handleCancelEdit = () => {
        setEditingBook(null);
        setNewBook({ id: nanoid(10), title: "", author: "", description: "", year: "", category: "", price: "", available: true });
    };

    const handleUserToggle = (user) => {
        setExpandedUser(expandedUser === user ? null : user);
        setNotificationDays(user.notificationDaysBefore || "");
    };

    const handleNotificationChange = (e) => {
        setNotificationDays(e.target.value);
    };

    const handleNotificationSubmit = (userId) => {
        const updatedUsers = users.map((user) =>
            user.id === userId ? { ...user, notificationDaysBefore: parseInt(notificationDays) } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setExpandedUser(null);
    };

    const checkNotifications = () => {
        const now = new Date();
        users.forEach((user) => {
            if (user.rents && user.notificationDaysBefore !== undefined) {
                user.rents.forEach((rent) => {
                    const expirationDate = new Date(rent.expirationDate);
                    const diffInDays = Math.ceil((expirationDate - now) / (1000 * 60 * 60 * 24));
                    if (diffInDays === user.notificationDaysBefore) {
                        alert(`Уведомление для ${user.username}: Книга "${rent.title}" должна быть возвращена через ${diffInDays} дней.`);
                    }
                });
            }
        });
    };

    useEffect(() => {
        checkNotifications();
    }, [users]);

    if (!isAdmin) {
        return (
            <div className="p-6 max-w-md mx-auto">
                <h2 className="text-3xl">Вход в админ-панель</h2>
                <input
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className="border p-2 m-1 w-full"
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 m-1 w-full"
                />
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleLogin}>
                    Войти
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto text-text">

            <header>
                <h2 className="text-3xl">Админ-панель</h2>
                <Header />
            </header>

            <div className="mt-4 border-b border-gray-300">
                <button
                    className={`p-2 mr-4 ${activeTab === "books" ? "border-b-2 border-blue-500" : ""}`}
                    onClick={() => setActiveTab("books")}
                >
                    Книги
                </button>
                <button
                    className={`p-2 mr-4 ${activeTab === "users" ? "border-b-2 border-blue-500" : ""}`}
                    onClick={() => setActiveTab("users")}
                >
                    Пользователи
                </button>
                <button
                    className={`p-2 mr-4 ${activeTab === "rentalsPurchases" ? "border-b-2 border-blue-500" : ""}`}
                    onClick={() => setActiveTab("rentalsPurchases")}
                >
                    Арендованные и купленные книги
                </button>
            </div>

            {activeTab === "books" && (
                <div>
                    <input
                        type="text"
                        placeholder="Поиск книги по названию"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-border bg-block p-2 m-1 w-full mb-4"
                        list="book-suggestions"
                    />
                    <datalist id="book-suggestions">
                        {suggestions.map((suggestion, index) => (
                            <option key={index} value={suggestion} />
                        ))}
                    </datalist>
                    <div className="mt-4 p-4 border border-border bg-block rounded-md flex-nowrap grid grid-cols-2 items-center">
                        <h3 className="text-xl mb-2">{editingBook ? "Редактировать книгу" : "Добавить книгу"}</h3>
                        <input type="text" name="title" placeholder="Название" value={newBook.title} onChange={handleChange} className="border border-border bg-block p-2 m-1" />
                        <input type="text" name="author" placeholder="Автор" value={newBook.author} onChange={handleChange} className="border border-border bg-block p-2 m-1" />
                        <textarea name="description" placeholder="Описание" value={newBook.description} onChange={handleChange} className="border border-border bg-block p-2 m-1" />
                        <input type="number" name="year" placeholder="Год" value={newBook.year} onChange={handleChange} className="border border-border bg-block p-2 m-1" />
                        <input type="text" name="category" placeholder="Категория" value={newBook.category} onChange={handleChange} className="border border-border bg-block p-2 m-1" />
                        <input type="number" name="price" placeholder="Цена" value={newBook.price} onChange={handleChange} className="border border-border bg-block p-2 m-1" />
                        <select className='bg-block border-border border p-2 m-1 text-gray-400' value={newBook.available} onChange={(e) => editBook(newBook.id, "available", e.target.value === "true")}>
                            <option value="true">Доступно</option>
                            <option value="false">Недоступно</option>
                        </select>
                        <button className="bg-green-500 text-white p-2 mt-2 rounded-md" onClick={addBook}>
                            {editingBook ? "Сохранить" : "Добавить"}
                        </button>
                        {editingBook && (
                            <button className="bg-gray-500 text-white p-2 mt-2 rounded-md ml-2" onClick={handleCancelEdit}>
                                Отмена
                            </button>
                        )}
                    </div>

                    <h3 className="text-xl mt-6">Список книг</h3>
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="p-4 border border-border bg-block  rounded-md my-2 flex justify-between items-center">
                            <div>
                                <p>{book.title}</p>
                                <p>{book.author}</p>
                                <p>{book.description}</p>
                                <p>{book.year}</p>
                                <p>{book.category}</p>
                                <p>{book.price}₽</p>
                                <p>{book.available ? "Доступно" : "Недоступно"}</p>
                            </div>
                            <div >
                                <button className="bg-blue-500 text-white p-2 rounded-md m-2 " onClick={() => handleEditClick(book)}>
                                    Редактировать
                                </button>
                                <button className="bg-red-500 text-white p-2 rounded-md m-2" onClick={() => deleteBook(book.id)}>
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "users" && (
                <div>
                    <h3 className="text-xl mt-6">Пользователи</h3>
                    {users.map((user) => (
                        <div key={user.id} className="p-4 border border-border bg-block  rounded-md my-2">
                            <div className="cursor-pointer" onClick={() => handleUserToggle(user)}>
                                <h4>{user.username}</h4>
                                <p>{user.email}</p>
                            </div>
                            {expandedUser === user && (
                                <div className="mt-2">
                                    <h5>Купленные книги:</h5>
                                    {user.purchases && user.purchases.length > 0 ? (
                                        <ul>
                                            {user.purchases.map((book, index) => (
                                                <li key={index}>
                                                    {book.title} (Куплено {new Date(book.purchaseDate).toLocaleDateString()})
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>Нет купленных книг.</p>
                                    )}
                                    <h5>Арендованные книги:</h5>
                                    {user.rents && user.rents.length > 0 ? (
                                        <ul>
                                            {user.rents.map((book, index) => (
                                                <li key={index}>
                                                    {book.title} (Арендовано до {new Date(book.expirationDate).toLocaleDateString()})
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>Нет арендованных книг.</p>
                                    )}
                                    <div className="mt-4">
                                        <label>
                                            Уведомление за (дней до окончания аренды):
                                            <input
                                                type="number"
                                                value={notificationDays}
                                                onChange={handleNotificationChange}
                                                className="border p-2 ml-2 border-border bg-block "
                                            />
                                        </label>
                                        <button className="bg-blue-500 text-white p-2 mt-2 rounded-md" onClick={() => handleNotificationSubmit(user.id)}>
                                            Сохранить
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "rentalsPurchases" && (
                <div>
                    <h3 className="text-xl mt-6">Арендованные книги</h3>
                    {users.some(user => user.rents && user.rents.length > 0) ? (
                        users.flatMap((user) =>
                            user.rents ? user.rents.map((book) => (
                                <div key={`${user.id}-${book.bookId}`} className="p-4 border border-border bg-block  rounded-md my-2">
                                    <p>{book.title} (Арендовано {user.username})</p>
                                </div>
                            )) : []
                        )
                    ) : (
                        <p>Никто не арендовал книги.</p>
                    )}

                    <h3 className="text-xl mt-6">Купленные книги</h3>
                    {users.some(user => user.purchases && user.purchases.length > 0) ? (
                        users.flatMap((user) =>
                            user.purchases ? user.purchases.map((book) => (
                                <div key={`${user.id}-${book.bookId}`} className="p-4 border border-border bg-block  rounded-md my-2">
                                    <p>{book.title} (Куплено {user.username})</p>
                                </div>
                            )) : []
                        )
                    ) : (
                        <p>Никто не купил книги.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
