# Path://
Web App to find shortest path with least turns in a n*m grid

**Summary** :
* [Specification](#specification-)
* [Setup](#setup-)
    * [Packages](#packages)
* [Directory Structure](#directory-structure)
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
- [ ] Add a square via graphical interface
- [ ] Show shortest path on grid
- [ ] Generate index.html for prod build
- [ ] Responsiveness

