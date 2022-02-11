const validateForm = ({date, time, firstName, lastName, email}) => {
    const errors = [];

    const isDateCorrect = () =>{
        const pattern = /(20[0-9]{2})-(0[1-9]|1[0-2])-(0[0-9]|[12][0-9]|3[01])/;
        return pattern.test(date);
    }
    
    const isTimeCorrect = () => {
        const pattern = /^[0-1]{1}[0-9]{1}|[2]{1}[0-3]{1}:[0-5]{1}[0-9]{1}$/
        return pattern.test(time);
    }
    
    const isFirstNameCorrect = () => {
        return firstName.length > 0;
    }
    
    const isLastNameCorrect = () => {
        return lastName.length > 0;
    }
    
    const isEmailCorrect = () => {
        const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
        return pattern.test(email);
    }

    if(!isDateCorrect()) {
        errors.push('Popraw wprowadzoną datę');
    }

    if(!isTimeCorrect()) {
        errors.push('Popraw wprowadzoną godiznę')
    }

    if(!isFirstNameCorrect()) {
        errors.push('Wprowadź imię');
    }

    if(!isLastNameCorrect()) {
        errors.push('Wprowadż nazwisko')
    }

    if(!isEmailCorrect()) {
        errors.push('Wprowadź poprawny adres email');
    }
    return errors;
}

export default validateForm;