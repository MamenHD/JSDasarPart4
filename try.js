// Menggunakan Try Catch dan finally di java script

try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti'); // throw ini berfungsi untuk membuat sebuah syntax error
    console.log('Mengakhiri program');
  } catch (err) {  // ini akan muncul jika try mengalami error (Mirip seperti if dan else)
    console.log('Karena ada error, blok ini akan dieksekusi');
  } finally { // Finally akan mengabaikan semua kondisi dari try dan catch (bisa dibilang kondisi introvert)
    console.log('Peduli apa gue');
  }
    
   
