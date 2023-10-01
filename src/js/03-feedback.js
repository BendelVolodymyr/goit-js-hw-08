import throttle from 'lodash.throttle';



const submitFormEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('.feedback-form textarea');
const localKey = 'feedback-form-state';
const resultLocal = JSON.parse(localStorage.getItem(localKey));
submitFormEl.addEventListener('submit', feedbackInput);
prevent();
function prevent() {
    
  const objectValues = resultLocal;

    if (objectValues) {
        
        inputEl.value = resultLocal.email || ''; // дані з локала або пусто
        messageEl.value = objectValues.message || '';
    }

};

function feedbackInput(event) {
    event.preventDefault();
   
    var { elements: { email, message } } = event.currentTarget;
    if (email.value.trim() === '' || message.value.trim() === '') {
        return  alert('Всі поля форми повинні бути заповнені');
    }
    console.log(JSON.parse(localStorage.getItem('feedback-form-state'))); // виводить дані з локал кеш
    localStorage.removeItem('feedback-form-state');  // Видаленя ключа в локал кеш
    

    
event.currentTarget.reset();

};

submitFormEl.addEventListener('input', throttle(inputResult, 500));
function inputResult(event) {
    
    let result = localStorage.getItem(localKey); // дістаємо з сховища
     result = result ? JSON.parse(result) : {}; // try = Parser, fals = {}
    result[event.target.name] = event.target.value.trim(); // вибір таргета і результат 
    localStorage.setItem(localKey, JSON.stringify(result)); // записуємо в локал кеш як обьєкт!
};
submitFormEl.addEventListener('input', throttle(inputResult, 500));






