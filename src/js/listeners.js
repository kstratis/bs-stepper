import { closest } from './polyfill'
import { Selectors, customProperty, showStep, showContent, triggerEvent } from './util'

function clickStepLinearListener (event) {
  event.preventDefault()
}

function clickStepNonLinearListener (event) {
  event.preventDefault()

  const target = $(event.target);

  if (triggerEvent("leaveStep", target) === false){
    return false;
  }

  const step = closest(event.target, Selectors.STEPS)
  const stepperNode = closest(step, Selectors.STEPPER)
  const stepper = stepperNode[customProperty]

  const stepIndex = stepper._steps.indexOf(step)
  stepper._currentIndex = stepIndex
  showStep(step, stepper._steps)
  showContent(stepper._stepsContents[stepIndex], stepper._stepsContents)

  triggerEvent("showStep", target, stepper._currentIndex + 1);
}

export {
  clickStepLinearListener,
  clickStepNonLinearListener
}
