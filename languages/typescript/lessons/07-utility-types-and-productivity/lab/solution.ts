/**
 * LAB 07 SOLUTION
 */

interface AppSettings {
    theme: "light" | "dark";
    notifications: boolean;
    fontSize: number;
    language: "en" | "he";
}

function updateSettings(current: AppSettings, updates: Partial<AppSettings>): AppSettings {
    return { ...current, ...updates };
}


interface FullUser {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    lastLogin: Date;
}

type UserSummary = Pick<FullUser, "id" | "name">;
type SafeUser = Omit<FullUser, "passwordHash">;


type Roles = "admin" | "editor" | "viewer";
const permissions: Record<Roles, string[]> = {
    admin: ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"]
};

export {};
