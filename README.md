# Проект "Музыкальный проигрыватель"

<!-- ## Авторизация 

 При запуске приложения пользователь попадает на страницу авторизации. Страница предлагает\
два поля для ввода(почта и пароль) и две кнопки : "Войти" и "Зарегистрироваться". Поля ввода\
обязательны для заполнения. Валидация на стороне клиента пресекает попытку отправить на сервер\
пустые значения, уведомляя клиента о причине отказа

 В случае, если данные прошли проверку на стороне клиента, запрос отправляется на сервер. На\
время, пока идет обработки запроса на сервере, кнопка "Войти" деактивируется.
Если пользователь с такими данными не обнаружен, сервер уведомляет пользователя об этом. \
В случае успешной авторизации пользователь перенаправляется на страницу с треками

Страница с треками недоступна неавторизованным пользователям. При попытке зайти на любую стра-\
ницу кроме страницы авторизации или регистрации  приложение редиректит на страницу авторизации

Кнопка "Зарегистрироваться" перенаправляет пользователя на страницу регистрации -->

## Чек-лист страницы "Авторизация"

|**Что проверяем?**|**Результат**|
|:--|:--:|
|В поля для ввода можно внести информацию| :heavy_check_mark: |
|Кнопка "Войти" активна| :heavy_check_mark: |
|При нажатии "Войти" происходит проверка на стороне клиента. Пользователю выводится информация,если не заполнены какие либо поля | :heavy_check_mark: |
|При прохождении проверки на стороне клиента отправляется запрос на сервер. Кнопка "Войти" деактивирована | :heavy_check_mark: |
|Если проверка на сервере не пройдена,пользователю выводится информация . Кнопка "Войти" активируется | :heavy_check_mark: |
|Если проверка на сервере пройдена,происходит перенаправление на страницу с треками | :heavy_check_mark: |
|На странице с треками имя пользователя отображается в правом верхнем углу | :heavy_check_mark: |
|При нажатии на кнопку "Зарегистрироваться" происходит перенаправление на страницу регистрации  | :heavy_check_mark: |
|Попытка перейти на страницу с треками приводит к перенапралению на страницу авторизации  | :heavy_check_mark: |

<!-- ## Регистрация

 Страница регистрации - . Страница предлагает\
четыре поля для ввода(имя пользователя, почта, пароль, повторение пароля) и две кнопки : "Авторизоваться" и "Зарегистрироваться".\
Поля ввода обязательны для заполнения. Валидация на стороне клиента пресекает попытку отправить на сервер\
пустые значения, уведомляя клиента о причине отказа

 В случае, если данные прошли проверку на стороне клиента, запрос отправляется на сервер. Навремя, пока идет обработки запроса на\
 сервере, кнопка "Зарегистрироваться" деактивируется. Если пользователь проверку не прошел, сервер уведомляет пользователя об этом. \
 Если ошибок несколько, информация доносится клиенту по одной в следующем порядке: Ошибки в имени пользователя => Ошибки в эектрон-\
 ной почте => Ошибки пароля

В случае успешной регистрации пользователь перенаправляется на страницу авторизации

Кнопка "Авторизоваться" перенаправляет пользователя на страницу авторизации без регистрации -->

## Чек-лист страницы "Регистрация"

|**Что проверяем?**|**Результат**|
|:--|:--:|
|В поля для ввода можно внести информацию| :heavy_check_mark: |
|Кнопка "Войти" активна| :heavy_check_mark: |
|При нажатии "Зарегистрироваться" происходит проверка на стороне клиента. Пользователю выводится информация,если не заполнены какие либо поля | :heavy_check_mark: |
|При прохождении проверки на стороне клиента отправляется запрос на сервер. Кнопка "Зарегистрироваться" деактивирована | :heavy_check_mark: |
|Если проверка на сервере не пройдена,пользователю выводится информация . Кнопка "Зарегистрироваться" активируется | :heavy_check_mark: |
|Если проверка на сервере пройдена,происходит перенаправление на страницу авторизации | :heavy_check_mark: |
|При нажатии на кнопку "Авторизоваться" происходит перенаправление на страницу авторизации без регистрации  | :heavy_check_mark: |
|Попытка перейти на страницу с треками приводит к перенапралению на страницу авторизации  | :heavy_check_mark: |

## Чек-лист страницы "Треки. Панель навигации, переходы на страницы категорий. Фильтрация, сортировка и поиск"

|**Что проверяем?**|**Результат**|
|:--|:--:|
|До загрузки треков с сервера пользователю демонстрируеся Скелетон загрузки| :heavy_check_mark: |
|После загрузки треков пользователь видит общий плейлист. В общем плейлисте избранные треки отмечены закрашенным сердечком | :heavy_check_mark: |
|Для доступа ко всем трекам реализована возможность скроллить список мышью | :heavy_check_mark: |
|Пока не выбран трек,панель управления аудиоплеером отсутствует | :heavy_check_mark: |
|Клик на гамбургер открывает/скрывает меню навигации | :heavy_check_mark: |
|Клик на логотип и на кнопку "Главное" переадресовывает на Главную страницу | :heavy_check_mark: |
|Клик на "Выйти" и клик на кнопку "Выход" в верхнем правом углу переадресовывает на страницу авторизации | :heavy_check_mark: |
|Клик на "Мой плейлист" переадресовывает на страницу избранных треков | :heavy_check_mark: |
|Клик на Баннеры переадресовывает на страницы подборок | :heavy_check_mark: |
|Кнопки фильтрации/сортировки при наведении меняют цвет на бледно-фиолетовый | :heavy_check_mark: |
|При клике,кнопки фильтрации/сортировки меняют цвет на темно-фиолетовый. Под активным фильтром появляется выпадающее меню. | :heavy_check_mark: |
|Фильтры по исполнителям и жанрам дают возможность выбора нескольких значений. Выбранные значения маркируются другим цветом. Над кнопкой фильтров появляется индикатор, показывающий количество выбранных значений   | :heavy_check_mark: |
|Выпадающий список отображает не более пяти значений. Для доступа к другим значения списка есть возможность скроллить список колесиком мыши | :heavy_check_mark: |
|Сортировка по дате релиза принимает одно значение, которое маркируется цветом. Над кнопкой появляется индикатор, показывающий направление сортировки   | :heavy_check_mark: |
|Выпадающие списки появляются/исчезают при нажатии кнопок. Одновременно на экране может быть только один список. Клик на кнопку неактивного фильтра/сортировки закрывает текущий активный список и вызывает новый | :heavy_check_mark: |
|Фильтры по исполнителям и жанрам имеют кнопку быстрой очистки  | :heavy_check_mark: |
|В верхней части экрана присутствует поле "Поиск", позволяющая выводить плейлист с треками в названии которых имеется введенная подстрока. Поиск не чувствителен к регистру букв | :heavy_check_mark: |
|Любое изменение вызванное сортировкой, поиском, фильтрацией автоматически обновляет отображаемый список треков. | :heavy_check_mark: |
|Вышеуказанные изменения , а также переходы между страницами приложения(Треки, Избранные, Категории) не останавливают текущее воспроизведение  | :heavy_check_mark: |

## Чек-лист страницы "Треки. Управления аудиоплеером"









