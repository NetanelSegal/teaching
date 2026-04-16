#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>

#define MAX_SIZE 10
#define MAT_SIZE 4

void print2dArray(int arr[MAT_SIZE][MAT_SIZE], int rows, int columns)
{
	for (int i = 0; i < rows; i++)
	{
		for (int j = 0; j < columns; j++)
		{
			printf("%d", arr[i][j]);
			if (j < columns - 1) printf(", ");
		}
		printf("\n");
	}
}

void Q1_a()
{
	int n, sum = 0, countOfSmallerNums = 0;
	printf("Enter num: \n");
	scanf_s("%d", &n);
	printf("Lets calculate the avarege of %d numbers that are smaller then %d: \n", n, n);

	int current;
	for (size_t i = 0; i < n; i++)
	{
		printf("Enter number %u: ", i + 1);
		scanf_s("%d", &current);
		if (current < n)
		{
			sum += current;
			countOfSmallerNums++;
		}
	}

	printf("The avarege of the numbers that are smaller then %d is: %f\n"
		, n, ((float)sum / countOfSmallerNums));

}

void Q1_b()
{
	int numOfNums, sum = 0, countOfSmallerNums = 0, current;
	int nums[MAX_SIZE] = { 0 };

	printf("Enter count of numbers to input: \n");
	scanf_s("%d", &numOfNums);

	for (size_t i = 0; i < numOfNums; i++)
	{
		printf("Enter #%u number: ", i + 1);
		scanf_s("%d", &current);
		nums[i] = current;
	}

	int lastNum = nums[numOfNums - 1];

	for (size_t i = 0; i < numOfNums; i++)
	{
		current = nums[i];
		if (current < lastNum)
		{
			sum += current;
			countOfSmallerNums++;
		}

	}

	printf("The avarege of the numbers that are smaller then %d is: %f\n"
		, lastNum, ((float)sum / countOfSmallerNums));

}

void Q2()
{
	unsigned int digits[10] = { 0 }, num;

	printf("Enter number: ");
	scanf_s("%d", &num);

	while (num > 0)
	{
		digits[num % 10]++;
		num /= 10;
	}

	for (size_t i = 0; i < 10; i++)
	{
		if (digits[i] > 0)
		{
			printf("The digit %d appears %d times\n\n", i, digits[i]);
		}
	}
}

unsigned int findMissing(unsigned int a[], unsigned int n)
{
	// int sumOfSequence = n * (n + 1) / 2;

	int sumOfSequence = 0;

	for (size_t i = 1; i <= n; i++)
	{
		sumOfSequence += i;
	}

	for (size_t i = 0; i < n - 1; i++)
	{
		sumOfSequence -= a[i];
	}

	return sumOfSequence;
}

void Q3()
{
	//int a[] = { 3,1,4 }, n = 4;
	//int a[] = { 2,6,5,3,4}, n = 6;
	int a[] = { 1,3,2 }, n = 4;
	printf("%d", findMissing(a, n));
}

void Q4()
{
	int current, currOnesCount = 0;
	int countOfSeq[13] = { 0 };

	for (size_t i = 0; i < 12; i++)
	{
		printf("Enter 0/1: ");
		scanf_s("%d", &current);
		if (current == 1)
		{
			currOnesCount++;
		}
		else
		{
			countOfSeq[currOnesCount]++;
			currOnesCount = 0;
		}
	}

	if (currOnesCount != 0)
	{
		countOfSeq[currOnesCount]++;
	}

	for (size_t i = 1; i < 13; i++)
	{
		if (countOfSeq[i] > 0)
		{
			printf("%d sequences of %d ones\n", countOfSeq[i], i);
		}
	}
}

int midMax(float a, float b, float c)
{
	return b > a && b > c;
}

int countPeeks(int heights[], int size)
{
	int count = 0;
	for (size_t i = 1; i < size - 1; i++)
	{
		if (midMax(heights[i - 1], heights[i], heights[i + 1]))
		{
			count++;
		}
	}
	return count;
}

void Q5()
{
	int tops[] = { 206,350,300,167,406,310,328,250,200,120,400,380,435,200,337,200 };
	int size = sizeof(tops) / 4;
	printf("%d", countPeeks(tops, size));
}

float arithmeticMean(int a[], int n)
{
	float sum = 0;
	for (int i = 0; i < n; i++)
	{
		sum += a[i];
	}
	return sum / n;
}

float geometricMean(int a[], int n)
{
	float sum = 1.0;
	for (int i = 0; i < n; i++)
	{
		sum *= (float)a[i];
	}
	return pow(sum, 1.0 / n);
}

float harmonicMean(int a[], int n)
{
	float sum = 0;
	for (int i = 0; i < n; i++)
	{
		sum += (float)1 / a[i];
	}
	return n / sum;
}

