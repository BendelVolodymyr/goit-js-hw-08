import throttle from 'lodash.throttle';

const submitForm = document.querySelector('.feedback-form');
const localKey = 'feedback-form-state';
const input = document.querySelector('input');

submitForm.addEventListener('submit', feedbackInput);

function feedbackInput(event) {
    event.preventDefault();
   console.log(localStorage.getItem('feedback-form-state')); 
    var { elements: { email, message } } = event.currentTarget;
    if (email.value.trim() === '' || message.value.trim() === '') {
        return  alert('Всі поля форми повинні бути заповнені');
    }
    localStorage.removeItem('feedback-form-state'); 
    

    
event.currentTarget.reset();

};


const inputResult = (event) => {
    var { elements: { email, message } } = event.currentTarget;
    
    var key = localStorage.getItem(localKey); // local key;
    JSON.parse(key);
     let data = {
        email: email.value.trim(),
        message: message.value.trim(),
      };
    
    console.log(data);

      // data[e.target.name] = e.target.value.trim(); // виводить в localStorage лише один ключ з значенням, якщо інший не заповнений
     return localStorage.setItem(localKey, JSON.stringify(data));
}

submitForm.addEventListener('input', throttle(inputResult, 500));






