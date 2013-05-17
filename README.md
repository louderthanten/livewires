Live Wires
=========

A simple in-browser wireframing toolkit.

This is my answer to all the crappy wireframing tools and over-complicated prototype libraries out there.

Live Wires is simple HTML & CSS. It doesn't try to be fancy. It doesn't look like a final design, but it also doesn't look like dog doo like other wireframing tools. Most text is represented by background images. It is designed to be a starting point for production code, not something you throw out. It's also very fast to work with once you get the hang of it. It is more of a philosophy than a product.

## See intructions, tips, & examples at:

# http://livewires.io

## How to use

1. Drop the folder in your future website project.
2. Point your preffered SCSS compiler to it.
3. Markup the structure of your pages in the httpdocs folder (hint: stick to structural elements as much as possible. There's an example in the **example** folder).
4. Rename the `example` folder or create a new one for your project in `source/scss/`, then include the files in `livewires.scss`.
5. Adjust your content placeholders and other prototype-specific styles in `_content.scss`.
6. Layout your site using separate SCSS files in the project folder. Isolating your layout styles makes it easier to drop in when you're ready to move on to UI design or production.

See some Live Wires examples at http://livewires.io.


### Notes

* Elements with a `.content` class will load text-like background filler.
* Adjust the height of `.content` elements using the `$line` variable (e.g. `height:$line*5;` will render 5 lines of "text").
* List items will also load the text image unless you add the class, `.link-list`, to the parent `ol` or `ul`.
* Images are loaded from http://placehold.it. Go there to see how it works.
* There are a couple example patterns that I often use in `source/scss/livewires/components/`. They can be a great starting point.
* If ya don't like the code, don't hate on it. Just fork it and make it your own. Just keep in mind the main philosophy: Throw away as little work as possible. Your site should be an evolution, not a series of assets.


### IMPORTANT

I highly recommend that you work through this with your content strategist/copywriter. Even though it's not showing actual text, you should have a very close idea of the final content types and average passage lengths when possible. This is meant to be an approximation, but should still be based on actual content.

Have fun!