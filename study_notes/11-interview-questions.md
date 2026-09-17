# 50 GitHub Actions Interview Questions

Here are 50 of the most common GitHub Actions interview questions, ranging from beginner to Principal Engineer level!

## 🟢 Basics & Fundamentals
1. **What is GitHub Actions?** A CI/CD platform integrated directly into GitHub that allows you to automate your build, test, and deployment pipeline.
2. **What is a Workflow?** A configurable automated process that will run one or more jobs, defined by a YAML file in the `.github/workflows` directory.
3. **What is a Job?** A set of steps in a workflow that execute on the same runner. Jobs run in parallel by default.
4. **What is a Step?** An individual task that can run commands (`run`) or an action (`uses`) inside a job.
5. **What is an Action?** A reusable extension or script that can simplify repetitive tasks (e.g., `actions/checkout`).
6. **In what format are GitHub Actions written?** YAML (`.yml` or `.yaml`).
7. **Where must workflow files be stored?** In the `.github/workflows` directory of your repository.
8. **What is the difference between GitHub Actions and Jenkins?** Jenkins requires you to host and manage your own server infrastructure. GitHub Actions is managed and hosted by GitHub.
9. **How do you define the trigger for a workflow?** Using the `on:` keyword.
10. **Can you trigger a workflow manually?** Yes, using the `on: [workflow_dispatch]` trigger.
11. **How do you run a shell script in a step?** Using the `run:` keyword (e.g., `run: ./script.sh`).
12. **What does `actions/checkout@v4` do?** It downloads (checks out) your repository's code onto the runner machine.
13. **How do you specify the operating system for a job?** Using the `runs-on:` keyword (e.g., `runs-on: ubuntu-latest`).
14. **What are the default limits for workflow execution time?** A job can run for a maximum of 360 minutes (6 hours).
15. **How do you prevent a job from running indefinitely?** Set the `timeout-minutes` property at the job or step level.

## 🟡 Workflow Controls & Dependencies
16. **How do you make Job B wait for Job A to finish?** Use the `needs: JobA` keyword in Job B.
17. **What happens if a step fails?** By default, the entire job stops and the workflow is marked as failed.
18. **How can you prevent a step failure from stopping the whole job?** Use `continue-on-error: true` on that step.
19. **How do you conditionally run a job or step?** Use the `if:` keyword (e.g., `if: github.ref == 'refs/heads/main'`).
20. **Can you trigger a workflow on a cron schedule?** Yes, using `on: schedule: - cron: '* * * * *'`.
21. **How do you trigger a workflow only when specific files change?** Use the `paths:` filter under the `push` or `pull_request` trigger.
22. **How do you pass data between steps in the same job?** Using step outputs and the `GITHUB_OUTPUT` environment file.
23. **How do you pass data between completely different jobs?** Using Workflow Artifacts (`actions/upload-artifact` and `download-artifact`).
24. **What is a Matrix Strategy?** A way to automatically run the same job multiple times across different variable combinations (e.g., testing on Node 18, 20, and 22 simultaneously).
25. **How do you prevent redundant builds if someone pushes code rapidly?** Use the `concurrency:` keyword to cancel in-progress runs for the same branch.

## 🟠 Runners & Environments
26. **What is a GitHub-Hosted Runner?** A virtual machine hosted by GitHub, which comes pre-installed with common software (Node, Python, Docker).
27. **What is a Self-Hosted Runner?** A machine that you host and manage (like an EC2 instance or local server) that connects to GitHub to run jobs.
28. **Why would you use a Self-Hosted Runner?** For accessing private corporate networks, reducing costs on heavy workloads, or requiring specialized hardware (GPUs).
29. **What is the security risk of a Self-Hosted Runner?** If used on a public repo, a malicious pull request could execute arbitrary code on your private infrastructure.
30. **How do you cache dependencies to speed up workflows?** Use the `actions/cache` pre-built action to store and retrieve directories (like `node_modules`).
31. **What is a GitHub Environment?** A configured environment (like "Staging" or "Production") that allows you to set up deployment protection rules.
32. **How do you require manual approval before deploying to Production?** Set up an Environment in repository settings, add reviewers, and specify `environment: Production` in the job.
33. **What is the `GITHUB_WORKSPACE` variable?** An environment variable representing the default working directory on the runner where your code is checked out.

## 🔴 Security & Secrets
34. **What is a GitHub Secret?** Encrypted data (like API keys) stored in repository settings, accessible in workflows via `${{ secrets.NAME }}`.
35. **What is a GitHub Variable?** Non-sensitive configuration data stored in repository settings, accessible via `${{ vars.NAME }}`.
36. **Are Secrets visible in the action logs?** No, GitHub automatically redacts (masks) them with `***`.
37. **What is the `GITHUB_TOKEN`?** An automatically generated token provided by GitHub at the start of each workflow run to authenticate with the GitHub API.
38. **How do you restrict what the `GITHUB_TOKEN` can do?** By defining specific `permissions:` at the workflow or job level (Principle of Least Privilege).
39. **What is OIDC in the context of GitHub Actions?** OpenID Connect. It allows workflows to authenticate with cloud providers (AWS, GCP) without storing long-lived passwords in GitHub Secrets.
40. **Why is OIDC better than storing AWS credentials in Secrets?** It uses short-lived, automatically expiring tokens, meaning there are no hardcoded passwords for hackers to steal.

## 🟣 Custom Actions & Advanced Concepts
41. **What are the three types of custom actions you can build?** JavaScript actions, Docker container actions, and Composite actions.
42. **What is a Composite Action?** A custom action written entirely in YAML that combines multiple steps into one reusable block.
43. **What file is required to create a custom action?** An `action.yml` or `action.yaml` metadata file.
44. **What is a Reusable Workflow?** A workflow defined with `on: [workflow_call]` that can be executed by other workflows to keep CI/CD logic DRY (Don't Repeat Yourself).
45. **How does a Reusable Workflow differ from a Composite Action?** Reusable Workflows define entire *jobs* and can use secrets directly. Composite Actions only define *steps* inside a single job.
46. **What is the `env` context?** A context used to set or access environment variables (`${{ env.MY_VAR }}`).
47. **Can a workflow trigger another workflow?** Yes, by using a Personal Access Token (PAT) to dispatch a `repository_dispatch` event, or using a reusable workflow.
48. **If `GITHUB_TOKEN` pushes code, will it trigger another workflow?** No, this is intentionally disabled by GitHub to prevent infinite workflow loops. You must use a PAT to trigger workflows from workflow commits.
49. **How do you debug a failing GitHub Action?** You can enable debug logging by setting repository secrets: `ACTIONS_RUNNER_DEBUG=true` and `ACTIONS_STEP_DEBUG=true`.
50. **What is the best way to test GitHub Actions locally without pushing?** You can use a community tool like `act` (which uses Docker to simulate GitHub's runner environment locally).
