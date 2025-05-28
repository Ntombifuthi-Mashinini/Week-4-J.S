const moodSelect = document.getElementById('moodSelect');
const suggestionBox = document.getElementById('suggestion');

moodSelect.addEventListener('change', function () {
  const mood = moodSelect.value;
  let suggestion = '';

  switch (mood) {
    case 'happy':
      suggestion = 'Play some upbeat pop music!';
      break;
    case 'sad':
      suggestion = 'Maybe a slow acoustic playlist would help.';
      break;
    case 'excited':
      suggestion = 'Turn on your favorite dance tracks!';
      break;
    case 'relaxed':
      suggestion = 'Lo-fi beats are perfect to chill out.';
      break;
    default:
      suggestion = 'Select a mood to get music suggestions.';
  }

  suggestionBox.textContent = suggestion;
});
