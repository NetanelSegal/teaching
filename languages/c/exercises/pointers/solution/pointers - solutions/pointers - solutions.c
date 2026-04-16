#include <stdio.h>
#include <string.h>

char* MyStrcpy(char* destination, const char* source)
{
	int i;
	for (i = 0; *(source + i); i++)
	{
		*(destination + i) = *(source + i);
	}
	*(destination + i) = '\0';
	return destination;
}

void Q3()
{
	char crr[100] = "";
	printf("crr before: %s\n", crr);
	MyStrcpy(crr, "Hello World");
	printf("crr after: %s\n", crr);
}

char* MyStrncpy(char* destination, const char* source, size_t num)
{
	int i;
	for (i = 0; *(source + i) && i < num; i++)
	{
		*(destination + i) = *(source + i);
	}

	while (i < num)
	{
		*(destination + i) = '\0';
		i++;
	}
}

void Q4()
{
	char crr[100] = "a";
	printf("crr before: %s\n", crr);
	MyStrncpy(crr, "Bobb", 10);
	printf("crr after: %s\n", crr);
}

char* MyStrcat(char* destination, const char* source)
{
	int destLen = strlen(destination);
	MyStrcpy(destination + destLen, source);
}

void Q5()
{
	char crr[10] = "bib";
	char crr2[] = "bob";
	MyStrcat(crr, crr2); // => bibbob
	printf(crr);
}

void swap(int* n1, int* n2)
{
	int tmp = *n1;
	*n1 = *n2;
	*n2 = tmp;
}

int main()
{

	/*
	int x = 5, y = 10;

	printf("x: %d\n", x);
	printf("y: %d\n", y);

	printf("&x: %p\n", &x);
	printf("&y: %p\n", &y);

	int* pX = &x;
	int* pY = &y;

	printf("pX: %p\n", pX);
	printf("pY: %p\n", pY);


	*pX = 10;
	printf("x: %d\n", x);
	printf("y: %d\n", y);

	printf("pX: %p\n", pX);
	printf("pY: %p\n", pY);
	*/

	//int x = 5, y = 10;

	//swap(&x, &y);

	//printf("x: %d\ny: %d\n", x, y);


	//int arr[] = { 1,2,3 };
	//int x = 6;
	//int* pX = &x;

	char s[] = "asd";
	for (int i = 0; i < 3; i++)
	{
		printf("%d", strlen(s + i));
	}


	/*
	printf("%p\n", &arr + 1);
	printf("%p\n", (arr + 3));
	printf("%p\n", arr);
	printf("%p\n", arr + 1);
	printf("%p\n", &arr[1]);
	*/
	Q4();
	return 0;
}
