/**
 * Lesson 12 Lab: Capstone Project Synthesis
 * 
 * In this final lab, you will synthesize React Router, Zustand, 
 * TanStack Query, and TypeScript into a cohesive application.
 */

import React from 'react';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { create } from 'zustand';

// -------------------------------------------------------------
// 1. ZUSTAND STORE DEFINITIONS
// -------------------------------------------------------------
interface UserState {
  username: string;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  username: 'Guest',
  isLoggedIn: false,
  login: (name) => set({ username: name, isLoggedIn: true }),
  logout: () => set({ username: 'Guest', isLoggedIn: false })
}));

// -------------------------------------------------------------
// 2. DATA LOADERS & APIS (Using TanStack Query)
// -------------------------------------------------------------
const queryClient = new QueryClient();

interface Post {
  id: number;
  title: string;
  body: string;
}

function fetchPosts(): Promise<Post[]> {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to load posts');
      return res.json();
    });
}

// -------------------------------------------------------------
// 3. PAGE COMPONENTS
// -------------------------------------------------------------
function DashboardHome() {
  const { username, isLoggedIn, login, logout } = useUserStore();
  const [tempName, setTempName] = React.useState('');

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md">
      <h2 className="text-xl font-bold mb-4">Welcome back, {username}!</h2>
      
      {isLoggedIn ? (
        <div>
          <p className="text-slate-400 mb-4">You are logged into your portal.</p>
          <button 
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <p className="text-slate-400 mb-4">Log in to unlock administrative commands.</p>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Your username..." 
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none"
            />
            <button 
              onClick={() => {
                if (tempName.trim()) {
                  login(tempName.trim());
                  setTempName('');
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function PostsFeed() {
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['capstone-posts'],
    queryFn: fetchPosts
  });

  if (isLoading) return <div className="text-slate-400 text-center py-8 animate-pulse">Loading posts feed...</div>;
  if (error) return <div className="text-red-500 text-center py-8">Error: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-2">Live RSS API Feed</h2>
      {posts?.map((post) => (
        <div key={post.id} className="bg-slate-800 p-5 rounded-xl border border-slate-700">
          <h3 className="font-semibold text-blue-400 text-lg mb-2">{post.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

// -------------------------------------------------------------
// 4. CORE LAYOUT COMPONENT
// -------------------------------------------------------------
function Layout() {
  const username = useUserStore((state) => state.username);
  
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      <nav className="bg-slate-950 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="text-lg font-extrabold text-blue-500 tracking-wider">ORT CAPSTONE</h1>
          <div className="flex gap-4 text-sm font-semibold">
            <Link to="/" className="hover:text-blue-400 transition">Dashboard</Link>
            <Link to="/feed" className="hover:text-blue-400 transition">Live Feed</Link>
          </div>
        </div>
        <div className="text-xs bg-slate-800 px-3 py-1.5 rounded-full text-slate-300 border border-slate-700">
          User: <span className="font-bold text-green-400">{username}</span>
        </div>
      </nav>

      <main className="flex-grow max-w-4xl w-full mx-auto px-6 py-12">
        <Outlet />
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        ORT Software Engineering Curriculum © 2026. Fully typed React 19 SPA stack.
      </footer>
    </div>
  );
}

// -------------------------------------------------------------
// 5. ROUTING & EXPORT
// -------------------------------------------------------------
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <DashboardHome />
      },
      {
        path: 'feed',
        element: <PostsFeed />
      }
    ]
  }
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
