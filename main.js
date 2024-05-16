const inp = document.getElementById("passwordvalue");
const length = 12;

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

const createpassword = () => {
  let password = "";
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  const allcharacters = lowerCase + upperCase + numbers + specialChars;

  while (length > password.length) {
    password += allcharacters[Math.floor(Math.random() * allcharacters.length)];
  }

  inp.value = password;
};

const copypassword = () => {
  if (inp.value.length === 0) {
    return alert('please generate password first');
  }
  inp.select();
  navigator.clipboard.writeText(inp.value);
};
