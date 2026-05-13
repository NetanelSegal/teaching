# Project 02: Social Network Analytics

## 🌟 The Challenge
You are a Lead Data Analyst at **"Connectify,"** a rising social media platform. The management team needs to understand user behavior to improve the app. You need to write complex queries to find influencers, detect inactive users, and analyze post engagement.

## 🧠 Program Logic Flow
1.  **Map the Graph**: Understand how `users`, `posts`, `likes`, and `follows` tables interact.
2.  **Complex Joins**: Connect users with their followers and their posts' likes.
3.  **Subqueries & CTEs**: Use nested logic to find "Power Users" (those who post more than the average).
4.  **Ranking**: Use Window Functions to rank users by their total engagement.

## 🛠️ Implementation Tasks

### Phase 1: The Social Graph
- **Task 1.1: Relationships**
  - Create a `follows` table with `follower_id` and `following_id`. Ensure a user cannot follow themselves! (Hint: Use a `CHECK` constraint).
  - Create a `likes` table connecting `user_id` and `post_id`.

### Phase 2: User Engagement
- **Task 2.1: The Influencer List**
  - Find the top 5 users with the highest number of followers.
- **Task 2.2: Ghost Users**
  - Find all users who have never made a post and never liked a post.
- **Task 2.3: Most Popular Posts**
  - List the top 10 posts with the most likes, including the author's name and the post content.

### Phase 3: Advanced Metrics
- **Task 3.1: The Power User Index (CTE)**
  - Use a CTE to find users whose total post count is higher than the average post count of all users.
- **Task 3.2: Monthly Active Users (MAU)**
  - Group users by the month they joined and show the growth of the platform over time.

## 🚀 Going Beyond (Stretch Goals)
- **Mutual Follows**: Write a query to find pairs of users who follow each other.
- **Trending Topics**: Add a `tags` table and find the most used tag in the last 7 days.
- **Engagement Rate**: Calculate the engagement rate for each user: `(Total Likes received) / (Total Followers)`.

## 📚 Standard Resources
- [SQL Module 07: Joins](../../lessons/07-joins/README.md)
- [SQL Module 13: Advanced Topics](../../lessons/13-advanced-topics/README.md)
- [Grading Rubric](../../../../exams_solutions/grading_rubric.md)
