#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>

void q1()
{
	for (int i = 1; i <= 10; i++)
	{
		printf("%d ", i);
	}
}

void q2()
{
	for (int i = 0; i <= 20; i += 2)
	{
		printf("%d ", i);
	}
	printf("\n");
	for (int i = 1; i <= 20; i += 2)
	{
		printf("%d ", i);
	}
}

int pow(int n, int k)
{
	int res = 1;
	for (int i = 0; i < k; i++)
	{
		res *= n;
	}
	return res;
}

void q3()
{
	int n, k;
	printf("Enter base and power: ");
	scanf("%d %d", &n, &k);
	printf("%d\n", pow(n, k));
}

void q4()
{
	int current, sum = 0;

	for (int i = 0; i < 10; i++)
	{
		printf("Enter number %d: ", i + 1);
		scanf("%d", &current);
		sum += current;
	}

	printf("%f", (float)sum / 10);
}

int main()
{
	q4();
}

