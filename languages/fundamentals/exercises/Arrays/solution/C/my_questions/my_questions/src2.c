#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int sumOfArray(int array[], int size)
{
	int sum = 0;

	for (int i = 0; i < size; i++)
		sum += array[i];

	return sum;
}

void Q1()
{
	int arr[] = { 5, 3,6,9 },
		size = sizeof(arr) / sizeof(arr[0]);

	int res = sumOfArray(arr, size);
	printf("res: %d\n", res);
}

float averageOfArray(int arr[], int size)
{
	float sum = (float)sumOfArray(arr, size);
	return sum / size;
}

void Q2()
{
	int arr[] = { 5, 3,6,9 },
		size = sizeof(arr) / sizeof(arr[0]);

	float res = averageOfArray(arr, size);
	printf("res: %.2f\n", res);
}

int sumLargestSmallest(int arr[], int size)
{
	int max = 0, min = 0;
	min = max = arr[0];

	for (int i = 1; i < size; i++)
	{
		if (arr[i] > max)
		{
			max = arr[i];
		}
		else if (arr[i] < min)
		{
			min = arr[i];
		}
	}

	return max + min;
}

void Q3()
{
	int arr[] = { -5, 3,6,19, -100 },
		size = sizeof(arr) / sizeof(arr[0]);

	int res = sumLargestSmallest(arr, size);
	printf("res: %d\n", res);
}

int finalValueAfterOperations(char operations[], int size) {
	int x = 0;
	for (int i = 0; i < size; i++)
	{
		if (operations[i] == '+')
		{
			x++;
		}
		else
		{
			x--;
		}
	}
	return x;
}

void deletePositivesDuplicates(int arr[], int size)
{
	for (int i = 0; i < size; i++)
	{
		if (arr[i] > 0)
		{
			for (int j = i + 1; j < size; j++)
			{
				if (arr[i] == arr[j])
				{
					arr[j] = -1;
				}
			}
		}
	}
}

void Q5()
{
	int arr[] = { 1,2,1,3,4,4,7 }, size = sizeof(arr) / sizeof(arr[0]);
	deletePositivesDuplicates(arr, size);

	printf("[");
	for (int i = 0; i < size; i++)
	{
		printf("%d, ", arr[i]);
	}
	printf("]");
}

void rotateArrayElements(int arr[], int size)
{
	int tmp = arr[0];
	for (int i = 0; i < size - 1; i++)
	{
		arr[i] = arr[i + 1];
	}
	arr[size - 1] = tmp;
}

void Q6()
{
	int arr[] = { 1,2,3,4,5 };
	int size = 5;
	rotateArrayElements(arr, size);
	for (int i = 0; i < size; i++)
	{
		printf("%d, ", arr[i]);
	}
}

void printCharFrequency(char charr[], int size)
{
	int countsLowers[26] = { 0 };
	int countsUppers[26] = { 0 };
	for (int i = 0; i < size; i++)
	{
		int index = charr[i];

		printf("%d\n", charr[i] >= 'a');
		//if (charr[i] >= 'a' && charr <= 'z')
		//{
		//	index -= 'a';

		//	countsLowers[index]++;
		//}
		//else if (charr[i] >= 'A' && charr <= 'Z')
		//{
		//	index -= 'A';
		//	countsUppers[index]++;
		//}
	}
	/*
	for (int i = 0; i < 26; i++)
	{
		if (countsLowers[i])
		{
			printf("The char: %c exist %d times\n", i + 'a', countsLowers[i]);
		}
	}

	for (int i = 0; i < 26; i++)
	{
		if (countsUppers[i])
		{
			printf("The char: %c exist %d times\n", i + 'A', countsUppers[i]);
		}
	}
	*/
}

void Q7()
{
	char charr[] = { 'a', 'b' , 'C' , 'a' , 'A' };
	int size = sizeof(charr);
	//printCharFrequency(charr, size);
}

int main()
{
	//Q7();
	printf("hello");
	return 0;
}