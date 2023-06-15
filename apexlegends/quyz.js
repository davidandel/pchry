function checkAnswers() {
    var form = document.getElementById("quiz-form");
    var resultsDiv = document.getElementById("results");
    var result1 = document.getElementById("result1");
    var result2 = document.getElementById("result2");
    var result3 = document.getElementById("result3");
    var result4 = document.getElementById("result4");
  
    var score = 0;
  
    if (form.question1.value === "c") {
      score++;
      result1.innerHTML = "Odpověď na otázku 1 je správná!";
    } else {
      result1.innerHTML = "Odpověď na otázku 1 je nesprávná. Správná odpověď je: c) Respawn Entertainment";
    }
  
    if (form.question2.value === "b") {
      score++;
      result2.innerHTML = "Odpověď na otázku 2 je správná!";
    } else {
      result2.innerHTML = "Odpověď na otázku 2 je nesprávná. Správná odpověď je: b) Battle Royale";
    }
  
    if (form.question3.value === "c") {
      score++;
      result3.innerHTML = "Odpověď na otázku 3 je správná!";
    } else {
      result3.innerHTML = "Odpověď na otázku 3 je nesprávná. Správná odpověď je: c) K poskytování taktických výhod v boji";
    }
  
    if (form.question4.value === "a") {
      score++;
      result4.innerHTML = "Odpověď na otázku 4 je správná!";
    } else {
      result4.innerHTML = "Odpověď na otázku 4 je nesprávná. Správná odpověď je: a) Přežít a stát se posledním týmem nebo hráčem naživu";
    }
  
    resultsDiv.style.display = "block";
  }
  