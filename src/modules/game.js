const apiKey = 'gQxRXsSqZhbfITVQg4H7';
const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

const postScore = async () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  await fetch(apiUrl, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success', data);
    })
    .catch((error) => {
      console.error('Error', error);
    });
};

const displayScores = () => {
  const fetchScores = async () => {
    const scores = document.querySelector('#scores-table');
    scores.innerHTML = '';
    const response = await fetch(apiUrl);
    const data = await response.json();
    data.result.forEach((addedScore) => {
      scores.innerHTML += `
                <div class="score">
                    <div>${addedScore.user}:</div>
                    <div>${addedScore.score}</div>
                </div>`;
    });
  };
  fetchScores();
};

export { postScore, displayScores };
