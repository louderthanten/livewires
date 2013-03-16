Live Wires
=========

A simple in-browser wireframing toolkit.

This is my answer to all the crappy wireframing tools and over-complicated prototype libraries out there.

Live Wires is simple HTML & CSS. It doesn't try to be fancy. It doesn't look like a final design, but it also doesn't look like dog doo (*cough* myBalsamiq *cough*). Most text is represented by background images. It is designed to be a starting point for production code, not something you throw out. It's also very fast to work with once you get the hang of it. It is more of a philosophy than a product.

## How to use

1. Drop the folder in your future website project
2. Point your preffered SCSS/CoffeeScript compiler to it
3. Markup the structure of your pages in the httpdocs folder (hint: stick to structural elements as much as possible. There's an example in there)
4. Customize layout in the **/scss/custom** folder
5. If you've organized your custom scss in a smart way, you can use much of your layout styles in design/production. Reuse as much as possible.

(Sorry for the weak documentation. We've still got a lot of work ahead of us.)


See the live example at http://example.livewires.io


### Notes

* Elements with a **.content** class will load text-like background filler
* Adjust the height of **.content** elements using the **$line** variable (e.g. height:$line*5; will render 5 lines of "text")
* List items will also load the text image unless you add the class, **.link-list**, to the containing **ol** or **ul**.
* Images are loaded from http://placehold.it. Go there to see how it works
* There are a couple example patterns that I often use in **/scss/livewires/readymade/**. They can be a great starting point.
* If ya don't like the code, don't hate on it. Just fork it and make it your own. Just keep in mind the main philosophy: Throw away as little work as possible. Your site should be an evolution, not a series of assets.


### IMPORTANT

I highly recommend that you work through this with your content strategist/copywriter. Even though it's not showing actual text, you should have a very close idea of the final content types and average passage lengths when possible. This is meant to be an approximation, but should still be based on actual content.

Have fun!