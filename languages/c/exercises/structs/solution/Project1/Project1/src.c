#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

struct Student
{
	char name[20];
	int average;
	int id;
} typedef Student_t;

int getBestStudentId(Student_t students[], int size) {
	int maxAverage = 0;
	int bestStudentId = 0;
	for (int i = 0; i < size; ++i) {
		if (students[i].average > maxAverage) {
			maxAverage = students[i].average;
			bestStudentId = students[i].id;
		}
	}
	return bestStudentId;
}

void Q1()
{
	Student_t s1 = { "Moshe", 40, 1 };
	Student_t s2 = { "Yosef", 60, 2 };
	Student_t s3 = { "Haim", 96, 3 };

	Student_t students[] = { s1,s2,s3 };
	int size = sizeof(students) / sizeof(students[0]);
	int bestStudentId = getBestStudentId(students, size);

	printf("id: %d", bestStudentId);
}

struct Time
{
	char h;
	int m;
	int s;
} typedef MyTime_t;

MyTime_t getTimeBetween(MyTime_t t1, MyTime_t t2)
{
	int secSum = t2.h * 3600 + t2.m * 60 + t2.s;
	secSum -= t1.h * 3600 + t1.m * 60 + t1.s;

	MyTime_t res;
	res.h = secSum / 3600;
	res.m = secSum / 60 % 60;
	res.s = secSum % 60;

	return  res;
}

void Q2()
{
	MyTime_t t1 = { 2, 30, 15 }; // 02:30:15
	MyTime_t t2 = { 4, 45, 20 }; // 04:45:20
	MyTime_t timeDifference = getTimeBetween(t1, t2);

	printf("%02d:%02d:%02d\n",
		timeDifference.h, timeDifference.m, timeDifference.s);
}

struct Point {
	int x, y;
} typedef Point_t;
struct Square {
	Point_t topLeft, bottomRight;
} typedef Square_t;
int isPointInSquare(Square_t s, Point_t p)
{
	return (p.x > s.topLeft.x && p.x < s.bottomRight.x)
		&& (p.y < s.topLeft.y && p.y > s.bottomRight.y);
}
void Q3()
{
	Square_t s = { 0 };
	printf("Enter top left point coordinates (x, y)\n");
	scanf("%d %d", &s.topLeft.x, &s.topLeft.y);

	printf("Enter bottom right point coordinates (x, y)\n");
	scanf("%d %d", &s.bottomRight.x, &s.bottomRight.y);

	Point_t p = { 0 };

	printf("Enter 3rd point coordinates (x, y)\n");
	scanf("%d %d", &p.x, &p.y);

	printf("result: %d\n", isPointInSquare(s, p));
}
void getDiffTime(MyTime_t* t1, MyTime_t* t2, MyTime_t* diffTime)
{
	int secSum = t2->h * 3600 + t2->m * 60 + t2->s;
	secSum -= t1->h * 3600 + t1->m * 60 + t1->s;

	diffTime->h = secSum / 3600;
	diffTime->m = secSum / 60 % 60;
	diffTime->s = secSum % 60;
}
void Q4()
{
	MyTime_t t1 = { 2, 30, 15 }; // 02:30:15
	MyTime_t t2 = { 4, 45, 20 }; // 04:45:20 
	MyTime_t diffTime; // 02:15:05
	getDiffTime(&t1, &t2, &diffTime);
	printf("%02d:%02d:%02d\n",
		diffTime.h, diffTime.m, diffTime.s);
}

int main()
{
	Q4();
	/*
	MyTime_t t = { 10,14,30 };

	MyTime_t* pT = &t;

	printf("%d:%d:%d\n", t.h, t.m, t.s);
	printf("%d:%d:%d\n", pT->h, pT->m, pT->s);
	*/
	/*
	int size;
	printf("Enter how many int you want\n");
	scanf("%d", &size);

	int* intArr = (int*)calloc(size, sizeof(int));

	// check if memory not allocated
	if (intArr == NULL)
	{
		printf("No memory to allocate\n");
		return 1;
	}

	for (int i = 0; i < size; i++)
	{
		intArr[i] = i + 1;
	}

	for (int i = 0; i < size; i++)
	{
		printf("%d\n", intArr[i]);
	}

	free(intArr);
	*/

	/*
	int* p = malloc(sizeof(int));
	printf("%p\n", p);
	free(p);
	*p = 5;
	printf("%d\n", *p);

	int* p2 = malloc(sizeof(int));
	*p2 = 10;

	printf("%p\n", p);
	printf("%p\n", p2);
	printf("%d\n", *p);
	printf("%d\n", *p2);
	free(p2);
	*/
	return 0;
}
