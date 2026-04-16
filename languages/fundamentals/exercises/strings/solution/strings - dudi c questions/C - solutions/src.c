#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h> 
#include <string.h> 
#include <math.h> 

char lastChar(char s[])
{
	char ch = s[0];
	for (int i = 1; s[i]; i++)
	{
		ch = s[i];
	}
	return ch;
}

void Q1()
{
	char s[] = "MY String";
	printf("last char of %s is '%c'", s, lastChar(s));
}

void Q2()
{
	char s[20];
	for (int i = 0; i < 15; i++)
	{
		printf("Enter string: ", s);
		scanf("%s", s);
		if (s[0] == lastChar(s))
		{
			printf("%s\n", s);
		}
	}
}

void Q3()
{
	int countY = 0;
	char st[100] = { 0 };
	printf("Enter string: ");
	gets_s(st, 100);
	for (int i = 0; st[i]; i++)
	{
		if ((st[i + 1] == ' ' || st[i + 1] == '\0')
			&& st[i] == 'Y')
			countY++;
	}

	printf("Y count: %d", countY);
}

void Q4()
{
	char s1[100] = { 0 };
	char s2[100] = { 0 };

	printf("Enter 2 strings: ");
	scanf("%s", s1);
	scanf("%s", s2);

	char* longS = s1, * shortS = s2;

	if (strlen(s1) < strlen(s2))
	{
		longS = s2;
		shortS = s1;
	}

	if (strlen(longS) >= strlen(shortS) * 2)
	{
		printf("%s", longS);
	}
	else
	{
		printf("%s", shortS);
	}

}

void reverseString(char s[])
{
	int len = strlen(s);
	for (int i = 0, j = len - 1; i < j; i++, j--)
	{
		char tmp = s[i];
		s[i] = s[j];
		s[j] = tmp;
	}
}

void Q6()
{
	char s[] = "abcdef";
	printf("Original string \"%s\" \n", s);
	reverseString(s);
	printf("reversed \"%s\" \n", s);
}

unsigned count_occurences(const char s1[], const char s2[])
{
	int count_of_occurences = 0;
	for (int i = 0; s1[i]; i++)
	{
		int isContained = 1;
		for (int j = 0; s2[j]; j++)
		{
			if (s1[i + j] != s2[j])
			{
				isContained = 0;
				break;
			}
		}

		if (isContained)
			count_of_occurences++;
	}
	return count_of_occurences;
}

void Q7()
{
	char s1[] = "ababa", s2[] = "aba";
	printf("Count of s2 in s1 is %d", count_occurences(s1, s2));
}

int sumOfNumbersString(char s[])
{
	int currentNum = 0;
	int totalSum = 0;
	for (int i = 0; s[i]; i++)
	{
		if (s[i] >= '0' && s[i] <= '9')
		{
			int currentDigit = s[i] - '0';
			currentNum = currentNum * 10 + currentDigit;
		}
		else
		{
			totalSum += currentNum;
			currentNum = 0;
		}
	}

	totalSum += currentNum;

	return totalSum;
}

void Q8()
{
	char s[] = "600cw580d12";
	printf("Sum of numbers is string: %d", sumOfNumbersString(s));
}

void delete_char(char src[], char c)
{
	int count_ch = 0, j = 0;
	for (int i = 0; src[i]; i++)
	{
		if (src[i] != c)
		{
			src[j++] = src[i];
		}
	}

	src[j] = '\0';
}

void Q9()
{
	char s[] = "e-r-e-t-z-n-e-h-e-d-e-r-e-t";
	delete_char(s, '-');
	printf(s);
}

int main()
{
	Q9();
	return 0;
}