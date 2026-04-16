#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int isPerfectNumber(int num) {
	int sum = 0;

	for (int i = 1; i <= num / 2; i++) {
		if (num % i == 0) {
			sum += i;
		}
	}


	if (sum == num) {
		return 1;
	}
	else {
		return 0;
	}
}

void q1() {
	int start, end;

	// Input the range
	printf("Input the start: ");
	scanf("%d", &start);
	printf("Input the end: ");
	scanf("%d", &end);

	printf("Perfect numbers between %d and %d are:\n", start, end);

	for (int i = start; i <= end; i++) {
		if (isPerfectNumber(i)) {
			printf("%d ", i);
		}
	}
	printf("\n");
}

int isPalindrome(int n) {
	int reversed = 0;
	int original = n;

	while (n != 0) {
		reversed *= 10;
		reversed += n % 10;
		n /= 10;
	}

	return original == reversed;
}

void q2() {
	int num;
	printf("Input a number: ");
	scanf("%d", &num);

	if (isPalindrome(num)) {
		printf("%d is a palindrome number.\n", num);
	}
	else {
		printf("%d is not a palindrome number.\n", num);
	}
}



void q3() {
	int n, curr = 1, prev = 0;
	printf("Enter how many numbers from fib: ");
	scanf("%d", &n);

	for (int i = 0; i < n; i++)
	{
		if (i == 0)
		{
			printf("0 ");
		}
		else if (i == 1)
		{
			printf("1 ");
		}
		else
		{
			int tmp = prev + curr;
			printf("%d ", tmp);
			prev = curr;
			curr = tmp;
		}
	}
}

int main() {
	q3();
	return 0;
}