const inputs = [
  // Face buttons are bound to 0-3 by default
  document.getElementById('a'),
  document.getElementById('b'),
  document.getElementById('x'),
  document.getElementById('y'),

  // Bumpers are 4-5
  document.getElementById('lb'),
  document.getElementById('rb'),

  // 6-7 are triggers
  document.getElementById('lt'),
  document.getElementById('rt'),

  // 8-9 start/select
  document.getElementById('select'),
  document.getElementById('start'),

  // 10-11 sticks
  document.getElementById('ls'),
  document.getElementById('rs'),

  // 12-15 dpad buttons
  document.getElementById('dup'),
  document.getElementById('ddown'),
  document.getElementById('dleft'),
  document.getElementById('dright'),
];

window.onload = function loop() {
    const gamepads = navigator.getGamepads()
    if (gamepads[0] != undefined) {
        const gp = gamepads[0];

        for (const [index, input] of inputs.entries()) {
          input.dataset.pressed = gp.buttons[index].pressed;
        }

        // trigger axes
        for (const index of [6, 7]) {
          inputs[index].dataset.value = gp.buttons[index].value;

          // Wonder if there's a way to do this sort of effect in css? possibly could be done with attr() but setting direction would be a bit weird.
          const triggerPercent = gp.buttons[index].value * 100;
          inputs[index].style.background = `linear-gradient(to ${index === 6 ? 'left' : 'right'}, #6e6e6e ${triggerPercent}%, #252525 ${triggerPercent}%)`;
        }

        // stick axes
        inputs[10].dataset.x = gp.axes[0];
        inputs[10].dataset.y = gp.axes[1];
        inputs[11].dataset.x = gp.axes[2];
        inputs[11].dataset.y = gp.axes[3];
        // for now the css attr() function can't be used to set left/top, but it would be nice to not have to reference style at all.
        const STICK_TRAVEL = 25;
        inputs[10].style.left = `${gp.axes[0] * STICK_TRAVEL}%`;
        inputs[10].style.top = `${gp.axes[1] * STICK_TRAVEL}%`;
        inputs[11].style.left = `${gp.axes[2] * STICK_TRAVEL}%`;
        inputs[11].style.top = `${gp.axes[3] * STICK_TRAVEL}%`;
    }

    requestAnimationFrame(loop);
}