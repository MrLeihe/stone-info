
/**
 * root component class
 * desktop mode class
 * mobile mode class
 */
function countClassData(className, mobileMode) {
    return {
        [className]: true,
        [`${className}__desktop`]: !mobileMode,
        [`${className}__mobile`]: mobileMode
    }
}

/**
 * add or remove class of element
 */
function useClassData(classData, el) {
    for (let key of Object.keys(classData)) {
        if (classData[key]) {
            el.classList.add(key)
        } else {
            el.classList.remove(key)
        }
    }
}

export {
    countClassData,
    useClassData
}