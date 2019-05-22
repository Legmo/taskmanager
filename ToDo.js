
<ГЛОБАЛЬНО /> {
  - читать документацию
  - читать книгу O'Reilly
  - читать книгу про React (Пацианский М)
  - изучать axios
  - читать про классовые компоненты
  - Досмотреть видео Monsters
  +
  - Смотреть новое видео IT-Kamasutra
}

<БЛИЖАЙШИЕ /> {
  - Прописать правильный ReadMe проекта {
    - Вначале на русском, потом перевести.
    - Учебный проект,
    - Функциональность + чем реализовано (какой роутер и т.д.),
    - Технологический стэк (версия React & т.д.)
  }
  - Проверить работу переключателя  "Войти/Выйти" в шапке
  - Реализовать разные варианты return по условию {
      function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return <UserGreeting />;
        }
        return <GuestGreeting />;
      }
    }
  - Объявлять переменные не так: let variable = ""; а так: let variable;
  - Вввести && вместо IF {
    function Mailbox(props) {
      const unreadMessages = props.unreadMessages;
      return (
          <div>
            <h1>Здравствуйте!</h1>
            {unreadMessages.length > 0 &&
            <h2>
              У вас {unreadMessages.length} непрочитанных сообщений.
            </h2>
            }
          </div>
      );
    }
  }
  - реализовать кнопку Login/Logout {
    https://ru.reactjs.org/docs/conditional-rendering.html
  }
  - Проверить работу map
  - Вынести AJAX-запрос в промежуточную контейнеруню компоненту https://www.youtube.com/watch?v=D0kB1IvCKrI
  - Pagination - https://www.youtube.com/watch?v=ap8HxJPwJhY
  - Правильно реализовать поиск сущности с конкретным ID по всему стэйту {
    - https://www.youtube.com/watch?v=lrPp-A9f80M&list=PLIcAMDxr6tprSzqKmfhDiW00GWbDcs8lE&index=9
    - reducer-task - правильно прописать изменение объекта в UPDATE_TASK_TEXT и UPDATE_TASK_STATUS
    ОТ ВЕРЫ {
      Я бы не стала создавать кучу объектов. Если нужно обязательно копирование, то поначалу бы так сделала.

          let stateCopy = {...state}
      let tasks = stateCopy['message']['tasks']
      for (let i=0;i<tasks.length;i++){

        if (tasks[i]['id'] == taskId){
          tasks[i]['text'] = newString;
        }
      }
      В питоне бы такое проканало. в js, возможно, придется делать как-то так.

      for (let i=0;i<stateCopy['message']['tasks'].length;i++){

        if (stateCopy['message']['tasks'][i]['id'] == taskId){
          stateCopy['message']['tasks'][i]['text'] = newString;
        }
      }

      Хотя в es6, кажется, должно быть решение поизящней.

      for (let i=0;i<stateCopy.message.tasks.length;i++){

        if (stateCopy.message.tasks[i].id == taskId){
          stateCopy.message.tasks[i].text = newString;
        }
      }

      Кстати, попробуй этот вариант без строк:

          stateCopy.message = {...state.message};
      stateCopy.message.tasks = [...state.message.tasks];

      Может сработает.
    }
  }
  - Reducer - как менять массив объектов {
    - https://www.youtube.com/watch?v=ceSZUZZaW30
  }
  - Править копирование стэйта {
    let stateCopy = {
      ...state,
      messages: {...state.messages}
    }

    вместо
    let stateCopy = {
      ...state,
    }
    StateCopy.newMessagesBody = action.body
    делаем
    return {
      ...state,
      newMessagesBody = action.body
    }


    вместо
    let stateCopy = {
      ...state
    }
    let body = stateNewMessages.body
    StateCopy.newMessagesBody = ''
    StateCopy.messages.push({id:6, message: body})
    делаем {
      let body = stateNewMessages.body
      return {
        ...state,
        messages: {
          ...state.messages,
      {id:6, message: body}
    }
      newMessagesBody = '',
    }
    }
  }
  - Добавление данных через спред-оператор {
    let variable = {
      ...state,
      action.new_data
  }
  }
  - Сделать loader на время подгрузки AJAX {
    https://www.youtube.com/watch?v=qE8ThPt1EIM
        http://abcinblog.blogspot.com/2019/02/react-i.html
            http://jsraccoon.ru/react-sort-and-search - подумать о том, что будет происходить, если мы не получили данные.
                }
  +
  - Обмен данными с бэкендом {
    - Получение и вывод задач при инициализации приложения. Вынести из App в Redux
    - Пуш новых задач и изменений старых
    - При обновлении страницы Админа слетает авторизация
    - Асинхронность + middleware redux-thunk {
      https://www.youtube.com/watch?v=yOcR_flZ0vo&list=PLIcAMDxr6tprSzqKmfhDiW00GWbDcs8lE&index=8
          }
    - Пагинация
        https://github.com/it-kamasutra/react-way-of-samurai/blob/master/src/components/Users/UsersContainer.jsx

    https://www.youtube.com/watch?v=ceSZUZZaW30&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=50
        Разбираться, надо ли нам в setTasks м подобных полностью затираьт стэйт и презаписывать его, или надо добавлять данные к существующему стэйту?

        СТРАНИЦЫ
        - список {
        - при загрузке страницы - получить и отрисовать data.
    - при нажатии пейджера  - получить и отрисовать data
  }
    - форма {
      - при нажатии кнопки    - отправить data. В процессе набора - писать во временный объект?
    }
    - список админа {
      - при загрузке страницы - получить и отрисовать data.
      - при нажатии пейджера  - получить и отрисовать data
      - при нажатии чекбокса - отправить
      - при наборе данных - отправить и получить новые. Или ввести дополнительно кнопку отправки?
    }
    ДЕЙСТВИЯ
    - получение данных при загрузке страницы
    - получение новых данных при нажатии кнопки пейджера
    - отправка данных при нажатии кнопки/чекбокса
    - отправка и поулчение новых при наборе в форме

    Судя по всему, все функции запроса данных должны жить в Redux приходить в компоненту через dispatch.
        Возможно надо сделать отдельную переменную для ошибки - выводить ответ-ошибку от сервера

    ВОПРОСЫ
    - Как правильно создать эти функции в Redux
    - Как они должны взаимодействовать с обычным state
    - Как правильно вызвать их при загрузке страницы
    - Как их вызывать при клике на кнопку/чекбокс - наверное вызывать эту функцию из обычного action, так же как я делаю сортировку
    - Как их вызывать при обновлении формы - наверное вызывать эту функцию из обычного action, так же как я делаю сортировку

    Можно вынести функцию получения данных в отдельный компонент
    http://jsraccoon.ru/react-sort-and-search

        }
  - Проверить, откуда вызывается функция соритировки данных. Из самой компоненты, либо снаружи {
      http://abcinblog.blogspot.com/2019/02/react-i.html

      Наша задача сделать так, чтобы по клику на заголовок таблицы, данные в каждом столбце сортировались в порядке возрастания (чисел и по алфавиту). При повторном клике, сортировка в обратную сторону. Для этого нам нужно написать функцию сортировки (мы это сделаем с помощью библиотеки Lodash), передать ее в виде props компоненту Table, повесить событие onClickс этой функцией на заголовок таблицы и передать в эту функцию название столбца ( id, firstName, lastName или phone ). Там же - проверить как работает сортировка столбцов при получении данных с сервреа. Настроить её. Особенно - если листаем страницы пейджером

  }
  - При первом запуске сразу направлять на index {
    - искать
    - https://habr.com/ru/post/329996/
    - https://toster.ru/q/355686
  }
  - Проверить все ToDo
}

