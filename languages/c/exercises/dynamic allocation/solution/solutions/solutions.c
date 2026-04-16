#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

#define CHILD_COUNT 10
struct Person
{
	char name[15];
	int id;
}typedef Person_t;

struct Family
{
	Person_t dad, mom;
	Person_t* children[CHILD_COUNT];
}typedef Family_t;

Family_t* scanFamily(Family_t* f)
{
	printf("Let's scan a family details\n");

	printf("Enter dad name and id (string[15], int): ");
	scanf("%s", &f->dad.name);
	scanf("%d", &f->dad.id);

	printf("Enter mom name and id (string[15], int): ");
	scanf("%s", &f->mom.name);
	scanf("%d", &f->mom.id);

	for (size_t i = 0; i < CHILD_COUNT; i++)
	{
		printf("Child #%d\n", (i + 1));

		f->children[i] = (Person_t*)malloc(sizeof(Person_t));

		if (!f->children[i])
		{
			printf("Couldnt allocate memory");
			return NULL;
		}

		printf("Enter name and id (string[15], int):");
		scanf("%s", &f->children[i]->name);
		scanf("%d", &f->children[i]->id);
	}

	return f;
}

void printFamily(const Family_t* f)
{
	printf("Dad's Name: %s\n", f->dad.name);
	printf("Dad's ID: %d\n\n", f->dad.id);

	printf("Mom's Name: %s\n", f->mom.name);
	printf("Mom's ID: %d\n\n", f->mom.id);

	for (int i = 0; i < 10; i++)
	{
		if (f->children[i] != NULL)
		{
			printf("Child #%d Name: %s\n", i + 1, f->children[i]->name);
			printf("Child #%d ID: %d\n\n", i + 1, f->children[i]->id);
		}
	}
}

void main()
{

	Family_t myFamily = { 0 }; // Initialize the family structure

	// Initialize children pointers to NULL
	for (size_t i = 0; i < 10; i++)
	{
		myFamily.children[i] = NULL;
	}

	scanFamily(&myFamily); // Scan family details from user input
	printFamily(&myFamily); // Print family details

	for (size_t i = 0; i < 10; i++)
	{
		free(myFamily.children[i]);
	}
}