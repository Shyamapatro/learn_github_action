# Topic 12: The Missing Pieces

You have successfully covered 95% of what a Principal Engineer needs to know! However, there are 4 final "missing pieces" that are crucial for optimizing performance and managing complex deployments.

## 📦 1. Artifacts (Passing files between jobs)
Remember that every Job runs on a **brand new, completely empty Virtual Machine**. Because of this, they do not share files. If `Job A` compiles your code into a `.zip` file, `Job B` cannot see it!
To pass files between jobs, you must upload them as **Artifacts**.

```yaml
jobs:
  build:
    steps:
      - run: npm run build
      - name: Upload Build Folder
        uses: actions/upload-artifact@v4
        with:
          name: my-build-files
          path: ./dist/

  deploy:
    needs: build
    steps:
      - name: Download Build Folder
        uses: actions/download-artifact@v4
        with:
          name: my-build-files
```

## ⚡ 2. Caching (Speeding up workflows)
Downloading packages (like `node_modules`) takes a lot of time. You can use the `actions/cache` action to save these folders between workflow runs. If your `package.json` hasn't changed, GitHub restores the cache in 2 seconds instead of spending 2 minutes downloading everything from the internet!

## 🚦 3. Environments & Manual Approvals
If you are deploying to Production, you might want a human manager to click "Approve" before the code actually goes live. 
By adding `environment: production` to your job, GitHub will literally pause the workflow and wait for an authorized team member to click the green "Approve" button in the GitHub UI.

```yaml
jobs:
  deploy-to-prod:
    environment: production # Configured in Repository Settings!
    runs-on: ubuntu-latest
    steps:
      - run: ./deploy.sh
```

## 🛑 4. Concurrency (Canceling redundant builds)
Imagine a developer pushes code 5 times in 2 minutes. By default, GitHub will start 5 separate workflows at the same time. This wastes free minutes and can cause your deployments to collide with each other!

You can use `concurrency` to tell GitHub: *"If a new push comes in, immediately cancel the old workflow."*

```yaml
# Add this at the very top of your workflow file
concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true
```
