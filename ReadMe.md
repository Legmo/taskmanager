# Task manager

##Оглавление
<a name="table_of_contents"></a>
- Русский
  - [Техническое задание](#ru_task)
  - [Стэк технологий](#ru_stack)
  - [Основные команды консоли](#ru_commands)
- English
  - [Technical task](#en_task)
  - [Technologies stack](#en_stack)
  - [Basic console commands](#en_commands)

## Техническое задание
<a name="ru_task"></a>
Необходимо создать приложение-задачник.   
В приложении нужно использовать React и Redux.   
К дизайну особых требований нет.

**Общая структура приложения**
- Стартовая страница    
  - таблица со списком задач, с возможностью сортировки по имени пользователя, email и статусу;
  - вывод задач организовать страницами по 3 штуки (с пагинацией);
  - видеть список задач может любой посетитель без регистрации.
- Форма добавления новых задач
  - создавать новые задачи может любой посетитель без регистрации.
- Панель администрирования
  - администратор имеет возможность редактировать текст задачи и поставить галочку о выполнении.  Выполненные задачи в общем списке выводятся с соответствующей отметкой. 
  - в backend пока не реализована возможность логина, используйте форму-фальшивку. Значения логина и пароля проверять прямо на клиенте;
  - вход для администратора: логин "admin", пароль "123".    

**Задача состоит из следующих полей**
- текста задачи;
- имени пользователя;
- е-mail;
- статуса задачи (решено/не решено).     

**Backend API**    
- документация по backend находится [здесь](https://uxcandy.com/~shapoval/test-task-backend/docs.html)   .

:arrow_up: [Оглавление](#table_of_contents)    

## Стэк технологий
<a name="ru_stack"></a>
- React 16
- Redux 4
- React Router DOM 5
- Axios 0.18
- Bootstrap 4
- Semantic UI React 0.86
- Lodash 4 
          
Этот проект на [GitHub](https://github.com/Legmo/taskmanager).
   
:arrow_up: [Оглавление](#table_of_contents)    

## Основные команды консоли
<a name="ru_commands"></a>

Находясь в директории проекта вы можете использовать эти команды:

### `npm start`

Запуск приложения в режиме разработки.<br>
Откройте ссылку [http://localhost:3000](http://localhost:3000), чтобы увидеть приложение в вашем браузере.

Страница будет автоматически перезагружаться после каждого изменения в исходных файлах.<br>
Также вы сможете увидеть ошибки и сообщения линтера в консоли.

### `npm run build`

Сборка приложения для production. Собранное приложение будет помещено в папку `build`.<br>
Команда `build` корректно собирает приложение и оптимизирует сборку для лучшей производительности.

Производится минификация, а имена файлов содержат хэши. <br>
Приложение готово к развертыванию.

Более подробно о режиме `build` смотрите [здесь](https://facebook.github.io/create-react-app/docs/deployment).

### Больше информации

Более подробную информацию вы можете получить здесь [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Изучение React стоит начать с [документации React](https://ru.reactjs.org/).
   

:arrow_up: [Оглавление](#table_of_contents)    

____

## Technical task
<a name="en_task"></a>
It is necessary to  create a simple task manager application.
In the application we need to use React and Redux.
There are no special requirements for design.

**General application structure**
- Start page   
    - a table with a list of tasks, with the ability to sort by user name, email and status;
    - it is necessary to organize the output of tasks in pages of 3 pieces (with pagination);
    - any visitor can see the list of tasks without registration.
- Form for adding new tasks
    - any visitor can create new tasks without registration.
- Admin panel
    - the administrator has the ability to edit the text of the task and put a check implementation mark. Completed tasks are displayed in the general list with the corresponding mark.
    - login option is not yet implemented in the backend, so use the fake form. Login and password values can be checked directly on the client;
    - administrator login "admin", password "123".

**The task includes the following fields**
- task text;
- username;
- e-mail;
- task status (solved / not solved).  

**Backend API**    
- backend documentation is [here](https://uxcandy.com/~shapoval/test-task-backend/docs.html)   

:arrow_up: [Оглавление](#table_of_contents)    

## Technologies stack
<a name="en_stack"></a>
- React 16
- Redux 4
- React Router DOM 5
- Axios 0.18
- Bootstrap 4
- Semantic UI React 0.86
- Lodash 4 
          
This project on [GitHub](https://github.com/Legmo/taskmanager).
   
:arrow_up: [Оглавление](#table_of_contents)    

## Basic console commands
<a name="en_commands"></a>

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
   

:arrow_up: [Оглавление](#table_of_contents)    