# Topic 3: Workflow Triggers

## 📖 What are Triggers?
Triggers define **when** a workflow should run. You configure them using the `on:` keyword at the very top of your YAML file.

## 🛠️ The 4 Most Common Triggers

### 1. `push` (Automatic on Commit)
The most common trigger. It runs automatically every time code is pushed to the repository.

```yaml
on: [push]
```

**Pro-tip:** You can limit this to specific branches or folders so you aren't wasting runner minutes:
```yaml
on:
  push:
    branches:
      - main
    paths:
      - 'src/**' # ONLY run if files inside the src/ folder were modified!
```

### 2. `workflow_dispatch` (Manual Button)
This disables automatic runs. Instead, GitHub adds a **"Run workflow"** button in the Actions UI so you can trigger it manually.

```yaml
on: [workflow_dispatch]
```
**Best for:** Production deployments, database cleanup scripts, or testing workflows without making dummy commits.

### 3. `pull_request` (Code Review)
Runs when someone opens a Pull Request. This is crucial for open-source and team projects to verify the code passes tests *before* a human reviews it or merges it.

```yaml
on: [pull_request]
```

### 4. `schedule` (Cron Jobs)
Runs your workflow automatically at specific times using standard Cron syntax.

```yaml
on:
  schedule:
    # Runs every day at midnight (00:00)
    - cron: '0 0 * * *'
```
**Best for:** Nightly security scans, daily backups, or generating weekly reports.
