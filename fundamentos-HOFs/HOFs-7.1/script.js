function generateEmail(nome) {
    const email = nome.toLowerCase().replace(' ', '_');
    return { nome, email: `${email}@trybe.com`};
};

const newEmployees = (generateEmail) => {
    const employees = {
      id1: generateEmail('Pedro Guerra'),
      id2: generateEmail('Luiza Drumond'),
      id3: generateEmail('Carla Paiva'),
    };
    return employees;
  };
  console.log(newEmployees(generateEmail));