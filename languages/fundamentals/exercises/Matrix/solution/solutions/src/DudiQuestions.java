public static void Q1() {
    Scanner in = new Scanner(System.in);

    // A:
    /*
    System.out.println("Enter char");
    char ch = in.next().toLowerCase().charAt(0);
    int aCount = 0, sCount = 0;
    while (ch != '.') {
        if (ch == 'a') {
            aCount++;
        } else if (ch == 'b') {
            sCount += aCount;
        }

        System.out.println("Enter char");
        ch = in.next().toLowerCase().charAt(0);
    }
    System.out.println("series count: " + sCount);
    */

    // B:
    /*
    char ch = in.next().toLowerCase().charAt(0);
    int aCount = 0, sCount = 0;
    while (ch != '.') {
        if (ch == 'a') {
            aCount++;
        } else if (ch == 'c') {
            aCount = 0;
        } else if (ch == 'b') {
            sCount += aCount;
        }

        System.out.println("Enter char");
        ch = in.next().toLowerCase().charAt(0);
    }
    System.out.println("series count: " + sCount);*/

    // C:
/*
    System.out.println("Enter char");
    char ch = in.next().toLowerCase().charAt(0);
    int aCount = 0, sCount = 0, acCount = 0;
    while (ch != '.') {
        if (ch == 'a') {
            aCount++;
        } else if (ch == 'c') {
            acCount = aCount;
            aCount = 0;
        } else if (ch == 'b') {
            sCount += acCount;
        }

        System.out.println("Enter char");
        ch = in.next().toLowerCase().charAt(0);
    }
    System.out.println("series count: " + sCount);
    */

    System.out.println("Enter char");
    char ch = in.next().toLowerCase().charAt(0);
    int aCount = 0, seriesAToBCount = 0, aWithoutCCount = 0, seriesAToBWithoutCCount = 0, seriesAToBWithCCount = 0, aWithCCount = 0;

    while (ch != '.') {
        if (ch == 'a') {
            aCount++;
            aWithoutCCount++;
        } else if (ch == 'c') {
            aWithCCount = aWithoutCCount;
            aWithoutCCount = 0;
        } else if (ch == 'b') {
            seriesAToBCount += aCount;
            seriesAToBWithoutCCount += aWithoutCCount;
            seriesAToBWithCCount += aWithCCount;
        }

        System.out.println("Enter char");
        ch = in.next().toLowerCase().charAt(0);
    }
    System.out.println("a to b series count: " + seriesAToBCount);
    System.out.println("a to b without c series count: " + seriesAToBWithoutCCount);
    System.out.println("a to b with one c series count: " + seriesAToBWithCCount);
}

static boolean isLowerTriangular(int[][] mat) {
    for (int i = 0; i < mat.length - 1; i++) {
        for (int j = i + 1; j < mat[0].length; j++) {
            if (mat[i][j] != 0) return false;
        }
    }
    return true;
}


static void Q4() {
    int[][] mat = {
            {11, 0, 0, 0},
            {-9, 2, 0, 0},
            {7, -5, 0, 0},
            {23, 0, 4, -5}
    };
    System.out.println("isLowerTriangular: " + isLowerTriangular(mat));
}


static boolean isUpperTriangular(int[][] mat) {
    for (int i = 1; i < mat.length; i++) {
        for (int j = 0; j < i; j++) {
            if (mat[i][j] != 0) return false;
        }
    }
    return true;
}


static void Q5() {
    int[][] mat = {
            {11, -9, 2, 7},
            {0, 2, 5, 1},
            {0, 0, 4, -3},
            {0, 0, 0, -5}
    };
    System.out.println("isUpperTriangular: " + isUpperTriangular(mat));
}

boolean isScalar(int[][] mat) {
    if (!(isUpperTriangular(mat) && isLowerTriangular(mat))) {
        return false;
    }

    int valueTOCheck = mat[0][0];
    for (int i = 1; i < mat.length; i++) {
        if (mat[i][i] != valueTOCheck) {
            return false;
        }
    }

    return true;
}

static void Q7() {
    int[][] mat = {
            {11, 0, 0, 0},
            {0, 11, 0, 0},
            {0, 0, 11, 0},
            {0, 0, 0, 11}
    };
    System.out.println("isUpperTriangular: " + isUpperTriangular(mat));
}


void main() {
    Q1();
}
