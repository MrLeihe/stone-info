
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

/**
 * current run environment is production?
 */
function isProdEnv() {
    return process.env.NODE_ENV === 'production'
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() < 10 ? `0${date.getDate()} ` : `${date.getDate()} `;
    return `${Y}${M}${D}`;
}

function getRandomItem(arrayLike) {
    const index = Math.floor(Math.random() * arrayLike.length)
    return arrayLike[index]
}

function getStoneAge() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDay()
    if (month > 1 || (month <= 1 && day > 6)) {
        return year - 1995 + 1
    } else {
        return year - 1995
    }
}

export {
    countClassData,
    useClassData,
    isProdEnv,
    formatDate,
    getRandomItem,
    getStoneAge
}