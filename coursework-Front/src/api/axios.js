import axios from 'axios';

// Создаем экземпляр axios с базовыми настройками
const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Замените на URL вашего бэкенда
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Для работы с куками, если требуется
});

// Примеры методов для работы с API
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