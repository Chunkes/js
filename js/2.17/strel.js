function ask(question, yes, no) {
    if (confirm(question)) 
    yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Ок"),
    () => alert("Отмена")
  );