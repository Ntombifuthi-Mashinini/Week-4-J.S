function addNumbers(num1, num2) {
      const sum = num1 + num2;
      document.getElementById("addition").innerHTML = `The total is: ${sum}`;
    }

    addNumbers(10, 7);