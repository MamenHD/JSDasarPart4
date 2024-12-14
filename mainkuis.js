function categorizeNumber(input) {
    // 1. Periksa apakah input adalah number
    if (typeof input !== "number") {
      throw new Error("Input harus berupa bilangan bulat");
    }
  
    // 2. Periksa apakah input adalah nol
    if (input === 0) {
      return "Nol";
    }
  
    // 3. Periksa apakah input adalah bilangan negatif
    if (input < 0) {
      return "Negatif";
    }
  
    // 4. Periksa apakah input adalah bilangan prima
    if (isPrime(input)) {
      return "Prima";
    }
  
    // 5. Periksa apakah input adalah bilangan genap
    if (input % 2 === 0) {
      return "Genap";
    }
  
    // 6. Jika tidak memenuhi semua kondisi di atas, maka bilangan ganjil
    return "Ganjil";
  }
  
  // Fungsi pembantu untuk memeriksa bilangan prima
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Contoh
  console.log(categorizeNumber(15)); // Output: "Ganjil"
  console.log(categorizeNumber(12)); // Output: "Genap"
  console.log(categorizeNumber(17)); // Output: "Prima"
  console.log(categorizeNumber(0));  // Output: "Nol"
  console.log(categorizeNumber(-5)); // Output: "Negatif"
  
  try {
    categorizeNumber("abc");
  } catch (error) {
    console.log(error.message);
  } // Output: "Input harus berupa bilangan bulat"
  
