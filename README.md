# Guess-Who

A simple React JS implementation of the kids game with some simple, but effective, CSS styling.

## The Program

All React state information and game logic is held in container.js which holds the Container class. There are eight cards in the game containing information and images taken from hp-api.herokuapp.com and reformatted to meke the data easier to use. When the game starts (i.e. Container class is first rendered), the eight cards are marked as visible and one card is randomly chosen as the target of the game.

When the user askes a question (using menus.jsx and its children), questionSelected() is called to determine which cards can be hidden, the React state is updated and all the cards are redrawn. A card that can now be hidden is rendered with a red cross over the card (see card.jsx) by changing the display property of an overlay DIV from hidden to block. All cards are flex boxes to easily support browser resize. 
