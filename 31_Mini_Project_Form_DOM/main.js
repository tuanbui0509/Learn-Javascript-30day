// Đối tượng validator
function Validator(options) {

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        let errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        errorMassage = rule.test(inputElement.value)
        if (errorMassage) {
            errorElement.innerText = errorMassage
            inputElement.parentElement.classList.add('invalid')
        }
        else {
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
    }
    // Lấy element của form
    let formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            let inputElement = formElement.querySelector(rule.selector)
            let errorElement = inputElement.parentElement.querySelector(options.errorSelector)
            if (inputElement) {
                // Xử lý trường hợp blur khòi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }
                // Xử lý người dùng nhập vào input
                inputElement.oninput = function () {
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
    }
}

// Định nghĩa rules
// Nguyên tắc của rule:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra gì undefined
Validator.isRequired = function (selector) {
    return {
        selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này !!!'
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector,
        test: function (value) {
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return regex.test(value.trim()) ? undefined : 'Vui lòng nhập Email trường này !!!'
        }
    };
}