[]()

<p align="center"><img src="https://get.stephancasas.com/static/expresslane-demo-header.png" width="50%"></p>

<p align="center"><h2 align="center">Snowblade Demo App <i>&mdash; Powered by <a href="https://github.com/alpinejs/alpine">Alpine JS</a> and <a href="https://github.com/ryangjchandler/spruce">Spruce</a>.</i></h2></p>

<p align="center"><h3 align="center"></h3></p>


The Snowblade demo application, Expresslane, is a diluted mock-up of an LDAP user manager that you might find in an enterprise environment. Its purpose is not to fulfill an operational need, but to showcase the componentization capabilities of Snowblade working in-tandem with Alpine JS and Spruce.

Alpine developers can observe how to effectively leverage Snowblade's component-oriented and markup-focused characteristics to rapidly build application frontends.

> ### A Note From the Developer:
> 
> I created this application as a variant of a project that is currently being used in production. Each time I review my work, I find better ways to create with Snowblade, and new ways to express component flexibility. There is no "right" way to do something, though some methods are more efficient than others. The intention of Snowblade is to make your projects easier to manage. Leverage the library however it suits you best, and I can't wait to hear your feedback.

## Build

After cloning the repository, install the required developer dependencies:

```sh
npm install -dev
```

Once complete, build the application:

```sh
npm run build
```

The application will be compiled to `dist/public/index.html`

## Testing

During development, I completed testing using the Live Server extension in VSCode with the following settings:

```json
{
    "liveServer.settings.root": "./dist/public"
}
```
Specifying the root as `./dist/public` is recommended due to the multiple steps that take place during application build:

* The TypeScript compiler must build the application logic.
* Rollup must bundle the transpiled output of TypeScript.
* Snowblade must compile the DOM.

If no root is specified for Live Server, it will watch the project root, causing the browser to refresh after each step listed above is completed.

### Testing Snowblade Only

If you aren't making changes to the application logic and only want to test Snowblade, you can use the `watch` command to invoke Nodemon and have it reload each time you make a change to your Snowblade components or markup:

```sh
npm run watch
```

This can also be done on an individual basis:

```sh
npm run transpile:dom
```

## Considerations

This application was written with the intention of testing several concepts, including a client-side routing technique through the use of `x-if` to dynamically display application "views." In the pursuit of such endeavors, I may not have necessarily engaged the most effective use of certain concepts or tooling.

In particular, I have no idea if the way that the Alpine logic is organized in `app.ts` is even close to being the best way to utilize Spruce. Ideally, I'd like to have a class-based structure leveraging the strongly-typed characteristics of TypeScript, but was unable to effectively do this in initial testing so instead, Expresslane has this very weird "pseudo-constructor" scaffolding.

I am open to any and all suggestions on how this may be better organized/structured in future applications. Please feel free to fork this project, and show me everything I'm doing wrong here — there's bound to be a lot.

### Mixed Methodologies

Certain things, such a the inclusion of Alpine and Spruce in the Rollup bundle and the CDN-loading of ChartJS, were intentionally done to showcase the flexibility of different techniques within Snowblade. While it's certainly cool that things like this can be done, please note that I'm not suggesting you employ this in your own projects. This isn't a best-practices repo — just a demo.

## Have Fun

Click around, explore the project, experiment, and discover new ways you might be able to utilize Snowblade in your own projects. I've really been enjoying how quickly I can get both professional and personal projects up and running with nice and reactive frontends while never having to once touch React or Vue.

The components included in this project (in particular those in `snowblade/shared`) are fully recyclable and have been designed for the intention of use outside of this demo project. Please feel free to take them, and test them in your own applications.

Thanks for visiting.

— Stephan