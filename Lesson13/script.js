function checkValue() {
      const input = document.getElementById("userInput").value.trim();

      if (input === "") {
        document.getElementById("message").textContent = "Please type something.";
        return;
      }

      const onlyDigits = /^[0-9]+(\.[0-9]+)?$/; // matches whole numbers or decimals

      if (onlyDigits.test(input)) {
        const number = parseFloat(input);
        const result = number + 10;
        document.getElementById("message").textContent =
          `"${input}" works! Here's ${input} + 10 = ${result}`;
      } else {
        document.getElementById("message").textContent =
          `"${input}" can't be used in a math calculation. Try using digits like 5 or 42.`;
      }
    }