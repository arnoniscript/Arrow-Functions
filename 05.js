let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];

function showRandomAlert(name) {
  const(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
}

const result = showRandomAlert("maria");
console.log(result);
