<БЛИЖАЙШИЕ /> {
  - Хорошенько всё проверить
  - В коде нельзя напрямую манипулировать DOM объектами, это нужно делать средствами React {
    например, так не надо:
        document.getElementById(sortField).classList.add("active_col");
    Если ничего толкового не найду - буду использовать React.createRef()

    event.target.getAttribute - видимо туда же
  }
  +
  - убрать лишние ;
  - перевести этот файл в формат md (вначале сделать копию, на ней потренироваться) + добавить в gitignore
  - Есть вызовы экшенов подряд. Это будет приводить к последовательным лишним ререндерам.
  - API - вернуть единый метод для отправки status & text?
  - api контекста старый {
    https://learn-reactjs.ru/core/context#395
    https://reactjs.org/docs/legacy-context.html
    https://habr.com/ru/post/419449/
  }
  - PureComponent не используется
  +
  - yarn
  - Менять состояние компоненты только на основании данных из props, а не на основании клика {
      - Сортировка - разобраться как правильно принимать направление сортировки asc|desc {
        TaskTable\Container.jsx
        Table\Container.jsx
      }
      //TODO: (state, props) => ({counter: state.counter + props.increment})
        let sortFieldState = this.props.sortField
        let sortDirectionState = this.props.sortDirection
  }
  - Строгая типизация (Flow. Возможно позже - PropTypes) {
    https://habr.com/ru/post/326304/?_ga=2.268646129.1491001003.1559827573-1008668787.1555910378
  }
  - Тесты {
    https://learn.javascript.ru/testing
    https://code.tutsplus.com/ru/articles/testing-components-in-react-using-jest-the-basics--cms-28934
    https://habr.com/ru/post/340514/
    https://medium.com/devschacht/berry-de-witte-unit-testing-your-react-application-with-jest-and-enzyme-6ef3658fdc93

  }
  - StyledComponents
  +
  - HOK
  - hook
  - Selectors
  - reselected
  - redux form
  +
  - Кнопки отправки (addTask, adminTable) - ставить disable на время AJAX-запроса {
      <button disabled={props.following.some(id => id === user.id)} onClick={} />
      Если в массиве хоть один id совпадёт с user.id (из стэйта) - в disabled будет true
      https://www.youtube.com/watch?v=iobMksCYGHE&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=63
    }
  - Переключение чекбокса + одновременно выставление статуса в state - поробовать консутркцию в стиле {
    var sayHi = (age >= 18) ?
        function() { alert('Прошу Вас!');  } :
        function() { alert('До 18 нельзя'); };
    sayHi();
  }
  - Добавление-удаление id из массива, в зависимости от пришедшего true/false {
      Если action.isFetching = true  - делаем копию массива state.following и дописываем в конец пришедший action.userId.
      Если action.isFetching = false - делаем копию массива state.following и убираем из него id = пришедшему action.userId
        case TOGGLE_FOLLOWING: (
          return (
            ...state,
            following: action.isFetching
              ? [ ...state.following, action.userId]
              : state.following.filter( id => id != action.userId)
          )
        )
      https://www.youtube.com/watch?v=iobMksCYGHE&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=63
    }
  - Обработка ошибок обмена с бэкендом
  - Написать изящнее - смена активной колонки по клику в onSortTable {
      let firstActiveTh = document.getElementsByClassName("active_col")[0];
      firstActiveTh && firstActiveTh.classList.remove("active_col");
      document.getElementById(sortField).classList.add("active_col");
  }
  +
  - Оптимизация получения / отправки данных {
      - AddTaskForm/Container.jsx
      - newTaskSubmit {
        - post ("username", "email", "text")
        - ghb ответе обновляет clearNewTask и выводит alert
      }
      - TaskTable/Container.jsx
      - componentDidMount - везде одинаков {
        - get (currentPag, sortField, sortDirection)
        - при ответе обновляет updateTotalTaskCount и setTasks
      }
      - onSortTable - везде одинаков {
        - get (currentPag, sortField, sortDirection)
        - при ответе обновляет updateTotalTaskCount и setTasks
      }
      - Table/Container.jsx
      - componentDidMount - везде одинаков {
        - get (currentPag)
        - при ответе обновляет updateTotalTaskCount и setTasks
      }
      - onSortTable - везде одинаков {
        - get (currentPag, sortField, sortDirection)
        - при ответе обновляет updateTotalTaskCount и setTasks
      }
      - taskChangesPOST {
        - post (token, siagnature, id, status, text,)
        - ответа нет
      }

      - Или выносить в отдельные компоненты таблицы авторизированного/нормального пользователя

    }
  - Асинхронность + middleware redux-thunk {
      https://www.youtube.com/watch?v=yOcR_flZ0vo&list=PLIcAMDxr6tprSzqKmfhDiW00GWbDcs8lE&index=8
    }
  - Вёрстка. Форма добавления задачи - textarea box-shadow для empty/invalid
  - Вёрстка. Мо,ильная версия {
    - пейджер - мобильная вресия?
        - адаптивность таблицы?
  }
  - Вёрстка. Можно заморочиться с красивой валидацией форм на Bootstrap 4 {
      https://bootstrap-4.ru/docs/4.0/components/forms/#validation
    }
  - Нарисовать схему приложения {
      - изучить как это делается
      - правильно формить
      - прикрепить ссылку в ReadMe проекта (https://clck.ru/GGBno)
  }
  - Стрелки-индикаторы на шапке таблицы можно добавлять с помощью модуля bem-cn {
      https://vaeum.com/2017/03/08/sozdaiem-tablitsu-s-sortirovkoi-strok-na-react-js/
    }
  - Перевести на Material UI (https://material-ui.com/)
  - Может быть стоит вынести работу со страницами в отдельный блок (reducer, actions)?.
  - Обработка ошибок thunk (alert, изменение статуса задачи...) Паравильно ли делаю?. {
    - может надо вынести свойство hasError из task_reducer в другую ветку стэйта?
        - должно ли это свойство быть по умолчанию false?
        - может вообще нужен другой метод?
  }
}

<ПРОЧЕЕ /> {
  - Чистить {
    - убрать все лишние todo
    - комментарии
    - консоль-логи
    - проверить все импорты
  }
  - Восстановить логин/пароль админа
  - Настроить ESLint и проверить всё
  - Кавычки к одному стилю
  +
  - Форма - при открытии страницы и сразу после отправки стоит красная обводка. Должна появляться только после попытки отправки и исчезать после успешной отправки
  - Баг: когда админ обновляет страницу - он вылетает из админки. Видимо, потому что используем локальный стэйт, а при обновлении он слетает. Cookies?. {
      Туда же: когда админ переходит по другому адресу (набирает в адресной строке) - он вылетает из админки
    }
  - Надо ли в setTasks и подобных полностью затирать и презаписывать стэйт, или надо добавлять данные к существующему?.
  - Проверить, откуда вызывается функция соритировки данных. Из самой компоненты, либо снаружи {
      http://abcinblog.blogspot.com/2019/02/react-i.html
      Наша задача сделать так, чтобы по клику на заголовок таблицы, данные в каждом столбце сортировались в порядке возрастания (чисел и по алфавиту). При повторном клике, сортировка в обратную сторону. Для этого нам нужно написать функцию сортировки (мы это сделаем с помощью библиотеки Lodash), передать ее в виде props компоненту Table, повесить событие onClickс этой функцией на заголовок таблицы и передать в эту функцию название столбца ( id, firstName, lastName или phone ). Там же - проверить как работает сортировка столбцов при получении данных с сервреа. Настроить её. Особенно - если листаем страницы пейджером
  }
  - Почему не добавляется ToDo.js в .gitignore ?.
  - Объединить задачи UpdateTaskText & UpdateNewTaskText в редусере. Реально?
  - Разобраться с thunk. Например, в TaskTable можно было бы вынести <tbody> в отдельную перемнную/метод (tableElements). Но, для этого надо реализовать нормальную асинхронность
  - Переписать на хуки
  - Админка - прятать кнопку если textarea вернулся в первоначальное состояние без отправки (отменили правки в поле)
  - Валидируем любой пользовательский ввод - https://bootstrap-4.ru/docs/4.0/components/forms/
  - Экранируем вывод. Админка - экранирование текста задачи&
  +
  - компонент Table - генерация строк таблицы через map? {
    let tableCellsAnonymous = props.tableCells.filter((elem) => {
      if (elem.allowed_users.indexOf('anonymous') != -1) {
        return true;
      }
    })
    let tableCellsAdmin = props.tableCells.filter((elem) => {
      if (elem.allowed_users.indexOf('admin') != -1) {
        return true;
      }
    })


  }
}

<ВОПРОСЫ /> {
  - Проверить правильно ли я передаю данные на сервер в функции onTaskTextPOST (Table\Container.jsx)
  - Actions - основное поле переименовать в payload. Было: action.inf стало action.payload
  - Форма добавления задачи - правильно ли, что я вызываю alert прямо в компоненте?
  - IS_LOGIN: насколько безопасно хранить логин/пароль администратора в Reducer
  - Правильно ли, что у меня сортировка таблицы нахоится в reducer'e tasks?
  - Компоненты и редусеры должны быть чистыми функциями. Не должны взыимодесйствовать с глобальными объектами! Только props (для редусеров - state & actions)! Ну, и не должны использовать внутренний state.
  - Плохо, что использую Rdirect и if/else в LoginForm & TaskTableAdmin
  - Сортировка - клик по стрелке обрабатывать как клик по табличке
  - Избавиться от страницы admin?
  - У меня в трёх разных компонентах исполььзуется одинаковый код для запроса на сервер (ComponentDidMount) - хорошо бы его вынести
  - В таблице админа (может и в обычной) работаю с методами типа document.getElementById - это нормально?
  - Использование react-router-redux (надо ли?) {
    https://www.youtube.com/watch?v=lrPp-A9f80M&list=PLIcAMDxr6tprSzqKmfhDiW00GWbDcs8lE&index=9
        }
  - Упростить taskChangePOST
  - Смена состояния кнопки Войти-Выйти - вынести из чистой компоненты? В контейнер? В Redux?..
  - Не уверен что правильно получаю значение активной страницы при клике по ссылке в пейджере {
      https://react.semantic-ui.com/addons/pagination/
      let actualPage = event.target.getAttribute('value'); (src\Components\Paginator\Paginator.jsx)
  }
  - Не уверен, что правильно очищаю форму добавления новой заадчи после отправки. также как и вызываю сообщение об отправке (надо бы добавить нормальную логику обработки ошибок)
}

<ТЕХНОЛОГИИ /> {
  - React Material-UI (https://material-ui.com/)
  - Тестирование (Mocha, Chai и Sinon)
  - Настроить ESLint
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

<BEST_PRACTICES /> {
  - Вывод разных компонент по условию {
      https://ru.reactjs.org/docs/conditional-rendering.html

      function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return <UserGreeting />;
        }
        return <GuestGreeting />;
      }
  }
  - Reducer - как менять массив объектов при помощи Map {
    - https://www.youtube.com/watch?v=ceSZUZZaW30
  }
  - Копирование стэйта {
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
  - Если в фигурных скобках if или else только одно выражение, эти скобки можно не писать {
      if (a == 0)
        alert('Верно!');
      else
        alert('Неверно!');
  }
  - Как объявлять пустые переменные {
    не так:
        let variable = "";
    а так:
        let variable;
  }
  - Использование && вместо IF {
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
  - Организация контейнерных компонент и AJAX {
      https://www.youtube.com/watch?v=D0kB1IvCKrI
      - снаружи - контейнерная, которая через connect работает со Store
      - в ней (в том же файле) - классовая, которая делает AJAX-запросы и прочие сайд-эффекты
      - классовая вызывает отрисовку функциональной (которая лежит в отдельном файле). Та получает только props и отдаёт JSX
  }
  - Preloader на время подгрузки AJAX {
      https://www.youtube.com/watch?v=qE8ThPt1EIM
      http://abcinblog.blogspot.com/2019/02/react-i.html
      http://jsraccoon.ru/react-sort-and-search - подумать о том, что будет происходить, если мы не получили данные.
    }
  - Создаём пустой массив с нужным количеством элемнетов {
      for (let i=1 ; i <= pagesCount; i++) {
        pages.push(i);
      }
  }
  - Pager {
    - https://www.youtube.com/watch?v=ap8HxJPwJhY\
    - https://github.com/it-kamasutra/react-way-of-samurai/blob/master/src/components/Users/UsersContainer.jsx
  }
  - Создание и concole.log объекта POST-запроса {
      let params = new FormData();
      (typeof text   !== "undefined") && params.append("text", text);
      params.append("token", token);
      params.append("signature", md5(requestWithoutSignature));

      for (var pair of params.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
      }
  }
  - Если надо все входящие пропсы прокинуть в дочернюю компоненту {
      return (
        <Component {...this.props} />
      )
  }
  - Как получить данные из адресной строки (withRouter) {
    Например, при клике по item я должен открыть страницу http://bse_url/item/id
    При помощи Navlink я перехожу на страницу с этим адресом
    Но как получить в React/Redux этот id из адресной строки? А если адрес открывается не при клике, а из Закладок?

    Используем withRouter
    https://www.youtube.com/watch?v=e6SpHkb0E3I&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=61
  }
  - В reducer можно получать из action объект с данными, и сразу его деструктуризировать {
      Например:
        switch (action.type) {
          case SWITCH_USER {
            return {
                ...state, //вернули прежний стэйт
                ...action.data //деструкторизация объекта data из action. Его значения затирают анадогичные в state
            }
          }
        }
        export const switchUser = (userId, email) => ({type: SWITCH_USER, data:{userId, email}})
    https://www.youtube.com/watch?v=b3pU3hsJlNk&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=62
  }
  - <button disabled={props.following.some(id => id === user.id)} onClick={} /> {
      Если в массиве хоть один id совпадёт с user.id (из стэйта) - в disabled будет true
      https://www.youtube.com/watch?v=iobMksCYGHE&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=63
    }
  - Добавление-удаление id из массива, в зависимости от пришедшего true/false {
      Если action.isFetching = true  - делаем копию массива state.following и дописываем в конец пришедший action.userId.
      Если action.isFetching = false - делаем копию массива state.following и убираем из него id = пришедшему action.userId
        case TOGGLE_FOLLOWING: (
          return (
              ...state,
              following: action.isFetching
              ? [ ...state.following, action.userId]
              : state.following.filter( id => id != action.userId) //фильтрация верёнт новый мссив, поэтому не надо делать ...state.following (деструктурию)
          )
        )
      https://www.youtube.com/watch?v=iobMksCYGHE&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=63
    }
  - AJAX, axios, cookie - follow/unfollow {
      https://www.youtube.com/watch?v=oLIrtUrm5us
  }
  - Методы работы с массивом {
      - for
      - forEach - перебор. Для каждого элемента массива вызывает функцию
      - filter - фильтрация массива через функцию. Создаст новый массив, туда войдут только элементы, для которых вызов функции возвратит true.
      - map - трансформация массива. Создаст новый массив, туда войдут результаты вызова функции для каждого элемента.
      - every/some - проверка массива. Возвращает true если функция возвратит true для каждого/хоть одного элемента.
      - reduce/reduceRight - для последовательной обработки каждого элемента массива с сохранением промежуточного результата. Вычисление на основе массива какого-либо единого значения ("для свёртки массива"). Например сумма всех элементов массива. Для прохода по массиву с вычислением значения.
      https://habr.com/ru/post/247857/
      https://learn.javascript.ru/array-iteration
      }
  - Передать все пропсы из родителя в дочерний компонент: <Table {...props} />
  - Из редюсеров логику желательно выносить {
      например, эту:
        stateCopy.message.tasks.map((task) => {
          +task.id === taskId && (task.text = newString);
        })
      и эту:
        case IS_LOGIN: {
          let stateCopy = {...state};
          if (
              (!stateCopy.loggedUser) &&
              (action.login === adminLogin) &&
              (action.password === adminPassword)
          ) {
            stateCopy.loggedUser = true;
          }
          else {
            alert('Неверный логин или пароль');
          }
          return stateCopy;
        }
    }
  - Перебор обектов X в массиве tableCells. Смотрим содержимое массива allowed_users, если там есть значение "anonymous" - выписываем объект X в новый массив {
    table_cells: [
      {
        "cell_id":"id",
        "cell_type":"integer",
        "allowed_users": [
          "anonymous",
          "admin"
        ]
      },
      {
        "cell_id":"username",
        "cell_type":"text",
        "allowed_users": [
          "anonymous",
          "admin"
        ]
      },
    ]
    let tableCellsAnonymous = props.tableCells.filter((elem) => {
      if (elem.allowed_users.indexOf('anonymous') != -1) {
        return true;
      }
    })
  }
}