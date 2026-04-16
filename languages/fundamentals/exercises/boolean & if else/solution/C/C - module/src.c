#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int is_3digits_palindrom(int number)
{
	int rightDigit = number % 10,
		leftDigit = number / 100;
	return rightDigit == leftDigit;
}

void Q4()
{
	int num = 707;
	printf("is %d palindrom: %d\n",
		num, is_3digits_palindrom(num));

	num = 237;
	printf("is %d palindrom: %d\n",
		num, is_3digits_palindrom(num));
}

int main()
{
	Q4();
	return 0;
}