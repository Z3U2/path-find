# Path://
Web App to find shortest path with least turns in a n*m grid

**Summary** :
* [Specification](#specification-)
* [Setup](#setup-)
    * [Packages](#packages)
* [Directory Structure](#directory-structure)
    * [Domain](#domain)
    * [Services](#Services)
    * [Components](#components)
* [Components Tree](#components-tree)
* [Run](#run-)
* [Test](#test-)
* [TODO](#todo-)

## Specification :
> Making a web application that offers a web interface to mannually place square in a n*m grid and allows to link two squares by clicking on them. It then calculates the shortest path with least turns between these two squares (if there is one)

## Directory Structure

all source code is in `src` directory

- `src/domain` business logic classes, uncoupled from React
- `src/components` React components, separated in directories for simplicity
- `src/services` Services needed for the application

### Domain

- `Grid` class at the center of this program : represents a n*m grid, should calculate
shortest path with least turns
- `ISquare` and `ISquareDetails` two interfaces representing respectively a square in the grid and a data payload associated with the square
- `NoDetailSquare` implements the two interfaces above, represents a square with no data payload

### Services

- `GridService` interface that represent a generic grid "persistence" service, in the same file there's a `HardCodeGridService` which is an implementation with hardcoded data (prototyping purpose)

### Components

- `CreatorComponent` : Responsible for Grid initialization, can load grid from `CreatorList` or Initialize a new one from `CreatorForm`
- `LayoutComponent` : Application main page general layout
- `MenuComponent` : Shows info, can also Drag a new Square into the Grid
- `GridComponent` : Renders a grid of `Square`s, handles grid exploration as well.


## Components Tree

                        StartComponent
                /                           \       
        CreatorComponent               LayoutComponent
        /              \              /              \
    CreatorForm  CreatorList     MenuComponent   GridComponent
                                                /    ....     \
                                              Square .....   Square
## Setup :

### Packages

Do not forget to install packages with

    npm install


## Run :

Once setup is finished you can run a dev server with:
    
    npm start

You can also build a production deployable version (in Netlify for example) with:

    npm run build


## Test :

Once setup is finished you can run the server with :
    
    npm test

## TODO :

- [ ] Write tests 
- [ ] Inline documentation
- [ ] Implement shortest path algorithm
- [x] Add a square via graphical interface
- [ ] Show shortest path on grid
- [x] Generate index.html for prod build **and dev aswell**
- [x] Responsiveness
- [ ] Naming consistency
- [ ] Add a real Grid persistence service

