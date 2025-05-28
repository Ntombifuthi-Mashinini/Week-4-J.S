function convertAndAdd() {
      const input = document.getElementById("inputValue").value.trim();

      const isValid = /^[0-9]+(\.[0-9]+)?$/.test(input);

      if (isValid) {
        const number = parseFloat(input);
        const final = number + 5;
        document.getElementById("result").textContent =
          `You typed "${input}". After converting to a number and adding 5, the result is ${final}.`;
      } else {
        document.getElementById("result").textContent =
          `"${input}" is not a valid number. Please type digits like 10 or 3.5.`;
      }
    }