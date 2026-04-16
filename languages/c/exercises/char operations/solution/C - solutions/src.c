#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>


void Q1()
{
	char ch;
	printf("Enter char: ");
	scanf("%c", &ch);
	printf("Next char: %c\n", ch + 1);
}

void Q2()
{
	char ch;
	printf("Enter char: ");
	scanf("%c", &ch);

	int numChar = ch - '0';

	printf("Char: %c * 10 = %d\n", ch, numChar * 10);
	printf("Char: %c * 2 = %d\n", ch, numChar * 2);
}

int main()
{
	Q2();
	return 0;
}