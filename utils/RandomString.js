const generateRandomCharacter = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };
  
  const generateRandomString = (length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += generateRandomCharacter();
    }
    return result;
  };
  
  const RandomStrings = () => {
    return generateRandomString(5);
  };
  
  export default RandomStrings;
  