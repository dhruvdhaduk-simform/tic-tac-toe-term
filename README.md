# Tic-Tac-Toe for Terminal
- This is a Tic-Tac-Toe game for Terminal.  
- Which means that you will actually play this game inside you terminal, not in browser.
- It is created using React.
- [term.ink](https://term.ink) library is used the render React inside the terminal.
- You don't need to install this app to use it. (Just make sure that you have NodeJS installed)

# How to start the game ?
> [!NOTE]
> Make sure you have NodeJS installed.

## For Linux, MacOS, WSL, Git Bash
- Run this command inside the terminal :
```bash
curl -fsSL https://tic-tac-toe-term.vercel.app/bundle.mjs | node
```

### For Windows Users
- Run this command in **PowerShell** :
```powershell
(iwr https://tic-tac-toe-term.vercel.app/bundle.mjs -UseBasicParsing).Content | node
```