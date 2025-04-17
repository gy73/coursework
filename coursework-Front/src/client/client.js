import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials:true, 
});

export const apiService = {
    // GET запрос
    get: async (url) => {
        try {
            const response = await api.get(url);
            return response.data;
        } catch (error) {
            console.error('Ошибка при выполнении GET запроса:', error);
            throw error;
        }
    },

    // POST запрос
    post: async (url, data) => {
        try {
            const response = await api.post(url, data);
            return response.data;
        } catch (error) {
            console.error('Ошибка при выполнении POST запроса:', error);
            throw error;
        }
    },

    // PUT запрос
    put: async (url, data) => {
        try {
            const response = await api.put(url, data);
            return response.data;
        } catch (error) {
            console.error('Ошибка при выполнении PUT запроса:', error);
            throw error;
        }
    },

    // DELETE запрос
    delete: async (url) => {
        try {
            const response = await api.delete(url);
            return response.data;
        } catch (error) {
            console.error('Ошибка при выполнении DELETE запроса:', error);
            throw error;
        }
    }
};

// Пример использования:
/*
import { apiService } from './api/axios';

// GET запрос
const getData = async () => {
    try {
        const data = await apiService.get('/endpoint');
        console.log(data);
    } catch (error) {
        // Обработка ошибки
    }
};

// POST запрос
const createData = async (newData) => {
    try {
        const response = await apiService.post('/endpoint', newData);
        console.log(response);
    } catch (error) {
        // Обработка ошибки
    }
};
*/
/* import { apiService } from '../api/axios';

// Пример использования в компоненте
const YourComponent = () => {
    const fetchData = async () => {
        try {
            const data = await apiService.get('/your-endpoint');
            // Обработка полученных данных
        } catch (error) {
            // Обработка ошибки
        }
    };
}; */
/* Я создал базовую настройку для работы с axios. Вот основные моменты, которые вам нужно знать:
В файле src/api/axios.js я создал экземпляр axios с базовыми настройками:
baseURL установлен на http://localhost:8080/api (измените его на URL вашего бэкенда)
Настроены базовые заголовки для JSON
Включена поддержка куков (withCredentials: true)
Создан объект apiService с основными методами для работы с API:
get - для GET-запросов
post - для POST-запросов
put - для PUT-запросов
delete - для DELETE-запросов
Каждый метод включает обработку ошибок и возвращает данные из ответа
Чтобы использовать этот сервис в ваших компонентах, вы можете импортировать его следующим образом:
Apply to client.js
Для работы с Java бэкендом убедитесь, что:
На бэкенде настроен CORS для принятия запросов с вашего фронтенда
URL в baseURL соответствует URL вашего Java бэкенда
Формат данных, отправляемых с фронтенда, соответствует ожиданиям бэкенда
Если вам нужно добавить специфические эндпоинты или настроить дополнительные параметры, дайте мне знать, и я помогу вам с этим. */
