# Topic 9: Git Hooks vs GitHub Actions

You asked an excellent question: *Are pre-commit and post-commit part of GitHub Actions?*

The short answer is **No!** They are a built-in feature of `git` itself, completely separate from GitHub Actions. 

Let's look at how they compare.

## 💻 1. Git Hooks (Local)
Git hooks (like `pre-commit` and `pre-push`) run locally **on your personal computer**.

- **When it runs:** The moment you type `git commit` in your terminal, before the code ever leaves your laptop.
- **Why use it:** For extremely fast, instant feedback. For example, you can use a tool like `husky` to run a code formatter (like Prettier). If your code is messy, the commit is instantly blocked!
- **The flaw:** They run on the *client-side*. A developer can easily bypass a local Git hook by simply typing `git commit --no-verify`. 

## ☁️ 2. GitHub Actions (Remote)
GitHub Actions run remotely **on GitHub's cloud servers**.

- **When it runs:** After you type `git push` and the code arrives at GitHub.
- **Why use it:** This is the **Source of Truth**. Even if a developer bypasses their local pre-commit hook, GitHub Actions will run the tests again in the cloud. If the code is bad, GitHub Actions catches it and blocks the Pull Request from being merged.

## 🤝 The Best Strategy: Use Both!
Principal Engineers use both systems in harmony to create a great developer experience:
1. Use **pre-commit hooks** locally so developers get instant feedback in 1 second, saving them time.
2. Use **GitHub Actions** remotely to enforce the rules. It acts as the final, un-bypassable security checkpoint before code goes to Production.