void Q6()
{
	/*
	int a[] = {1,2,3,4,5}, n = 5;
	printf("arithmeticMean: %f", arithmeticMean(a, n));
	*/

	/*
	int a[] = {2,4,8}, n = 3;
	printf("geometricMean: %f", geometricMean(a, n));
	*/

	/*
	int a[] = {1,2,4}, n = 3;
	printf("harmonicMean: %f", harmonicMean(a, n));
	*/

	int a[] = { 1,2,3,4,5 }, n = sizeof(a) / sizeof(a[0]);

	printf("arithmeticMean: %f\n", arithmeticMean(a, n));
	printf("geometricMean: %f\n", geometricMean(a, n));
	printf("harmonicMean: %f\n", harmonicMean(a, n));
}

int remove_zeros(int a[], int n)
{
	int zeroIndex = 0;
	for (int i = 0; i < n; i++)
		if (a[i] != 0)
			a[zeroIndex++] = a[i];
	return zeroIndex;
}

int sumOfInner3X3Matrix(int matrix[][MAT_SIZE], int size, int currentRow, int currentColumn)
{
	int sum = 0;
	for (int i = currentRow - 1; i <= currentRow + 1; i++)
		for (int j = currentColumn - 1; j <= currentColumn + 1; j++)
			if (i >= 0 && i < size && j >= 0 && j < size)
				sum += matrix[i][j];

	return sum;
}

void Q8()
{
	int matA[MAT_SIZE][MAT_SIZE] = { 0 };
	for (int i = 0; i < MAT_SIZE; i++)
	{
		for (int j = 0; j < MAT_SIZE; j++)
		{
			printf("Enter value for matrix[%d][%d]: ", i, j);
			scanf("%d", &matA[i][j]);
		}
	}
	printf("Matrix A: \n");
	print2dArray(matA, MAT_SIZE, MAT_SIZE);
	printf("\n");
	int matB[MAT_SIZE][MAT_SIZE] = { 0 };
	for (int i = 0; i < MAT_SIZE; i++)
		for (int j = 0; j < MAT_SIZE; j++)
			matB[i][j] = sumOfInner3X3Matrix(matA, MAT_SIZE, i, j);

	printf("Matrix B: \n");
	print2dArray(matB, MAT_SIZE, MAT_SIZE);
	printf("\n");
}


void Q9()
{
	int matA[MAT_SIZE][MAT_SIZE] = { {1,2,3},{4,5,6},{7,8,9} };
	int matB[MAT_SIZE][MAT_SIZE] = { {1,1,4},{2,2,5},{3,3,6} };

	for (int i = 0; i < MAT_SIZE; i++)
	{
		for (int j = 0; j < MAT_SIZE; j++)
		{
			int isRowEqualsCol = 1;
			for (int k = 0; k < MAT_SIZE; k++)
				if (matA[i][k] != matB[k][j])
					isRowEqualsCol = 0;

			if (isRowEqualsCol)
				printf("Matrix A row %d == Matrix B column %d\n", i, j);
		}
	}
}

void Q11()
{
	int mat[MAT_SIZE][MAT_SIZE] = { 0 };
	for (int i = 0; i < MAT_SIZE; i++)
		for (int j = 0; j < MAT_SIZE; j++)
		{
			printf("Enter value for matrix[%d][%d]: ", i, j);
			scanf("%d", &mat[i][j]);
		}


	printf("Matrix before operations: \n");
	print2dArray(mat, MAT_SIZE, MAT_SIZE);
	printf("\n");

	for (int i = 0; i < MAT_SIZE; i++)
	{
		int minColIndex = 0;
		for (int j = 1; j < MAT_SIZE; j++)
		{
			if (mat[i][j] < mat[i][minColIndex])
				minColIndex = j;
		}

		int tmpMinValue = mat[i][minColIndex];
		mat[i][minColIndex] = mat[i][i];
		mat[i][i] = tmpMinValue;
	}

	printf("Matrix after operations: \n");
	print2dArray(mat, MAT_SIZE, MAT_SIZE);
	printf("\n");
}


void Q14()
{
	int a[] = { 0,5,0,1,-10,0 };
	int len = sizeof(a) / sizeof(a[0]);
	int newLen = remove_zeros(a, len);

	printf("[");
	for (int i = 0; i < len; i++)
	{
		if (i < newLen) printf("%d, ", a[i]);
		else printf("_, ");
	}
	printf("]");

}

void main() {
	//printf("Hello world");
	//Q1_a();
	//Q1_b();
	//Q2();
	//Q3();
	//Q4();
	//Q5();
	//Q6();
	//Q14();
	Q8();

	/*
	int D2Array[2][5] = { 0 };
	float avgs[2] = { 0 };

	for (int row = 0; row < 2; row++)
	{
		float avg = 0;
		for (int col = 0; col < 5; col++)
		{
			printf("Enter grade for class %d student %d: ", row + 1, col + 1);
			scanf("%d", &D2Array[row][col]);
			avg += D2Array[row][col];
		}
		avgs[row] = avg;
	}

	for (int row = 0; row < 2; row++)
	{
		for (int col = 0; col < 5; col++)
		{
			printf("%d, ", D2Array[row][col]);
		}
		printf(" - class avg: %d\n", avgs[row]);
	}
	*/

}