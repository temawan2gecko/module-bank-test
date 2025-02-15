import { assign, createMachine } from 'xstate';

const videoPlayerMachine = createMachine({
  id: 'videoPlayer',
  initial: 'hidden',
  context: {
    isPlaying: true,
  },
  states: {
    hidden: {
      on: {
        SHOW: 'active.expanded',
      },
    },
    active: {
      initial: 'expanded',
      states: {
        expanded: {
          on: {
            MINIMIZE: 'minimized',
            PAUSE: { actions: assign({ isPlaying: false }) },
            PLAY: { actions: assign({ isPlaying: true }) },
          },
        },
        minimized: {
          on: {
            EXPAND: 'expanded',
            PAUSE: { actions: assign({ isPlaying: false }) },
            PLAY: { actions: assign({ isPlaying: true }) },
          },
        },
      },
      on: {
        HIDE: 'hidden',
      },
    },
  },
});


export default videoPlayerMachine;