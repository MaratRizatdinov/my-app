# Проект "Музыкальный проигрыватель"

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
|До загрузки треков с сервера пользователю демонстрируется Скелетон загрузки| :heavy_check_mark: |
|После загрузки треков пользователь видит общий плейлист. В общем плейлисте избранные треки отмечены закрашенным сердечком | :heavy_check_mark: |
|Для доступа ко всем трекам реализована возможность скроллить список мышью | :heavy_check_mark: |
|Пока не выбран трек,панель управления аудиоплеером отсутствует | :heavy_check_mark: |
|Клик на гамбургер открывает/скрывает меню навигации | :heavy_check_mark: |
|Клик на логотип и на кнопку "Главное" переадресовывает на Главную страницу | :heavy_check_mark: |
|Клик на "Выйти" и клик на кнопку "Выход" в верхнем правом углу переадресовывает на страницу авторизации. Вернуться обратно на страницу с треками возможно только через повторную авторизацию через сервер(происходит разлогинивание) | :heavy_check_mark: |
|На всех кликабельных элементах курсор - pointer | :heavy_check_mark: |
|Перезагрузка страницы не приводит к разлогиниванию. Реализован механизм автоматического обновления Access токена при перезагрузке страницы, в случае его "протухания"| :heavy_check_mark: |
|Клик на "Мой плейлист" переадресовывает на страницу избранных треков | :heavy_check_mark: |
|Клик на Баннеры переадресовывает на страницы подборок | :heavy_check_mark: |
|Кнопки фильтрации/сортировки при наведении меняют цвет на бледно-фиолетовый | :heavy_check_mark: |
|При клике,кнопки фильтрации/сортировки меняют цвет на темно-фиолетовый. Под активным фильтром появляется выпадающее меню. | :heavy_check_mark: |
|Фильтры по исполнителям и жанрам дают возможность выбора нескольких значений. Выбранные значения маркируются другим цветом. Над кнопкой фильтров появляется индикатор, показывающий количество выбранных значений   | :heavy_check_mark: |
|Выпадающий список отображает не более пяти значений. Для доступа к другим значения списка есть возможность скроллить список колесиком мыши | :heavy_check_mark: |
|Сортировка по дате релиза принимает одно значение, которое маркируется цветом. Над кнопкой появляется индикатор, показывающий направление сортировки   | :heavy_check_mark: |
|Выпадающие списки появляются/исчезают при нажатии кнопок. Одновременно на экране может быть только один список. Клик на кнопку неактивного фильтра/сортировки закрывает текущий активный список и вызывает новый | :heavy_check_mark: |
|Фильтры по исполнителям и жанрам имеют кнопку быстрой очистки  | :heavy_check_mark: |
|В верхней части экрана присутствует поле "Поиск", позволяющая выводить плейлист с треками, в названии которых имеется введенная подстрока. Поиск не чувствителен к регистру | :heavy_check_mark: |
|Любое изменение вызванное сортировкой, поиском, фильтрацией автоматически обновляет отображаемый список треков. | :heavy_check_mark: |
|Вышеуказанные изменения , а также переходы между страницами приложения(Треки, Избранные, Категории) не останавливают текущее воспроизведение аудиоалеера  | :heavy_check_mark: |
|Выполнение фильтрации и сортировки возможно только на Главной странице. На страницах категорий и Избранного кнопки фильтров не отображаются  | :heavy_check_mark: |

## Чек-лист страницы "Треки. Управления аудиоплеером"

|**Что проверяем?**|**Результат**|
|:--|:--:|
|Клик на название трека начинает его автоматическое воспроизведение. Слева от названия трека появляется пульсируюший фиолетовый кружок | :heavy_check_mark: |
|С началом воспроизведения в нижней части приложения появляется панель управления аудиоплеером. Название текущего трека, исполнитель, а также статус Like отражается в нижней панели | :heavy_check_mark: |
|Справа над панелью управления отражается таймер, показывающий длительность текущего трека и время которое он уже воспроизводится | :heavy_check_mark: |
|В приложении реализован плейбар , визуализирующий время воспроизведения текущего трека. Также плейбар является средством быстрой перемотки трека на любой тайминг| :heavy_check_mark: |
|В приложении реализован регулятор громкости. При перетаскивании ползунка громкость воспроизведения меняется| :heavy_check_mark: |
|Кнопка Play/Pause приостонавливает/возобновляет воспроизведение текущего трека.  В случае нажатия на паузу рисунок на кнопке меняется. Также останавливается пульсация  фиолетового кружка в списке треков| :heavy_check_mark: |
|Кнопки Вперед/Назад прозводят переход к следующему треку текущего плейлиста. Текущий плейлист меняется в зависимости от того, на какой странице приложения был произведен клик на название трека в списке(Избранное, Категории, Главная) В случае, если был произведен клик на сортированный/фильтрованный список на странице Главное, указанные правила приеняются и к такому списку   | :heavy_check_mark: |
|Если проигрываемый трек является последним в текущем списке, нажатие кнопки NEXT игнорируется| :heavy_check_mark: |
|Если проигрываемый трек является первым в текущем списке, нажатие кнопки PREV игнорируется| :heavy_check_mark: |
|Если с момента воспроизведения трека прошло 5 секунд, нажатие кнопки PREV не переводит на предыдущий трек, а начинает воспроизведение текущего трека заново| :heavy_check_mark: |
|По окончании воспроизведения текущего трека происходит автоматический переход и воспроизведение следующего трека текущего плейлиста. Если текущий трек является последним в списке воспоизведение останавливается| :heavy_check_mark: |
|Кнопка Loop позволяет закольцевать воспроизведение (повторное воспроизведение одного и того же трека) Если указанный режим активирован, кнопка меняет цвет| :heavy_check_mark: |
|Кнопка Shuffle позволяет воспроизведить треки в произвольном порядке. Режим доступен для страницы Главная(без фильтров и сортировок) Если указанный режим активирован, кнопка меняет цвет. Работа кнопок PREV / NEXT корректна - переход Назад и Вперед происходит к предыдущему/следующему треку перемешанного списка| :heavy_check_mark: |

## Чек-лист страницы "Треки. Добавление/удаление в Избранное"

|**Что проверяем?**|**Результат**|
|:--|:--:|
|Список  избранных треков доступен на странице мои треки. В случае отсутствия избранных треков на указанной странице появляется соответствующая надпись| :heavy_check_mark: |
|Добавление и удаление треков в Избранное возможно 2 способами. Нажатие на сердечко в списке треков закрашивает сердечко в списке и добавляет трек в Избранное. Также действует и нажатие на сердечко в панели управления плеером. Данная возможность доступна на любой странице 
приложения| :heavy_check_mark: |
|В случае нажатия на сердечко на странице Избранное происходит автоматическое удаления трека из списка. Воспроизведение не 
прерывается| :heavy_check_mark: |








