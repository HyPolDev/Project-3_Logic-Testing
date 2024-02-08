export const fn = (a, b, c) => {
   if (a < 0 || b < 0 || c < 0 || a + b + c >= 40 || (a + b + c) % 3 != 0) {
      throw Error
   }
   else {
      return Math.ceil((a * 12 + b * 14 + c * 16) / 3)
   }
};

