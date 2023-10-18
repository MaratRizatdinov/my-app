# Проект "Музыкальный проигрыватель"

## Курсовая работа 

### Авторизация 

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

Кнопка "Зарегистрироваться" перенаправляет пользователя на страницу регистрации

#### Чек-лист страницы "Авторизация"

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

### Регистрация

 Страница регистрации - . Страница предлагает\
четыре поля для ввода(имя пользователя, почта, пароль, повторение пароля) и две кнопки : "Авторизоваться" и "Зарегистрироваться".\
Поля ввода обязательны для заполнения. Валидация на стороне клиента пресекает попытку отправить на сервер\
пустые значения, уведомляя клиента о причине отказа

 В случае, если данные прошли проверку на стороне клиента, запрос отправляется на сервер. Навремя, пока идет обработки запроса на\
 сервере, кнопка "Зарегистрироваться" деактивируется. Если пользователь проверку не прошел, сервер уведомляет пользователя об этом. \
 Если ошибок несколько, информация доносится клиенту по одной в следующем порядке: Ошибки в имени пользователя => Ошибки в эектрон-\
 ной почте => Ошибки пароля

В случае успешной регистрации пользователь перенаправляется на страницу авторизации

Кнопка "Авторизоваться" перенаправляет пользователя на страницу авторизации без регистрации

|**Что проверяем?**|**Результат**|
|:--|:--:|

|В поля для ввода можно внести информацию| :heavy_check_mark: |
<!-- |Кнопка "Зарегистрироваться" активна| :heavy_check_mark: |
|При нажатии "Зарегистрироваться" происходит проверка на стороне клиента. Пользователю выводится информация,если не заполнены какие либо поля | :heavy_check_mark: |
|При прохождении проверки на стороне клиента отправляется запрос на сервер. Кнопка "Зарегистрироваться" деактивирована | :heavy_check_mark: |
|Если проверка на сервере не пройдена,пользователю выводится информация . Кнопка "Войти" активируется | :heavy_check_mark: |
|Если проверка на сервере пройдена,происходит перенаправление на страницу авторизации | :heavy_check_mark: |
|При нажатии на кнопку "Авторизоваться" происходит перенаправление на страницу авторизации  | :heavy_check_mark: |
|Попытка перейти на страницу с треками приводит к перенапралению на страницу авторизации  | :heavy_check_mark: | -->


