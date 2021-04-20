/**
 * 克隆方法
 *
 * @autor ln
 * @date 2021/4/19
 */

export class CloneUtil {
    static deep(originData, weakMap = new WeakMap()) {
        if (originData.constructor === Date) {
            return new Date(originData);
        }
        if (originData.constructor === RegExp) {
            return new RegExp(originData);
        }

        if (weakMap.has(originData)) {
            return weakMap.get(originData)
        }
        const allDesc = Object.getOwnPropertyDescriptors(originData);
        const target = Object.create(Reflect.getPrototypeOf(originData), allDesc);
        weakMap.set(originData, target);
        for (const key of Reflect.ownKeys(originData)) {
            /** 可写的属性才能参与赋值 */
            if (allDesc[key].writable && !!allDesc[key].set) {
                target[key] = isComplexDataType(originData[key]) ? CloneUtil.deep(originData[key], weakMap) : originData[key]
            }
        }
        return target;
    }
}

/**
 * 判断是不是复杂数据类型（函数排除在外）
 * @param target
 * @returns {boolean|boolean}
 */
function isComplexDataType(target) {
    return target !== null && typeof target === "object"
}
