# Module 11 : Git

## Hands-on Lab 1 – Git Basics

### Commands Used

```bash
git init
git config --global user.name "<username>"
git config --global user.email "<email>"
git status
git add .
git commit -m "Initial commit"
git push origin main
```

---

## Hands-on Lab 2 – Using .gitignore

### Commands Used

```bash
git status
git add .
git commit -m "Added .gitignore configuration"
git push origin main
```

---

## Hands-on Lab 3 – Branching and Merging

### Commands Used

```bash
git branch GitNewBranch
git checkout GitNewBranch
git add .
git commit -m "Added changes in GitNewBranch"
git checkout main
git merge GitNewBranch
git branch -d GitNewBranch
```

---

## Hands-on Lab 4 – Merge Conflict Resolution

### Commands Used

```bash
git branch GitWork
git checkout GitWork
git add .
git commit -m "Added HELLO.xml in GitWork"
git checkout main
git add .
git commit -m "Added HELLO.xml in main"
git merge GitWork
git add .
git commit -m "Resolved merge conflict"
git branch -d GitWork
```

---

## Hands-on Lab 5 – Clean Up and Push to Remote

### Commands Used

- Due to deletion of branches there are no more to pull and push

```bash
git status
git branch
git pull origin main
git push origin main
```

## Output

- Check Screenshots Folder