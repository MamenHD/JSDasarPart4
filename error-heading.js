// Error Handling dalam Java Script

const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error('Pembayaran kurang');
}

/* Jika paid lebih rendah dari price dia akan mengalami 
syntax error karena tidak terpenuhi */
