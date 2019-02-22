import { closest } from './polyfill'
import { Selectors, customProperty, showStep, showContent, triggerEvent } from './util'

function clickStepLinearListener (event) {
  event.preventDefault()
}

function clickStepNonLinearListener (event) {
  event.preventDefault()

  if (triggerEvent("leaveStep", $('body')) === false){
    return false;
  }

  const step = closest(event.target, Selectors.STEPS)
  const stepperNode = closest(step, Selectors.STEPPER)
  const stepper = stepperNode[customProperty]

  const stepIndex = stepper._steps.indexOf(step)
  stepper._currentIndex = stepIndex
  showStep(step, stepper._steps)
  showContent(stepper._stepsContents[stepIndex], stepper._stepsContents)

  triggerEvent("showStep", $('body'), stepper._currentIndex + 1);
}

export {
  clickStepLinearListener,
  clickStepNonLinearListener
}
