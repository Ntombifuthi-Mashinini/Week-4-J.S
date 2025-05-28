const input = document.querySelector("#userInput");
    const button = document.querySelector("#checkBtn");
    const result = document.querySelector("#result");

    button.addEventListener("click", () => {
      const value = input.value.trim();

      if (value === "") {
        result.textContent = "Please enter something.";
        result.style.color = "red";
        return;
      }

      const number = Number(value);

      if (isNaN(number)) {
        result.textContent = `"${value}" is not a valid number.`;
        result.style.color = "red";
      } else {
        const total = number + 10;
        result.textContent = `Valid! ${number} + 10 = ${total}`;
        result.style.color = "green";
      }
    });