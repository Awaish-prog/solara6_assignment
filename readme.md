# Project setup

---

## Prerequisites

Ensure the following tools are installed on your system:

- **Node.js**
- **npm**
- **Git**

Verify installations:

```bash
node -v
npm -v
git --version
```

Web app under test: [Demo shop](https://demowebshop.tricentis.com), please check this url first, register and make sure to use those credentials in .env file.

If you don't create .env then the tests will still work, I have added default credentials.

---
## 1. Clone the Repository

```bash
git clone https://github.com/Awaish-prog/solara6_assignment.git
cd solara6_assignment
```

## 2. Install Dependencies

Install all required npm packages defined in `package.json`:

```bash
npm install
```

## 3. Install Playwright Browsers

Playwright requires browser binaries. Install them using:

```bash
npx playwright install
```

## 4. Add .env file (Optional)

Create a .env file in the project root, please check .env.example file for variables.

## 5. Running Tests

### Run All Tests

```bash
npm test
```

## 6. Folder Structure

```text
project-root/
│
├── src/
│     ├── data/
│     ├── pages/
│     ├── support/
│     └── tests/
│         ├── features/
│         └── step-definitions/
├── support/
├── pages/
├── data/
├── cucumber.json
├── package.json
├── tsconfig.json
└── readme.json
```

Currently hooks, Ui actions and selectors are insile support but we can them in separate directory when project grows