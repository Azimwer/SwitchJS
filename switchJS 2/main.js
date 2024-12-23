document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        let input = prompt("Сколько сетов хотите заказать?");
        let number = Number(input);

        // Используем конструкцию switch (true) для проверки условия
        switch (true) {
            case number > 0 && input !== "":
                alert(`Ваш заказ в количестве ${number} был принят`);
                alert(`Стоимость вашего заказа: ${number * 45000} сум`); // Второй alert с суммой
                console.log(number * 45000);
                
                break;

            default:
                alert("Пожалуйста, введите корректное число");
                break;
        }
    });
});
