/**
 * assertionHandler.mjs
 *
 * Pair native node assertions with a description for
 * the benefit of the TestRegister.
 *
 * @author d98762625 [d98762625@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

/**
 * it - wrapper for assertions to provide a helpful description
 * to the TestRegister
 * @param {String} description - The description of the test
 * @param {Function} assertion - The test
 *
 * @example
 * // One assertion
 * it("should run one assertion", () => assert.equal(1,1))
 *
 * @example
 * // multiple assertions
 * it("should handle multiple assertions", () => {
 *   assert.equal(1,1)
 *   assert.notEqual(3,4)
 * })
 *
 * @example
 * // async assertions
 * it("should handle async", async () => {
 *      let r = await asyncFunc()
 *      assert(r)
 * })
 */
export function it(name, run) {
    return {
        name,
        run
    };
}

export default it;
