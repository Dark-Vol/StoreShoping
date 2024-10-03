# StoreShoping

Структура проекта
STORESHOPING/
├── client/                          # Клиентская часть (Frontend)
│   ├── node_modules/                # Модули NPM для frontend
│   ├── public/                      # Статические файлы (иконки, HTML)
│   └── src/                         # Исходный код frontend
│       ├── assets/                  # Ресурсы (шрифты, изображения)
│       ├── components/              # Компоненты React
│       ├── hooks/                   # Пользовательские хуки
│       ├── pages/                   # Страницы (React Router)
│       ├── scss/                    # Стили SCSS
│       │   ├── base/                # Базовые стили (reset, global.scss)
│       │   ├── components/          # Стили для компонентов
│       │   ├── layouts/             # Стили для макетов страниц
        |   ├── global.scss/             
│       │   └── variables.scss       # Переменные SCSS
│       ├── services/                # Логика работы с API
│       ├── utils/                   # Утилиты (вспомогательные функции)
│       ├── App.tsx                  # Главный компонент приложения
│       ├── index.tsx                # Точка входа React
│       ├── react-app-env.d.ts       # Типы для Create React App
│       ├── reportWebVitals.ts       # Функции для измерения производительности
│       ├── setupTests.ts            # Настройка тестирования (Jest)
│   ├── .gitignore                   # Файлы/папки, которые игнорируются git
│   ├── package-lock.json            # Точный список зависимостей (npm)
│   ├── package.json                 # Скрипты, зависимости и метаданные проекта
│   ├── README.md                    # Документация клиентской части
│   ├── tsconfig.json                # Конфигурация TypeScript для frontend
│
├── server/                          # Серверная часть (Backend)
│   ├── config/                      # Конфигурационные файлы (например, база данных)
│   ├── controllers/                 # Логика обработки запросов (например, ProductController)
│   ├── middlewares/                 # Промежуточное ПО (например, аутентификация)
│   ├── models/                      # Модели базы данных
│   ├── node_modules/                # Модули NPM для backend
│   ├── routes/                      # API маршруты (например, productRoutes, userRoutes)
│   ├── services/                    # Бизнес-логика (например, взаимодействие с базой данных)
│   ├── utils/                       # Утилиты для серверной части
│   ├── server.js                    # Точка входа в серверное приложение
│   ├── package-lock.json            # Точный список зависимостей для backend
│   ├── package.json                 # Скрипты, зависимости и метаданные проекта для backend
│   └── README.md                    # Документация серверной части
│
├── .gitignore                       # Общие игнорируемые файлы для всего проекта
├── 1.txt                            # Вспомогательный текстовый файл (возможно, заметки или данные)
└── README.md                        # Общая документация для проекта
