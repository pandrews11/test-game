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
