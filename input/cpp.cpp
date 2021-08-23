#include <stdio.h>

int main() {
  int nume[52514];
  int i;
  int n;
  int carry = 0;
  int digit;
  int base = 10000;
  int denom;
  int first = 0;

  for (n = 52500; n > 0; n = n - 14) {
    carry = carry - (int)(carry / base) * base;
    digit = carry;
    for (i = n - 1; i > 0; i = i - 1) {
      denom = 2 * i - 1;
      carry = carry * i + base * (first ? nume[i] : (base / 5));
      nume[i] = carry - (int)(carry / denom) * denom;
      carry /= denom;
    }
    first = printf("%04d", digit + carry / base);
  }
  return 0;
}