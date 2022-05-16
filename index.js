
import { Ableton } from 'ableton-js';
import { el } from '@elemaudio/core';
import { default as core } from '@elemaudio/node-renderer-lite';
import { Note, Scale, Chord } from '@tonaljs/tonal';

core.on('load', function() {
    core.render(
      el.mul(0.3, el.cycle(440)),
      el.mul(0.3, el.cycle(440)),
    );
  });
  
  core.initialize();