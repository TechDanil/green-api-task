English version of instructions for local deployment of the project

1. Prerequisites: 
    Ensure you have Node.js and npm (Node Package Manager) installed on your computer. 
    You can download them from the official Node.js website: https://nodejs.org/en

2. Clone the project:
    Clone or download the project repository from your version control system (e.g., Git).

3. Ensure that you have got rabbitMQ install if not, go to the site: https://www.rabbitmq.com/download.html
    and choose a package depending on your OC

4. Firstly, install erlang and then install rabbitmq-server.

5. After doing this type the following command in cmd of RabbitMq:
    but we must be inside the folder "sbin" when launching rabbitMq cmd
    and type in there the following command: rabbitmq-plugins enable rabbitmq_management 
    so the typed command enables plugins needed for rabbitMQ.

6. Once it is done type the url to url: http://localhost:15672/.

7. You will get a popup login frame, you need to type there guest guest, by default.

9. When you are in the project, type npm install.

8. There you will be able to keep track of your microproccesors and how they are being performed.

9. Make sure that you have started your rabbitMQ server by typpig command rabbitMQ-service start.

10. You can use any diffrent API Platform, in my case i use postman.

11. Open postman and type there for post request: http://localhost:3000/http-request 
or for get reponse: http://localhost:3001/task/:taskid.

12. after that type in terminal or cmd the following comand: npm start, this command louches app.

13. after that start making requests in you API platform.



Русская версия инструкций по локальному развертыванию проекта

1. Предварительные условия:
Убедитесь, что у вас есть Node.js и npm (Node Package Manager), установленный на вашем компьютере.
Вы можете скачать их с официального сайта Node.js веб-сайт: https://nodejs.org/en

2. Клонируйте проект:
Клонируйте или скачивайте репозиторий проекта из вашей системы контроля версий (например, Git).

3. Убедитесь, что у вас установлен RabbitMQ, если нет, то заходите на сайт: https://www.rabbitmq.com/download.html и выберите пакет менеджер в зависимости от вашей ОС

4. Сначала установите erlang, а затем установите rabbitmq-server.

5. После выполнения этого введите следующую команду в cmd RabbitMQ:
но мы должны находиться внутри папки "sbin" при запуске RabbitMQ cmd
и введите там следующую команду: rabbitmq-plugins enable rabbitmq_management
таким образом, введенная команда включает плагины, необходимые для RabbitMQ.

6. Как только это будет сделано, введите url в url адресе: http://localhost:15672/.

7. Вы получите всплывающее окно входа в систему, вам нужно ввести там guest guest, по умолчанию.

9. Когда вы будете в проекте, введите npm install.

8. Там вы сможете отслеживать свои микропроцессоры и то, как они выполняются.

9. Убедитесь, что вы запустили свой сервер RabbitMQ, набрав команду RabbitMQ-service start.

10. Вы можете использовать любую другую платформу API, в моем случае я использую postman.

11. Откройте postman и введите там для запроса POST: http://localhost:3000/http-request
или для GET: http://localhost:3001/task/:taskid .

12. после этого введите в терминале или cmd следующую команду: npm start, эта команда запускает приложение.

13. после этого начните выполнять запросы в вашей API-платформе.