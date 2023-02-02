
// No transition to start, set default to true.
const transitionState = reactive({
  transitionComplete: false,
});

export const useTransitionComposable = () => {
  const toggleTransitionComplete = (value) => {
    transitionState.transitionComplete = value;
  };

  return {
    transitionState,
    toggleTransitionComplete,
  };
};
