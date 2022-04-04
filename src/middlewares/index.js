export const logActions = store => next =>actionInfo => {
    console.log('Dispatching action:', actionInfo);
    next(actionInfo);
}