Lesson-5: Forms
Форми потрібні для отримання даних від користувача.
Елементи є: контрольовані (коли значення записується в стейт), неконтрольовані - коли в елемента немає обробника події.
Для звязування label з input використовується атрибут htmlFor + useId()
В залежності від типу елемента він має свою поведінку та по різному витягуються значення:
input => event.target.value | value
select => event.target.value | value повинен в собі мати option з атрибутом value
checkbox=> event.target.value | cheked
radio => event.target.value | cheked атрибут name повинен бути одинаковий.
