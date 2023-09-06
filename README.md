# 2048 Technical Assessment

## Environment
This a default Vite + pnpm + React + Typescript setup for your technical test at IWCI.


You can start the app with

```bash
$ [pnpm | npm] install
$ [pnpm | npm] run dev
```

or

```bash
$ yarn
$ yarn dev
```


## Goal

The goal of this exercise is to provide you with a simple game to code. It aims at allowing us to assess your skills, self-organization ability and decision making.
You are free to realize it however you see fit - meaning : do whatever you want in whatever order you want. Get points wherever you can.

We want to assess your decision making when faced with a constraint (here, the clock). How do you prioritize tasks and why ?

## The game
2048 is a puzzle game on a 4x4 grid. Players move tiles with numbers (powers of 2) in one of four directions: up, down, left, right. When two tiles with the same number come into contact, they merge into a single tile whose value is the sum of the two original tiles. The aim of the game is to create a tile with the number 2048. However, after each move, a new tile (with a value of 2 or sometimes 4) appears randomly in an empty square. If the grid is full and no moves can be made, the game is over.

### Game structure:

Create a 4x4 grid to represent the game board.
Each square on this grid must be able to display a number.
### Game mechanics:

1.initialize the game with 2 tiles with either the number 2 or 4, randomly placed on the grid.
2) Listen to keyboard inputs for moves (up, down, left, right).
3) When moving, tiles must move in the chosen direction until they hit an edge or another tile.
4 If two tiles of the same value collide during a move, they must merge into a single tile whose value is the sum of the two. An important nuance is that each tile can only merge once per move. For example, with a tile configuration such as "2 2 4", if moved to the left, the expected result is "4 4", not "8".
5 After each move, a new tile (2 or 4) must randomly appear in an empty square.
**End of game:**
If a 2048 tile is created, display a victory message.
If the grid is full and no possible moves remain, display a defeat message.

### Bonus (time permitting):

- Make it nice to look. Add css, animations, scene, etc.
- Add a score counter.
- Add an option to "undo" the last move.
- Store best score using cookies or browser local storage.

## What we will be looking for
This exercice is hard enough so it's probable you won't finish it in less than 2 hours.
After 2 hours *precisely*, you MUST commit and push your work.
You are free to keep working on it after that, to show what you are capable of with more time.

Beside the above objectives, we will look for :
- How organized are you folders and files
- How commented, clear and readable is your code
- How performant and are you React components : we are not looking for too-early-optimization, but when writing a more future-proof code doesn't cost you more, it should be done
- How do you do your state management
- How did you organized ? Have you pseudo-coded / made some initial specifications ? Maybe it's useful, maybe it's only going to make you loose time.
- How minded are you about your decision making and work ?
- What libraries and dependencies you choosed to use (if any)


> **You are free to use google and other ressources however you see fit. But if you use chatGPT => Take care, we won't accept any mistake or unability to precisely explain what you used it for.**

You **MUST** save links to any ressource you might have used

## Aftermath
We will debrief your work together, looking at it, discussing about your ressoures, choices, code quality, etc.
