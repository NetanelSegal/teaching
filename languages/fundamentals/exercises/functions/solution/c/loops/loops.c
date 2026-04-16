#define _CRT_SECURE_NO_WARNINGS
#define _USE_MATH_DEFINES 

#include <stdio.h>
#include <math.h>

int sumOfDigits(int num)
{
	int sum = 0;
	while (num > 0) {
		sum += num % 10;
		num /= 10;
	}
	return sum;
}

void Q1()
{
	int left, right;
	printf("Enter two positive integers (left and right) such that left < right: ");
	scanf("%d %d", &left, &right);

	if (left >= right)
	{
		printf("Invalid input: left should be less than to right.\n");
		return;
	}

	int maxSum = 0;
	int numWithMaxSum = 0;

	for (int i = left; i <= right; i++)
	{

		int currentSum = sumOfDigits(i);
		if (currentSum > maxSum)
		{
			maxSum = currentSum;
			numWithMaxSum = i;
		}
	}

	printf("The number between %d and %d with the maximum sum of digits is: %d\n", left, right, numWithMaxSum);
}

int isMoreEvenThanOddDigit(int n)
{
	int evenCount = 0;
	int oddCount = 0;

	while (n > 0) {

		if (n % 2 == 0) evenCount++;
		else oddCount++;

		n /= 10;
	}

	if (evenCount > oddCount) return 1;
	else if (evenCount < oddCount) return -1;

	return 0;
}

void Q2()
{
	int num;
	printf("Enter a positive integer: ");
	scanf("%d", &num);

	int isMoreEven = isMoreEvenThanOddDigit(num);
	if (isMoreEven == 1) {
		printf("More even digits.\n");
	}
	else if (isMoreEven == -1) {
		printf("More odd digits.\n");
	}
	else {
		printf("The number of even digits is equal to the number of odd digits.\n");
	}
}

unsigned long reverse(unsigned long n) {
	unsigned long reversed = 0;

	while (n > 0) {
		int digit = n % 10;
		reversed = reversed * 10 + digit;
		n /= 10;
	}

	return reversed;
}

void Q3()
{
	printf("%d", reverse(978));
	printf("%d", reverse(12345));
	printf("%d", reverse(8765));
	printf("%d", reverse(12));
}

int digCount(int num) {
	int count = 0;
	while (num > 0)
	{
		count++;
		num /= 10;
	}

	return count;
}

unsigned long merge(unsigned int a, unsigned int b)
{
	int aDigCount = digCount(a), bDigCount = digCount(b);
	a = reverse(a);
	b = reverse(b);

	unsigned long res = 0;

	while (aDigCount > 0 || bDigCount > 0) {
		if (aDigCount > 0) {
			res *= 10;
			if (a > 0)
			{
				res += a % 10;
				a /= 10;
			}
			aDigCount--;
		}

		if (bDigCount > 0) {
			res *= 10;
			if (b > 0)
			{
				res += b % 10;
				b /= 10;
			}
			bDigCount--;
		}
	}
	return res;
}

void Q4()
{
	printf("Merged result: %lu\n", merge(1293, 3456));
	printf("Merged result: %lu\n", merge(415, 34));
	printf("Merged result: %lu\n", merge(27, 1009));
	printf("Merged result: %lu\n", merge(1000, 1000));
}

void Q5()
{
	printf("%6d\n", 1);
	printf("%6d\n", 11);
	printf("%6d\n", 111);
	printf("%6d\n", 1111);
	printf("%6d\n", 11111);
	printf("%6d\n", 111111);

	printf("%3d\n", 11111);
	printf("%-6d\n", 111);

	printf("%8.2f\n", 3.345);
	printf("%-8.2f%d\n", 3.345, 2);
	printf("%08.2f\n", 3.345);
}

void Q6()
{
	for (int i = 1000; i <= 9999; i++) {
		int left = i / 100;
		int right = i % 100;
		int sum = (left + right);

		if (sum * sum == i) printf("%d\n", i);
	}
}

void Q7()
{
	float r1, r2;
	printf("Enter two different float values for the circles' radii (first < second): ");
	scanf("%f %f", &r1, &r2);

	float area1 = M_PI * r1 * r1;
	float area2 = M_PI * r2 * r2;

	float perimeter1 = 2 * M_PI * r1;
	float perimeter2 = 2 * M_PI * r2;

	float ring_area_subtraction = area2 - area1;

	float ring_area_perimeter_avg = ((perimeter1 + perimeter2) / 2) * (r2 - r1);

	printf("Ring area (by subtracting areas): %f\n", ring_area_subtraction);
	printf("Ring area (by perimeter average): %f\n", ring_area_perimeter_avg);

}

float celsiusToFahrenheit(float celsius) {
	return (celsius * 9.0 / 5.0) + 32.0;
}

float fahrenheitToCelsius(float fahrenheit) {
	return (fahrenheit - 32.0) * 5.0 / 9.0;
}

void Q8()
{
	printf("Celsius | Fahrenheit\n");
	printf("=====================\n");

	for (int celsius = -273; celsius <= 101; celsius += 11) {
		float fahrenheit = celsiusToFahrenheit(celsius);
		printf("%d \t %.2f\n", celsius, fahrenheit);
	}
}

int sumOfPower3(int num)
{
	int sum = 0;
	while (num > 0)
	{
		sum += pow(num % 10, 3);
		num /= 10;
	}

	return sum;
}


void Q9()
{
	for (int i = 100; i < 1000; i++)
	{
		if (sumOfPower3(i) == i)
			printf("sumOfPower3(%d) = %d\n", i, i);
	}
}


void Q10()
{
	for (int i = 10000; i <= 99999; i++) {
		if (reverse(i) == i * 4)
			printf("%d\n", i);
	}
}

int isValidId(long id)
{
	int sum = 0;
	for (int i = 0; i < 9; i++)
	{
		int digit = id % 10;
		digit *= (i % 2 + 1);
		sum = digit / 10 + digit % 10;
		id /= 10;
	}


	return sum % 10 == 0;
}

void Q11()
{
	long id;
	printf("Enter your id: \n");
	scanf("%ld", &id);

	while (!(id >= 100000000 && id <= 999999999))
	{
		printf("Missing digits\n");
		printf("Enter your id: \n");
		scanf("%ld", &id);
	}

	if (isValidId(id)) printf("Id is valid");
	else printf("Id isn't valid");

}


int main()
{
	Q4();
}