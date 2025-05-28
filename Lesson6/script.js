function changeText() {
      const currentText = document.getElementById("heading").innerHTML;

      if (currentText === "JavaScript") {
        document.getElementById("heading").innerHTML = "You're learning fast!";
      } else {
        document.getElementById("heading").innerHTML = "JavaScript";
      }
    }