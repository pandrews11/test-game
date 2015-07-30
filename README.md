## Sample Turbulenz Game

#### To set up Turbulenz Environment
1. Follow instructions [here](http://docs.turbulenz.com/installing.html#running-the-turbulenz-sdk) and make sure local server starts.
2. When local server starts, navigate to `http://localhost:8070/` and create a new game directory.
  * Doesn't matter where it is can specify path when creating game.
3. Create a sample JavaScript file `myfirstapp.js` and place in game directory.
 ```javascript
 TurbulenzEngine.onload = function onloadFn()
 {
   var intervalID;
   var gd = TurbulenzEngine.createGraphicsDevice({});

   function tick()
   {
     if (gd.beginFrame())
     {
       gd.clear([1.0, 1.0, 1.0, 1.0], 1.0, 0.0);
       gd.endFrame();
     }
   }

   intervalID = TurbulenzEngine.setInterval(tick, 1000/60);
 };
 ```
4. Use following command to creating runnable game:
  * `makehtml --mode canvas-debug -t . myfirstapp.js -o myfirstapp.canvas.debug.html`
5. Refresh `http://localhost:8070/` and navigate back to game, and click play.
  * There should be a runnable file there called `myfirstapp.canvas.debug.html`
