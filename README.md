# uiser-js
A light-weight UI rendering tool to help build small apps

UIser gives you an easy way of building a frontend application.
It defines the UIModel class and some assisting Utils that wrap around the `document.createElement` API.

### Inheritance
A class that extends the UIModel is in charge of defining its own _attributes_ (such as id), _properties_ (i.e. textContent) and _event listeners_ (if any), and override the `renderChildren` method in case it has any.
The extending class can define its `id` and `tag` by calling first the `super` in its `constructor`. `id` does not have to be defined, and the default value for `tag` is `div`.
Then the UIModel takes care of the rendering, and maintains a reference to the rendered element.

### Rerendering 
When needed to be rerendered, an extending class should call `this.replaceElement(data)`, that uses the rendered element reference for replacing the old with the new.

### A simple usage example:
```
import { UIModel } from 'uiser';

class Counter extends UIModel {
  constructor () {
    super('counter-id');

    this.counter = 0; 
    this.properties = { textContent: this.counter };
    
    this.listeners = {
      click: () => {
        this.properties.textContent = ++this.counter;
        this.replaceElement();
      }
    };
  }
}
```
Here we render a `div` element that displays a counter. When clicked, it bumps the count and displays the updates state.

Now, insert into the document:
```
const counter = new Counter();
document.getElementById('body').append(counter.render());
```

And voilà! You have your counter, while all the rendering & DOM manipulation is taken care of!

All that is left to do is create your own UIser application.
Enjoy! 😀
