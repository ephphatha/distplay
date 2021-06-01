# Gamepad Visualisation
This repository was originally forked from https://github.com/Tiyenti/distplay, which was released under the ISC license. I have completely rewritten the code to use CSS grid layouts and HTML5 data attributes in an effort to avoid absolute layout positioning and the slightly inconsistent layout used in that repository. The visual style/layout is similar but the code is hopefully simpler and easier to read.

If you want to remap buttons distplay has a nice configuration that'd save editing the source. Otherwise it should
be possible to change the array in gamepad.js to suit.

This code works when rendered as an OBS BrowserSource. For best results set your size at a ratio of 50:17 (e.g. 
350px wide and 119px high)