let login = prompt('Логин', [])
if (login == 'admin')
{pass = prompt ("Введите пароль", [])
    if (pass == '123'){alert('Здравствуйте')}
    else if (pass == null || pass == ""){alert('Отменено')}
    else alert('Неверный пароль')}
else if (login == null || login == "")
{alert('Отменено')}
else 
{alert("Я вас не знаю")}
