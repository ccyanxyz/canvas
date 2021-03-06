# canvas

EOD Sep 7 - Can select a subsection of the canvas and then add a pixel to it, with selectable color and coordinates

Deployed at https://rdbii-uiaaa-aaaab-qadva-cai.raw.ic0.app/

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd canvas/
dfx help
dfx config --help
```

## Setting up for local development

To get started, start a local dfx development environment in this directory with the following steps:

```bash
cd auth-client-demo/
dfx start --background
dfx deploy
```

### Internet Identity Setup

Then, make sure you have the [Internet Identity](https://github.com/dfinity/internet-identity) repo cloned locally. 

```bash
cd ../internet-identity
II_ENV=development dfx deploy --no-wallet --argument '(null)'
```

Copy the canister ID fom the Internet Identity canister, and paste it into `webpack.config.js` in this project on the `LOCAL_II_CANISTER` variable on line `8`.

Finally, cd back into the auth-client-demo directory and start the development server with `npm start`.

You can now access the app at `http://localhost:8080`.


### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`NODE_ENV` to `production` if you are using Webpack
- use your own preferred method to replace `process.env.NODE_ENV` in the autogenerated declarations
- Write your own `createActor` constructor
