#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define TOTOSIZE 15
#define A 'c'
#define B 'b'
#define C 'd'
#define D 'a'


void q1()
{
	int d = 0, i;
	char score;

	for (i = 1; i <= TOTOSIZE; i++) {
		printf("Round: %d\n", i);

		scanf_s(" %c", &score, 1);
		if (score == 'X')
			d++;

	}
	printf("%d", d);
}

void q2()
{
	int num1, num2, sum = 0;
	printf("Calculate sum between two numbers\n");
	printf("Enter two numbers\n");
	scanf_s("%d %d", &num1, &num2);

	if (num1 > num2)
	{
		int tmp = num2;
		num2 = num1;
		num1 = tmp;
	}

	while (num1 <= num2)
	{
		sum += num1;
		num1++;
	}

	printf("sum: %d", sum);
}

void q3()
{
	int n, age, minAge = 100, maxAge = 0;
	printf("Enter num of students\n");
	scanf_s("%d", &n);

	printf("Enter student #%d age:\n", 1);
	scanf_s("%d", &age);

	minAge = age, maxAge = age;

	for (int i = 1; i < n; i++)
	{
		printf("Enter student #%d age:\n", i + 1);
		scanf_s("%d", &age);

		if (age < minAge) minAge = age;
		else if (age > maxAge) maxAge = age;

	}

	if (maxAge - minAge > 3) printf("heterogeneous");
	else printf("Homogeneous");

}

void q4()
{
	int m, n, max = 0, curr, isFound = 0;

	printf("Enter m to be the target number(m > 1):\n");
	scanf_s("%d", &m); // 10

	printf("Enter n (n > 1) n is the number of numbers to scan:\n");
	scanf_s("%d", &n); // 3


	for (int i = 0; i < n; i++)
	{
		printf("Enter num #%d:\n", i + 1);
		scanf_s("%d", &curr);

		if (i > 0 && curr + max > m)
		{
			isFound = 1;
			break;
		}

		if (curr > max) max = curr;

	}

	if (isFound)
		printf("curr: %d, max: %d, m: %d\n%d + %d > %d\n", curr, max, m, curr, max, m);
	else
		printf("No pair adds up to a value greater than %d.\n", m);

}

void q5() {
	int row_rook = 1, col_rook = 4;
	int row_bishop = 2, col_bishop = 3;

	if ((row_rook + col_rook) % 2 == 0) printf("rook is on a black spot\n");
	else printf("rook is on a white spot\n");

	if (row_rook == row_bishop || col_rook == col_bishop)
		printf("rook is threatening bishop\n");

	if (((row_bishop - row_rook)) == ((col_bishop - col_rook)))
		printf("bishop is threatening rook\n");

	// bishop 1/2
	// rook 4/5


}

void q6() {
	int counter = 0, vote, i = 0;

	while (i < 41)
	{
		printf("enter 1 or 2:\n");
		scanf_s(" %d", &vote);

		if (vote == 1) counter++;
		else counter--;

		i++;
	}

	if (counter > 0) printf("1 won");
	else printf("2 won");

}

void q7() {
	int timeInSec;
	printf("Enter time in seconds:\n");
	scanf_s("%d", &timeInSec);

	printf("Formated time:\n");
	int h = timeInSec / 3600;
	int m = timeInSec % 3600 / 60;
	int s = timeInSec % 60;

	printf("%d:%d:%d\n", h, m, s);
}

void q8_a(int x, int y) {
	if (x > 0 || y < x)
		printf("A");
	else
		printf("B");
}

void q8_b(int x, int y) {
	if (!(x <= 0 && y >= x))
		printf("A");
	else
		printf("B");
}

void q8() {
	int x, y;
	printf("Enter x and y:\n");
	scanf_s("%d %d", &x, &y);
	q8_a(x, y);
	q8_b(x, y);
}

void q9()
{
	char a = C, b = 'd', c = D, d = a;
	printf("%c %c %c %c", b, 'c', B, c);
}

void q10()
{
	int fNum, diff, nNums;
	printf("Lets build a geometric sequence\n");
	printf("Enter values in this order:\n");
	printf("1 - first num in the sequence\n");
	printf("2 - the differece between numbres\n");
	printf("3 - how many numbers in the sequence\n");

	scanf_s("%d %d %d", &fNum, &diff, &nNums);

	int targetNum = (int)(pow(3, nNums) * fNum);

	while (fNum < targetNum)
	{
		printf("%d, ", fNum);
		fNum *= diff;
	}

	//for (size_t i = 0; i < nNums; i++)
	//{	
	//	printf("%d, ", fNum);
	//	fNum = fNum * diff;
	//}
}

void q11()
{
	int sum = 0, i = 0;

	for (i = 3; i < 1000; i += 3)
	{
		sum += i;
	}

	for (i = 5; i < 1000; i += 5)
	{
		if (!(i % 3) == 0)
		{
			sum += i;
		}
	}

	printf("sum: %d", sum);
}

void q12()
{
	int num;
	printf("Enter a number that 1<= number <= 18:\n");
	scanf_s("%d", &num);

	int leftDig, rightDig;

	for (size_t i = 10; i < 100; i++)
	{

		leftDig = i / 10;
		rightDig = i % 10;

		if (leftDig + rightDig == num) printf("%d, ", i);

	}
}

void q13()
{
	// 10 - 100
	// אם המונה אחרי מחיקת הספרה הימינית חלקי המכנה בלי השמאלית
	// שווה למונה חלקי המכנה
	// להדפיס

	for (size_t b = 10; b < 100; b++)
	{
		for (size_t a = 10; a < 100; a++)
		{
			int aRight = a % 10;
			int aLeft = a / 10;
			int bRight = b % 10;
			int bLeft = b / 10;

			if (a != b && aRight == bLeft && (double)aLeft / bRight == (double)a / b)
			{
				printf("a/b = %d/%d\n", a, b);
			}
		}
	}
}

int main()
{
	/*
	int grade;

	for (int i = 0; i < 10; i++)
	{
		printf("Enter grade: ");
		scanf("%d", &grade);

		if (grade > 90)
		{
			printf("%d student grade = A", (i + 1));
		}
		else if (grade > 80)
		{
			printf("%d student grade = B", (i + 1));
		}
		else
		{
			printf("%d student grade = C", (i + 1));
		}
	}
	*/
	/*
	int age = 55;
	// if x > 20 =>
	int isValidAge = age >= 18 || age < 40;

	printf("result of boolean expretion: %d\n", isValidAge);

	while (age < 100)
	{
		scanf("%d", &age);
	}
	printf("after loop %d\n", age);
	*/
}
