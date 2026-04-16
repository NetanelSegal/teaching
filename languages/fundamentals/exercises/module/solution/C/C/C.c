#define _CRT_SECURE_NO_WARNINGS
#define BALLS_IN_BAG 20
#include <stdio.h>

void Q1()
{
	int marblesCount, bagsCount = 0, remainderCount = 0;
	printf("Enter number of marbles: ");
	scanf("%d", &marblesCount);

	bagsCount = marblesCount / BALLS_IN_BAG;
	remainderCount = marblesCount % BALLS_IN_BAG;
	printf("bags: %d, left balls: %d\n", bagsCount, remainderCount);
}

void Q2()
{
	int mins;
	printf("Enter minuts: ");
	scanf("%d", &mins);
	printf("Hours: %d, minutes: %d\n", mins / 60, mins % 60);
}

int main()
{
	//Q2();

	char ch;
	printf("Enter char\n");
	scanf("%c", &ch);

	printf("next char is: %c\n", ++ch);
	return 0;

}

