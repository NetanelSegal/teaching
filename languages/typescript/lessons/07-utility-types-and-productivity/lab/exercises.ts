/**
 * LAB 07: Utility Types
 * 
 * TASK:
 * 1. Use `Partial` for an `updateSettings` function.
 * 2. Use `Pick` to create a `UserSummary`.
 * 3. Use `Omit` to create a `SafeUser`.
 * 4. Use `Record` to map roles to permissions.
 */

interface AppSettings {
    theme: "light" | "dark";
    notifications: boolean;
    fontSize: number;
    language: "en" | "he";
}

// TODO: Implement updateSettings(current: AppSettings, updates: Partial<AppSettings>)
// It should merge the updates into current.


interface FullUser {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    lastLogin: Date;
}

// TODO: Create a type 'UserSummary' by picking 'id' and 'name'
// TODO: Create a type 'SafeUser' by omitting 'passwordHash'


// TODO: Create a 'PermissionsMap' using Record
// Keys: "admin", "editor", "viewer"
// Values: string[] (e.g. ["read", "write"])

export {};
