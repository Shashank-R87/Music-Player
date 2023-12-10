function updateLocalStorage(stack) {
    window.localStorage.setItem("Main Stack", stack);
    window.localStorage.setItem("Top", stack[stack.length-1]);
}

export default updateLocalStorage