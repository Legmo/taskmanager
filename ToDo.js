import TaskTableAdmin from "./src/Components/TaskTableAdmin/TaskTableAdmin";
import {CLEAR_NEW_TASK} from "./src/Redux/Actions/tasks_actions";

<БЛИЖАЙШИЕ /> {
  - Кажется можно удалить ADD_TASK - вместо него используется CLEAR_NEW_TASK
  - Когда я на старнице Админа - активизировать пункт меню "Список задач"
  - Обработка ошибок обмена с бэкендом
  - Админка и основная таблица сильно повторяют друг-друга. Подумать
  +
  - Править вёрстку - сейчас контент располагается не по центру жкрана (горизонтально)
  - Баг вёрстки: при уменьшении экрана, таблица вылазит за ширину родительского div
  - Уменьшить ширину формы входа (адаптивно)
  - Проверить мобильную версию?
  +
  - Оптимизация получения / отправки данных {
    - Можно вынести функцию получения данных в отдельный компонент {
      http://jsraccoon.ru/react-sort-and-search
          }
    - Оптимизировать TaskTable & TaskTableAdmin. Вынести таблицу в отдельный компоненет? Тогда строки брать из state, как tableHeader
    - Или выносить в отдельные компоненты таблицы авторизированного/нормального пользователя
    - Оптимизировать AJAX-запрос {
      http://streletzcoder.ru/pishem-ajax-komponent-na-react-chast-1-osnova-komponenta/
          Вследствие того, что бизнес-логика приложения может предусматривать неоднократный запрос данных с сервера и обработка полученных данных на клиентской стороне может содержать достаточно сложные операции, настоятельно рекомендуется избегать отправки AJAX запроса непосредственно в методах жизненного цикла компонента. Вместо этого лучше выносить её в отдельные методы и вызывать уже их, как это показано в данной статье.
    }
  }
  - Сортировка - разобраться как правильно принимать направление сортировки asc|desc {
    TaskTable\Container.jsx
    TaskTableAdmin\Container.jsx
  }
  - Надо ли в setTasks и подобных полностью затирать и презаписывать стэйт, или надо добавлять данные к существующему?.
  - Асинхронность + middleware redux-thunk {
    https://www.youtube.com/watch?v=yOcR_flZ0vo&list=PLIcAMDxr6tprSzqKmfhDiW00GWbDcs8lE&index=8
        }
  - Нарисовать схему приложения {
      - изучить как это делается
      - правильно формить
      - прикрепить ссылку в ReadMe проекта (https://clck.ru/GGBno)
  }
  - Баг: когда админ обновляет страницу - он вылетает из админки. Видимо, потому что используем локальный стэйт, а при обновлении он слетает. Cookies?
  - Баг: когда админ переходит по другому адресу (набирает в адресной строке) - он вылетает из админки
  - Стрелки-индикаторы на шапке таблицы можно добавлять с помощью модуля bem-cn {
      https://vaeum.com/2017/03/08/sozdaiem-tablitsu-s-sortirovkoi-strok-na-react-js/
    }
  - Перевести на Material UI (https://material-ui.com/)
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
  - isLogout, props.login и т.д. - прописать более внятные названия методов и переменных. Проверить логику
  +
  - Форма - при открытии страницы и сразу после отправки стоит красная обводка. Должна появляться только после попытки отправки и исчезать после успешной отправки
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

}

<ВОПРОСЫ /> {
  - Проверить правильно ли я передаю данные на сервер в функции onTaskTextPOST (TaskTableAdmin\Container.jsx)
  - Actions - основное поле переименовать в payload. Было: action.inf стало action.payload
  - Форма добавления задачи - правильно ли, что я вызываю alert прямо в компоненте?
  - IS_LOGIN: правильно, ли, что я вызываю alert из reducer?
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
  - Rопирование стэйта {
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
}