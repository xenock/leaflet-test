# Carto Frontend Test #

## This is my Carto test. ##

I've implemented this solution with the next technologies:

  * I used [Leaflet](http://leafletjs.com) library to show GeoJson info.

  * Vanilla Javascript, of course.

  * [SASS](https://sass-lang.com) for styling.

  * [BEM](https://getbem.com) as a styling methodology.

  * [Webpack](https://webpack.js.org) as my task runner.

  * [Nightwatch](http://nightwatchjs.org/) for some end to end testing.

## Why I took some decisions? ##

### Leaflet ###

I used Leaflet because of its documentation. Its tutorial is very clear and simple.

### Javascript ###

I decided to do OOP with a single object, which wraps Leaflet object, to add more readability
I used **Fetch** insted **XMLHttpRequest** because of its readability and support [CanIUse](https://caniuse.com/#feat=fetch)

### Webpack ###

Is relatively easy to implement and has lots of documentations very updated. And is very fast.

### Nightwatch ###

I've never did end to end tests before, and took this suite because:

  * It is framework agnostic

  * It has very good documentation

  * It has clear instructions for implementation

I wanted to do unit tests in my code, and started with Jasmine, because I have more experience with it, is very complete and has almost everything out of the box, but I've never tested with an external library. So I didn't know how to solve some problems I met in a reasonable amount of time with my actual knowledge. That's why I didn't implement them.

I consider that test are of capital importance, and I took the decision to test, at least, with end to end testing to cover most of its functionality.

Here I put a link to some unit testing I did before, if you pleased. [BattleBoard](https://github.com/xenock/battleGame)

### SASS and BEM ###

It is the most known styling library and has very good support. Using it along with BEM makes the styling task easier. BEM is easy to understand and faster to apply than any other methodology.

## Choropleth ##

It is not much different to implement a choropleth map than a "dots" map.

In one hand, you have the data source, in which you have features. Each feature have geometry data with coordinates to represent each shape in a map, and a value that have each shape

On the other hand, Choropleth maps are represented with colors depending on intervals. So, each shape will be painted with a color, depending on which value the shape has. We need to make a function to style each shape when we take source data.

[Choropleth and Leaflet](http://leafletjs.com/examples/choropleth/)

### Choropleth and a legend ###

A color code is useful if we need why something has a color. We always need to add a legend to give the user the "numbers" by which shapes have one color tone, or intensity.
