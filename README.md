# electron-background

Launch an electrion application from the command line as a detached application. The command line will return immediately, and the application will not attach to your active terminal.

## CLI

Start your application as you normally would except using `electron-background` instead of `electron`:

```bash
npx electron-background .
```

## API

I can't see why you might want this, but if you do... why not:

```javascript
const electronBackground = require('electron-background');

electronBackground(['.']);

// you can now exit if you want
process.exit();
```