<ПРОЧЕЕ /> {
  - Выложить на сервер
  - Прикрутить их редактор кода, проверить права
  - Админка - экранирование текста задачи
  - объединить задачи UpdateTaskText & UpdateNewTaskText в редусере. Реально?
  - разобраться с thunk. Например, в TaskTable можно было бы вынести <tbody> в отдельную перемнную/метод (tableElements). Но, для этого надо реализовать нормальную асинхронность
  - переписать на хуки
}

<В_КОНЦЕ /> {

  - Стрелки-индикаторы на шапке таблицы можно добавлять с помощью модуля bem-cn {
      https://vaeum.com/2017/03/08/sozdaiem-tablitsu-s-sortirovkoi-strok-na-react-js/
    }
  - Использование react-router-redux (надо ли?) {
      https://www.youtube.com/watch?v=lrPp-A9f80M&list=PLIcAMDxr6tprSzqKmfhDiW00GWbDcs8lE&index=9
    }
  - Смена состояния кнопки Войти-Выйти - вынести из чистой компоненты? В контейнер? В Redux?
  - Чистить {
      - убрать все лишние todo,
      - комментарии,
      - консоль-логи
      - проверить все импорты
      - убрать подвал (перенести в hotquotes)
      - убрать чекбоксы?
      - убрать кнопку "Сохранить" в админке?
  }
  - Валидируем любой пользовательский ввод - https://bootstrap-4.ru/docs/4.0/components/forms/
  - Экранируем вывод
  - Favicon - их лого
  - вход - ширину формы сделать меньше (адаптивно)
  - Проверить мобильную версию?
  - Админка
      - если хоть что-то изменили в textarea - активируется кнопка сохранить (убираем класс d-none)
      - в админке добавить кнопку "отменить изменения" - для  этого до момента сохзранения надо где-то хранить данные
}


===========


<ВОПРОСЫ /> {
  - Actions - основное поле переименовать в payload. Было: action.inf стало action.payload
  - Форма добавления задачи - правильно ли, что я вызываю alert прямо в компоненте?
  - Правильно ли, что у меня сортировка таблицы нахоится в reducer'e tasks?
  - Компоненты и редусеры должны быть чистыми функциями. Не должны взыимодесйствовать с глобальными объектами! Только props (для редусеров - state & actions)! Ну, и не должны использовать внутренний state.
  - IS_LOGIN: правильно, ли, что я вызываю alert из reducer?
  - Плохо, что использую Rdirect  и if/else в LoginForm & TaskTableAdmin
  - Индикатор загрузки
  - Сортировка - клик по стрелке обрабатывать как клик по табличке
  - Сделать синонимами пути / и /index. react-router-dom - При входе загружать сразу первую страницу
  - Избавиться от страницы admin?
  - У меня в трёх разных компонентах исполььзуется одинаковый код для запроса на сервер (ComponentDidMount) - хорошо бы его вынести
  - В таблице админа (может и в обычной) работаю с методами типа document.getElementById - это нормально?
}

<РЕКОМЕНДАЦИИ /> {
  - Cледим за стройностью и минимализмом архитектуры,
  - Придерживаемся принципов DRY - не повторяемся. Подумать про отрисовку таблицы для админа и таблицы для обычного пользователя
  - Придерживаемся принципов KISS.
  - Всегда валидируем любой пользовательский ввод - https://bootstrap-4.ru/docs/4.0/components/forms/
  - Экранируем вывод
  - Заботимся о юзабилити.
  - Следим за отсутствием мусора в коде (отладочные инструкции, закомментированные строки)
  - Называем методы и переменные так, чтобы по одному названию было понятно что к чему
}