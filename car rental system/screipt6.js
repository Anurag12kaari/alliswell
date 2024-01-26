document.addEventListener("DOMContentLoaded", function () {
    const carSelect = document.getElementById("car-select");
    const durationInput = document.getElementById("duration");
    const calculateButton = document.getElementById("calculate-button");
    const totalPayment = document.getElementById("total-payment");
    const payButton = document.getElementById("pay-button");

    calculateButton.addEventListener("click", function () {
        const car = carSelect.value;
        const duration = parseInt(durationInput.value, 10);

        let pricePerDay = 0;

        // Define car prices based on car selection
        switch (car) {
            case "car1":
                pricePerDay = 50;
                break;
            case "car2":
                pricePerDay = 60;
                break;
            case "car3":
                pricePerDay = 70;
                break;
            default:
                pricePerDay = 0;
        }

        if (pricePerDay > 0 && duration > 0) {
            const totalPrice = pricePerDay * duration;
            totalPayment.textContent = `Total Payment: $${totalPrice}`;
            payButton.style.display = "block";
        } else {
            totalPayment.textContent = "Please select a car and duration to calculate the payment.";
            payButton.style.display = "none";
        }
    });
});
